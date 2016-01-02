'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var Reflux = require('reflux');
var Actions = require('../actions/actions');

var Store = Reflux.createStore({
  //Set up multiple stores as triggers on this store affect
  //everything listening to them.
  listenables: [Actions],

  init: function init() {
    this.contents = {
      heading: 'This is the heading from the store',
      switchVal: false
    };
  },

  onClickHeading: function onClickHeading() {
    this.contents = _extends({}, this.contents, {
      heading: 'This is the changed heading from the Action'
    });
    this.trigger(this.contents);
  },

  onSwitchToggle: function onSwitchToggle() {
    this.contents = _extends({}, this.contents, {
      switchVal: !this.contents.switchVal
    });
    this.trigger(this.contents);
  },

  getInitialState: function getInitialState() {
    return this.contents;
  }

});

module.exports = Store;