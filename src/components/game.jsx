let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Stores
let Store = require('../stores/store');

import { shuffle } from '../modules';


let Game = React.createClass({

  mixins: [
    Reflux.connect(Store)
  ],

  chooseColor(i, shuffledColors, correctColor) {
    shuffledColors[i] == correctColor ? alert('correct') : alert('incorrect')
  },

  render(){
    var colors = this.props.colors;
    var correctColor = this.props.correctColor;
    var word = colors[Math.floor(Math.random() * colors.length)];
    var shuffledColors = shuffle(colors);
    var colorStyle = {
      color: correctColor
    }

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
