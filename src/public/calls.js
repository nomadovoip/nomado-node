/**
 * Public interface for calls handling
 */
class Calls {
  constructor(api) {
    this.api = api;
  }

  /**
   * Make a call
   * @param options
   * @returns {Promise<NomadoResponse>}
   */
  make(options) {
    return this.api.make(options);
  }
}

module.exports = Calls;
