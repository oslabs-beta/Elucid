const express = require("express");
const path = require("path");
const schema = require("./schema/schema")
const resolvers = require("./schema/resolvers")
var { graphqlHTTP } = require('express-graphql')

const PORT = 3000

const app = express();

app.use(express.json())


const elucidate = (result, context) =>  {
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
  context.res.status(850);
  return context.res.statusCode;
}

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
    elucid: elucidate(result, context)
    };
};


// Handle requests to GraphQL endpoint:
app.use('/graphql', (req, res) => {
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
    pretty: true,
    context: { res },
    customFormatErrorFn: (err) => {
      // Here we define any *additional* error-handling behavior for
      // errors that Express-graphQL DOES catch by itself:
      res.status(420);
      return err.message;
    },
    extensions,
  })(req,res)
});


// Fetch index page:
app.use('/', (req, res) => {
    return res
        .status(200)
        .sendFile(path.resolve(__dirname,'../index.html' ))
    })


// If endpoint is not found:
app.use((req, res) => res.status(404).send('Page not found'));


// Global error handler fallback:
app.use((err, req, res, next) => {
    const defErr = {
      log: 'sent to the global error handler',
      status: 500,
      msg: {err: 'error in server'}
    };
    const errorObj = Object.assign(defErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.msg);
  });


// Listening on port 3000:
app.listen(PORT, () => {
    console.log("server listening on PORT: " + PORT);
});

module.exports = app;