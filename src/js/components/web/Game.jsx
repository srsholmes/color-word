import React from 'react';
import { shuffle, colors } from '../../modules';

let Game = React.createClass({

  shouldComponentUpdate(nextProps) {
    if (nextProps.colors === this.props.colors) return false;
    return true;
  },  

  render(){
    let { colors, correctColor } = this.props;
    let word = colors[Math.floor(Math.random() * colors.length)];
    let shuffledColors = shuffle(colors);
    let colorList = shuffledColors.map(color => {
      // ternary operator
      let onClickHandler = color === correctColor ? Actions.correctAnswer : Actions.incorrectAnswer;
      return (
        <li className={'bg-'+ color + ' color-item'} onClick={onClickHandler}>
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
