/**
 * Main function to build elucid message output, by invoking helper functions buildQueryFieldsWithArgsMsg buildSchemaFieldsWithNullableArgsMsg, buildDataNotFoundMsg
 * @param {Object} responseFieldsWithNull result of invoking getResponseFieldsWithNull function, which returns an Object, keys are response fields with null values, values are boolen true
 * @param {Object} queryFieldsWithArgs result of invoking getQueryFieldsWithArgs function, which returns an Object, keys are alias or query field names, values are the arguments value
 * @param {Object} schemaFieldsWithNullableArgs result of invoking getSchemaFieldsWithNullableArgs, which returns an Object, keys are field names of queries in the schema, values are array of argument(s) of type strings not marked as non-nullable
 * @returns object with message key with value of type string
 */
function buildElucidMessage(
  responseFieldsWithNull,
  queryFieldsWithArgs,
  schemaFieldsWithNullableArgs
) {
  //if no null fields, return message to confirm validation
  //if there are null fields, group them by checking if field is in queryFieldsWithArg or schemaFieldsWithNullable Args
  //and return all applicable messages
  if (Object.keys(responseFieldsWithNull).length === 0)
    return {
      message: 'Elucid validated your response. No errors found.',
    };
  else {
    const queryFieldsWithArgsMessage = buildQueryFieldsWithArgsMsg(
      queryFieldsWithArgs,
      responseFieldsWithNull
    );

    const schemaFieldsWithNullableArgsMessage =
      buildSchemaFieldsWithNullableArgsMsg(
        schemaFieldsWithNullableArgs,
        responseFieldsWithNull
      );

    const dataNotFoundMessage = buildDataNotFoundMsg(responseFieldsWithNull);

    return {
      message: `${dataNotFoundMessage}${
        dataNotFoundMessage && queryFieldsWithArgsMessage
          ? ' ' + queryFieldsWithArgsMessage
          : queryFieldsWithArgsMessage
      }${
        (dataNotFoundMessage || queryFieldsWithArgsMessage) &&
        schemaFieldsWithNullableArgsMessage
          ? ' ' + schemaFieldsWithNullableArgsMessage
          : schemaFieldsWithNullableArgsMessage
      }`,
    };
  }

  function buildQueryFieldsWithArgsMsg(queryFields, responseFields) {
    let queryFieldsWithArgsMsg = '';
    const result = [];

    for (const field in queryFields) {
      if (responseFields[field]) {
        if (result.length === 0) result.push(`Query for: "${field}(${queryFields[field]})"`);
        else result.push(` "${field}(${queryFields[field]})"`)
        delete responseFields[field];
      }
    }

    if (result.length > 0) {
      result.push(` cannot be found & may not exist; if this is an error, contact your server admin.`)
      queryFieldsWithArgsMsg += `${result}`;
    }

    return queryFieldsWithArgsMsg;
  }

  function buildSchemaFieldsWithNullableArgsMsg(schemaFields, responseFields) {
    let schemaFieldsWithNullableArgsMsg = '';
    const result = [];

    for (const field in schemaFields) {
      if (responseFields[field]) {
        if (result.length === 0) result.push(`Query for: "${field}" did not have arg(s) of "${schemaFields[field]}"`);
        else result.push(` "${field}" did not have arg(s) of "${schemaFields[field]}"`)
        delete responseFields[field];
      }
    }

    if (result.length > 0) {
      result.push(` verify if arg(s) should be NON-NULLABLE in schema.`)
      schemaFieldsWithNullableArgsMsg += `${result}`;
    }

    return schemaFieldsWithNullableArgsMsg;
  }

  function buildDataNotFoundMsg(responseFields) {
    let dataNotFoundMsg = '';

    if (Object.keys(responseFields).length > 0) {
      dataNotFoundMsg += `Data not found in field(s): ${Object.keys(
        responseFields
      )}.`;
    }
    return dataNotFoundMsg;
  }
}

module.exports = buildElucidMessage;
