/* eslint-env jasmine */

const Utils = require('../src/utils/utils');

describe('Utils', () => {
  it('should encode string to base 64', () => {
    let b64 = Utils.toBase64('my string !');
    expect(b64).toBe('bXkgc3RyaW5nICE=');
  });
});
