const _ = require('lodash');
const HttpClient = require('./httpClient');
const { nomadoResponse } = require('../utils/responses');

class nomado extends HttpClient {
  constructor(config = {}) {
    super(config);
    this.prepareAuthHeader(config);
  }

  /**
   *  Server URL for API calls
   */
  prepareServerURL(config = {}) {
    return _.lowerCase(config.TRANSPORT) + '://' + config.SERVER;
  }

  /**
   *  Generate the auth header for API calls authentication
   */
  prepareAuthHeader(config = {}) {
    switch (config.AUTH_TYPE) {
      case 'JWT' :
        this.AUTH_HEADER = `JWT ${config.JWT}`;
        break;
      case 'BASIC' :
        this.AUTH_HEADER = `BASIC ${config.B64}`;
        break;
      case 'TOKEN' :
        this.AUTH_HEADER = `BEARER ${config.TOKEN}`;
        break;
    }

    // Add authentication header to axios
    this.axios.interceptors.request.use(
      config => {
        config.headers.authorization = this.AUTH_HEADER;
        return config;
      }
    );
  }

  /**
   * Call the api
   * We pass the data in the request body
   * @param endpoint
   * @param data
   * @returns {Promise<*>}
   * @private
   */
  async _CALL(endpoint = '', data = {}) {
    let result = await this.axios({
      method: this.HTTP_METHOD,
      url: endpoint,
      data: data,
    });

    return result.data;
  }

  /**
   * Call the API and return a formatted response
   * @param endpoint
   * @param data
   * @returns {nomadoResponse}
   */
  async call(endpoint = '', data = {}) {
    return await this._CALL(endpoint, data);
  }
}

module.exports = nomado;
