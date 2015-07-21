let Reflux = require('reflux');

let animFrame;

const TIME_DURATION = 4000;

let Actions = Reflux.createActions({
  'correctAnswer': {},
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
			Actions.stopTimer();
			Actions.progressTimer(TIME_DURATION);
		} else {
			Actions.progressTimer(elapse);
		}
		animFrame = requestAnimationFrame(raf);
	});
});

Actions.stopTimer.listen(() => cancelAnimationFrame(animFrame));



export default Actions;
