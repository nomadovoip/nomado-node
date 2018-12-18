/* eslint-env jasmine */

const CallsAdapter = require('../src/adapters/calls');
const callResponse = require('./data/callSuccess.json');
const NomadoResponse = require('../src/utils/responses').NomadoResponse;
const HttpClientBuilder = require('../src/core/httpClientBuilder');

describe('CallsAdapter', () => {
  beforeAll(() => {
    this.httpClientBuilder = new HttpClientBuilder({ USERNAME: 'user', PASSWORD: 'pass' });
    this.apiAdapter = new CallsAdapter(this.httpClientBuilder.enswitch);
  });

  it('should return a successful NomadoResponse with code 200', async () => {
    spyOn(this.apiAdapter.httpClient, '_CALL').and.returnValue(callResponse);
    const callData = {
      snumber: '1234',
      cnumber: '12345',
    };

    let response = await this.apiAdapter.make(callData);
    expect(response instanceof NomadoResponse).toBe(true);
    expect(response.code).toBe('200');
  });

  it('should throw a NomadoResponse when parameters are missing', () => {
    spyOn(this.apiAdapter.httpClient, '_CALL').and.returnValue(callResponse);

    expect(() => {
      this.apiAdapter.make({});
    }).toThrow();
  });
});
