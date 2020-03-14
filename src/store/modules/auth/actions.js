/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Redux actions of module auth
 */

export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, id, name, email) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, id, name, email },
  };
}

export function signInFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}
