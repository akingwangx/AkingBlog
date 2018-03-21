"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (newFn, rest) {
  return function () {
    var newResult = newFn.apply(undefined, arguments);
    if (newResult !== undefined && newResult !== null) {
      return newResult;
    }

    return rest.apply(undefined, arguments);
  };
};