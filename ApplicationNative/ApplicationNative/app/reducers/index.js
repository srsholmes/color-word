'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _redux = require('redux');

var _counter = require('./counter');

var _counter2 = _interopRequireDefault(_counter);

var _heading = require('./heading');

var _heading2 = _interopRequireDefault(_heading);

var rootReducer = (0, _redux.combineReducers)({
  counter: _counter2['default'],
  heading: _heading2['default']
});

exports['default'] = rootReducer;
module.exports = exports['default'];