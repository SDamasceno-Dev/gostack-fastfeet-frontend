/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Redux reducer of module auth
 */

const INITIAL_STATE = {
  token: '123',
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
