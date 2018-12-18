/**
 * Public interface to access account information
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
