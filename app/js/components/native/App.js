import React, {Component}  from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../../actions';
import {DifficultyChoose, Timer, Score} from './';

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
    return (
      <View style={styles.wrapper}>
        {
          this.props.difficulty
            ? (<View style={styles.gameWrapper}>
                <Timer {...this.props}/>
                <Score {...this.props}/>
              </View>)
            : (<DifficultyChoose {...this.props}/>)
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    top: 40,
    backgroundColor: 'grey'
  },
  gameWrapper: {
    backgroundColor: 'pink',
    justifyContent: 'center'
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
