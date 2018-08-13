/* eslint-env jasmine */

const CallsAdapter = require('../src/api/callsAdapter');
const callResponse = require('./data/callSuccess.json');
const NomadoResponse = require('../src/utils/responses').NomadoResponse;
const HttpClientBuilder = require('../src/core/httpClientBuilder');

describe('CallsAdapter', () => {
  beforeAll(() => {
    this.httpClientBuilder = new HttpClientBuilder({ USERNAME: 'user', PASSWORD: 'pass' });
  });

  it('should return a successful NomadoResponse with code 200', async () => {
    const apiAdapter = new CallsAdapter(this.httpClientBuilder.enswitch);
    spyOn(apiAdapter.httpClient, '_CALL').and.returnValue(callResponse);
    const callData = {
      snumber: '1234',
      cnumber: '12345',
    };

    let response = await apiAdapter.make(callData);
    expect(response instanceof NomadoResponse).toBe(true);
    expect(response.code).toBe('200');
  });

  it('should throw a NomadoResponse when parameters are missing', () => {
    const apiAdapter = new CallsAdapter(this.httpClientBuilder.enswitch);
    spyOn(apiAdapter.httpClient, '_CALL').and.returnValue(callResponse);

    expect(() => {
      apiAdapter.make({});
    }).toThrow();
  });
});
