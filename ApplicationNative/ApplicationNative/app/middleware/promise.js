"use strict";

var _extends = require("babel-runtime/helpers/extends")["default"];

var _objectWithoutProperties = require("babel-runtime/helpers/object-without-properties")["default"];

var _slicedToArray = require("babel-runtime/helpers/sliced-to-array")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = promiseMiddleware;

function promiseMiddleware() {
  return function (next) {
    return function (action) {
      var promise = action.promise;
      var types = action.types;

      var rest = _objectWithoutProperties(action, ["promise", "types"]);

      if (!promise) {
        return next(action);
      }

      var _types = _slicedToArray(types, 3);

      var REQUEST = _types[0];
      var SUCCESS = _types[1];
      var FAILURE = _types[2];

      next(_extends({}, rest, { type: REQUEST }));

      return promise().then(function (result) {
        next(_extends({}, rest, { result: result, type: SUCCESS }));
      }, function (error) {
        next(_extends({}, rest, { error: error, type: FAILURE }));
      });
    };
  };
}

module.exports = exports["default"];