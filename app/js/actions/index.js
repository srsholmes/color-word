export const START_GAME = 'START_GAME'
export const END_GAME = 'END_GAME'
export const CHOOSE_COLOR = 'CHOOSE_COLOR';
export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const PROGRESS_TIMER = 'PROGRESS_TIMER';
export const CORRECT_ANSWER = 'CORRECT_ANSWER';
export const INCORRECT_ANSWER = 'INCORRECT_ANSWER';
export const CHANGE_DIFFICULTY = 'CHANGE_DIFFICULTY';
export const RESET_DIFFICULTY = 'RESET_DIFFICULTY';
import {TIME_DURATION} from '../constants/constants';

export const CLOSE_MENU = 'CLOSE_MENU';
export const OPEN_MENU = 'OPEN_MENU';
export const TOGGLE_MENU = 'TOGGLE_MENU';

let animFrame;

export function startTimer() {
  return (dispatch, getState) => {
    let start = Date.now();
    let {difficulty} = getState();
    animFrame = requestAnimationFrame(function raf() {
      let elapse = Date.now() - start;
      if (elapse >= TIME_DURATION[difficulty]) {
        dispatch(incorrectAnswerTasks());
        dispatch(progressTimer(TIME_DURATION[difficulty]));
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

export function incorrectAnswer() {
  return {
    type: INCORRECT_ANSWER
  };
}

export function changeDifficulty(difficulty) {
  return {
    type: CHANGE_DIFFICULTY, difficulty
  }
}

export function resetDifficulty() {
  return {
    type: RESET_DIFFICULTY
  }
}

export function startGame() {
  return (dispatch) => {
    dispatch({type: START_GAME});
    dispatch(startTimer());
  }
}

export function resetDifficultyTasks() {
  return (dispatch) => {
    dispatch(stopTimer());
    dispatch(incorrectAnswer());
    dispatch(resetDifficulty());
  }
}

export function chooseDifficultyTasks() {
  return (dispatch) => {
    dispatch(startGame());
    dispatch(stopTimer());
    dispatch(startTimer());
    dispatch(incorrectAnswer());
    dispatch(changeDifficulty);
  }
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
