/**
 * Public interface for HLR handling
 */
class Hlr {
  constructor(api) {
    this.api = api;
  }

  /**
   * Get HLR
   * @param data (number)
   * @returns {Promise<NomadoResponse>}
   */
  async get(data = {}) {
    return this.api.get(data);
  }
}

module.exports = Hlr;
