/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Unites all modules' reducers
 */

import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';

export default combineReducers({
  auth,
  user,
});
