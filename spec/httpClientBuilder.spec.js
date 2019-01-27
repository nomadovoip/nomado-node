/* eslint-env jasmine */

const HttpClientBuilder = require('../src/core/httpClientBuilder');
const nomado = require('../src/http/nomado');
const Enswitch = require('../src/http/enswitch');

describe('HttpClientBuilder', () => {
  beforeAll(() => {
    let credentials = { USERNAME: 'user', PASSWORD: 'pass' };
    this.httpClientBuilder = new HttpClientBuilder(credentials);
  });

  it('should generate a nomado object', () => {
    var nomadoClient = this.httpClientBuilder.nomado;
    expect(nomadoClient).toEqual(jasmine.any(nomado));
  });

  it('should generate build a Enswitch object', () => {
    var enswitchClient = this.httpClientBuilder.enswitch;
    expect(enswitchClient).toEqual(jasmine.any(Enswitch));
  });

  it('should return the same nomado object', () => {
    var nomado1 = this.httpClientBuilder.nomado;
    var nomado2 = this.httpClientBuilder.nomado;
    expect(nomado1).toBe(nomado2);
  });

  it('should return the same Enswitch object', () => {
    var enswitch1 = this.httpClientBuilder.enswitch;
    var enswitch2 = this.httpClientBuilder.enswitch;
    expect(enswitch1).toBe(enswitch2);
  });
});
