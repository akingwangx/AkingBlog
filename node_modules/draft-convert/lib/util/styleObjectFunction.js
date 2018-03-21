'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (object) {
  return function (style) {
    if (typeof object === 'function') {
      return object(style);
    }

    return object[style];
  };
};