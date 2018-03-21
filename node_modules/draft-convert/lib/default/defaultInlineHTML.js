'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaultInlineHTML;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function defaultInlineHTML(style) {
  switch (style) {
    case 'BOLD':
      return _react2.default.createElement('strong', null);
    case 'ITALIC':
      return _react2.default.createElement('em', null);
    case 'UNDERLINE':
      return _react2.default.createElement('u', null);
    case 'CODE':
      return _react2.default.createElement('code', null);
    default:
      return {
        start: '',
        end: ''
      };
  }
}