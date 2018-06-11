/* eslint-env jasmine */

const { NomadoResponse, HttpError, EnswitchResponse } = require('../src/core/responses');

describe('NomadoResponse', function () {
  it('should be a formatted NomadResponse object', function () {
    const myResponse = { code: 1, reason: 'reason', data: { key: 'value' } };
    const nomadoResponse = new NomadoResponse(myResponse);
    expect(nomadoResponse.code).toBe(myResponse.code);
    expect(nomadoResponse.reason).toBe(myResponse.reason);
    expect(nomadoResponse.data).toBe(myResponse.data);
  });
});

describe('HttpError', function () {
  it('should return a valid NomadoResponse', function () {
    const myResponse = {  };
    const nomadoResponse = HttpError.buildResponse(myResponse);
    expect(nomadoResponse instanceof NomadoResponse).toBe(true);
  });
});

describe('EnswitchResponse', function () {
  it('should return a valid NomadoResponse', function () {
    const myResponse = {  };
    const nomadoResponse = EnswitchResponse.buildResponse(myResponse);
    expect(nomadoResponse instanceof NomadoResponse).toBe(true);
  });
});

