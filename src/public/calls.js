/**
 * Public interface for calls handling
 */
class Calls {
  constructor(api) {
    this.api = api;
  }

  /**
   * Make a call
   * @param config
   * @returns {Promise<NomadoResponse>}
   */
  make(config) {
    return this.api.make(config);
  }
}

module.exports = Calls;
