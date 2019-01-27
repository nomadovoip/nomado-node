const _ = require('lodash');
const HttpClient = require('./httpClient');
const { EnswitchResponse } = require('../utils/responses');

class Enswitch extends HttpClient {
  constructor(config = {}) {
    super(config);
    this.API_USER = config.USERNAME;
    this.API_PASS = config.PASSWORD;
  }

  // SERVER URL FOR REST API CALLS
  prepareServerURL(config = {}) {
    return _.lowerCase(config.TRANSPORT) + '://' + config.SERVER + '/api/json/';
  }

  // ADD USERNAME AND PASSWORD IN DATA
  AddSUDOCredentials(data) {
    return { auth_username: this.API_USER, auth_password: this.API_PASS, ...data };
  }

  /* CALL THE API
   * RETURNS :
   * @@PARAMS:
   * ENDPONT : endpoint of the enswitch,
   * DATA : Data required for that endpoint
   * README: For full list of rest api : https://integrics.com/enswitch/guides/3.13/en/dev/json/
   * AUTHOR : Alex
  */
  async _CALL(endpoint = '', data = {}) {
    data = this.AddSUDOCredentials(data);
    let result = await this.axios({
      method: this.HTTP_METHOD,
      url: endpoint,
      params: data,
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
    const httpResponse = await this._CALL(endpoint, data);
    let responses = httpResponse.responses || null;
    let responseData = httpResponse.data || null;

    return EnswitchResponse.buildResponse(responses, responseData);
  }
}

module.exports = Enswitch;
