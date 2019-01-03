const ApiAdapter = require('./api');
const _ = require('lodash');
const Validator = require('../utils/validator');

/**
 * An adapter for the HLR API
 */
class Hlr extends ApiAdapter {
  /**
   * Fetch HLR information
   * Required params : number
   * @param options
   */
  fetch(data = {}) {
    const endpoint = 'hlr/';

    const requiredParams = ['numbers'];
    Validator.validateRequiredParams(requiredParams, data, endpoint);

    // 'numbers' param needs to be an array of numbers
    data.numbers = _.castArray(data.numbers);

    return this._call(endpoint, data);
  }

  /**
   * Validate HLR
   * Required params : number
   * @param options
   */
  validate(data = {}) {
    const endpoint = 'hlr/validate/';

    const requiredParams = ['number'];
    Validator.validateRequiredParams(requiredParams, data, endpoint);

    return this._call(endpoint + data.number);
  }
};

module.exports = Hlr;
