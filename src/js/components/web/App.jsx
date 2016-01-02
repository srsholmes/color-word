import React from 'react';

//The redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/actions';

import { Game, Timer, Score } from './';


let App = React.createClass({
  render(){
    const { changeHeading } = this.props;
    return (
      <div>
        <h1 onClick={changeHeading}>{this.props.heading}</h1>
        <h1>Color Word - <span>choose the colour, not the word.</span></h1>
        <Game colors={this.state.colors} correctColor={this.state.correctColor}/>
        <Timer start={this.state.start} elapsed={ this.state.elapsed }/>
        <Score score={this.state.score}/>
      </div>
    )
  }
});

function mapStateToProps(state) {
  return {
    counter: state.counter,
    heading: state.heading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
