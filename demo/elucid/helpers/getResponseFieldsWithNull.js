//helper function to get all response keys with null values
function getResponseFieldsWithNull(input, property, result = {}) {

    for (const key in input) {
        // if key is null then we return an error
        if (input[key] === null) {
            if (property) result[`${property}.${key}`] = true;
            else result[`${key}`] = true;
        }
        // account for nested objects within keys
        else if (input[key] !== null && typeof input[key] === 'object') {
            getResponseFieldsWithNull(input[key], key, result);
        }
    }
    return result;
}

module.exports = getResponseFieldsWithNull;