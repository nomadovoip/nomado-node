/* eslint-env jasmine */

const auth = require('../src/service/auth');

describe('AuthManager', () => {
  it('should store the credentials', () => {
    const myCredentials = { username: 'user', password: 'pass' };
    auth.setCredentials(myCredentials.username, myCredentials.password);
    expect(auth.credentials.USERNAME).toBe(myCredentials.username);
    expect(auth.credentials.PASSWORD).toBe(myCredentials.password);
  });
});
