import React, {Component} from 'react'
export class Score extends Component {

  shouldComponentUpdate(nextProps) {
    if (nextProps.score === this.props.score) return false;
    return true;
  }

  render(){
    const { score } = this.props;
    return (
      <div className="score-wrap">
        <p>Score: {score.currentScore}</p>
        <p>Top Score: {score.topScore}</p>
      </div>
    )
  }
};

