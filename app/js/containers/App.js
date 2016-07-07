import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import {Game, Timer, Score, DifficultyChoose} from '../components';

@connect((state) => ({
  menuOpen: state.menuButton,
  score: state.score,
  setColors: state.setColors,
  timer: state.timer,
  difficulty: state.difficulty
}), (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
})

export default class App extends Component {
  render() {
    console.log('app render')
    let content;
    const {difficulty} = this.props;
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
        <p>Hello</p>
        {content}
      </div>
    )

  }
};



