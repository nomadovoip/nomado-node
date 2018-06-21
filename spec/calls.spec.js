/* eslint-env jasmine */

const NomadoClient = require('../');
const Calls = require('../src/core/calls');
const NomadoResponse = require('../src/core/responses').NomadoResponse;
const callResponse = require('./data/callSuccess.json');

describe('Calls Interface', () => {
  it('should create an instance of Calls', () => {
    const nomado = new NomadoClient();
    expect(nomado.calls instanceof Calls).toBe(true);
  });

  it('should return a NomadoResponse', async () => {
    const nomado = new NomadoClient();
    const calls = nomado.calls;
    spyOn(calls.api.httpService, '_CALL').and.returnValue(callResponse);
    const callData = {
      snumber: '1234',
      cnumber: '12345',
    };
    let response = await calls.make(callData);
    expect(response instanceof NomadoResponse).toBe(true);
  });
});
