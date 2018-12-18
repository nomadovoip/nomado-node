/* eslint-env jasmine */

const Nomado = require('../src/http/nomado');

describe('NomadoClient', () => {
  it('should generate an API path', () => {
    var path = new Nomado().prepareServerURL({ TRANSPORT: 'https', SERVER: 'nomado.com' });
    expect(path).toBe('https://nomado.com');
  });

  it('should generate a valid BEARER auth header', () => {
    var path = new Nomado().prepareAuthHeader({ AUTH_TYPE: 'TOKEN', TOKEN: '12345' });
    expect(path).toBe('BEARER 12345');
  });

  it('should generate a valid SIMPLE auth header', () => {
    var header = new Nomado().prepareAuthHeader({
      AUTH_TYPE: 'BASIC',
      USERNAME_B64: 'username',
      PASSWORD_B64: 'pass',
    });
    expect(header).toBe('SIMPLE username pass');
  });
});
