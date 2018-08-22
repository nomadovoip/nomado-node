const _ = require('lodash');

/**
 * Default formatted response
 */
class NomadoResponse {
  constructor({ success, code, reason = '', data = {} }) {
    this.success = success;
    this.code = code;
    this.reason = reason;
    this.data = data;
  }
}

class NomadoError extends  NomadoResponse {}

/**
 * Wrapper for HTTP requests errors coming from the Axios library
 */
class HttpError {
  // Parse the exception coming from Axios and return a formatted NomadoResponse
  static buildResponse(error) {
    if (error instanceof NomadoError) {
      return error;
    }

    let formattedError = {};

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      formattedError = {
        code: error.status,
        reason: error.headers,
        data: error.data,
      };
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      formattedError = {
        code: error.code,
        reason: error.syscall,
        data: error.hostname,
      };
    } else {
      // Something happened in setting up the request that triggered an Error
      throw error; //no idea what happened
    }

    formattedError.success = false;

    return new NomadoError(formattedError);
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
      success: true,
      code: firstResponse.code,
      reason: firstResponse.message,
      data: responseData || {},
    };

    return new NomadoResponse(formattedResponse);
  }
};

module.exports = { NomadoResponse, HttpError, EnswitchResponse };
