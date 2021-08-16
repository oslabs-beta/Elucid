const { parse } = require('graphql');

/**
 * getQueryFieldsWithArgs populates queryFieldsWithArgs object; currently supports queries with 1 argument
 * @param {Object[]} query object elements pertain to query fields in query string
 * @returns result object, keys are alias or query field names, values are the arguments value
 */
function getQueryFieldsWithArgs(query) {
  const parsedQuery = parse(query).definitions[0].selectionSet.selections;

  const result = {};

  for (const obj of parsedQuery) {
    if (obj.arguments.length > 0) {
      if (obj.alias)
        result[
          obj.alias.value
        ] = `${obj.arguments[0].name.value}: ${obj.arguments[0].value.value}`;
      else
        result[
          obj.name.value
        ] = `${obj.arguments[0].name.value}: ${obj.arguments[0].value.value}`;
    }
  }
  return result;
}

module.exports = getQueryFieldsWithArgs;
