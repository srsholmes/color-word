let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Stores
let Store = require('../stores/store');

import { shuffle, colors } from '../modules';

let Game = React.createClass({

  shouldComponentUpdate(nextProps) {
    if (nextProps.colors === this.props.colors) return false;
    return true;
  },  

  render(){
    // object destructuring
    let { colors, correctColor } = this.props;
    var word = colors[Math.floor(Math.random() * colors.length)];
    var shuffledColors = shuffle(colors);
    var colorList = shuffledColors.map(color => {
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
        <h2 className={'color-' + correctColor + ''}>{word}</h2>
        <ul className="color-choice-ul">{colorList}</ul>
      </div>
    )
  }
});

export default Game;
