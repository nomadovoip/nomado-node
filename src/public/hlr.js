/**
 * Public interface for HLR handling
 */
class Hlr {
  constructor(api) {
    this.api = api;
  }

  /**
   * Get HLR
   * @param options (numbers[])
   * @returns {Promise<NomadoResponse>}
   */
  async fetch(options = {}) {
    return this.api.fetch(options);
  }

  /**
   * Validate HLR
   * @param options (number)
   * @returns {Promise<NomadoResponse>}
   */
  async validate(options = {}) {
    return this.api.validate(options);
  }
}

module.exports = Hlr;
