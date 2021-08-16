const { graphqlHTTP } = require('express-graphql');
const elucidateHelper = require('./helpers/elucidateHelper');
const handleResultWithError = require('./helpers/handleResultWithError');

/**
 * 
 * @param {Object} options sets settings for graphiql and pretty, and takes in user's GraphQL schema and resolvers
 * @returns elucidMiddleware function, which returns the invocation of graphqlHTTP method from express-graphql
 */
function elucid(options) {
  const { schema, resolvers, graphiql, pretty } = options;

  return function elucidMiddleware(request, response) {
    function elucidate(result, context, schema) {
      // 'Result' carries the GQL query result (result.data and result.errors)
      // 'context' carries http response/request object (context.response.statusCode / context.request.body )
      const errorMsgExists = handleResultWithError(result.errors, context);

      if (errorMsgExists) return errorMsgExists;

      const { message } = elucidateHelper(result.data, context, schema);

      return { message, statusCode: context.response.statusCode };
    }

    // Extensions variable is needed for 'extensions' property of graphqlHTTP
    // to work correctly. The callback contains invocation of 'elucidate'
    // 'elucidate' parses 200 OK responses to decide if additional
    // error handling is necessary
    const extensions = ({ result, context }) => {
      return {
        elucid: elucidate(result, context, schema),
      };
    };

    //customFormatErrorFn: (err) => {} can be used to define *additional* error-handling behavior for errors that Express-graphQL natively handles
    return graphqlHTTP({
      schema,
      rootValue: resolvers,
      graphiql,
      pretty,
      context: { request, response },
      extensions,
    })(request, response);
  };
}

module.exports = elucid;
