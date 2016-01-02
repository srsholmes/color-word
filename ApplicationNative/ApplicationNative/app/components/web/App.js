'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

//The redux

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _actionsActions = require('../../actions/actions');

var Actions = _interopRequireWildcard(_actionsActions);

var _baseHeader = require('../base/header');

var App = _react2['default'].createClass(_extends({
  displayName: 'App'
}, _baseHeader.HEADER, {
  render: function render() {
    var changeHeading = this.props.changeHeading;

    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'h1',
        { onClick: changeHeading },
        this.props.heading
      )
    );
  }
}));

function mapStateToProps(state) {
  return {
    counter: state.counter,
    heading: state.heading
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(Actions, dispatch);
}

exports['default'] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);
module.exports = exports['default'];