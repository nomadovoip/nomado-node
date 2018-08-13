const InterfaceBuilder = require('./core/interfaceBuilder');
/**
 * The Nomado SDK client which exposes public interfaces
 */
class NomadoClient {
  constructor(authConfig = {}) {
    const publicInterface = new InterfaceBuilder(authConfig);
    this.calls = publicInterface.calls;
    this.account = publicInterface.account;
  }
};

module.exports = NomadoClient;
