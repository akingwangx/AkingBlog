'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UploadField = function (_React$Component) {
  _inherits(UploadField, _React$Component);

  function UploadField() {
    _classCallCheck(this, UploadField);

    var _this = _possibleConstructorReturn(this, (UploadField.__proto__ || Object.getPrototypeOf(UploadField)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(UploadField, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var hover = this.state.hover;
      var _props = this.props,
          children = _props.children,
          uploadProps = _props.uploadProps,
          containerProps = _props.containerProps,
          onFiles = _props.onFiles,
          _onChange = _props.onChange;

      var handleHover = typeof children === 'function';

      return _react2.default.createElement(
        'div',
        _extends({
          style: styles.container
        }, containerProps, {
          onMouseEnter: function onMouseEnter() {
            return handleHover ? _this2.setState({ hover: true }) : null;
          },
          onMouseLeave: function onMouseLeave() {
            return handleHover ? _this2.setState({ hover: false }) : null;
          }
        }),
        handleHover ? children(hover) : children,
        _react2.default.createElement('input', _extends({
          type: 'file',
          style: styles.input,
          onChange: function onChange(e) {
            if (e.target.files && onFiles) onFiles(e.target.files);
            if (_onChange) _onChange(e);
          }
        }, uploadProps))
      );
    }
  }]);

  return UploadField;
}(_react2.default.Component);

exports.default = UploadField;


var styles = {
  container: {
    overflow: 'hidden',
    position: 'relative'
  },
  input: {
    top: 0,
    right: 0,
    opacity: 0,
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    position: 'absolute'
  }
};