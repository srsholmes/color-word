import React, {Component} from 'react'
import {percentageTime, shuffle, getRandom} from '../modules';
import {TIME_DURATION} from '../constants/constants';
import {Modal} from './'
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

const colorList = (colors, correctColor, colorWords, props, percentTime) => colors.map((color, i) =>
  <li key={i} className={`bg-${color} color-item circle`} style={scaleStyle('normal', percentTime)}
      onClick={() => clickColor(color, correctColor, props)}>
    <a><span>{`${colorWords[i]}`}</span></a>
  </li>
)

const modalMarkUp = (props) =>
  <Modal>
    <div className="demo-card-square mdl-card mdl-shadow--2dp">
      <div className="mdl-card__title mdl-card--expand">
        <h2 className="mdl-card__title-text">Game Over!</h2>
      </div>
      <div className="mdl-card__supporting-text">
        You scored. *** SCORE HERE ***
      </div>
      <div className="mdl-card__actions mdl-card--border">
        <a onClick={() => props.actions.startGame()}
           className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
          Play again
        </a>
      </div>
    </div>
  </Modal>
export class Game extends Component {
  render() {
    const {colors, correctColor, word, colorWords} = this.props.setColors;
    const {endOfGame} = this.props.game
    const {timer, difficulty} = this.props
    const {resetDifficultyTasks, incorrectAnswerTasks} = this.props.actions
    const percentTime = percentageTime(timer.elapsed, TIME_DURATION, difficulty)
    return (
      <div className="game-wrapper">
        <h2 className={`color-${correctColor} chosen-word`}>{word}</h2>
        <ul className="color-choice-ul">{colorList(colors, correctColor, colorWords, this.props, percentTime)}</ul>
        {endOfGame ? (modalMarkUp(this.props)) : null}
      </div>
    )
  }
}

