/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Redux sagas of module auth
 */

import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '~/services/history';
import api from '~/services/api';
import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'session', {
      email,
      password,
    });

    const { token, id, name } = response.data;
    yield put(signInSuccess(token, id, name, email));
    history.push('/delivery');
  } catch (err) {
    yield put(signInFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
