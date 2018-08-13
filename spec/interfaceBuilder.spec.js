/* eslint-env jasmine */

const InterfaceBuilder = require('../src/core/interfaceBuilder');
const Calls = require('../src/public/calls');
const Account = require('../src/public/account');

describe('InterfaceBuilder', () => {
  beforeAll(() => {
    let credentials = { USERNAME: 'user', PASSWORD: 'pass' };
    this.interfaceBuilder = new InterfaceBuilder(credentials);
  });

  it('should generate a Calls object', () => {
    const calls = this.interfaceBuilder.calls;
    expect(calls).toEqual(jasmine.any(Calls));
  });

  it('should generate build a Account object', () => {
    const account = this.interfaceBuilder.account;
    expect(account).toEqual(jasmine.any(Account));
  });

});
