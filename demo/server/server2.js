const express = require('express');
const path = require('path');
const schema = require('./schema/schema');
const resolvers = require('./schema/resolvers');
var { graphqlHTTP } = require('express-graphql');
// const Elucid = require("Elucid")

const PORT = 3000;

const app = express();

app.use(express.json());

const elucidate = (result, context) => {
  // ('Result' carries the GQL query result data, and 'context' carries res.)

  // **CATEGORY 1: THE QUERY FAILS GRAPHQL INTERNAL VALIDATION (SYNTAX, SCHEMA LOGIC, ETC.)**

  /* Query for specific post but not supplying required argument:
  Check schema for query and its required arguments (non-nullable - 
  if non nullable it will return 400 bad request and have specific error msg)
  & validate incoming query*/

  /* Query for specific post but supplying argument value not found:
  check query against schema -if valid then add errors obj to indicate id not 
  found, send 400 bad request*/

  // **CATEGORY 2: AN UNCAUGHT DEV ERROR INSIDE THE RESOLVE/SUBSCRIBE FUNCTION**

  /* Resolver is malformed (e.g., 'source' argument is not provided):
  Reset status code to 500 and alert about possible resolver issue*/

  /* Resolver is malformed (given field argument is not supplied inside an object)*/

  // Return the updated status code out:
  // let newQuery = context.req.body.query.toString();
  //   newQuery.replace('{', '');
  // console.log(newQuery);
  // context.res.status(850);

  //result empty array
  const output = [];

  function elucidateHelper(result2) {
    const resultArr = [];
    //iterate over the keys in the result.data object

    for (const key in result2) {
      console.log(result2);
      if (typeof result2[key] === 'object') resultArr.concat(elucidateHelper(result2[key]));
      else {
        if (result2[key] === null) resultArr.push(key);
      }
      // console.log(resultArr);
    }
    // output.concat(resultArr);
    // console.log(resultArr)
    return resultArr;
  }

  output.concat(elucidateHelper(result));

  //ck if value is an object
  //if yes, rc, passing in value
  //if no, ck if value is null
  //if yes push to a result array
  //return object with msg key and result

  // console.log(output);
  // return { message: `Data not found at fields: ${output}` };
};

// Extensions variable is necessary for the 'extensions' property of graphqlHTTP
// to work correctly. The callback contains the invocation of our 'elucidate' error-
// handler function.
const extensions = ({
  /*document,
  variables,
  operationName,*/
  result,
  context,
}) => {
  return {
    // 'elucidate' function parses 200 OK responses to decide if additional
    // error handling is necessary
    elucid: elucidate(result.data, context),
  };
};

// Handle requests to GraphQL endpoint:
app.use('/graphql', (req, res) => {
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
    pretty: true,
    context: { req, res },
    customFormatErrorFn: (err) => {
      // Here we define any *additional* error-handling behavior for
      // errors that Express-graphQL DOES catch by itself:
      res.status(420);
      return err.message;
    },
    extensions,
  })(req, res);
});

// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema: schema,
//     rootValue: resolvers,
//     graphiql: true,
//     pretty: true,
//   })
// );

// function elucid(fn) {
//   function checkForError(res) {
//     if (res.statusCode === 200) {
//       console.log(res.locals.data)
//       return (res.statusCode = 203);
//     }
//   }
//   return (req, res, next) => {
//     // if (res.statusCode === 200) res.statusCode = 203;
//     fn(req, res).then(checkForError(res));
//   };
// }

// app.use(
//   '/graphql',
//   elucid(
//     graphqlHTTP({
//       schema: schema,
//       rootValue: resolvers,
//       graphiql: true,
//       pretty: true,
//       // customFormatErrorFn: () => {
//       //   console.log("Hello World")
//       // }
//     })
//   )
// );

app.use('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

// if endpoint is not found
app.use((req, res) => res.status(404).send('Page not found'));
// global error handler
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

// listening on port 3000
app.listen(PORT, () => {
  console.log('server listening on PORT: ' + PORT);
});

module.exports = app;
