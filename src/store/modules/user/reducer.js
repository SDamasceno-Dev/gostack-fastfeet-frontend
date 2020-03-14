/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Redux reducer of module user
 */
import produce from 'immer';

const INITIAL_STATE = {
  profileId: null,
  profileName: null,
  profileEmail: null,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.profileId = action.payload.id;
        draft.profileName = action.payload.name;
        draft.profileEmail = action.payload.email;
        draft.signed = true;
      });
    default:
      return state;
  }
}
