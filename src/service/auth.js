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
   * Fetch user info
   */
  static async login(userApi) {
    if (!AuthManager._user) {
      let response = await userApi.login();
      AuthManager._user = response.data;
    }

    return AuthManager._user;
  }
};

module.exports = AuthManager;
