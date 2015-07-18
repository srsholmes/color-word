let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

import { colors } from '../modules';

let Store = Reflux.createStore({
  listenables: [Actions],

  init() {
    this.score = 0;
  },

  onCorrectAnswer() {
  	this.score++ 
  	this.trigger({
  		score: this.score
  	});
  },

  onIncorrectAnswer() {
  	this.score = 0;
  	this.trigger({
  		score: this.score
  	});
  }
});

module.exports = Store;
