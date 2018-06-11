/* eslint-env jasmine */

const NomadoClient = require('../');
const Calls = require('../src/core/calls');
const NomadoResponse = require('../src/core/responses').NomadoResponse;
const enswitchCallSuccessData = require('./data/enswitchCallSuccess.json');

describe('Calls Interface', function () {
  it('should create an instance of Calls', function () {
    const nomado = new NomadoClient();
    expect(nomado.calls instanceof Calls).toBe(true);
  });

  it('should return a NomadoResponse', function (done) {
    const nomado = new NomadoClient();
    const calls = nomado.calls;
    spyOn(calls.api.httpService, '_CALL').andReturn(enswitchCallSuccessData);
    const callData = {
      snumber: '1234',
      cnumber: '12345',
    };
    calls.make(callData)
      .then((result) => {
        expect(result instanceof NomadoResponse).toBe(true);
        done();
      });
  });
});
