import React, {Component}  from 'react';
import {StyleSheet, Text, View, Platform } from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../../actions';
import {DifficultyChoose} from './';

@connect((state) => ({
  menuOpen: state.menuButton,
  score: state.score,
  setColors: state.setColors,
  timer: state.timer,
  difficulty: state.difficulty,
  game: state.game,
  platform: Platform.OS
}), (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
})
export default class ApplicationNative extends Component {

  render() {
    return (<DifficultyChoose {...this.props}/>)
  };
}

const styles = StyleSheet.create({
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
