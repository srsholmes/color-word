'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _reactNative = require('react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

var _baseHeader = require('../base/header');

//The redux

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _actionsActions = require('../../actions/actions');

var Actions = _interopRequireWildcard(_actionsActions);

var _storeConfigureStore = require('../../store/configureStore');

var _storeConfigureStore2 = _interopRequireDefault(_storeConfigureStore);

var StyleSheet = _reactNative2['default'].StyleSheet;
var Text = _reactNative2['default'].Text;
var View = _reactNative2['default'].View;
var requireNativeComponent = _reactNative2['default'].requireNativeComponent;
var NativeModules = _reactNative2['default'].NativeModules;
var SwitchIOS = _reactNative2['default'].SwitchIOS;
var PropTypes = _reactNative2['default'].PropTypes;

var store = (0, _storeConfigureStore2['default'])();

var ApplicationNative = _reactNative2['default'].createClass(_extends({
  displayName: 'ApplicationNative'
}, _baseHeader.HEADER, {
  render: function render() {
    var changeHeading = this.props.changeHeading;

    return _reactNative2['default'].createElement(
      View,
      { style: styles.container },
      _reactNative2['default'].createElement(
        Text,
        { onPress: changeHeading, style: styles.welcome },
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

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  counter: {
    fontSize: 30,
    top: 10,
    fontWeight: 'bold'
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

exports['default'] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ApplicationNative);
module.exports = exports['default'];