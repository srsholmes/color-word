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

  chooseColor(i) {
    console.log('color chosen');
    console.log(i);
  },


  render(){
    var colors = this.props.colors;
    var shuffledColors = shuffle(colors);
    var shuffledColors2 = shuffle(colors);
    //These need shuffling better for it to work.
    console.log(shuffledColors);
    console.log(shuffledColors2);
    var correctColor = shuffledColors[Math.floor(Math.random() * colors.length)];

    console.log(correctColor);

    var colorList = shuffledColors.map(function (color, i) {
      return (
        <li className={color + ' color-item'} onClick={this.chooseColor.bind(null, i)}>
          <a><span>{shuffledColors2[i]}</span></a>
          <p>{shuffledColors[i]}</p>
        </li>
      )
    }, this);

    return (
      <div>
        <ul className="color-choice-ul">{colorList}</ul>
      </div>
    )
  }
});

export default Game;
