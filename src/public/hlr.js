/**
 * Public interface for HLR handling
 */
class Hlr {
  constructor(api) {
    this.api = api;
  }

  /**
   * Get HLR
   * @param numbers[]
   * @returns {Promise<NomadoResponse>}
   */
  async fetch(data = {}) {
    return this.api.fetch(data);
  }

  /**
   * Validate HLR
   * @param numbers[]
   * @returns {Promise<NomadoResponse>}
   */
  async validate(data = {}) {
    return this.api.validate(data);
  }
}

module.exports = Hlr;
