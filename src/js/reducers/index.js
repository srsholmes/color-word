import { combineReducers } from 'redux';
import setColors from './setColors';
import score from './score';
import timer from './timer';

const rootReducer = combineReducers({
  setColors,
  score,
  timer
});

export default rootReducer;
