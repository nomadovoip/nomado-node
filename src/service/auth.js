const Utils = require('../utils/utils');

/**
 * Utility class which stores credentials and manage JWT tokens
 */
class AuthManager {
  contructor() {
    this._user = null;
    this._jwt = null;
    this._credentials = {};
  }
  /**
   * Store the user credentials
   * @param USERNAME
   * @param PASSWORD
   * @param TOKEN
   * @param AUTH_TYPE
   * @returns {AuthManager}
   */
  setCredentials({
                         USERNAME = '',
                         PASSWORD = '',
                         TOKEN = '',
                         AUTH_TYPE = 'USER_PASS',
                       }) {

    // Store the raw credentials
    this._credentials = { AUTH_TYPE, USERNAME, PASSWORD, TOKEN };

    this._checkCredentials(this._credentials);
    this._encodeCredentials(this._credentials);

    //Reset the stored user data if any
    this._user = null;
    this._jwt = null;

    return AuthManager;
  }

  get credentials() {
    return this._credentials;
  }

  get user() {
    return this._user;
  }

  getJwtToken() {
    //TODO return current jwt token if exists and not expired, or fetch new one
    return AuthManager;
  }

  /**
   * Fetch and store user info
   */
  async login(userApi) {
    if (!this._user) {
      let response = await userApi.login();
      this._user = response.data;
    }

    return this._user;
  }

  /**
   * Checks if supplied credentials are valid
   * @param credentials
   * @private
   */
  _checkCredentials(credentials) {
    if (['USER_PASS', 'TOKEN'].indexOf(credentials.AUTH_TYPE) === -1) {
      throw new Error(`${credentials.AUTH_TYPE} authentication type is not implemented`);
    }

    // switch (credentials.AUTH_TYPE) {
    //   case 'USER_PASS' :
    //     if (!credentials.USERNAME) {
    //       throw new Error(`username is required`);
    //     }
    //
    //     if (!credentials.PASSWORD) {
    //       throw new Error(`password is required`);
    //     }
    //
    //     break;
    //   case 'TOKEN' :
    //     if (!credentials.TOKEN) {
    //       throw new Error(`token is required`);
    //     }
    //
    //     break;
    //   default :
    //     throw new Error(`${AUTH_TYPE} authentication type is not implemented`);
    // }
  }

  /**
   * Base64 encode username and password for Nomado API
   * @param credentials
   * @private
   */
  _encodeCredentials(credentials) {
    this._credentials.USERNAME_B64 = Utils.toBase64(credentials.USERNAME);
    this._credentials.PASSWORD_B64 = Utils.toBase64(credentials.PASSWORD);
  }
};

module.exports = new AuthManager();
