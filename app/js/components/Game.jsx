import React, {Component} from 'react'
import {percentageTime} from '../modules';
import {TIME_DURATION} from '../constants/constants';

const clickColor = (color, correctColor, props) => {
  color === correctColor ? props.actions.correctAnswerTasks() : props.actions.incorrectAnswerTasks();
}

const scaleStyle = (gametype, percentTime) => {
  switch (gametype) {
    case 'normal':
      return {}
      break;
    case 'shrink':
      return ({transform: `scale(${ 1 - (percentTime / 100) }`})
      break;
    case 'grow':
      return ({transform: `scale(${percentTime / 100}`})
      break;
    default:
      return {}
  }
}

const colorList = (colors, correctColor, props, percentTime) => colors.map((color, i) =>
  <li key={i} className={`bg-${color} color-item`} style={scaleStyle('normal', percentTime)}
      onClick={() => clickColor(color, correctColor, props)}>
    <a><span>{color}</span></a>
  </li>
)

export class Game extends Component {
  render() {
    const {colors, correctColor, word} = this.props.setColors;
    const {timer, difficulty} = this.props
    const percentTime = percentageTime(timer.elapsed, TIME_DURATION, difficulty)
    return (
      <div className="game-wrapper">
        <h2 className={`color-${correctColor} chosen-word`}>{word}</h2>
        <ul className="color-choice-ul">{colorList(colors, correctColor, this.props, percentTime)}</ul>
      </div>
    )
  }
}

