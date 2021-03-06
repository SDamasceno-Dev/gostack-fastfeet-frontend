/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Unites all modules' sagas
 */

import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';

export default function* rootSaga() {
  return yield all([auth, user]);
}
