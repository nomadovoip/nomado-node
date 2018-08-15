const _ = require('lodash');

/**
 * Default formatted response
 */
class NomadoResponse {
  constructor({ code, reason = '', data = {} }) {
    this.code = code;
    this.reason = reason;
    this.data = data;
  }
}

/**
 * Wrapper for HTTP requests errors coming from the Axios library
 */
class HttpError {
  // Parse the exception coming from Axios and return a formatted NomadoResponse
  static buildResponse(error) {
    if (error instanceof NomadoResponse) {
      return error;
    }

    const formattedError = {
      code: error.code || (error.response || {}).status,
      reason: error.message,
      data: error.data,
    };
    return new NomadoResponse(formattedError);
  }
};

/**
 * Wrapper for Enswitch responses
 * Enswitch responses are made of
 * - an Array containing multiple "response" Object
 * - and one "data" Object
 */
class EnswitchResponse {
  // Parse the response coming from the Enswitch API and return a formatted NomadoResponse
  static buildResponse(responses, responseData) {
    // Take the first object from responses array
    const firstResponse = _.isArray(responses) ? responses[0] || {} : {};

    const formattedResponse = {
      code: firstResponse.code,
      reason: firstResponse.message,
      data: responseData || {},
    };

    return new NomadoResponse(formattedResponse);
  }
};

module.exports = { NomadoResponse, HttpError, EnswitchResponse };
