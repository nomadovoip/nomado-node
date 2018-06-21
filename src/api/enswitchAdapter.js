const auth = require('../service/auth');
const Enswitch = require('../http/enswitch');
const { EnswitchResponse, HttpError } = require('../core/responses');
const Validator = require('../utils/validator');

const httpConfig = {
  SERVER: 'npbx.nomado.eu',
  TRANSPORT: 'https',
};

/**
 * An adapter for the Enswitch Calls API
 */
class EnswitchAdapter {
  constructor() {
    this.httpService = new Enswitch({ ...httpConfig, ...auth.credentials });
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
   * Execute the API call and return a NomadoResponse
   * @param endpoint
   * @param data
   * @returns {Promise<NomadoResponse>}
   * @private
   */
  async _call(endpoint, data = {}) {
    let responses;
    let responseData;
    try {
      // Wait for http response
      const httpResponse = await this.httpService._CALL(endpoint, data);
      responseData = httpResponse.data || null;
      responses = httpResponse.responses || null;
    }
    catch (e) {
      // Throw exception if the http request failed
      throw HttpError.buildResponse(e);
    }

    if (!responseData || this._hasError(responses)) {
      throw EnswitchResponse.buildResponse(responses, responseData);
    }

    // Return a NomadoResponse
    return EnswitchResponse.buildResponse(responses, responseData);
  }
};

module.exports = EnswitchAdapter;
