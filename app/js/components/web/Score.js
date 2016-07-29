import React, {Component} from 'react'

export const Score = (props) =>
  <div className="score-wrap">
    <p>Score: {props.score.currentScore}</p>
    <p>Top Score: {props.score.topScore}</p>
  </div>

