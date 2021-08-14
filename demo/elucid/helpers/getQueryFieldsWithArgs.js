const { parse } = require('graphql');

//query: arr of objs; ea obj pertains to ea query field in query string.
//aliases: obj.alias.value (alias name)
//no aliases: obj.name.value (query field name)

//getQueryFieldsWithArgs populates queryFieldsWithArgs object
////queryFieldsWithArgs obj: alias/name (key), 'argumentName: argumentValue' (value)
//does not currently support multiple arguments
//arguments is an array of objects, ea argument field name is a separate obj
//ea element in arguments has name.value(arg field name) and value.value(arg's value)
function getQueryFieldsWithArgs(query) {
    const parsedQuery = parse(query).definitions[0].selectionSet.selections;

    const result = {};

    for (const obj of parsedQuery) {
        if (obj.arguments.length > 0) {
            if (obj.alias) result[obj.alias.value] = `${obj.arguments[0].name.value}: ${obj.arguments[0].value.value}`;
            else result[obj.name.value] = `${obj.arguments[0].name.value}: ${obj.arguments[0].value.value}`;
        }
    }
    return result;
}

module.exports = getQueryFieldsWithArgs;

