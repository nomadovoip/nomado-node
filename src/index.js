const Calls = require('./core/calls');
const Account = require('./core/account');
const auth = require('./service/auth');
const CallsAdapter = require('./api/callsAdapter');
const CustomersAdapter = require('./api/customersAdapter');

/**
 * The Nomado SDK client which exposes public interfaces
 */
class NomadoClient {
  constructor (username, password) {
    // Store the credentials
    auth.setCredentials(username, password);

    // Initialize the public interfaces
    this.buildCallsInterface();
    this.buildAccountInterface();
  }

  /**
   * Initialize the Calls public interface
   */
  buildCallsInterface() {
    const callsAdapter = new CallsAdapter();
    this.calls = new Calls(callsAdapter);
  }

  /**
   * Initialize the Account public interface
   */
  buildAccountInterface() {
    const customersAdapter = new CustomersAdapter();
    this.account = new Account(customersAdapter);
  }
};

module.exports = NomadoClient;
