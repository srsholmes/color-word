let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');


let Store = Reflux.createStore({
  listenables: [Actions],
//Whenever you trigger a store, you have to keep a consitent data structure;
//The contents of the store always has to be the same. 

  init() {
    this.contents = {
      score: 0,
      elapsed: 0
    };
  },

  onProgressTimer(elapsed) {
    this.contents.elapsed = elapsed;
    this.trigger(this.contents);
  },

  onIncorrectAnswer() {
    //Bug where score is set in the actions is not linked to the 
    //incorrect score;
    this.contents.score = 0;
    this.trigger(this.contents);
  },

  onCorrectAnswerData(data) {
    this.contents.colors = data.colors;
    this.contents.correctColor = data.correctColor;
    this.contents.score = data.score;
    this.trigger(this.contents);
  }

});

module.exports = Store;
