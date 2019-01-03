const ApiAdapter = require('./api');
const _ = require('lodash');
const Validator = require('../utils/validator');

/**
 * An adapter for the SMS API
 */
class Sms extends ApiAdapter {
  /**
   * Send SMS
   * Required params : to, from, message
   * @param options
   */
  send(options = {}) {
    const endpoint = 'sms/send';

    // Default value for unicode
    let data = { unicode: true, ...options };

    const requiredParams = ['to', 'message', 'unicode'];
    Validator.validateRequiredParams(requiredParams, data, endpoint);

    // 'to' param needs to be an array of numbers
    data.to = _.castArray(data.to);

    return this._call(endpoint, data);
  }
};

module.exports = Sms;
