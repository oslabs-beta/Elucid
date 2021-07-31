const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language

const schema = buildSchema(`
  type Person {
    id: Int!
    name: String!
    mass: String!
    hair_color: String!
    skin_color: String!
    birth_year: String!
    gender: String!
    species_id: Int!
    homeworld_id: Int!
    height: Int!
  }

  type Query {
    people: [Person!]
    person(id: Int!): Person
  }
`);

module.exports = schema;

