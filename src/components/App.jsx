let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Stores
let Store = require('../stores/store');

import { Game } from './';

let App = React.createClass({

  mixins: [
    Reflux.connect(Store)
  ],

  getInitialState() {
    var colors = ['blue', 'red', 'green', 'orange'];
    var correctColor = colors[Math.floor(Math.random() * colors.length)];

    return {
      colors: colors,
      correctColor: correctColor
    };
  },

  render(){
    return (
      <div>
        <h1>Colour Word - <span>choose the colour, not the word.</span></h1>
        <Game colors={this.state.colors} correctColor={this.state.correctColor}/>
      </div>
    )
  }
});

export default App;
