import { combineReducers } from 'redux';
import setColors from './setColors';
import score from './score';
import timer from './timer';
import difficulty from './difficulty';
import menuButton from './menuButton';
import game from './game'
const rootReducer = combineReducers({
  setColors,
  score,
  timer,
  difficulty,
  menuButton,
  game
});

export default rootReducer;
