import React from 'react';
import { shuffle } from '../../modules';


let Score = React.createClass({
  shouldComponentUpdate(nextProps) {
    if (nextProps.score === this.props.score) return false;
    return true;
  },

  render(){
    const { score } = this.props;
    return (
      <div className="score-wrap">
        <p>Score: {score.currentScore}</p>
        <p>Top Score: {score.topScore}</p>
      </div>
    )
  }
});

export default Score;
