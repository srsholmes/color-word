'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = counter;

var _actionsActions = require('../actions/actions');

function counter(state, action) {
  if (state === undefined) state = 0;

  switch (action.type) {
    case _actionsActions.INCREMENT_COUNTER:
      return state + 1;
    case _actionsActions.DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}

module.exports = exports['default'];