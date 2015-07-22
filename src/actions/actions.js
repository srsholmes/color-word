let Reflux = require('reflux');

let animFrame;

const TIME_DURATION = 4000;

import { colors } from '../modules';

let Actions = Reflux.createActions({
  'correctAnswer': {},
  'incorrectAnswer': {},
  'startTimer' : {},
  'progressTimer' : {},
  'stopTimer' : {},
  'restartApp': {},
  'setElapsed': {}
});

var score = 0;

Actions.startTimer.listen(() => {
	let start = Date.now();
	animFrame = requestAnimationFrame(function raf() {
		let elapse = Date.now() - start;
		if (elapse > TIME_DURATION) {
			console.log('STOPPING THE TIMER');
			Actions.stopTimer();
			Actions.progressTimer(TIME_DURATION);
		} else {
			Actions.progressTimer(elapse);
		}
		animFrame = requestAnimationFrame(raf);
	});
});

Actions.stopTimer.listen(() => cancelAnimationFrame(animFrame));

// Actions.correctAnswer.listen(() => {
// 	console.log('Actions onCorrectAnswer');
// 	var colorsArray = colors();
//   var correctColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
// 	score++ 
// 	var data = {
// 		colors: colorsArray,
// 		correctColor: correctColor,
// 		score: score
// 	};
// 	console.log(data);
// 	return data;
// 	Actions.startTimer();
// });

export default Actions;
