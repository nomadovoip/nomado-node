const Calls = require('./core/calls');
const Account = require('./core/account');
const auth = require('./service/auth');
const CallsAdapter = require('./api/callsAdapter');
const CustomersAdapter = require('./api/customersAdapter');
const HttpClientBuilder = require('./http/httpClientBuilder');

/**
 * The Nomado SDK client which exposes public interfaces
 */
class NomadoClient {
  constructor (authConfig = {}) {

    // Store the credentials
    auth.setCredentials(authConfig);

    // Initialize the public interfaces
    this.buildCallsInterface();
    this.buildAccountInterface();
  }

  /**
   * Initialize the Calls public interface
   */
  buildCallsInterface() {
    const callsAdapter = new CallsAdapter(HttpClientBuilder.enswitch);
    this.calls = new Calls(callsAdapter);
  }

  /**
   * Initialize the Account public interface
   */
  buildAccountInterface() {
    const customersAdapter = new CustomersAdapter(HttpClientBuilder.enswitch);
    this.account = new Account(customersAdapter);
  }
};

module.exports = NomadoClient;
