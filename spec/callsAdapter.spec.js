/* eslint-env jasmine */

const CallsAdapter = require('../src/api/callsAdapter');
const callResponse = require('./data/callSuccess.json');
const NomadoResponse = require('../src/core/responses').NomadoResponse;

describe('CallsAdapter', () => {
  it('should return a successful NomadoResponse with code 200', async () => {
    const apiAdapter = new CallsAdapter();
    spyOn(apiAdapter.httpService, '_CALL').and.returnValue(callResponse);
    const callData = {
      snumber: '1234',
      cnumber: '12345',
    };

    let response = await apiAdapter.make(callData);
    expect(response instanceof NomadoResponse).toBe(true);
    expect(response.code).toBe('200');
  });

  it('should throw a NomadoResponse with code 400 when parameters are missing', (done) => {
    const apiAdapter = new CallsAdapter();
    spyOn(apiAdapter.httpService, '_CALL').and.returnValue(callResponse);

    apiAdapter.make({})
      .catch((response) => {
        expect(response instanceof NomadoResponse).toBe(true);
        expect(response.code).toBe('400');
        done();
      });
  });
});
