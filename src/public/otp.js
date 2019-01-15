/**
 * Public interface for OTP handling
 */
class Otp {
  constructor(api) {
    this.api = api;
  }

  /**
   * Send OTP via SMS
   * @param options (number, template)
   * @returns {Promise<NomadoResponse>}
   */
  async send(options = {}) {
    return this.api.send(options);
  }

  /**
   * Verify OTP validity
   * @param options (number, code)
   * @returns {Promise<NomadoResponse>}
   */
  async verify(options = {}) {
    return this.api.verify(options);
  }
}

module.exports = Otp;
