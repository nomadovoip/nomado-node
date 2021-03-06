/* eslint-env jasmine */

const HlrAdapter = require('../src/adapters/hlr');
const nomadoSuccess = require('./data/nomadoSuccess.json');
const nomadoResponse = require('../src/utils/responses').nomadoResponse;
const HttpClientBuilder = require('../src/core/httpClientBuilder');

describe('HlrAdapter', () => {
  beforeAll(() => {
    this.httpClientBuilder = new HttpClientBuilder({ USERNAME: 'user', PASSWORD: 'pass' });
    this.apiAdapter = new HlrAdapter(this.httpClientBuilder.nomado);
  });

  it('should fetch() and return a successful nomadoResponse with code 200', async () => {
    spyOn(this.apiAdapter.httpClient, '_CALL').and.returnValue(nomadoSuccess);
    const hlrConfig = {
      numbers: '0123456789',
    };

    let response = await this.apiAdapter.fetch(hlrConfig);
    expect(response instanceof nomadoResponse).toBe(true);
    expect(response.code).toBe('200');
  });

  it('should validate() and return a successful nomadoResponse with code 200', async () => {
    spyOn(this.apiAdapter.httpClient, '_CALL').and.returnValue(nomadoSuccess);
    const hlrConfig = {
      number: '0123456789',
    };

    let response = await this.apiAdapter.validate(hlrConfig);
    expect(response instanceof nomadoResponse).toBe(true);
    expect(response.code).toBe('200');
  });

  it('should fetch() throw a nomadoResponse when parameters are missing', () => {
    spyOn(this.apiAdapter.httpClient, '_CALL').and.returnValue(nomadoSuccess);

    expect(() => {
      this.apiAdapter.fetch({});
    }).toThrow();
  });

  it('should validate() throw a nomadoResponse when parameters are missing', () => {
    spyOn(this.apiAdapter.httpClient, '_CALL').and.returnValue(nomadoSuccess);

    expect(() => {
      this.apiAdapter.validate({});
    }).toThrow();
  });
});
