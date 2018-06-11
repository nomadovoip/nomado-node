const _ = require('lodash');
const { NomadoResponse } = require('../core/responses');

/**
 * A utility class which performs objects validation
 */
class Validator {
  /**
   * Throws a NomadoResponse with code 400 in case of missing parameters in supplied options
   * @param requiredParams
   * @param options
   * @param call
   */
  static validateRequiredParams(requiredParams, options, call) {
    var missingParams = requiredParams.filter(function (optionName) {
      return !_.has(options, optionName);
    });

    if (missingParams.length > 0) {
      const message = `Some required options are missing in ${call} : ${missingParams.join(', ')}.`;
      throw new NomadoResponse({ code: 400, reason: message });
    }

    return true;
  }
};

module.exports = Validator;
