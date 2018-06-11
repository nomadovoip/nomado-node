/* eslint-env jasmine */

const { NomadoResponse } = require('../src/core/responses');
const Validator = require('../src/utils/validator');

describe('Validator', function () {
  it('should throw a NomadoResponse when a parameter is missing', function () {
    const requiredParams = ['param1', 'param2'];
    const options = { param1: 'value', param3: 'value3' };

    expect(function () {
      Validator.validateRequiredParams(requiredParams, options);
    }).toThrow();
  });

  it('should validate the options', function () {
    const requiredParams = ['param1', 'param2'];
    const options = { param1: 'value', param2: 'value2' };

    expect(function () {
      Validator.validateRequiredParams(requiredParams, options);
    }).not.toThrow();
  });
});
