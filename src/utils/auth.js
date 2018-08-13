const Utils = require('../utils/utils');

const Auth = {
  /**
   * Format and return the user credentials
   * @param USERNAME
   * @param PASSWORD
   * @param TOKEN
   * @param AUTH_TYPE
   * @returns {AuthManager}
   */
  parse({
          USERNAME = '',
          PASSWORD = '',
          TOKEN = '',
          AUTH_TYPE = 'USER_PASS',
        }) {

    // Store the raw credentials
    let credentials = { AUTH_TYPE, USERNAME, PASSWORD, TOKEN };

    Auth.check(credentials);
    credentials = Auth.encode(credentials);

    return credentials;
  },
  /**
   * Checks if supplied credentials are valid
   * @param credentials
   * @private
   */

  check(credentials) {
    switch (credentials.AUTH_TYPE) {
      case 'USER_PASS' :
        if (!credentials.USERNAME) {
          throw new Error(`username is required`);
        }

        if (!credentials.PASSWORD) {
          throw new Error(`password is required`);
        }

        break;
      case 'TOKEN' :
        if (!credentials.TOKEN) {
          throw new Error(`token is required`);
        }

        break;
      default :
        throw new Error(`${credentials.AUTH_TYPE} authentication type is not implemented`);
    }
  },

  /**
   * Base64 encode username and password for Nomado API
   * @param credentials
   * @private
   */
  encode(credentials) {
    credentials.USERNAME_B64 = Utils.toBase64(credentials.USERNAME);
    credentials.PASSWORD_B64 = Utils.toBase64(credentials.PASSWORD);
    return credentials;
  },
};

module.exports = Auth;
