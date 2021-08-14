function buildElucidMessage(responseFieldsWithNull, queryFieldsWithArgs, schemaFieldsWithNullableArgs) {

    //if no null fields, return message to confirm validation
    //if there are null fields, group them by checking if field is in queryFieldsWithArg or schemaFieldsWithNullable Args
    //and return all applicable messages
    if (Object.keys(responseFieldsWithNull).length === 0)
        return {
            message: 'Elucid validated your response. No errors found.',
        };
    else {
        const queryFieldsWithArgsMessage = buildQueryFieldsWithArgsMsg(queryFieldsWithArgs, responseFieldsWithNull);

        const schemaFieldsWithNullableArgsMessage = buildSchemaFieldsWithNullableArgsMsg(schemaFieldsWithNullableArgs, responseFieldsWithNull);

        const dataNotFoundMessage = buildDataNotFoundMsg(responseFieldsWithNull);

        return {
            message: `${dataNotFoundMessage}${dataNotFoundMessage && queryFieldsWithArgsMessage ? ' ' + queryFieldsWithArgsMessage : queryFieldsWithArgsMessage}${(dataNotFoundMessage || queryFieldsWithArgsMessage) && schemaFieldsWithNullableArgsMessage ? ' ' + schemaFieldsWithNullableArgsMessage : schemaFieldsWithNullableArgsMessage}`
        };
    }

    function buildQueryFieldsWithArgsMsg(queryFields, responseFields) {
        let queryFieldsWithArgsMsg = '';

        const result = {};

        for (const field in queryFields) {
            if (responseFields[field]) {
                result[field] = queryFields[field];
                delete responseFields[field];
            }
        }

        const results = Object.entries(result);

        if (results.length > 0) {
            queryFieldsWithArgsMsg += `Query for: ${results} cannot be found & may not exist; if this is an error, contact your server admin.`;
        }

        return queryFieldsWithArgsMsg;
    }

    function buildSchemaFieldsWithNullableArgsMsg(schemaFields, responseFields) {

        let schemaFieldsWithNullableArgsMsg = '';
        const result = {};

        for (const field in schemaFields) {
            if (responseFields[field]) {
                result[field] = schemaFields[field];
                delete responseFields[field];
            }
        }

        const results = Object.entries(result);

        if (results.length > 0) {
            schemaFieldsWithNullableArgsMsg += `Data queried did not have args for: ${results}; verify if arg(s) should be NON-NULLABLE in schema.`;
        }

        return schemaFieldsWithNullableArgsMsg;
    }

    function buildDataNotFoundMsg(responseFields) {
        let dataNotFoundMsg = '';

        if (Object.keys(responseFields).length > 0) {
            dataNotFoundMsg += `Data not found in field(s): ${Object.keys(responseFields)}.`;
        }
        return dataNotFoundMsg;
    }
}

module.exports = buildElucidMessage;