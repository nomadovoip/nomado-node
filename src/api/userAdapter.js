const EnswitchAdapter = require('./enswitchAdapter');

const httpConfig = {
  SERVER: 'npbx.nomado.eu',
  TRANSPORT: 'https',
};

/**
 * An adapter for the Enswitch User API
 */
class UserAdapter extends EnswitchAdapter {

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
