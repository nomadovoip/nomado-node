/* eslint-env jasmine */

const OtpAdapter = require('../src/adapters/otp');
const genericResponse = require('./data/genericSuccess.json');
const NomadoResponse = require('../src/utils/responses').NomadoResponse;
const HttpClientBuilder = require('../src/core/httpClientBuilder');

describe('OtpAdapter', () => {
  beforeAll(() => {
    this.httpClientBuilder = new HttpClientBuilder({ USERNAME: 'user', PASSWORD: 'pass' });
    this.apiAdapter = new OtpAdapter(this.httpClientBuilder.nomado);
  });

  it('should call send and return a successful NomadoResponse with code 200', async () => {
    spyOn(this.apiAdapter.httpClient, '_CALL').and.returnValue(genericResponse);
    const otpConfig = {
      number: '0123456789',
    };

    let response = await this.apiAdapter.send(otpConfig);
    expect(response instanceof NomadoResponse).toBe(true);
    expect(response.code).toBe('200');
  });

  it('should call verify and return a successful NomadoResponse with code 200', async () => {
    spyOn(this.apiAdapter.httpClient, '_CALL').and.returnValue(genericResponse);
    const otpConfig = {
      number: '0123456789',
      code: 12345,
    };

    let response = await this.apiAdapter.verify(otpConfig);
    expect(response instanceof NomadoResponse).toBe(true);
    expect(response.code).toBe('200');
  });

  it('should throw a NomadoResponse when number is missing', () => {
    spyOn(this.apiAdapter.httpClient, '_CALL').and.returnValue(genericResponse);

    expect(() => {
      this.apiAdapter.send({});
    }).toThrow();
  });

  it('should throw a NomadoResponse when code is missing', () => {
    spyOn(this.apiAdapter.httpClient, '_CALL').and.returnValue(genericResponse);

    const otpConfig = {
      number: '0123456789',
    };

    expect(() => {
      this.apiAdapter.verify(otpConfig);
    }).toThrow();
  });
});
