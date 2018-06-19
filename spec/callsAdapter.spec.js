/* eslint-env jasmine */

const CallsAdapter = require('../src/api/callsAdapter');
const enswitchCallSuccessData = require('./data/enswitchCallSuccess.json');
const NomadoResponse = require('../src/core/responses').NomadoResponse;

describe('CallsAdapter', () => {
  it('should return a successful NomadoResponse with code 200', (done) => {
    const apiAdapter = new CallsAdapter();
    spyOn(apiAdapter.httpService, '_CALL').andReturn(enswitchCallSuccessData);
    const callData = {
      snumber: '1234',
      cnumber: '12345',
    };

    apiAdapter.make(callData)
      .then((result) => {
        expect(result instanceof NomadoResponse).toBe(true);
        expect(result.code).toBe(200);
        done();
      });
  });

  it('should throw a NomadoResponse with code 400 when parameters are missing', (done) => {
    const apiAdapter = new CallsAdapter();
    spyOn(apiAdapter.httpService, '_CALL').andReturn(enswitchCallSuccessData);

    apiAdapter.make({})
      .catch((result) => {
        expect(result instanceof NomadoResponse).toBe(true);
        expect(result.code).toBe(400);
        done();
      });
  });
});
