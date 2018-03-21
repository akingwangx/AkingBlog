'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNestedBlockTags;

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _splitReactElement2 = require('./splitReactElement');

var _splitReactElement3 = _interopRequireDefault(_splitReactElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNestedBlockTags(blockHTML) {
  (0, _invariant2.default)(blockHTML !== null && blockHTML !== undefined, 'Expected block HTML value to be non-null');

  if (_react2.default.isValidElement(blockHTML.nest)) {
    var _splitReactElement = (0, _splitReactElement3.default)(blockHTML.nest),
        start = _splitReactElement.start,
        end = _splitReactElement.end;

    return Object.assign({}, blockHTML, {
      nestStart: start,
      nestEnd: end
    });
  }

  (0, _invariant2.default)(Object.prototype.hasOwnProperty.call(blockHTML, 'nestStart') && Object.prototype.hasOwnProperty.call(blockHTML, 'nestEnd'), 'convertToHTML: received block information without either a ReactElement or an object with start/end tags');

  return blockHTML;
}