/* eslint-env jasmine */

const Enswitch = require('../src/http/enswitch');

describe('EnswitchClient', () => {
  it('should generate an API path', () => {
    var path = new Enswitch().prepareServerURL({ TRANSPORT: 'https', SERVER: 'nomado.com' });
    expect(path).toBe('https://nomado.com/api/json/');
  });
});
