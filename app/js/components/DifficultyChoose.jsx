import React, {Component} from 'react'
import {colors, shuffle} from '../modules';
import {TIME_DURATION} from '../constants/constants';

const difficulties = (props) =>
  Object.keys(TIME_DURATION).map((key, i) =>
    <li className={`bg-${colors()[i]} color-item`} key={i} onClick={() => props.actions.changeDifficulty(key)}>
      <a><span>{key}</span></a>
    </li>
  );


export const DifficultyChoose = (props) =>
  <div className="game-wrapper">
    <h1>Choose the colour, not the word.</h1>
    <ul className="color-choice-ul">
      {difficulties(props)}
    </ul>
  </div>
