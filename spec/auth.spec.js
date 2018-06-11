/* eslint-env jasmine */

const auth = require('../src/service/auth');

describe('AuthManager', function () {
  it('should store the credentials', function () {
    const myCredentials = { username: 'user', password: 'pass' };
    auth.setCredentials(myCredentials.username, myCredentials.password);
    expect(auth.credentials.USERNAME).toBe(myCredentials.username);
    expect(auth.credentials.PASSWORD).toBe(myCredentials.password);
  });
});
