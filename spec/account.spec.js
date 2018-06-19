/* eslint-env jasmine */

// const auth = require('../src/service/auth');
const NomadoClient = require('../');
const Account = require('../src/core/account');
const CustomersAdapter = require('../src/api/customersAdapter');
const NomadoResponse = require('../src/core/responses').NomadoResponse;

describe('Account Interface', () => {
  it('should create an instance of Account', () => {
    const nomado = new NomadoClient();
    expect(nomado.account instanceof Account).toBe(true);
  });

  it('should create an instance of customersAdapter', () => {
    const nomado = new NomadoClient();
    const account = nomado.account;
    expect(account.api instanceof CustomersAdapter).toBe(true);
  });

  it('should call the login API when first time fetching customer data', (done) => {
  });

  it('should return the customer balance', (done) => {
  });
});
