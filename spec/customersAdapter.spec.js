/* eslint-env jasmine */

const CustomersAdapter = require('../src/adapters/customers');
const UserAdapter = require('../src/adapters/user');
const customerResponse = require('./data/customerSuccess.json');
const userResponse = require('./data/userSuccess.json');
const nomadoResponse = require('../src/utils/responses').nomadoResponse;
const HttpClientBuilder = require('../src/core/httpClientBuilder');
const AuthManager = require('../src/core/authManager');

describe('CustomersAdapter', () => {
  beforeAll(() => {
    let credentials = { USERNAME: 'user', PASSWORD: 'pass' };
    this.httpClientBuilder = new HttpClientBuilder(credentials);
    const userAdapter = new UserAdapter(this.httpClientBuilder.enswitch);
    this.authManager = new AuthManager(userAdapter, credentials);
  });

  it('should return a successful nomadoResponse with code 200', async () => {
    const adapter = new CustomersAdapter(this.httpClientBuilder.enswitch, this.authManager);
    spyOn(adapter.authManager.api.httpClient, '_CALL').and.returnValue(userResponse);

    let response = await adapter.getBalance();
    expect(response instanceof nomadoResponse).toBe(true);
    expect(response.code).toBe('200');
  });
});
