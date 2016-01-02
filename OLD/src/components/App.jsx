let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Stores
let Store = require('../stores/store');

import { Game, Timer, Score } from './';

import { colors } from '../modules';

let App = React.createClass({

  mixins: [
    Reflux.connect(Store)
  ],
  render(){
    return (
      <div>
        <h1>Colour Word - <span>choose the colour, not the word.</span></h1>
        <Game colors={this.state.colors} correctColor={this.state.correctColor}/>
        <Timer start={this.state.start} elapsed={ this.state.elapsed }/>
        <Score score={this.state.score}/>
      </div>
    )
  }
});

export default App;
