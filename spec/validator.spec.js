/* eslint-env jasmine */

const { NomadoResponse } = require('../src/core/responses');
const Validator = require('../src/utils/validator');

describe('Validator', () => {
  it('should throw a NomadoResponse when a parameter is missing', () => {
    const requiredParams = ['param1', 'param2'];
    const options = { param1: 'value', param3: 'value3' };

    expect(() => {
      Validator.validateRequiredParams(requiredParams, options);
    }).toThrow();
  });

  it('should validate the options', () => {
    const requiredParams = ['param1', 'param2'];
    const options = { param1: 'value', param2: 'value2' };

    expect(() => {
      Validator.validateRequiredParams(requiredParams, options);
    }).not.toThrow();
  });

  it('should throw an exception if missing params in response', () => {
    const requiredItems = ['param1', 'param2'];

    expect(() => {
      Validator.throwInvalidAPIResponse(requiredItems);
    }).toThrow();
  });
});
