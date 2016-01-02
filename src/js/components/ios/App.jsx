import React  from 'react-native';

var { StyleSheet, Text, View, requireNativeComponent, NativeModules, SwitchIOS, PropTypes } = React;
import { HEADER } from '../base/header';

//The redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/actions';

import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';
const store = configureStore();

let ApplicationNative = React.createClass({
  ...HEADER,
  render() {
    const { changeHeading } = this.props;
    return (
      <View style={styles.container}>
        <Text onPress={changeHeading} style={styles.welcome}>{this.props.heading}</Text>
      </View>
    );
  }
});

function mapStateToProps(state) {
  return {
    counter: state.counter,
    heading: state.heading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  counter: {
    fontSize: 30,
    top: 10,
    fontWeight: 'bold'
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationNative);
