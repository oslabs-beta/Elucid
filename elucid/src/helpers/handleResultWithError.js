/**
 * Checks for error object in a response with status code 200. Currently does not support mult query fields with a missing non-nullable argument
 * @param {Array} errorArr Response object's error value
 * @param {Object} context Contains request and response objects
 * @returns {(Object|null)} Returns object with message string or null
 */

function handleResultWithError(errorArr, context) {
  if (errorArr && !errorArr[0].message.includes('non-nullable field')) {
    context.response.statusCode = 500;
    return {
      message: `Server error: please check your resolvers`,
      statusCode: context.response.statusCode,
    };
  } else if (errorArr) {
    return {
      message: `Check errors.message`,
    };
  }
  return null;
}

module.exports = handleResultWithError;
