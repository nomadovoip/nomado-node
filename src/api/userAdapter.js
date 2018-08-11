const ApiAdapter = require('./apiAdapter');

/**
 * An adapter for the Enswitch User API
 */
class UserAdapter extends ApiAdapter {

  /**
   * Fetch user data
   * @returns {Promise<NomadoResponse>}
   */
  async login () {
    const endpoint = 'user/login';
    return this._call(endpoint);
  }
};

module.exports = UserAdapter;
