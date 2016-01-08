
export const CHOOSE_COLOR = 'CHOOSE_COLOR';
export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const PROGRESS_TIMER = 'PROGRESS_TIMER';	
export const CORRECT_ANSWER = 'CORRECT_ANSWER';
export const INCORRECT_ANSWER = 'INCORRECT_ANSWER';

let animFrame;
const TIME_DURATION = 4000;

export function startTimer() {
	console.log('startTimer action');
  return (dispatch, getState) => {
  	let start = Date.now();
    animFrame = requestAnimationFrame(function raf() {
    	let elapse = Date.now() - start;
    	if (elapse > TIME_DURATION) {
    		console.log('STOPPING THE TIMER');
    		dispatch(stopTimer());
    		dispatch(progressTimer(TIME_DURATION));
    	} else {
    		dispatch(progressTimer(elapse));
    	}
    	animFrame = requestAnimationFrame(raf);
    });
  }
}

export function stopTimer() {
	console.log('stopTimer');
	cancelAnimationFrame(animFrame);
  return {
    type: STOP_TIMER
  };
}

export function progressTimer(time) {
	return {
    type: PROGRESS_TIMER, time
  };
}

export function correctAnswer() {
	return {
    type: CORRECT_ANSWER
  };
}

export function correctAnswerTasks() {
	return (dispatch) => {
		dispatch(stopTimer());
		dispatch(startTimer());
		dispatch(correctAnswer());
	}
}

export function incorrectAnswer() {
	return {
		type: INCORRECT_ANSWER
	};
}
