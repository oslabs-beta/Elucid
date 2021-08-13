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

  if (result.errors && !result.errors[0].message.includes('non-nullable field')) {
    context.res.statusCode = 500;
    return {
      message: `Server error: please check your resolvers`,
      statusCode: context.res.statusCode,
    };
  }

  function elucidateHelper(data, context, schema) {

    const responseFieldsWithNull = [];

    //helper function to get all keys with null values
    function getResponseFieldsWithNull(input) {
      for (const key in input) {
        // if key is null then we return an error
        if (input[key] === null) {
          responseFieldsWithNull.push(`${key}`);
        }
        // account for nested objects within keys
        // if key is not null and is object, check if there are any null values in the nested object
        else if (input[key] !== null && typeof input[key] === 'object') {
          getResponseFieldsWithNull(input[key]);
        }
      }
    }

    getResponseFieldsWithNull(data);

    //account for errors in resolver or null data when sending correct query with nonexistent argument value - not yet completed
    ////return 'Data queried for ${person with id: 1} cannot be found...' msg when query has an arg AND returns null at the top-level field (not individual field with null) - we also want to acct for definitions or selections (don't know which one) at index 1, 2 etc.
    ////i.e. person (id: 2) gender with value of null should not return below msg, currently is not because we hardcoded index for nullTop and nullFields[0]
    const queryFieldsWithArgs = {};

    if (responseFieldsWithNull.length > 0) {
      const { query } = context.req.body;

      //arr of objs that each are the query fields. with aliases: obj.alias.value
      // const nullTop = parse(query).definitions[0].selectionSet.selections;

      //no aliases: iterate thru arr of obj, and access the obj.name.value to get query field name
      // const nullTop = parse(query).definitions[0].selectionSet.selections;

      //cks if there are any arguments for the query field - arguments is an arr of objects, with ea argument field name a separate obj

      //getQueryFieldsWithArgs is going to store an arr of field names with arguments in the query string
      ////DO NEXT!!! compare elements of queryFieldWithArgs with nullFields - if element is in nullFields, then return 'Data queried for cannot be found...'

      function getQueryFieldsWithArgs(parsed) {
        //iterate thru parsedQuery length
        ////ck if arguments.length is greater than 0, if yes, push to queryFieldsWithArgs

        //arguments is an array. name.value (arg field name) and value.value (arg's value)
        for (const obj of parsed) {
          if (obj.arguments.length > 0) {
            if (obj.alias) queryFieldsWithArgs[obj.alias.value] = `${obj.arguments[0].name.value}: ${obj.arguments[0].value.value}`;
            else queryFieldsWithArgs[obj.name.value] = `${obj.arguments[0].name.value}: ${obj.arguments[0].value.value}`;
            // console.log(obj.arguments)
            //queryFieldsWithArgs.push(obj.name.value);
          }
        }
      }

      const parsedQuery = parse(query).definitions[0].selectionSet.selections;
      getQueryFieldsWithArgs(parsedQuery);
      // console.log(fieldsWithArgs);
      // console.log(nullFields);

      // console.log(nullTop);

      // const nullTop = parse(query).definitions[0].selectionSet.selections[0].name.value;
      // const queryArgs =
      //   parse(query).definitions[0].selectionSet.selections[0].arguments[0].name.value;

      // //if queryArgs exists, return msg to user: data queried for cannot be found, and may not exist in DB
      // if (queryArgs && nullFields[0] === nullTop) {
      //   return {
      //     message: `Data queried for cannot be found & may not exist in database. If you believe this to be an error, please contact your server administrator.`,
      //   };
      // }
    }

    //introspectionFromSchema returns an object
    //.__schema.types will return array of obj. To get type of 'Query', iterate thru obj elements for 'name' of 'Query'
    //this obj will have fields - iterate thru fields array of obj to ck for args with length greater than 0
    //if length greater than 0, access value of arg key
    //arg key is an arr of obj (ea available arg is an obj)
    //iterate thru arg arr to ck for type.kind of "NON_NULL"
    //if it is not, get fields.name and fields.args.name
    // console.log(introspectionFromSchema(schema).__schema.types[4].fields[1].args[0].name)
    // console.log(introspectionFromSchema(schema).__schema.types[4].fields[1].args[0].type.kind)
    // console.log(parse(printSchema(schema)).definitions[2].fields[1].arguments[0]);

    function getSchemaFieldsWithNullableArgs(schema) {
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
    
    //obj values are arrays
    const schemaFieldsWithNullableArgs = getSchemaFieldsWithNullableArgs(schema);
    // console.log(schemaFieldsWithNullableArgs);

    let message = '';
    //send different msg if there are no null fields
    if (responseFieldsWithNull.length === 0)
      return { message: 'Elucid validated your response. No errors found.' };
    else {
      //fieldsWithArgs
      //nullFields
      //iterate thru fields with args, and then nullFields array, and check if it includes any elements in fieldswithargs
      let message2 = '';
      for (const field of Object.keys(queryFieldsWithArgs)) {
        if (responseFieldsWithNull.includes(field)) {
          message2 += ` Data queried for ${field} with arg: ${queryFieldsWithArgs[field]} cannot be found & may not exist; if this is an error, contact your server admin.`;

          responseFieldsWithNull.splice(responseFieldsWithNull.indexOf(field), 1);
        }
      }

      let message3 = '';
      for (const field of Object.keys(schemaFieldsWithNullableArgs)) {
        if (responseFieldsWithNull.includes(field)) {
          message3 += ` Data queried for ${field} did not have arg(s): ${schemaFieldsWithNullableArgs[field]}; verify if arg(s) should be NON-NULLABLE in schema.`;

          responseFieldsWithNull.splice(responseNullFields.indexOf(field), 1);
        }
      }
      if (responseFieldsWithNull.length > 0) message += `Data not found in field(s): ${responseFieldsWithNull}.`;
      return {
        message: message + message2 + message3
      };
    }
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

// Handle requests to GraphQL endpoint:
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
