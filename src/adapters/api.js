const { HttpError } = require('../utils/responses');

/**
 * An adapter for the Enswitch Calls API
 */
class Api {
  constructor(httpClient, authManager = {}) {
    this.httpClient = httpClient;
    this.authManager = authManager;
  }

  /**
   * Check if any response has status code >= 300
   * @param responseData
   * @returns {boolean}
   */
  _hasError(responseData) {
    return responseData.some(
      (response) => response.code >= 300
    );
  }

  /**
   * Execute the API call and return a nomadoResponse
   * @param endpoint
   * @param data
   * @returns {Promise<nomadoResponse>}
   * @private
   */
  async _call(endpoint, data = {}) {
    try {
      // Wait for http response
      return await this.httpClient.call(endpoint, data);
    }
    catch (e) {
      // Http client error occured
      return HttpError.buildResponse(e);
    }
  }
};

module.exports = Api;
