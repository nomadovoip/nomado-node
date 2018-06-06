let AuthManager = {
  credentials: {},

  setCredentials(USERNAME, PASSWORD) {
    AuthManager.credentials = { USERNAME, PASSWORD };
    return AuthManager;
  },

  getJwtToken() {
    //TODO return current jwt token if exists and not expired, or fetch new one
    return AuthManager;
  },
};

module.exports = AuthManager;
