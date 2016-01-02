'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _thunk = require('./thunk');

var _thunk2 = _interopRequireDefault(_thunk);

var _promise = require('./promise');

var _promise2 = _interopRequireDefault(_promise);

exports['default'] = {
	thunk: _thunk2['default'],
	promise: _promise2['default']
};
module.exports = exports['default'];