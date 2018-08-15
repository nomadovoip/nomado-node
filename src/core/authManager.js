const Validator = require('../utils/validator');

/**
 * Utility class which stores credentials and manage JWT tokens
 */
class AuthManager {
  constructor(api, credentials) {
    this.api = api;
    this._credentials = credentials;
    this._user = null;
  }

  get user() {
    return this._user;
  }

  get credentials() {
    return this._credentials;
  }

  /**
   * Fetch and store user info
   */
  async login() {
    if (!this._user) {
      let response = await this.api.login();
      if (!response.data.customer) {
        //Throw an error if the response does not contain the user id
        Validator.throwInvalidAPIResponse(['customer'], endpoint);
      }

      this._user = response.data;
    }

    return this._user;
  }
};

module.exports = AuthManager;
