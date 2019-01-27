/* eslint-env jasmine */

const SmsAdapter = require('../src/adapters/sms');
const nomadoSuccess = require('./data/nomadoSuccess.json');
const nomadoResponse = require('../src/utils/responses').nomadoResponse;
const HttpClientBuilder = require('../src/core/httpClientBuilder');

describe('SmsAdapter', () => {
  beforeAll(() => {
    this.httpClientBuilder = new HttpClientBuilder({ USERNAME: 'user', PASSWORD: 'pass' });
    this.apiAdapter = new SmsAdapter(this.httpClientBuilder.nomado);
  });

  it('should return a successful nomadoResponse with code 200', async () => {
    spyOn(this.apiAdapter.httpClient, '_CALL').and.returnValue(nomadoSuccess);
    const smsConfig = {
      to: '0123456789',
      from: '1234567890',
      message: 'test',
    };

    let response = await this.apiAdapter.send(smsConfig);
    expect(response instanceof nomadoResponse).toBe(true);
    expect(response.code).toBe('200');
  });

  it('should throw a nomadoResponse when parameters are missing', () => {
    spyOn(this.apiAdapter.httpClient, '_CALL').and.returnValue(nomadoSuccess);

    expect(() => {
      this.apiAdapter.send({});
    }).toThrow();
  });
});
