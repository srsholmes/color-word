'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = configureStore;

var _redux = require('redux');

var _middlewareThunk = require('../middleware/thunk');

var _middlewareThunk2 = _interopRequireDefault(_middlewareThunk);

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_middlewareThunk2['default'], (0, _reduxLogger2['default'])())(_redux.createStore);

function configureStore(initialState) {
  var store = createStoreWithMiddleware(_reducers2['default'], initialState);

  if (module.onReload) {
    module.onReload(function () {
      var nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);

      // return true to indicate that this module is accepted and
      // there is no need to reload its parent modules
      return true;
    });
  }

  return store;
}

module.exports = exports['default'];