const NomadoResponse = require('../core/responses').NomadoResponse;

/**
 * Public interface for calls handling
 */
class Account {
  constructor(api) {
    this.api = api;
  }

  /**
   * Get the account balance
   * @param data (optionally contains account id)
   * @returns {Promise<NomadoResponse>}
   */
  async getBalance(data = {}) {
    return this.api.getBalance(data);
  }
}

module.exports = Account;
