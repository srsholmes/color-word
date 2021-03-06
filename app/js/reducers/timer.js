import {
  CORRECT_ANSWER,
  INCORRECT_ANSWER,
  START_TIMER,
  PROGRESS_TIMER,
  STOP_TIMER,
  RESET_DIFFICULTY,
  CHANGE_DIFFICULTY
} from '../actions/index';

let obj = {
  start: Date.now(),
  elapsed: null
};

export default function timer(state = obj, action) {
  switch (action.type) {
    case PROGRESS_TIMER:
      return {...state, ...{elapsed: action.time}};
    case INCORRECT_ANSWER:
    case STOP_TIMER:
    case RESET_DIFFICULTY:
    case CHANGE_DIFFICULTY:
      return {...state, ...{ elapsed: 0} };
    default:
      return state;
  }
}
