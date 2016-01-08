import React from 'react';
import { shuffle, colors } from '../../modules';

let Game = React.createClass({

  shouldComponentUpdate(nextProps) {
    if (nextProps.setColors.colors === this.props.setColors.colors) return false;
    return true;
  },

  clickColor(color, correctColor) {
    color === correctColor ? this.props.correctAnswerTasks() : this.props.incorrectAnswer();
  },

  render(){
    let { colors, correctColor } = this.props.setColors;
    let word = colors[Math.floor(Math.random() * colors.length)];
    let shuffledColors = shuffle(colors);
    let colorList = shuffledColors.map((color, i) => {
      return (
        <li key={i} className={'bg-'+ color + ' color-item'} onClick={() => this.clickColor(color, correctColor)}>
          <a><span>{color}</span></a>
        </li>
      )
    });

    return (
      <div className="game-wrapper">
        <h2 className={`color-${correctColor}`}>{word}</h2>
        <ul className="color-choice-ul">{colorList}</ul>
      </div>
    )
  }
});

export default Game;
