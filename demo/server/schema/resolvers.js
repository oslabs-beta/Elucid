// The resolvers provides a resolver function for each API endpoint
const db = require('../database/starwars_db_hardCoded.js');

const resolvers = {
  people: () => {
    return db.People;
  },
  person: ({ id }  ) => {
    return db.People.find((person) => person.id == id);
  },
};

module.exports = resolvers;
