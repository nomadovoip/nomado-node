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
   * @returns {Promise<nomadoResponse>}
   */
  async fetch(options = {}) {
    return this.api.fetch(options);
  }

  /**
   * Validate HLR
   * @param options (number)
   * @returns {Promise<nomadoResponse>}
   */
  async validate(options = {}) {
    return this.api.validate(options);
  }
}

module.exports = Hlr;
