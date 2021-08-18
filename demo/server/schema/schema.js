// const graphqlNodeModule = 
//   process.env.NODE_ENV === 'development'
//     ? '../../../elucid/node_modules/graphql'
//     : 'graphql';

const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language

const schema = buildSchema(`
type Homeworld {
  name: String
  climate: String
  population: String
}

type Person {
    id: Int!
    name: String
    height: String!
    mass: String!
    hair_color: String!
    skin_color: String!
    eye_color: String!
    birth_year: String!
    gender: String
    homeworld: Homeworld!
  }

  type Query {
    people: [Person!]
    person(id: Int): Person
    }
`);

module.exports = schema;