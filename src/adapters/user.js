const ApiAdapter = require('./api');

/**
 * An adapter for the Enswitch User API
 */
class User extends ApiAdapter {

  /**
   * Fetch user data
   * @returns {Promise<nomadoResponse>}
   */
  login () {
    const endpoint = 'user/login';
    return this._call(endpoint);
  }
};

module.exports = User;
