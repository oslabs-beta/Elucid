/* eslint-disable no-restricted-syntax */
const express = require('express');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const resolvers = require('./schema/resolvers');
const { parse, introspectionFromSchema} = require('graphql');

const PORT = 3000;

const app = express();

app.use(express.json());

const elucidate = (result, context, schema) => {
  // 'Result' carries the GQL query (result.data and result.errors)
  // 'context' carries http response/request object (context.res.statusCode / context.req.body )

  //DO LATER: need to iterate thru all selections to get all arguments for each subquery of query
  ////const queryArgs = parse(query).definitions[0].selectionSet.selections;
  function handleResultWithoutNonNullableError(errorArr) {
    if (errorArr && !errorArr[0].message.includes('non-nullable field')) {
      context.res.statusCode = 500;
      return {
        message: `Server error: please check your resolvers`,
        statusCode: context.res.statusCode,
      };
    }
    return null;
  }

  const errorMsgExists = handleResultWithoutNonNullableError(result.errors);
  if (errorMsgExists) return errorMsgExists;

  function elucidateHelper(data, context, schema) {

    const responseFieldsWithNull = [];
    const queryFieldsWithArgs = {};

    //helper function to get all response keys with null values
    function getResponseFieldsWithNull(input, property) {
      for (const key in input) {
        // if key is null then we return an error
        if (input[key] === null) {
          if (property) responseFieldsWithNull.push(`"${property}.${key}"`);
          else responseFieldsWithNull.push(`${key}`);
        }
        // account for nested objects within keys
        else if (input[key] !== null && typeof input[key] === 'object') {
          getResponseFieldsWithNull(input[key], key);
        }
      }
    }

    getResponseFieldsWithNull(data);

    //if there are null fields, dig further to provide a more helpful reason why
    if (responseFieldsWithNull.length > 0) {
      const { query } = context.req.body;

      //query: arr of objs; ea obj pertains to ea query field in query string. 
      //aliases: obj.alias.value (alias name)
      //no aliases: obj.name.value (query field name)

      //getQueryFieldsWithArgs populates queryFieldsWithArgs object
      ////queryFieldsWithArgs obj: alias/name (key), 'argumentName: argumentValue' (value)
      //does not currently support multiple arguments
      //arguments is an array of objects, ea argument field name is a separate obj
      //ea element in arguments has name.value(arg field name) and value.value(arg's value)
      function getQueryFieldsWithArgs(parsed) {
        for (const obj of parsed) {
          if (obj.arguments.length > 0) {
            if (obj.alias) queryFieldsWithArgs[obj.alias.value] = `${obj.arguments[0].name.value}: ${obj.arguments[0].value.value}`;
            else queryFieldsWithArgs[obj.name.value] = `${obj.arguments[0].name.value}: ${obj.arguments[0].value.value}`;
          }
        }
        return;
      }

      const parsedQuery = parse(query).definitions[0].selectionSet.selections;
      getQueryFieldsWithArgs(parsedQuery);
    }

    //getSchemaFieldsWithNullableArgs returns an object of query types with nullable arguments defined in schema
    //output obj: queryName (key), argumentNames (value: array of strings)
    function getSchemaFieldsWithNullableArgs(schema) {
    // introspectionFromSchema returns an object with information about schema
    // .__schema.types is an array of objects
    // To get type 'Query', find 'name' of 'Query'
    //type Query obj has fields, an array of objects
    //field obj contains key of args, an array of objects
    //arg obj contains key-value of type.kind: "NON_NULL" if schema has marked argument as non-nullable
      const typesFromSchema = introspectionFromSchema(schema).__schema.types;

      const schemaFields = (function(types){
        const fields = {};

        for (const type of types) {
          if (type.name === 'Query') {
            for (const queries of type.fields) {
              if (queries.args.length > 0) {
                for (const argument of queries.args) {
                  if (argument.type.kind !== 'NON_NULL') {
                    if (!fields[queries.name]) fields[queries.name] = [argument.name];
                    else fields[queries.name].push(argument.name);
                  }
                }
              }
            }
            break;
          }
        }
        return fields;
      })(typesFromSchema);

      return schemaFields;
    }
    
    //schemaFieldsWithNullableArgs is an object with array values
    const schemaFieldsWithNullableArgs = getSchemaFieldsWithNullableArgs(schema);

    function buildElucidMessage() {

      //if there are no null fields, return message object to confirm validation
      //if there are null fields, group them by checking if field is in queryFieldsWithArg or schemaFieldsWithNullable Args
      //and return all applicable messages
      if (responseFieldsWithNull.length === 0)
        return {
          message: 'Elucid validated your response. No errors found.',
        };
      else {
        function buildQueryFieldsWithArgsMsg() {
          let queryFieldsWithArgsMsg = '';

          for (const field of Object.keys(queryFieldsWithArgs)) {
            if (responseFieldsWithNull.includes(field)) {
              queryFieldsWithArgsMsg += `Data queried for ${field} with arg: ${queryFieldsWithArgs[field]} cannot be found & may not exist; if this is an error, contact your server admin.`;

              responseFieldsWithNull.splice(responseFieldsWithNull.indexOf(field), 1);
            }
          }
          return queryFieldsWithArgsMsg;
        }
        const queryFieldsWithArgsMessage = buildQueryFieldsWithArgsMsg();
        
        function buildSchemaFieldsWithNullableArgsMsg() {
          let schemaFieldsWithNullableArgsMsg = '';

          for (const field of Object.keys(schemaFieldsWithNullableArgs)) {
            if (responseFieldsWithNull.includes(field)) {
              schemaFieldsWithNullableArgsMsg += `Data queried for ${field} did not have arg(s): ${schemaFieldsWithNullableArgs[field]}; verify if arg(s) should be NON-NULLABLE in schema.`;

              responseFieldsWithNull.splice(responseFieldsWithNull.indexOf(field), 1);
            }
          }

          return schemaFieldsWithNullableArgsMsg;
        }

        const schemaFieldsWithNullableArgsMessage = buildSchemaFieldsWithNullableArgsMsg();

        function buildDataNotFoundMsg() {
          let dataNotFoundMsg = '';
          if (responseFieldsWithNull.length > 0) {
            dataNotFoundMsg += `Data not found in field(s): ${responseFieldsWithNull}.`;
          }
          return dataNotFoundMsg;
        }

        const dataNotFoundMessage = buildDataNotFoundMsg();

        return {
          message: `${dataNotFoundMessage}${dataNotFoundMessage ? ' ' + queryFieldsWithArgsMessage : queryFieldsWithArgsMessage}${dataNotFoundMessage || queryFieldsWithArgsMessage ? ' ' + schemaFieldsWithNullableArgsMessage : schemaFieldsWithNullableArgsMessage}`
        };
      }
    }

    return buildElucidMessage();
  }

  const elucidateHelperResult = elucidateHelper(result.data, context, schema);

  const { message } = elucidateHelperResult;

  return { message, statusCode: context.res.statusCode };
};

// Extensions variable is necessary for the 'extensions' property of graphqlHTTP
// to work correctly. The callback contains the invocation of our 'elucidate' error-
// handler function.
const extensions = ({ result, context }) => {
  return {
    // 'elucidate' function parses 200 OK responses to decide if additional
    // error handling is necessary
    elucid: elucidate(result, context, schema),
  };
};

// Handle requests to GraphQL endpoint
app.use('/graphql', (req, res) => {
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
    pretty: true,
    context: { req, res },
    // customFormatErrorFn: (err) => {
    //   // Here we define any *additional* error-handling behavior for
    //   // errors that Express-graphQL DOES catch by itself:
    //   // res.status(420);
    //   return err.message;
    // },
    extensions,
  })(req, res);
});

// Fetch index page:
app.use('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

// If endpoint is not found:
app.use((req, res) => res.status(404).send('Page not found'));

// Global error handler fallback:
app.use((err, req, res, next) => {
  const defErr = {
    log: 'sent to the global error handler',
    status: 500,
    msg: { err: 'error in server' },
  };
  const errorObj = Object.assign(defErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.msg);
});

// Listening on port 3000:
app.listen(PORT, () => {
  console.log(`server listening on PORT: ${PORT}`);
});

module.exports = app;
