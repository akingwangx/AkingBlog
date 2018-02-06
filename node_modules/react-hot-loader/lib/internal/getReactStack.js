'use strict';

exports.__esModule = true;

var _hydrateFiberStack = require('./stack/hydrateFiberStack');

var _hydrateFiberStack2 = _interopRequireDefault(_hydrateFiberStack);

var _hydrateLegacyStack = require('./stack/hydrateLegacyStack');

var _hydrateLegacyStack2 = _interopRequireDefault(_hydrateLegacyStack);

var _reactUtils = require('./reactUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getReactStack(instance) {
  var rootNode = (0, _reactUtils.getInternalInstance)(instance);
  var stack = {};
  var isFiber = typeof rootNode.tag === 'number';
  if (isFiber) {
    (0, _hydrateFiberStack2.default)(rootNode, stack);
  } else {
    (0, _hydrateLegacyStack2.default)(rootNode, stack);
  }
  return stack;
} /* eslint-disable no-underscore-dangle */

exports.default = getReactStack;