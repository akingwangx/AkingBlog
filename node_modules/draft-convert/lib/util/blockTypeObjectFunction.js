'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (typeObject) {
  return function (block) {
    if (typeof typeObject === 'function') {
      // handle case where typeObject is already a function
      return typeObject(block);
    }

    return typeObject[block.type];
  };
};