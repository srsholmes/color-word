import { CHANGE_DIFFICULTY, RESET_DIFFICULTY } from '../actions/actions';

export default function score(state = null, action) {
  switch (action.type) {
  case CHANGE_DIFFICULTY:
    return state = action.difficulty;
  case RESET_DIFFICULTY:
  console.log('CHANGE_DIFFICULTY STORE');
    return state = null;
  default:
    return state;
  }
}
