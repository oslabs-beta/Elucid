const { Pool } = require('pg');

const myURI = 'postgres://qanzyauv:W358NHvOCLt4cm0dkjbB40Pe1NknNd4I@kashin.db.elephantsql.com/qanzyauv';

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