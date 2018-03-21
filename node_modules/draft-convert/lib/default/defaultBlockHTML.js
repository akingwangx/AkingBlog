'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  'unstyled': _react2.default.createElement('p', null),
  'paragraph': _react2.default.createElement('p', null),
  'header-one': _react2.default.createElement('h1', null),
  'header-two': _react2.default.createElement('h2', null),
  'header-three': _react2.default.createElement('h3', null),
  'header-four': _react2.default.createElement('h4', null),
  'header-five': _react2.default.createElement('h5', null),
  'header-six': _react2.default.createElement('h6', null),
  'blockquote': _react2.default.createElement('blockquote', null),
  'unordered-list-item': {
    element: _react2.default.createElement('li', null),
    nest: _react2.default.createElement('ul', null)
  },
  'ordered-list-item': {
    element: _react2.default.createElement('li', null),
    nest: _react2.default.createElement('ol', null)
  },
  'media': _react2.default.createElement('figure', null)
};