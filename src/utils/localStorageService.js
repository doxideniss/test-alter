export default {
  login() {
    localStorage.setItem('auth', true);
  },
  logout() {
    localStorage.removeItem('auth')
  },
  isAuth() {
    return localStorage.getItem('auth')
  }
};
