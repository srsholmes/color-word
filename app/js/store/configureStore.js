import { createStore, applyMiddleware } from 'redux';
import thunk from '../middleware/thunk';
import reducer from '../reducers';
import createLogger from 'redux-logger';

// const createStoreWithMiddleware = applyMiddleware(
//   thunk,
//   createLogger()
// )(createStore);
//
// export default function configureStore(initialState) {
//   const store = createStoreWithMiddleware(reducer, initialState);
//   if (module.onReload) {
//     module.onReload(() => {
//       const nextReducer = require('../reducers');
//       store.replaceReducer(nextReducer);
//       return true
//     });
//   }
//   return store;
// }

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, compose(
    applyMiddleware(createLogger(), thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  if (module.onReload) {
    module.onReload(() => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
      return true
    });
  }

  return store;
}
