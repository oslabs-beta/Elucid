const {introspectionFromSchema } = require('graphql');

//getSchemaFieldsWithNullableArgs returns an object of query types with nullable arguments defined in schema
//output obj: queryName (key), argumentNames (value: array of strings)

function getSchemaFieldsWithNullableArgs(schema) {
    // introspectionFromSchema returns an object with information about schema
    // .__schema.types is an array of objects
    // To get type 'Query', find 'name' of 'Query'
    //type Query obj has fields, an array of objects
    //field obj contains key of args, an array of objects
    //arg obj contains key-value of type.kind: "NON_NULL" if schema has marked argument as non-nullable
    const typesFromSchema = introspectionFromSchema(schema).__schema.types;

    const schemaFields = (function (types) {
        const fields = {};

        for (const type of types) {
            if (type.name === 'Query') {
                for (const queries of type.fields) {
                    if (queries.args.length > 0) {
                        for (const argument of queries.args) {
                            if (argument.type.kind !== 'NON_NULL') {
                                if (!fields[queries.name]) fields[queries.name] = [argument.name];
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