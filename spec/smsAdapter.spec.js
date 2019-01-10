/* eslint-env jasmine */

const SmsAdapter = require('../src/adapters/sms');
const smsResponse = require('./data/genericSuccess.json');
const NomadoResponse = require('../src/utils/responses').NomadoResponse;
const HttpClientBuilder = require('../src/core/httpClientBuilder');

describe('SmsAdapter', () => {
  beforeAll(() => {
    this.httpClientBuilder = new HttpClientBuilder({ USERNAME: 'user', PASSWORD: 'pass' });
    this.apiAdapter = new SmsAdapter(this.httpClientBuilder.nomado);
  });

  it('should return a successful NomadoResponse with code 200', async () => {
    spyOn(this.apiAdapter.httpClient, '_CALL').and.returnValue(smsResponse);
    const smsConfig = {
      to: '0123456789',
      from: '1234567890',
      message: 'test',
    };

    let response = await this.apiAdapter.send(smsConfig);
    expect(response instanceof NomadoResponse).toBe(true);
    expect(response.code).toBe('200');
  });

  it('should throw a NomadoResponse when parameters are missing', () => {
    spyOn(this.apiAdapter.httpClient, '_CALL').and.returnValue(smsResponse);

    expect(() => {
      this.apiAdapter.send({});
    }).toThrow();
  });
});
