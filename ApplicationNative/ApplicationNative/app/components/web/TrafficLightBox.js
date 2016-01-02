'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _baseHeader = require('../base/header');

var TrafficLightBox = _react2['default'].createClass(_extends({
	displayName: 'TrafficLightBox'
}, _baseHeader.HEADER, {
	render: function render() {
		return _react2['default'].createElement('div', { className: 'my-custom-view ' + this.props.switchVal });
	}
}));

exports['default'] = TrafficLightBox;
module.exports = exports['default'];