
export const CHOOSE_COLOR = 'CHOOSE_COLOR';
export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const PROGRESS_TIMER = 'PROGRESS_TIMER';	
export const CORRECT_ANSWER = 'CORRECT_ANSWER';
export const INCORRECT_ANSWER = 'INCORRECT_ANSWER';

import { TIME_DURATION } from '../constants/constants';

console.log(TIME_DURATION);

let animFrame;

export function startTimer() {
  return (dispatch, getState) => {
  	let start = Date.now();
    animFrame = requestAnimationFrame(function raf() {
    	console.log('raf');
    	let elapse = Date.now() - start;
    	if (elapse > TIME_DURATION.easy) {
    	 	dispatch(stopTimer());
    		dispatch(progressTimer(TIME_DURATION.easy));
	   		window.cancelAnimationFrame(animFrame);
    		return false;
    	} else {
    		dispatch(progressTimer(elapse));
    	}
    	animFrame = requestAnimationFrame(raf);
    });
  }
}

export function stopTimer() {
	window.cancelAnimationFrame(animFrame);
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

export function incorrectAnswerTasks() {
	return (dispatch) => {
		dispatch(stopTimer());
		dispatch(startTimer());
		dispatch(incorrectAnswer());
	}
}

export function incorrectAnswer() {
	return {
		type: INCORRECT_ANSWER
	};
}
