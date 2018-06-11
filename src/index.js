const Calls = require('./core/calls');
const auth = require('./service/auth');
const CallsAdapter = require('./api/callsAdapter');

/**
 * The Nomado SDK client which exposes public interfaces
 */
class NomadoClient {
  constructor (username, password) {
    // Store the credentials
    auth.setCredentials(username, password);

    // Initialize the public interface
    this.buildPublicInterface();
  }

  buildPublicInterface() {
    // Initializing the "calls" public interface
    const callsAdapter = new CallsAdapter();
    this.calls = new Calls(callsAdapter);
  }
};

module.exports = NomadoClient;
