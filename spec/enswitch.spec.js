/* eslint-env jasmine */

const Enswitch = require('../src/http/enswitch');

describe('Enswitch', function () {
  it('should generate an API path', function () {
    var path = new Enswitch().prepareServerURL({ TRANSPORT: 'https', SERVER: 'nomado.com' });
    expect(path).toBe('https://nomado.com/api/json/');
  });
});
