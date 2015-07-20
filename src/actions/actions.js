let Reflux = require('reflux');

let Actions = Reflux.createActions({
  'correctAnswer': {},
  'incorrectAnswer': {},
  'stopTimer' : {},
  'restartApp': {},
  'setElapsed': {}
});

export default Actions;
