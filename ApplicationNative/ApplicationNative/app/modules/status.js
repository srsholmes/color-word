"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = status;

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

module.exports = exports["default"];