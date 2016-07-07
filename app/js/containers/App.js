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
    return this.props.difficulty ?
      (<div>
        <Game {...this.props}/>
        <Timer {...this.props}/>
        <Score {...this.props}/>
      </div>)
      :
      (<DifficultyChoose {...this.props}/>)
  }
}
