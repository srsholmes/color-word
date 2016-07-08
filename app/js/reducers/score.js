import {INCORRECT_ANSWER, START_GAME, CORRECT_ANSWER, RESET_DIFFICULTY, CHANGE_DIFFICULTY} from '../actions/index';

const obj = {
  currentScore: 0,
  topScore: 0
};

export default function score(state = obj, action) {
  switch (action.type) {
    case CORRECT_ANSWER:
      let newTop;
      let currentScore = state.currentScore;
      state.currentScore >= state.topScore ? newTop = ++currentScore : newTop = state.topScore;
      return {
        ...state, ...{
          currentScore: ++state.currentScore,
          topScore: newTop
        }
      }
    case START_GAME:
    case RESET_DIFFICULTY:
    case CHANGE_DIFFICULTY:
      return {
        ...state, ...{
          currentScore: 0
        }
      }
    default:
      return state;
  }
}
