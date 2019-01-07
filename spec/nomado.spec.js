/* eslint-env jasmine */

const Nomado = require('../src/http/nomado');

describe('NomadoClient', () => {
  it('should generate an API path', () => {
    var path = new Nomado().prepareServerURL({ TRANSPORT: 'https', SERVER: 'nomado.com' });
    expect(path).toBe('https://nomado.com');
  });

  it('should generate a valid BEARER auth header', () => {
    const nomado = new Nomado();
    nomado.prepareAuthHeader({ AUTH_TYPE: 'TOKEN', TOKEN: '12345' });
    expect(nomado.AUTH_HEADER).toBe('BEARER 12345');
  });

  it('should generate a valid BASIC auth header', () => {
    const nomado = new Nomado();
    nomado.prepareAuthHeader({
      AUTH_TYPE: 'BASIC',
      B64: 'username:pass',
    });
    expect(nomado.AUTH_HEADER).toBe('BASIC username:pass');
  });
});
