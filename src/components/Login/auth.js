import Cookies from 'js-cookie';

const TOKEN_NAME = 'authToken';

export function setAuthToken(token) {
  Cookies.set(TOKEN_NAME, token);
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