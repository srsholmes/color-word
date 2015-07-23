let Reflux = require('reflux');

let animFrame;

const TIME_DURATION = 4000;

import { colors } from '../modules';

let Actions = Reflux.createActions({
  'correctAnswer': {},
  'correctAnswerData': {},
  'incorrectAnswer': {},
  'startTimer' : {},
  'progressTimer' : {},
  'stopTimer' : {},
  'restartApp': {},
  'setElapsed': {}
});

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

Actions.correctAnswer.listen(() => {
	var colorsArray = colors();
  var correctColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
	var data = {
		colors: colorsArray,
		correctColor: correctColor
	};
	Actions.correctAnswerData(data);
});

export default Actions;
