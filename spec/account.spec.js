/* eslint-env jasmine */

// const auth = require('../src/service/auth');
const NomadoClient = require('../');
const Account = require('../src/core/account');
const NomadoResponse = require('../src/core/responses').NomadoResponse;

describe('Account Interface', () => {
  it('should create an instance of Account', () => {
    const nomado = new NomadoClient();
    expect(nomado.account instanceof Account).toBe(true);
  });
});
