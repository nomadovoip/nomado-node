/* eslint-env jasmine */

const { NomadoResponse, HttpError, EnswitchResponse } = require('../src/utils/responses');

describe('NomadoResponse', () => {
  it('should be a formatted NomadResponse object', () => {
    const myResponse = { code: 1, reason: 'reason', data: { key: 'value' } };
    const nomadoResponse = new NomadoResponse(myResponse);
    expect(nomadoResponse.code).toBe(myResponse.code);
    expect(nomadoResponse.reason).toBe(myResponse.reason);
    expect(nomadoResponse.data).toBe(myResponse.data);
  });
});

describe('HttpError', () => {
  it('should return a valid NomadoResponse', () => {
    const myResponse = { response: {} };
    const nomadoResponse = HttpError.buildResponse(myResponse);
    expect(nomadoResponse instanceof NomadoResponse).toBe(true);
  });
});

describe('HttpError', () => {
  it('should throw an Error when something unexpected happened', () => {
    const myResponse = { };
    expect(() => {
      HttpError.buildResponse(myResponse);
    }).toThrow();
  });
});

describe('EnswitchResponse', () => {
  it('should return a valid NomadoResponse', () => {
    const myResponse = {  };
    const nomadoResponse = EnswitchResponse.buildResponse(myResponse);
    expect(nomadoResponse instanceof NomadoResponse).toBe(true);
  });
});

