const { Pool } = require('pg');
const Ted = require ("./Ted.js");

const myURI = Ted;

// UNCOMMENT THE LINE BELOW IF USING POSTGRESQL
const URI = process.env.PG_URI || myURI;

const pool = new Pool({ 
  connectionString: URI,
});

// <-- export your model
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
}; 