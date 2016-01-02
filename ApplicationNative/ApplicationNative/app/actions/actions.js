'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.changeHeading = changeHeading;
var INCREMENT_COUNTER = 'INCREMENT_COUNTER';
exports.INCREMENT_COUNTER = INCREMENT_COUNTER;
var DECREMENT_COUNTER = 'DECREMENT_COUNTER';
exports.DECREMENT_COUNTER = DECREMENT_COUNTER;
var CLICK_HEADING = 'CLICK_HEADING';

exports.CLICK_HEADING = CLICK_HEADING;

function changeHeading() {
  return {
    type: CLICK_HEADING
  };
}