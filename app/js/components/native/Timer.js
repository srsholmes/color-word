import React, {Component}  from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native'
import {TIME_DURATION} from '../../constants/constants';
import {percentageTime} from '../../modules'


export class Timer extends Component {
  componentDidMount() {
    this.props.actions.startTimer();
  }

  render() {
    const {timer, difficulty} = this.props;
    const percentTime = percentageTime(timer.elapsed, TIME_DURATION, difficulty)
    return (
      <View style={styles.timerWrapper}>
        <View style={timerStyle(percentTime)}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  timerWrapper: {
    backgroundColor: 'red',
    height: 5,
    width: 295,
    flex: 1
  }
})

const timerStyle = (time) => {
  return {
    height: 5,
    width: (time / 100) * StyleSheet.flatten(styles.timerWrapper).width,
    backgroundColor: 'green'
  }
}
