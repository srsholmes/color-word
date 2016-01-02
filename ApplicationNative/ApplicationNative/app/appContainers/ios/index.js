'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _reactNative = require('react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

var _componentsIosAppJs = require('../../components/ios/App.js');

var _componentsIosAppJs2 = _interopRequireDefault(_componentsIosAppJs);

var _reactRedux = require('react-redux');

var _storeConfigureStore = require('../../store/configureStore');

var _storeConfigureStore2 = _interopRequireDefault(_storeConfigureStore);

var AppRegistry = _reactNative2['default'].AppRegistry;

var store = (0, _storeConfigureStore2['default'])();

var App = _reactNative2['default'].createClass({
  displayName: 'App',

  render: function render() {
    return _reactNative2['default'].createElement(
      _reactRedux.Provider,
      { store: store },
      _reactNative2['default'].createElement(_componentsIosAppJs2['default'], null)
    );
  }
});

AppRegistry.registerComponent('ApplicationNative', function () {
  return App;
});