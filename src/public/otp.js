/**
 * Public interface for OTP handling
 */
class Otp {
  constructor(api) {
    this.api = api;
  }

  /**
   * Send OTP via SMS
   * @param options (to, template, length, expiry)
   * @returns {Promise<NomadoResponse>}
   */
  async create(options = {}) {
    return this.api.create(options);
  }

  /**
   * Verify OTP validity
   * @param options (to, code)
   * @returns {Promise<NomadoResponse>}
   */
  async verify(options = {}) {
    return this.api.verify(options);
  }
}

module.exports = Otp;
