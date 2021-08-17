const { introspectionFromSchema } = require('graphql');

/**
 * @param {GraphQL schema} schema export of user's schema, built using buildSchema method of GraphQL
 * @returns fields object, keys are field names of queries in the schema, values are array of argument(s) of type strings not marked as non-nullable
 */
function getSchemaFieldsWithNullableArgs(schema) {
  // introspectionFromSchema returns an object with information about schema
  // .__schema.types is an array of objects
  const typesFromSchema = introspectionFromSchema(schema).__schema.types;

  const schemaFields = (function (types) {
    const fields = {};

    for (const type of types) {
      if (type.name === 'Query') {
        for (const queries of type.fields) {
          if (queries.args.length > 0) {
            for (const argument of queries.args) {
              if (argument.type.kind !== 'NON_NULL') {
                if (!fields[queries.name])
                  fields[queries.name] = [argument.name];
                else fields[queries.name].push(argument.name);
              }
            }
          }
        }
        break;
      }
    }
    return fields;
  })(typesFromSchema);

  return schemaFields;
}

module.exports = getSchemaFieldsWithNullableArgs;
