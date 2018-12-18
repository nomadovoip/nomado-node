const ApiAdapter = require('./api');
const Validator = require('../utils/validator');

/**
 * An adapter for the Enswitch Calls API
 */
class Calls extends ApiAdapter {
  /**
   * Make a call
   * Required params : cnumber, snumber
   * @param data
   * @returns {Promise<NomadoResponse>}
   */
  make(data = {}) {
    const endpoint = 'calls/make';
    const requiredParams = [
      'snumber', 'cnumber',
    ];
    Validator.validateRequiredParams(requiredParams, data, endpoint);
    return this._call(endpoint, data);
  }
};

module.exports = Calls;
