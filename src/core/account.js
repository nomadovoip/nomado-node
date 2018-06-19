const NomadoResponse = require('../core/responses').NomadoResponse;

/**
 * Public interface for calls handling
 */
class Account {
  constructor(api) {
    this.api = api;
  }
}

module.exports = Account;
