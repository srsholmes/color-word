let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

//Stores
let Store = require('../stores/store');

import { shuffle } from '../modules';


let Score = React.createClass({

  mixins: [
    Reflux.connect(Store)
  ],

  shouldComponentUpdate(nextProps) {
    if (nextProps.score === this.props.score) return false;
    return true;
  },

  render(){
    return (
      <div className="score-wrap">
        <p>Score: {this.props.score}</p>
      </div>
    )
  }
});

export default Score;
