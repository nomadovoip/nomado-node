/* eslint-env jasmine */

// const auth = require('../src/service/auth');
const NomadoClient = require('../');
const Account = require('../src/public/account');
const CustomersAdapter = require('../src/adapters/customers');
const UserAdapter = require('../src/adapters/user');
const userResponse = require('./data/userSuccess.json');
const HttpClientBuilder = require('../src/core/httpClientBuilder');

describe('Account Interface', () => {
  beforeAll(() => {
    let credentials = { USERNAME: 'user', PASSWORD: 'pass' };
    this.nomado = new NomadoClient(credentials);
    spyOn(this.nomado.account.api.authManager.api.httpClient, '_CALL').and.returnValue(userResponse);

    this.httpClientBuilder = new HttpClientBuilder(credentials);
    const userAdapter = new UserAdapter(this.httpClientBuilder.enswitch);
    this.authManager = this.nomado.account.api.authManager;
  });

  beforeEach(() => {
    spyOn(this.nomado.account.api.authManager.api, 'login').and.callThrough();

    //Reset auth stored user data if any
    this.authManager._user = null;
  });

  it('should create an instance of Account', () => {
    expect(this.nomado.account instanceof Account).toBe(true);
  });

  it('should create an instance of customersAdapter', () => {
    expect(this.nomado.account.api instanceof CustomersAdapter).toBe(true);
  });

  it('should call the login API on first time fetching customer data', async () => {
    await this.nomado.account.getBalance();
    expect(this.nomado.account.api.authManager.api.login).toHaveBeenCalled();
  });

  it('should have stored user data without calling the login API twice', async () => {
    await this.nomado.account.getBalance();
    await this.nomado.account.getBalance();
    expect(this.nomado.account.api.authManager.api.login).toHaveBeenCalledTimes(1);
  });

  it('should call the login API again after user reset', async () => {
    await this.nomado.account.getBalance();
    this.authManager._user = null;
    await this.nomado.account.getBalance();
    expect(this.nomado.account.api.authManager.api.login).toHaveBeenCalledTimes(2);
  });

  it('should return the customer balance', async () => {
    let response = await this.nomado.account.getBalance();
    expect(response.data.balance).toEqual(jasmine.any(String));
  });
});
