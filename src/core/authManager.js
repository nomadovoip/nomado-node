const Validator = require('../utils/validator');
const { HttpError } = require('../utils/responses');

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
      if (!response.success) {
        throw HttpError.buildResponse(response);
      }

      if (!response.data.customer) {
        // If the response does not contain the user id
        throw Validator.invalidAPIResponse(['customer'], 'login');
      }

      this._user = response.data;
    }

    return this._user;
  }
};

module.exports = AuthManager;
