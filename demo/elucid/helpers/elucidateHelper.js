const buildElucidMessage = require('./buildElucidMessage');
const getSchemaFieldsWithNullableArgs = require('./getSchemaFieldsWithNullableArgs');
const getQueryFieldsWithArgs = require('./getQueryFieldsWithArgs');
const getResponseFieldsWithNull = require('./getResponseFieldsWithNull');

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

    return buildElucidMessage(responseFieldsWithNull, queryFieldsWithArgs, schemaFieldsWithNullableArgs);

}

module.exports = elucidateHelper;