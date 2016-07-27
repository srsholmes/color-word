import { combineReducers } from 'redux';
import setColors from './setColors';
import score from './score';
import timer from './timer';
import difficulty from './difficulty';
import menuButton from './menuButton';
import game from './game';
import heading from './heading';
import counter from './counter';
const rootReducer = combineReducers({
  heading,
  counter,
  setColors,
  score,
  timer,
  difficulty,
  menuButton,
  game
});

export default rootReducer;
