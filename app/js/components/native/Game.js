import React, {Component} from 'react'
import {StyleSheet, Text, View, Platform, TouchableWithoutFeedback} from 'react-native'
import {TIME_DURATION} from '../../constants/constants';
import {colors, percentageTime} from '../../modules'

// import {Modal} from './'
const clickColor = (color, correctColor, props) => {
  color === correctColor ? props.actions.correctAnswerTasks() : props.actions.incorrectAnswerTasks();
}

const colorList = (colors, correctColor, colorWords, props, percentTime) => colors.map((color, i) =>
  <TouchableWithoutFeedback key={i} onPress={() => clickColor(color, correctColor, props)}>
    <View style={circleStyle(color)}>
      <Text style={styles.circleText}>{colorWords[i]}</Text>
    </View>
  </TouchableWithoutFeedback>
)

const modalMarkUp = (props) =>
  <Modal>
    <Text>You lose</Text>
  </Modal>

export class Game extends Component {
  render() {
    const {colors, correctColor, word, colorWords} = this.props.setColors;
    const {endOfGame} = this.props.game
    const {timer, difficulty} = this.props
    const percentTime = percentageTime(timer.elapsed, TIME_DURATION, difficulty)
    return (
      <View>
        <Text style={headingStyle(correctColor)}>{word}</Text>
        <View style={styles.colorChoiceList}>
          {colorList(colors, correctColor, colorWords, this.props, percentTime)}
        </View>
      </View>
    )
  }
}

const headingStyle = (color) =>
  ({
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: color
  })

const circleStyle = (color) =>
  ({
    borderRadius: 100,
    width: 160,
    height: 160,
    padding: 50,
    flex: 0,
    margin: 10,
    backgroundColor: StyleSheet.flatten(styles[color]).backgroundColor
  })

const styles = StyleSheet.create({
  circleText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    flex: 1
  },
  blue: {
    backgroundColor: colors()[0]
  },
  red: {
    backgroundColor: colors()[1]
  },
  green: {
    backgroundColor: colors()[2]
  },
  orange: {
    backgroundColor: colors()[3]
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  colorChoiceList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch'
  }
});
