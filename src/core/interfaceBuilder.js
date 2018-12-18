const CallsAdapter = require('../adapters/calls');
const UserAdapter = require('../adapters/user');
const CustomersAdapter = require('../adapters/customers');
const SmsAdapter = require('../adapters/sms');
const HlrAdapter = require('../adapters/hlr');
const Calls = require('../public/calls');
const Account = require('../public/account');
const Sms = require('../public/sms');
const Hlr = require('../public/hlr');
const HttpClientBuilder = require('../core/httpClientBuilder');
const Credentials = require('../utils/credentials');
const AuthManager = require('./authManager');

/**
 * Builds public interfaces
 */
class InterfaceBuilder {
  constructor(authConfig) {
    let credentials = Credentials.parse(authConfig);
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

  get sms() {
    if (!this._sms) {
      const customersAdapter = new SmsAdapter(this.httpClientBuilder.enswitch, this.authManager);
      this._sms = new Sms(customersAdapter);
    }

    return this._sms;
  }

  get hlr() {
    if (!this._hlr) {
      const customersAdapter = new HlrAdapter(this.httpClientBuilder.nomado, this.authManager);
      this._hlr = new Hlr(customersAdapter);
    }

    return this._hlr;
  }
};

module.exports = InterfaceBuilder;
