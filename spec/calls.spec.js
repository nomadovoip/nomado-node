/* eslint-env jasmine */

const nomadoClient = require('../');
const Calls = require('../src/core/calls');
const NomadoResponse = require('../src/core/response').NomadoResponse;

describe('Calls', function () {
  it('creates an instance of Calls', function () {
    expect(nomadoClient().calls instanceof Calls).toBe(true);
  });

  it('returns a NomadoResponse with error', function () {
    const calls = nomadoClient('username', 'password').calls;
    calls.make({})
      .catch((result) => {
        expect(result instanceof NomadoResponse).toBe(true);
        expect(result.error).not.toBeUndefined();
      });
  });
});
