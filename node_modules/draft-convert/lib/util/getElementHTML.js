'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getElementHTML;

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

function getElementHTML(element) {
  var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (element === undefined || element === null) {
    return element;
  }

  if (typeof element === 'string') {
    return element;
  }

  if (_react2.default.isValidElement(element)) {
    if (hasChildren(element)) {
      return _server2.default.renderToStaticMarkup(element);
    }

    var tags = (0, _splitReactElement2.default)(element);

    if (text !== null) {
      var start = tags.start,
          end = tags.end;

      return start + text + end;
    }

    return tags;
  }

  (0, _invariant2.default)(Object.prototype.hasOwnProperty.call(element, 'start') && Object.prototype.hasOwnProperty.call(element, 'end'), 'convertToHTML: received conversion data without either an HTML string, ReactElement or an object with start/end tags');

  if (text !== null) {
    var _start = element.start,
        _end = element.end;

    return _start + text + _end;
  }

  return element;
}