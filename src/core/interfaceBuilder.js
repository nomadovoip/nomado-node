const CallsAdapter = require('../api/callsAdapter');
const UserAdapter = require('../api/userAdapter');
const CustomersAdapter = require('../api/customersAdapter');
const Calls = require('../public/calls');
const Account = require('../public/account');
const HttpClientBuilder = require('../core/httpClientBuilder');
const AuthUtils = require('../utils/auth');
const AuthManager = require('./authManager');

/**
 * Builds public interfaces
 */
class InterfaceBuilder {
  constructor(authConfig) {
    let credentials = AuthUtils.parse(authConfig);
    this.httpClientBuilder = new HttpClientBuilder(credentials);

    // Build Auth
    const userAdapter = new UserAdapter(this.httpClientBuilder.enswitch);
    this.authManager = new AuthManager(userAdapter, credentials);
  }

  get calls() {
    if (!this._calls) {
      const callsAdapter = new CallsAdapter(this.httpClientBuilder.enswitch);
      this._calls = new Calls(callsAdapter);
    }

    return this._calls;
  }

  get account() {
    if (!this._account) {
      const customersAdapter = new CustomersAdapter(this.httpClientBuilder.enswitch, this.authManager);
      this._account = new Account(customersAdapter);
    }

    return this._account;
  }
};

module.exports = InterfaceBuilder;
