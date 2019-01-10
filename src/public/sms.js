/**
 * Public interface for SMS handling
 */
class Sms {
  constructor(api) {
    this.api = api;
  }

  /**
   * Send SMS
   * @param options (to,from,message,unicode)
   * @returns {Promise<NomadoResponse>}
   */
  async send(options = {}) {
    return this.api.send(options);
  }
}

module.exports = Sms;
