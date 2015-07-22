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

  onCorrectAnswer(data) {
    console.log('STORE CorrectAnswer');
    console.log(this.contents.elapsed);
    this.contents.colors = data.colors;
    this.contents.correctColor = data.correctColor;
    this.contents.score = data.score;
    this.contents.elapsed = 0;
    this.trigger(this.contents);
  },

  // onCorrectAnswer() {
  // 	var colorsArray = colors();
  //   var correctColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
  // 	this.score++ 
  // 	this.trigger({
  // 		colors: colorsArray,
  // 		correctColor: correctColor,
  // 		score: this.score,
  // 		start: Date.now()
  // 	});
  // },

  // onRestartApp() {
  //   console.log('onRestartApp');
  //   this.trigger({
  //     start: Date.now(),
  //     elapsed: 0
  //   });
  // },

  // onSetElapsed(elapsed) {
  //   this.trigger({
  //     elapsed: elapsed,
  //     ticking: true
  //   });
  // },

  // onStopTimer() {
  //   console.log('stop timer');
  //   this.trigger({
  //     start: null,
  //     ticking: false
  //   });
  // },

  // onIncorrectAnswer() {
  //   console.log('incorrect answer');
  // 	var colorsArray = colors();
  //   var correctColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
  // 	this.score = 0;
  // 	this.trigger({
  // 		colors: colorsArray,
  // 		correctColor: correctColor,
  // 		score: this.score,
  // 		start: Date.now()
  // 	});
  // }
});

module.exports = Store;
