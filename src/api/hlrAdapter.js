const ApiAdapter = require('./apiAdapter');
const _ = require('lodash');
const Validator = require('../utils/validator');

/**
 * An adapter for the HLR API
 */
class HlrAdapter extends ApiAdapter {
  /**
   * Get HLR
   * Required params : number
   * @param options
   */
  get(data = {}) {
    const endpoint = 'hlr/get';

    const requiredParams = ['number'];
    Validator.validateRequiredParams(requiredParams, data, endpoint);

    return this._call(endpoint, data);
  }
};

module.exports = HlrAdapter;
