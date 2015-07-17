let React = require('react');
let Reflux = require('reflux');
let Actions = require('../actions/actions');

let Store = Reflux.createStore({
  listenables: [Actions],

  init() {
    console.log('store init');
  }
});

module.exports = Store;
