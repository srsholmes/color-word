'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _componentsWeb = require('../../components/web');

var _storeConfigureStore = require('../../store/configureStore');

var _storeConfigureStore2 = _interopRequireDefault(_storeConfigureStore);

var store = (0, _storeConfigureStore2['default'])();

(0, _reactDom.render)(_react2['default'].createElement(
  _reactRedux.Provider,
  { store: store },
  _react2['default'].createElement(_componentsWeb.App, null)
), document.querySelector('[app]'));