/* eslint-env jasmine */

// const auth = require('../src/service/auth');
const NomadoClient = require('../');
const Account = require('../src/core/account');
const CustomersAdapter = require('../src/api/customersAdapter');
const userResponse = require('./data/userSuccess.json');
const auth = require('../src/service/auth');

describe('Account Interface', () => {
  beforeAll(() => {
    this.nomado = new NomadoClient({ USERNAME: 'user', PASSWORD: 'pass' });
    spyOn(this.nomado.account.api.userAdapter.httpClient, '_CALL').and.returnValue(userResponse);
  });

  beforeEach(() => {
    spyOn(this.nomado.account.api.userAdapter, 'login').and.returnValue(userResponse);

    //Reset auth stored user data if any
    auth._user = null;
  });

  it('should create an instance of Account', () => {
    expect(this.nomado.account instanceof Account).toBe(true);
  });

  it('should create an instance of customersAdapter', () => {
    expect(this.nomado.account.api instanceof CustomersAdapter).toBe(true);
  });

  it('should call the login API on first time fetching customer data', async () => {
    await this.nomado.account.getBalance();
    expect(this.nomado.account.api.userAdapter.login).toHaveBeenCalled();
  });

  it('should have stored user data without calling the login API twice', async () => {
    await this.nomado.account.getBalance();
    await this.nomado.account.getBalance();
    expect(this.nomado.account.api.userAdapter.login).toHaveBeenCalledTimes(1);
  });

  it('should call the login API again after user reset', async () => {
    await this.nomado.account.getBalance();
    auth.setCredentials({ USERNAME: 'user', PASSWORD: 'pass' });
    await this.nomado.account.getBalance();
    expect(this.nomado.account.api.userAdapter.login).toHaveBeenCalledTimes(2);
  });

  it('should return the customer balance', async () => {
    let response =  await this.nomado.account.getBalance();
    expect(response.data.balance).toEqual(jasmine.any(String));
  });
});
