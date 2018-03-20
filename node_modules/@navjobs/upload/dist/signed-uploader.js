'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _request = require('./request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Uploader = function (_React$Component) {
  _inherits(Uploader, _React$Component);

  function Uploader() {
    _classCallCheck(this, Uploader);

    var _this = _possibleConstructorReturn(this, (Uploader.__proto__ || Object.getPrototypeOf(Uploader)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Uploader, [{
    key: 'handleFiles',
    value: function handleFiles(files) {
      this.setState({ files: files });
      if (this.props.uploadOnSelection) this.handleUpload(files);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      //abort a request if the component is unmounted mid request
      if (this.xhr && this.xhr.readyState && this.xhr.readyState !== 0 && this.xhr.readyState !== 4) this.xhr.abort();
    }
  }, {
    key: 'handleUpload',
    value: function handleUpload() {
      var _this2,
          files,
          progress,
          _props,
          beforeRequest,
          request,
          afterRequest,
          onComplete,
          onError,
          reset,
          before,
          _ref,
          response,
          error,
          aborted,
          status,
          after,
          _test,
          _this4 = this,
          _arguments = arguments;

      return Promise.resolve().then(function () {
        _this2 = _this4;
        files = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : _this4.state.files;
        progress = _this4.state.progress;
        _props = _this4.props;
        beforeRequest = _props.beforeRequest;
        request = _props.request;
        afterRequest = _props.afterRequest;
        onComplete = _props.onComplete;
        onError = _props.onError;
        reset = _props.reset;

        if (!(!files || !files.length)) {

          _this4.setState({
            progress: 0.1,
            error: false,
            aborted: false,
            complete: false
          });

          return Promise.resolve().then(function () {
            return beforeRequest({ files: files });
          }).then(function (_resp) {
            before = _resp;
            return (0, _request2.default)({
              request: request({ before: before, files: files }),
              files: files,
              instance: function instance(xhr) {
                return _this2.xhr = xhr;
              },
              progress: function progress(value) {
                return _this2.setState({ progress: value || 0.1 });
              }
            });
          }).then(function (_resp) {
            _ref = _resp;
            response = _ref.response;
            error = _ref.error;
            aborted = _ref.aborted;
            status = _ref.status;
            _test = error;

            if (_test && onError) {
              onError(error);
            }

            if (_test) {
              return _this4.setState({ error: error, response: response, status: status, before: before });
            }

            if (aborted) {
              return _this4.setState({ aborted: aborted });
            }return afterRequest({ before: before, files: files, status: status });
          }).then(function (_resp) {
            after = _resp;

            if (onComplete) {
              onComplete({ response: response, status: status });
            }if (reset) {
              return _this4.setState({
                response: null,
                status: null,
                error: null,
                aborted: null,
                complete: false,
                progress: 0
              });
            }_this4.setState({ response: response, status: status, complete: true, before: before, after: after });
          }).catch(function (error) {
            if (error) {
              if (onError) {
                onError(error);
              }
            }
            _this4.setState({ error: error || true });
          });
        }
      }).then(function () {});
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      return children(_extends({}, this.state, {
        onFiles: function onFiles(files) {
          return _this3.handleFiles(files);
        },
        startUpload: function startUpload() {
          return _this3.handleUpload();
        }
      }));
    }
  }]);

  return Uploader;
}(_react2.default.Component);

exports.default = Uploader;