const handleResultWithError = require('../src/helpers/handleResultWithError');

describe('tests for response with error and data keys', () => {
  const context = {
    response: {
      statusCode: 200,
    },
  };

  it('error message includes non-nullable, should receive message to check errors.message', () => {
    const errorsArray = [
      {
        message: 'Cannot return null for non-nullable field Person.homeworld.',
        locations: [
          {
            line: 5,
            column: 3,
          },
        ],
        path: ['people', 4, 'homeworld'],
      },
    ];

    expect(handleResultWithError(errorsArray, context)).toEqual({
      message: 'Check errors.message',
    });
  });

  it('error message does not include non-nullable, should return object with message string Server error and to check your resolvers', () => {
    const errorsArray = [
      {
        message: 'id is not defined',
        locations: [
          {
            line: 2,
            column: 3,
          },
        ],
        path: ['person'],
      },
    ];

    expect(handleResultWithError(errorsArray, context)).toEqual({
      message: 'Server error: please check your resolvers',
      statusCode: 500,
    });
  });

  it('no error message, should return object with message string confirming validation and statusCode 200', () => {
    expect(handleResultWithError(undefined, context)).toBeNull();
  });
});
