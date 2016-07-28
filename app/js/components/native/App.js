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
