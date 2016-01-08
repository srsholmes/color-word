import { CORRECT_ANSWER, START_TIMER, PROGRESS_TIMER, STOP_TIMER } from '../actions/actions';

let obj = {
	start: Date.now(),
	elapsed: null
};

export default function timer(state = obj, action) {
  switch (action.type) {
  case PROGRESS_TIMER:
  	return {...state, ...{
        elapsed: action.time
			}
    };
  case STOP_TIMER:
  	return {...state, ...{
        elapsed: 0
			}
    };
  default:
    return state;
  }
}
