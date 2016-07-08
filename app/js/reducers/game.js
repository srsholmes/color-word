import {INCORRECT_ANSWER, START_GAME, END_OF_GAME} from '../actions/index';

const initialState = {
  gamePlaying: false,
  endOfGame: false
}


export default function difficulty(state = initialState, action) {
  switch (action.type) {
    case END_OF_GAME:
    case INCORRECT_ANSWER:
      return {...state, ...{endOfGame: true}};
    case START_GAME:
      return {...state, ...{endOfGame: false}};
    default:
      return state;
  }
}
