let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Stores
let Store = require('../stores/store');

import { shuffle, colors } from '../modules';

let Game = React.createClass({

  chooseColor(i, shuffledColors, correctColor) {
    if (shuffledColors[i] == correctColor) {
      this.correctAnswer();
    } else {
      this.incorrectAnswer();
    }
  },

  correctAnswer() {
    Actions.correctAnswer();
    //Have to stop the timer to clear the previous
    //timer (stop requestanimationframe),
    //and then start again.
    Actions.stopTimer();
    Actions.startTimer();
  },

  incorrectAnswer() {
    Actions.incorrectAnswer();
    Actions.stopTimer();
    Actions.startTimer();
  },

  shouldComponentUpdate(nextProps) {
    if (nextProps.colors === this.props.colors) return false;
    return true;
  },  

  render(){
    var colors = this.props.colors;
    var correctColor = this.props.correctColor;
    var word = colors[Math.floor(Math.random() * colors.length)];
    var shuffledColors = shuffle(colors);
    var colorList = shuffledColors.map(function (color, i) {
      return (
        <li className={'bg-'+ color + ' color-item'} onClick={this.chooseColor.bind(null, i, shuffledColors, correctColor)}>
          <a><span>{shuffledColors[i]}</span></a>
        </li>
      )
    }, this);

    return (
      <div className="game-wrapper">
        <h2 className={'color-' + correctColor + ''}>{word}</h2>
        <ul className="color-choice-ul">{colorList}</ul>
      </div>
    )
  }
});

export default Game;
