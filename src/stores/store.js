let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

import { colors } from '../modules';


let Store = Reflux.createStore({
  listenables: [Actions],
//Whenever you trigger a store, you have to keep a consitent data structure;
//The contents of the store always has to be the same. 

  init() {
    this.contents = {
      score: 0,
      elapsed: 0,
      start: Date.now()
    };
    this._shuffleColors();
  },

  _shuffleColors() {
    this.contents.colors = colors();
    this.contents.correctColor = this.contents.colors[Math.floor(Math.random() * this.contents.colors.length)];
  },

  getInitialState() {
    return this.contents;
  },

  onProgressTimer(elapsed) {
    this.contents.elapsed = elapsed;
    this.trigger(this.contents);
  },

  onIncorrectAnswer() {
    this._shuffleColors();
    this.contents.score = 0;
    this.trigger(this.contents);
  },

  onCorrectAnswer() {
    this._shuffleColors();
    this.contents.score ++;
    this.trigger(this.contents);
  }

});

module.exports = Store;
