let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

import { colors, requestAnimationFrame } from '../modules';

let Store = Reflux.createStore({
  listenables: [Actions],

  init() {
    this.score = 0;
  },

  onCorrectAnswer() {
  	var colorsArray = colors();
    var correctColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
  	this.score++ 
  	this.trigger({
  		colors: colorsArray,
  		correctColor: correctColor,
  		score: this.score,
  		start: Date.now()
  	});
  },

  onRestartApp() {
    console.log('onRestartApp');
    this.trigger({
      start: Date.now(),
      elapsed: 0,
      ticking: true
    });
  },

  onSetElapsed(elapsed) {
    this.trigger({
      elapsed: elapsed,
      ticking: true
    });
  },

  onStopTimer() {
    console.log('stop timer');
    this.trigger({
      ticking: false
    });
  },

  onIncorrectAnswer() {
    console.log('incorrect answer');
  	var colorsArray = colors();
    var correctColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
  	this.score = 0;
  	this.trigger({
  		colors: colorsArray,
  		correctColor: correctColor,
  		score: this.score,
  		start: Date.now()
  	});
  }
});

module.exports = Store;
