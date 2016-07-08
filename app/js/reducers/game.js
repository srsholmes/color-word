import {INCORRECT_ANSWER, START_GAME, END_GAME, CHANGE_DIFFICULTY} from '../actions';

const initialState = {
  gamePlaying: false,
  endOfGame: false
}


export default function difficulty(state = initialState, action) {
  switch (action.type) {
    case END_GAME:
    case INCORRECT_ANSWER:
      return {...state, ...{endOfGame: true}};
    case START_GAME:
    case CHANGE_DIFFICULTY:
      return {...state, ...{endOfGame: false}};
    default:
      return state;
  }
}
