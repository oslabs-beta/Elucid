/* eslint-disable no-restricted-syntax */
const express = require('express');
const path = require('path');
const schema = require('./schema/schema');
const resolvers = require('./schema/resolvers');
const elucid = require('elucid.js');
const cors = require('cors');

const PORT = 3000;

const app = express();
app.use(cors());

app.use(express.json());

// Handle requests to GraphQL endpoint
app.use('/graphql', elucid({
  schema,
  resolvers,
  graphiql: true,
  pretty: true,
}));

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
