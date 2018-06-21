/**
 * Utility class which stores credentials and manage JWT tokens
 */
class AuthManager  {
  /**
   * Store the user credentials
   * @param USERNAME
   * @param PASSWORD
   * @returns {AuthManager}
   */
  static setCredentials(USERNAME, PASSWORD) {
    AuthManager._credentials = { USERNAME, PASSWORD };

    //Reset the stored user data if any
    AuthManager._user = null;

    return AuthManager;
  }

  static get credentials() {
    return AuthManager._credentials;
  }

  static get user() {
    return AuthManager._user;
  }

  static getJwtToken() {
    //TODO return current jwt token if exists and not expired, or fetch new one
    return AuthManager;
  }

  /**
   * Fetch and store user info
   */
  static async login(userApi) {
    if (!AuthManager._user) {
      let response = await userApi.login();
      AuthManager._user = response.data;
    }

    return AuthManager._user;
  }
};

//Static store
AuthManager._user = null;
AuthManager._credentials = {};

module.exports = AuthManager;
