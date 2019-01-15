/* eslint-env jasmine */

const NomadoClient = require('../');
const Otp = require('../src/public/otp');
const NomadoResponse = require('../src/utils/responses').NomadoResponse;
const genericResponse = require('./data/genericSuccess.json');

describe('OTP Interface', () => {
  it('should create an instance of OTP', () => {
    const nomado = new NomadoClient({ USERNAME: 'user', PASSWORD: 'pass' });
    expect(nomado.otp instanceof Otp).toBe(true);
  });

  it('should send otp and return a NomadoResponse', async () => {
    const nomado = new NomadoClient({ USERNAME: 'user', PASSWORD: 'pass' });
    const otp = nomado.otp;
    spyOn(otp.api.httpClient, '_CALL').and.returnValue(genericResponse);
    const otpConfig = {
      number: '0123456789',
      template: 'Welcome, here is your code : {{CODE}}',
    };

    let response = await otp.send(otpConfig);

    expect(response instanceof NomadoResponse).toBe(true);
  });

  it('should verify otp and return a NomadoResponse', async () => {
    const nomado = new NomadoClient({ USERNAME: 'user', PASSWORD: 'pass' });
    const otp = nomado.otp;
    spyOn(otp.api.httpClient, '_CALL').and.returnValue(genericResponse);
    const otpConfig = {
      number: '0123456789',
      code: '67895',
    };

    let response = await otp.verify(otpConfig);

    expect(response instanceof NomadoResponse).toBe(true);
  });

  it('should throw error if code is missing', (done) => {
    const nomado = new NomadoClient({ USERNAME: 'user', PASSWORD: 'pass' });
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
