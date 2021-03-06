import { CHANGE_DIFFICULTY, RESET_DIFFICULTY } from '../actions/index';

export default function difficulty(state = null, action) {
  switch (action.type) {
  case CHANGE_DIFFICULTY:
    return state = action.difficulty;
  case RESET_DIFFICULTY:
    return state = null;
  default:
    return state;
  }
}
