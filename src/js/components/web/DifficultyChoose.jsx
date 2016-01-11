import React from 'react';
import { shuffle, colors } from '../../modules';
import { TIME_DURATION } from '../../constants/constants';

let DifficultyChoose = React.createClass({
  difficulties() {
    let clickHandler = (key) => this.props.changeDifficulty(key);
    return Object.keys(TIME_DURATION).map((key, i) => {
      return (
        <li className={`bg-${colors()[i]} color-item`} key={i} onClick={() => clickHandler(key)}>
          <a><span>{key}</span></a>
        </li>
      )
    });
  },

  render(){
    return (
      <div className="game-wrapper">
      <h1>Color Word - <span>choose the colour, not the word.</span></h1>
        <p>Choose difficulty:</p>
        <ul className="color-choice-ul">
          {this.difficulties()}
        </ul>
      </div>
    )
  }
});

export default DifficultyChoose;
