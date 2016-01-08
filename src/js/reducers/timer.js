import { CORRECT_ANSWER, START_TIMER, PROGRESS_TIMER, STOP_TIMER } from '../actions/actions';

let obj = {
	start: Date.now(),
	elapsed: null
};

export default function timer(state = obj, action) {
  switch (action.type) {
  case CORRECT_ANSWER:
  case START_TIMER:
    return state = Date.now();
  case PROGRESS_TIMER:
  	return {...state, ...{
        elapsed: action.time
			}
    }; 
  default:
    return state;
  }
}
