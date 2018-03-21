'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBlockTags;

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _splitReactElement = require('./splitReactElement');

var _splitReactElement2 = _interopRequireDefault(_splitReactElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hasChildren(element) {
  return _react2.default.isValidElement(element) && _react2.default.Children.count(element.props.children) > 0;
}

function getBlockTags(blockHTML) {
  (0, _invariant2.default)(blockHTML !== null && blockHTML !== undefined, 'Expected block HTML value to be non-null');

  if (typeof blockHTML === 'string') {
    return blockHTML;
  }

  if (_react2.default.isValidElement(blockHTML)) {
    if (hasChildren(blockHTML)) {
      return _server2.default.renderToStaticMarkup(blockHTML);
    }

    return (0, _splitReactElement2.default)(blockHTML);
  }

  if (Object.prototype.hasOwnProperty.call(blockHTML, 'element') && _react2.default.isValidElement(blockHTML.element)) {
    return Object.assign({}, blockHTML, (0, _splitReactElement2.default)(blockHTML.element));
  }

  (0, _invariant2.default)(Object.prototype.hasOwnProperty.call(blockHTML, 'start') && Object.prototype.hasOwnProperty.call(blockHTML, 'end'), 'convertToHTML: received block information without either a ReactElement or an object with start/end tags');

  return blockHTML;
}