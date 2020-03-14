/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Unites all modules' reducers
 */

import { combineReducers } from 'redux';

import auth from './auth/reducer';

export default combineReducers({
  auth,
});
