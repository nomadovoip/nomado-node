/* eslint-env jasmine */

const OtpAdapter = require('../src/adapters/otp');
const genericResponse = require('./data/nomadoSuccess.json');
const nomadoResponse = require('../src/utils/responses').nomadoResponse;
const HttpClientBuilder = require('../src/core/httpClientBuilder');

describe('OtpAdapter', () => {
  beforeAll(() => {
    this.httpClientBuilder = new HttpClientBuilder({ USERNAME: 'user', PASSWORD: 'pass' });
    this.apiAdapter = new OtpAdapter(this.httpClientBuilder.nomado);
  });

  it('should call send and return a successful nomadoResponse with code 200', async () => {
    spyOn(this.apiAdapter.httpClient, '_CALL').and.returnValue(genericResponse);
    const otpConfig = {
      to: '0123456789',
    };

    let response = await this.apiAdapter.create(otpConfig);
    expect(response instanceof nomadoResponse).toBe(true);
    expect(response.code).toBe('200');
  });

  it('should call verify and return a successful nomadoResponse with code 200', async () => {
    spyOn(this.apiAdapter.httpClient, '_CALL').and.returnValue(genericResponse);
    const otpConfig = {
      number: '0123456789',
      token: 12345,
    };

    let response = await this.apiAdapter.verify(otpConfig);
    expect(response instanceof nomadoResponse).toBe(true);
    expect(response.code).toBe('200');
  });

  it('should throw a nomadoResponse when number is missing', () => {
    spyOn(this.apiAdapter.httpClient, '_CALL').and.returnValue(genericResponse);

    expect(() => {
      this.apiAdapter.send({});
    }).toThrow();
  });

  it('should throw a nomadoResponse when code is missing', () => {
    spyOn(this.apiAdapter.httpClient, '_CALL').and.returnValue(genericResponse);

    const otpConfig = {
      number: '0123456789',
    };

    expect(() => {
      this.apiAdapter.verify(otpConfig);
    }).toThrow();
  });
});
