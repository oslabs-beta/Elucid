const express = require("express");
const path = require("path");
const schema = require("./schema/schema")
const resolvers = require("./schema/resolvers")
var { graphqlHTTP } = require('express-graphql')
// const Elucid = require("Elucid")

const PORT = 3000

const app = express();

app.use(express.json())

function elucid(fn) {

  function checkForError(res) {
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




    //if (res.statusCode === 200) console.log(res);//res.statusCode = 203;
  }

  return function(req, res, next) {
    //console.log('res.statusCode before graphqlHTTP is ', res.statusCode);
    fn(req, res).then(checkForError(res));
  };
}

const extensions = ({
  document,
  variables,
  operationName,
  result,
  context,
}) => {
  return {
    testExt: Date.now() - context.startTime,
  };
};

const handleErrorfromGQL_HTTP = (error) => ({
  message: error.message,
  locations: error.locations,
  //stack: error.stack ? error.stack.split('\n') : [],
  path: error.path,
  statusCode: 500,
});

app.use('/graphql', elucid(graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
  pretty: true,
  customFormatErrorFn: handleErrorfromGQL_HTTP,
  extensions,
}), 
));



app.use('/', (req, res) => {
    return res
        .status(200)
        .sendFile(path.resolve(__dirname,'../index.html' ))
    })

// if endpoint is not found
app.use((req, res) => res.status(404).send('Page not found'));
// global error handler
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

// listening on port 3000
app.listen(PORT, () => {
    console.log("server listening on PORT: " + PORT);
});

module.exports = app;