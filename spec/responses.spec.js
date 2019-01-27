/* eslint-env jasmine */

const { nomadoResponse, HttpError, EnswitchResponse } = require('../src/utils/responses');

describe('nomadoResponse', () => {
  it('should be a formatted NomadResponse object', () => {
    const myResponse = { code: 1, reason: 'reason', data: { key: 'value' } };
    const response = new nomadoResponse(myResponse);
    expect(response.code).toBe(myResponse.code);
    expect(response.reason).toBe(myResponse.reason);
    expect(response.data).toBe(myResponse.data);
  });
});

describe('HttpError', () => {
  it('should return a valid nomadoResponse', () => {
    const myResponse = { response: {} };
    const response = HttpError.buildResponse(myResponse);
    expect(response instanceof nomadoResponse).toBe(true);
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
  it('should return a valid nomadoResponse', () => {
    const myResponse = {  };
    const response = EnswitchResponse.buildResponse(myResponse);
    expect(response instanceof nomadoResponse).toBe(true);
  });
});

