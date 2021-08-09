const express = require('express');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const resolvers = require('./schema/resolvers');
const { parse } = require('graphql');

const PORT = 3000;

const app = express();

app.use(express.json());

const elucidate = (result, context) => {
  // ('Result' carries the GQL query result.data and result.errors, and 'context' carries http response (context.res.statusCode / ))

  //DO LATER: need to iterate thru all selections to get all arguments for each subquery of query
  ////const queryArgs = parse(query).definitions[0].selectionSet.selections;

  if (result.errors && !result.errors[0].message.includes('non-nullable field')) {
    context.res.statusCode = 500;
    return {
      message: `Server error: please check your resolvers`,
      statusCode: context.res.statusCode,
    };
  }

  const nullFields = [];

  function elucidateHelper(data, context) {
    for (const keys in data) {
      // if key is null then we return an error
      if (data[keys] === null) {
        nullFields.push(`${keys}`);
      }
      // account for nested objects within keys
      // if key is not null and is object, check if there are any null values in the nested object
      else if (data[keys] !== null && typeof data[keys] === 'object') {
        elucidateHelper(data[keys], context);
      }
    }

    //account for errors in resolver or null data when sending correct query with nonexistent argument value - not yet completed
    if (nullFields.length > 0) {
      const { query } = context.req.body;
      const nullTop = parse(query).definitions[0].selectionSet.selections[0].name.value;

      const queryArgs =
        parse(query).definitions[0].selectionSet.selections[0].arguments[0].name.value;

      //if queryArgs exists, return msg to user: data queried for cannot be found, and may not exist in DB
      if (queryArgs && nullFields[0] === nullTop) {
        return {
          message: `Data queried for cannot be found & may not exist in database. If you believe this to be an error, please contact your server administrator.`,
        };
      }
    }

    //send different msg if there are no null fields
    if (nullFields.length === 0)
      return { message: 'Elucid validated your response. No errors found.' };
    return { message: `Data not found in field(s): ${nullFields}` };
  }

  const fields = elucidateHelper(result.data, context);

  const { message } = fields;

  return { message, statusCode: context.res.statusCode };
};

// Extensions variable is necessary for the 'extensions' property of graphqlHTTP
// to work correctly. The callback contains the invocation of our 'elucidate' error-
// handler function.
const extensions = ({ result, context }) => {
  return {
    // 'elucidate' function parses 200 OK responses to decide if additional
    // error handling is necessary
    elucid: elucidate(result, context),
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
