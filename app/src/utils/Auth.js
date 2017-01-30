class Auth {
  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser(token, username) {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
  }
  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   */
  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null;
  }
  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }
  /**
   * Get a token value.
   *
   */
  static getToken() {
    return localStorage.getItem('token');
  }

  static getUserName() {
    return localStorage.getItem('username');
  }
}

export default Auth;
