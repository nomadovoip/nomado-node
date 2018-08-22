/**
 * Public interface for SMS handling
 */
class Sms {
  constructor(api) {
    this.api = api;
  }

  /**
   * Send SMS
   * @param data (to,from,message,unicode)
   * @returns {Promise<NomadoResponse>}
   */
  async send(data = {}) {
    return this.api.send(data);
  }
}

module.exports = Sms;
