const ApiAdapter = require('./api');
const _ = require('lodash');
const Validator = require('../utils/validator');

/**
 * An adapter for the OTP (2FA) API
 */
class Otp extends ApiAdapter {
  /**
   * Send OTP via SMS
   * Required params : to
   * @param options (template, length, expiry)
   */
  create(data = {}) {
    const endpoint = '2fa/create';

    const requiredParams = ['to'];
    Validator.validateRequiredParams(requiredParams, data, endpoint);

    return this._call(endpoint, data);
  }

  /**
   * Verify OTP
   * Required params : number, code
   * @param options
   */
  verify(data = {}) {
    const endpoint = '2fa/verify';

    const requiredParams = ['number', 'token'];
    Validator.validateRequiredParams(requiredParams, data, endpoint);

    return this._call(endpoint, data);
  }

};

module.exports = Otp;
