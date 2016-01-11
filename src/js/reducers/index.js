import { combineReducers } from 'redux';
import setColors from './setColors';
import score from './score';
import timer from './timer';
import difficulty from './difficulty';

const rootReducer = combineReducers({
  setColors,
  score,
  timer,
  difficulty
});

export default rootReducer;
