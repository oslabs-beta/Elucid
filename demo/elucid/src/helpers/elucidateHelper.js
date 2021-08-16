const buildElucidMessage = require('./buildElucidMessage');
const getSchemaFieldsWithNullableArgs = require('./getSchemaFieldsWithNullableArgs');
const getQueryFieldsWithArgs = require('./getQueryFieldsWithArgs');
const getResponseFieldsWithNull = require('./getResponseFieldsWithNull');

/**
 * Main entry point for invocation of helper functions
 * @param {Object} data GraphQL response object's value at 'data'
 * @param {Object} context Contains response and request Object
 * @param {GraphQL schema} schema export of user's schema, built using buildSchema method of GraphQL
 * @returns invocation of buildElucidMessage function, which returns an object with message key with value of type string and statusCode key with value of type integer
 */
function elucidateHelper(data, context, schema) {
  let queryFieldsWithArgs;

  const responseFieldsWithNull = getResponseFieldsWithNull(data);

  //if there are null fields, provide corresponding msg
  if (Object.keys(responseFieldsWithNull).length > 0) {
    const { query } = context.request.body;
    queryFieldsWithArgs = getQueryFieldsWithArgs(query);
  }

  //schemaFieldsWithNullableArgs is an object with array values
  const schemaFieldsWithNullableArgs = getSchemaFieldsWithNullableArgs(schema);

  return buildElucidMessage(
    responseFieldsWithNull,
    queryFieldsWithArgs,
    schemaFieldsWithNullableArgs
  );
}

module.exports = elucidateHelper;
