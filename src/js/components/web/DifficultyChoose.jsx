import React from 'react';

import { TIME_DURATION } from '../../constants/constants';

let DifficultyChoose = React.createClass({
  difficulties() {
    let clickHandler = (key) => this.props.changeDifficulty(key);
    return Object.keys(TIME_DURATION).map((key,i) => {
      return (
        <li key={i} onClick={() => clickHandler(key)}><span>{key}</span></li>
      )
    });
  },

  render(){
    return (
      <div className="difficulty-choose">
      <p>Choose difficulty:</p>
        <ul>
          {this.difficulties()}
        </ul>
      </div>
    )
  }
});

export default DifficultyChoose;
