/* eslint-env jasmine */

const nomadoClient = require('../');
const Calls = require('../src/public/calls');
const nomadoResponse = require('../src/utils/responses').nomadoResponse;
const callResponse = require('./data/callSuccess.json');

describe('Calls Interface', () => {
  it('should create an instance of Calls', () => {
    const nomado = new nomadoClient({ USERNAME: 'user', PASSWORD: 'pass' });
    expect(nomado.calls instanceof Calls).toBe(true);
  });

  it('should return a nomadoResponse', async () => {
    const nomado = new nomadoClient({ USERNAME: 'user', PASSWORD: 'pass' });
    const calls = nomado.calls;
    spyOn(calls.api.httpClient, '_CALL').and.returnValue(callResponse);
    const callData = {
      snumber: '1234',
      cnumber: '12345',
    };
    let response = await calls.make(callData);
    expect(response instanceof nomadoResponse).toBe(true);
  });
});
