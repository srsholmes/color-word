import React from 'react';

//The redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/actions';

import { Game, Timer, Score, DifficultyChoose, MenuButton } from './';


let App = React.createClass({

  render(){
    let content;
    const { changeHeading, score, setColors, timer, difficulty } = this.props;
    if (difficulty) {
      content = (
        <div>
          <Game {...this.props}/>
          <Timer {...this.props}/>
          <Score {...this.props}/>
        </div>
      );
    } else {
      content = (
        <DifficultyChoose {...this.props}/>
      );
    }

    return (
      <div>
        {content}
        <MenuButton {...this.props}/>
      </div>
    )
    
  }
});

function mapStateToProps(state) {
  return {
    menuOpen: state.menuButton,
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
