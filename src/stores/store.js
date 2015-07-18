let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

let Store = Reflux.createStore({
  listenables: [Actions],

  init() {
    this.score = 0;
  },

  onCorrectAnswer() {
  	var colors = ['blue', 'red', 'green', 'orange'];
  	var correctColor = colors[Math.floor(Math.random() * colors.length)];
  	this.score++ 
  	this.trigger({
  		score: this.score,
  		correctColor: correctColor
  	});
  }
});

module.exports = Store;
