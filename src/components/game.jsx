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
    console.log(colors);
    console.log(shuffle(colors));
    var rand1 = colors[Math.floor(Math.random() * colors.length)];
    var rand2 = colors[Math.floor(Math.random() * colors.length)];
    var correctColor = rand2;

    var colorList = shuffle(colors).map(function (color, i) {
      return (
        <li className={color + ' color-item'} onClick={this.chooseColor.bind(null, i)}>
          <a><span>{color}</span></a>
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
