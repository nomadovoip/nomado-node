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
    AuthManager.credentials = { USERNAME, PASSWORD };
    return AuthManager;
  }

  static getJwtToken() {
    //TODO return current jwt token if exists and not expired, or fetch new one
    return AuthManager;
  }
};

module.exports = AuthManager;
