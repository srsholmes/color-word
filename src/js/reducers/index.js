import { combineReducers } from 'redux';
import setColors from './setColors';
import score from './score';
const rootReducer = combineReducers({
  setColors,
  score
});

export default rootReducer;
