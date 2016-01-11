import React from 'react';

//The redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/actions';

import { Game, Timer, Score, DifficultyChoose } from './';


let App = React.createClass({
  render(){
    const { changeHeading, score, setColors, timer, difficulty } = this.props;
    if (difficulty) {
      return (
        <div>
          <h1>Color Word - <span>choose the colour, not the word.</span></h1>
          <Game {...this.props}/>
          <Timer {...this.props}/>
          <Score score={score}/>
        </div>
      );
    } else {
      return (
        <DifficultyChoose {...this.props}/>
      );
    }
    
  }
});

function mapStateToProps(state) {
  return {
    score: state.score,
    setColors: state.setColors,
    timer: state.timer,
    difficulty: state.difficulty
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
