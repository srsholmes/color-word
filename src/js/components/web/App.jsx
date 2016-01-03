import React from 'react';

//The redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/actions';

import { Game, Timer, Score } from './';


let App = React.createClass({
  render(){
    const { changeHeading, score, setColors } = this.props;
    console.log(setColors);
    return (
      <div>
        <h1>Color Word - <span>choose the colour, not the word.</span></h1>
        <Game {...this.props}/>
        {/*<Timer start={this.state.start} elapsed={ this.state.elapsed }/>*/}
        <Score score={score}/>
      </div>
    )
  }
});

function mapStateToProps(state) {
  return {
    score: state.score,
    setColors: state.setColors
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
