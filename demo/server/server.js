const express = require("express");
const path = require("path");
const schema = require("./schema/schema")
const resolvers = require("./schema/resolvers")
var { graphqlHTTP } = require('express-graphql')
// const Elucid = require("Elucid")

const PORT = 3000

const app = express();

app.use(express.json())



app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
  pretty: true,
  customFormatErrorFn: () => {
    console.log("Hello World")
  }
}), 
);



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