'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = heading;

var _actionsActions = require('../actions/actions');

function heading(state, action) {
  if (state === undefined) state = 'React Boilerplate. Click me.';

  switch (action.type) {
    case _actionsActions.CLICK_HEADING:
      return 'You clicked the heading';
    default:
      return state;
  }
}

module.exports = exports['default'];