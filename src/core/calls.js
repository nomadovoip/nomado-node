const NomadoResponse = require('../core/response').responseBuilder;

/**
 * Public interface for handling calls
 */
class Calls {
  constructor(apiAdapter) {
    this.apiAdapter = apiAdapter;
  }

  /**
   * Initiate a call
   * @returns {NomadoResponse}
   */
  async make(config) {
    return NomadoResponse(this.apiAdapter.make(config));
  }
}

module.exports = Calls;
