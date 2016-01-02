'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _reactNative = require('react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

var Text = _reactNative2['default'].Text;
var View = _reactNative2['default'].View;
var requireNativeComponent = _reactNative2['default'].requireNativeComponent;
var NativeModules = _reactNative2['default'].NativeModules;

var NativeTrafficLightBox = requireNativeComponent('TrafficLightBox', TrafficLightBox);
var TrafficLightBox = _reactNative2['default'].createClass({
	displayName: 'TrafficLightBox',

	render: function render() {
		return _reactNative2['default'].createElement(
			View,
			null,
			_reactNative2['default'].createElement(
				Text,
				null,
				'This is the Custom View react component'
			),
			_reactNative2['default'].createElement(NativeTrafficLightBox, {
				ref: 'trafficLightBox', style: { width: 300, height: 300 },
				isRed: !this.props.switchVal, isTransparent: true })
		);
	}
});

exports['default'] = TrafficLightBox;
module.exports = exports['default'];