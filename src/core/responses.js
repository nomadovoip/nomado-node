/**
 * Default formatted response
 */
class NomadoResponse {
  constructor ({ code, reason = '', data = {} }) {
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
  static buildResponse (httpError) {
    const formattedError = {
      code: (httpError.response || {}).status,
      reason: (httpError.response || {}).statusText,
      data: {},
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
  static buildResponse (responses) {
    // Take the first object from responses array
    const firstResponse = responses[0] || {};

    const formattedResponse = {
      code: firstResponse.code,
      reason: firstResponse.message,
      data: responses.data || {},
    };

    return new NomadoResponse(formattedResponse);
  }
};

module.exports = { NomadoResponse, HttpError, EnswitchResponse };
