/* eslint-env jasmine */

const nomadoClientSpec = require('../index');
const Calls = require('../src/public/calls');
const Account = require('../src/public/account');
const Sms = require('../src/public/sms');
const HLR = require('../src/public/hlr');

describe('nomadoClient', () => {

  it('should a Calls object', () => {
    let credentials1 = { USERNAME: 'user1', PASSWORD: 'pass2' };
    const nomadoClient = new nomadoClientSpec(credentials1);
    expect(nomadoClient.calls).toEqual(jasmine.any(Calls));
  });

  it('should build a Account object', () => {
    let credentials1 = { USERNAME: 'user1', PASSWORD: 'pass2' };
    const nomadoClient = new nomadoClientSpec(credentials1);
    expect(nomadoClient.account).toEqual(jasmine.any(Account));
  });

  it('should build a Sms object', () => {
    let credentials1 = { USERNAME: 'user1', PASSWORD: 'pass2' };
    const nomadoClient = new nomadoClientSpec(credentials1);
    expect(nomadoClient.sms).toEqual(jasmine.any(Sms));
  });

  it('should build a HLR object', () => {
    let credentials1 = { USERNAME: 'user1', PASSWORD: 'pass2' };
    const nomadoClient = new nomadoClientSpec(credentials1);
    expect(nomadoClient.hlr).toEqual(jasmine.any(HLR));
  });

  it('should call the API with different credentials', () => {
    let credentials1 = { USERNAME: 'user1', PASSWORD: 'pass1' };
    let credentials2 = { USERNAME: 'user2', PASSWORD: 'pass2' };
    const nomadoClient1 = new nomadoClientSpec(credentials1);
    const nomadoClient2 = new nomadoClientSpec(credentials2);

    expect(nomadoClient1.calls.api.httpClient.USERNAME).toBe(credentials1.API_USER);
    expect(nomadoClient2.calls.api.httpClient.USERNAME).toBe(credentials2.API_USER);
  });

});
