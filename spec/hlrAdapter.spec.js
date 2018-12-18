/* eslint-env jasmine */

const HlrAdapter = require('../src/api/hlrAdapter');
const smsResponse = require('./data/smsSuccess.json');
const NomadoResponse = require('../src/utils/responses').NomadoResponse;
const HttpClientBuilder = require('../src/core/httpClientBuilder');

describe('HlrAdapter', () => {
  beforeAll(() => {
    this.httpClientBuilder = new HttpClientBuilder({ USERNAME: 'user', PASSWORD: 'pass' });
    this.apiAdapter = new HlrAdapter(this.httpClientBuilder.nomado);
  });

  it('should fetch() and return a successful NomadoResponse with code 200', async () => {
    spyOn(this.apiAdapter.httpClient, '_CALL').and.returnValue(smsResponse);
    const hlrConfig = {
      numbers: '0123456789',
    };

    let response = await this.apiAdapter.fetch(hlrConfig);
    expect(response instanceof NomadoResponse).toBe(true);
    expect(response.code).toBe('200');
  });

  it('should validate() and return a successful NomadoResponse with code 200', async () => {
    spyOn(this.apiAdapter.httpClient, '_CALL').and.returnValue(smsResponse);
    const hlrConfig = {
      numbers: '0123456789',
    };

    let response = await this.apiAdapter.validate(hlrConfig);
    expect(response instanceof NomadoResponse).toBe(true);
    expect(response.code).toBe('200');
  });

  it('should fetch() throw a NomadoResponse when parameters are missing', () => {
    spyOn(this.apiAdapter.httpClient, '_CALL').and.returnValue(smsResponse);

    expect(() => {
      this.apiAdapter.fetch({});
    }).toThrow();
  });

  it('should validate() throw a NomadoResponse when parameters are missing', () => {
    spyOn(this.apiAdapter.httpClient, '_CALL').and.returnValue(smsResponse);

    expect(() => {
      this.apiAdapter.validate({});
    }).toThrow();
  });
});
