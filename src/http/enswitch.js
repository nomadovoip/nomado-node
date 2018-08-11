const _ = require('lodash');
const HttpClient = require('./httpClient');

class Enswitch extends HttpClient{
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
    data.auth_username = this.API_USER;
    data.auth_password = this.API_PASS;

    return data;
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
    data = await this.AddSUDOCredentials(data);
    super._CALL(endpoint, data);
  }
}

module.exports = Enswitch;
