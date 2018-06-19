const EnswitchAdapter = require('./enswitchAdapter');
const Validator = require('../utils/validator');

/**
 * An adapter for the Enswitch Calls API
 */
class CallsAdapter extends EnswitchAdapter {
  /**
   * Make a call
   * Required params : cnumber, snumber
   * @param data
   * @returns {Promise<NomadoResponse>}
   */
  async make (data = {}) {
    const endpoint = 'calls/make';
    const requiredParams = [
      'snumber', 'cnumber',
    ];
    Validator.validateRequiredParams(requiredParams, data, endpoint);
    return this._call(endpoint, data);
  }
};

module.exports = CallsAdapter;
