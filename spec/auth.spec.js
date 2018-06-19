/* eslint-env jasmine */

const auth = require('../src/service/auth');
const UserAdapter = require('../src/api/userAdapter');

describe('AuthManager', () => {
  it('should store the credentials', () => {
    const myCredentials = { username: 'user', password: 'pass' };
    auth.setCredentials(myCredentials.username, myCredentials.password);
    expect(auth.credentials.USERNAME).toBe(myCredentials.username);
    expect(auth.credentials.PASSWORD).toBe(myCredentials.password);
  });

  it('should throw an authentication error when login with invalid credentials', (done) => {
    const myCredentials = { username: 'user', password: 'pass' };
    auth.setCredentials(myCredentials.username, myCredentials.password);
    const userApi = new UserAdapter();
    const user = auth.login(userApi)
      .catch((r) => {
        expect(r.code).toBe(401);
        done();
      });
  });

  it('should return user data with customer id', (done) => {
  });

  it('should throw an error if customer id is missing', (done) => {
  });
});
