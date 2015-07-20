let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

import { colors, requestAnimationFrame } from '../modules';

var timer = 0;

let Store = Reflux.createStore({
  listenables: [Actions],

  init() {
    this.score = 0;
    this.timer = 0;
  },

  onCorrectAnswer() {
  	var colorsArray = colors();
    var correctColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
  	this.score++ 
  	this.trigger({
  		colors: colorsArray,
  		correctColor: correctColor,
  		score: this.score,
  		timer: Date.now(),
      elapsed: 0
  	});
  },

  // onSetTick(tick) {
  //   this.trigger({
  //     elapsed: tick
  //   });
  // },

  onSetElapsed(elapsed) {
    this.trigger({
      elapsed: elapsed
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
  		timer: Date.now(),
      elapsed: 0
  	});
  }
});

module.exports = Store;
