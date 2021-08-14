function handleResultWithError(errorArr, context) {
    if (errorArr && !errorArr[0].message.includes('non-nullable field')) {
        context.response.statusCode = 500;
        return {
            message: `Server error: please check your resolvers`,
            statusCode: context.response.statusCode,
        };
    } else if (errorArr) {
        return {
            message: `Check errors.message`
        }
    }
    return null;
}

module.exports = handleResultWithError;