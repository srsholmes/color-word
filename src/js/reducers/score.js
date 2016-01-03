import { INCORRECT_ANSWER, CORRECT_ANSWER } from '../actions/actions';

export default function score(state = 0, action) {
  switch (action.type) {
  case CORRECT_ANSWER:
    return state + 1;
  case INCORRECT_ANSWER:
    return state = 0;
  default:
    return state;
  }
}
