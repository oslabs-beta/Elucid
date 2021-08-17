/**
 * @param {Object} input graphQL response object's value at data key
 * @param {string} property key name for object value passed in on subsequent recursive calls
 * @param {Object} result stores all key names with value of null; currently supports storing key names nested up to 2 levels deep (key.subkey)
 * @returns result object, keys are response fields with null values, values are boolen true
 */

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
