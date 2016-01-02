import React from 'react';
import { shuffle } from '../../modules';


let Score = React.createClass({
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
