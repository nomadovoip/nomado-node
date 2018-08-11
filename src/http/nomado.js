const _ = require('lodash');
const HttpClient = require('./httpClient');

class Nomado extends HttpClient {
  constructor(config = {}) {
    super(config);
    this.setAuthHeader(config);
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
        return `JWT ${config.JWT}`;
      case 'USER_PASS' :
        return `SIMPLE ${config.USERNAME_B64} ${config.PASSWORD_B64}`;
      case 'TOKEN' :
        return `BEARER ${config.TOKEN}`;
    }

    this.axios.interceptors.request.use(
      config => {
        config.headers.authorization = this.AUTH_HEADER;
        return config;
      }
    );
  }
}

module.exports = Nomado;
