/* eslint-env jasmine */

const nomadoClient = require('../');
const Otp = require('../src/public/otp');
const nomadoResponse = require('../src/utils/responses').nomadoResponse;
const genericResponse = require('./data/nomadoSuccess.json');

describe('OTP Interface', () => {
  it('should create an instance of OTP', () => {
    const nomado = new nomadoClient({ USERNAME: 'user', PASSWORD: 'pass' });
    expect(nomado.otp instanceof Otp).toBe(true);
  });

  it('should create otp and return a nomadoResponse', async () => {
    const nomado = new nomadoClient({ USERNAME: 'user', PASSWORD: 'pass' });
    const otp = nomado.otp;
    spyOn(otp.api.httpClient, '_CALL').and.returnValue(genericResponse);
    const otpConfig = {
      to: '0123456789',
      template: 'Welcome, here is your code : {{CODE}}',
    };

    let response = await otp.create(otpConfig);

    expect(response instanceof nomadoResponse).toBe(true);
  });

  it('should verify otp and return a nomadoResponse', async () => {
    const nomado = new nomadoClient({ USERNAME: 'user', PASSWORD: 'pass' });
    const otp = nomado.otp;
    spyOn(otp.api.httpClient, '_CALL').and.returnValue(genericResponse);
    const otpConfig = {
      number: '0123456789',
      token: '67895',
    };

    let response = await otp.verify(otpConfig);

    expect(response instanceof nomadoResponse).toBe(true);
  });

  it('should throw error if code is missing', (done) => {
    const nomado = new nomadoClient({ USERNAME: 'user', PASSWORD: 'pass' });
    const otp = nomado.otp;
    spyOn(otp.api.httpClient, '_CALL').and.returnValue(genericResponse);
    const otpConfig = {
      number: '0123456789',
    };

    otp.verify(otpConfig)
      .catch((error) => {
        done();
      });

  });
});
