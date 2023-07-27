import Cookies from 'js-cookie';

const TOKEN_NAME = 'authToken';

export function setAuthToken(token, expiration) {
  const expirationTimeInMinutes = expiration
  const expirationDate = new Date()
  expirationDate.setTime(expirationDate.getTime() + expirationTimeInMinutes * 60 * 1000)
  Cookies.set(TOKEN_NAME, token, { expires: expirationDate });
}

export function removeAuthToken() {
  Cookies.remove(TOKEN_NAME);
}

export function getAuthToken() {
  return Cookies.get(TOKEN_NAME);
}

export function isAuthenticated() {
  return Boolean(getAuthToken());
}