const _ = require('lodash');
const { NomadoResponse } = require('./responses');

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
    var missingParams = requiredParams.filter((optionName) => !_.has(options, optionName));

    if (missingParams.length > 0) {
      const message = `Some required options are missing in ${call} : ${missingParams.join(', ')}.`;
      throw new NomadoResponse({ success: false, code: '400', reason: message });
    }

    return true;
  }

  static invalidAPIResponse(requiredItems, call) {
    const message = `Some expected data is missing in the response from '${call}' : ${requiredItems.join(', ')}.`;
    return new NomadoResponse({ success: false, code: '400', reason: message });
  }
};

module.exports = Validator;
