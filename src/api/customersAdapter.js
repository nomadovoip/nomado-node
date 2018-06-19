const EnswitchAdapter = require('./enswitchAdapter');
const Validator = require('../utils/validator');

const httpConfig = {
  SERVER: 'npbx.nomado.eu',
  TRANSPORT: 'https',
};

/**
 * An adapter for the Enswitch Calls API
 */
class CustomersAdapter extends EnswitchAdapter{

  /**
   * Make a call
   * Required params : cnumber, snumber
   * @param data
   * @returns {Promise<NomadoResponse>}
   */
  async get (data = {}) {
    const endpoint = 'customers/get';
    const requiredParams = [
      'id',
    ];
    Validator.validateRequiredParams(requiredParams, data, endpoint);
    return this._call(endpoint, data);
  }
};

module.exports = CallsAdapter;
