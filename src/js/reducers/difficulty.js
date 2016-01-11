import { CHANGE_DIFFICULTY } from '../actions/actions';

export default function score(state = null, action) {
  switch (action.type) {
  case CHANGE_DIFFICULTY:
    return state = action.difficulty
  default:
    return state;
  }
}
