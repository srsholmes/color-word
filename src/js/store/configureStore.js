import { createStore, applyMiddleware } from 'redux';
import thunk from '../middleware/thunk';
import reducer from '../reducers';
import createLogger from 'redux-logger';

import { PROGRESS_TIMER } from '../actions/actions';


const createStoreWithMiddleware = applyMiddleware(
  thunk,
  createLogger({ predicate: (getState, action) => action.type !== PROGRESS_TIMER})
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);

  if (module.onReload) {
    module.onReload(() => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);

      // return true to indicate that this module is accepted and
      // there is no need to reload its parent modules
      return true
    });
  }

  return store;
}
