import React, {Component} from 'react'
import {shuffle} from '../modules';

const clickColor = (color, correctColor, props) => {
  color === correctColor ? props.actions.correctAnswerTasks() : props.actions.incorrectAnswerTasks();
}

const colorList = (colors, correctColor, props) => shuffle(colors).map((color, i) =>
  <li key={i} className={`bg-${color} color-item`} onClick={() => clickColor(color, correctColor, props)}>
    <a><span>{color}</span></a>
  </li>
)

export class Game extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.setColors.colors === this.props.setColors.colors) return false;
    return true;
  }

  render() {
    let {colors, correctColor} = this.props.setColors;
    let word = colors[Math.floor(Math.random() * colors.length)];
    return (
      <div className="game-wrapper">
        <h2 className={`color-${correctColor} chosen-word`}>{word}</h2>
        <ul className="color-choice-ul">{colorList(colors, correctColor, this.props)}</ul>
      </div>
    )
  }
}

