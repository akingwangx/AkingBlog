'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _reactUtils = require('./internal/reactUtils');

var _AppContainer = require('./AppContainer.dev');

var _AppContainer2 = _interopRequireDefault(_AppContainer);

var _reactHotLoader = require('./reactHotLoader');

var _reactHotLoader2 = _interopRequireDefault(_reactHotLoader);

var _modules = require('./global/modules');

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable camelcase, no-undef */
var requireIndirect = typeof __webpack_require__ !== 'undefined' ? __webpack_require__ : require;
/* eslint-enable */

var createHoc = function createHoc(SourceComponent, TargetComponent) {
  (0, _hoistNonReactStatics2.default)(TargetComponent, SourceComponent);
  TargetComponent.displayName = 'HotExported' + (0, _reactUtils.getComponentDisplayName)(SourceComponent);
  return TargetComponent;
};

var makeHotExport = function makeHotExport(sourceModule) {
  var updateInstances = function updateInstances() {
    var module = (0, _modules.hotModule)(sourceModule.id);
    clearTimeout(module.updateTimeout);
    module.updateTimeout = setTimeout(function () {
      try {
        requireIndirect(sourceModule.id);
      } catch (e) {
        // just swallow
      }
      module.instances.forEach(function (inst) {
        return inst.forceUpdate();
      });
    });
  };

  if (sourceModule.hot) {
    // Mark as self-accepted for Webpack
    // Update instances for Parcel
    sourceModule.hot.accept(updateInstances);

    // Webpack way
    if (sourceModule.hot.addStatusHandler) {
      if (sourceModule.hot.status() === 'idle') {
        sourceModule.hot.addStatusHandler(function (status) {
          if (status === 'apply') {
            updateInstances();
          }
        });
      }
    }
  }
};

var hot = function hot(sourceModule) {
  if (!sourceModule || !sourceModule.id) {
    // this is fatal
    throw new Error('React-hot-loader: `hot` could not found the `id` property in the `module` you have provided');
  }
  var moduleId = sourceModule.id;
  var module = (0, _modules.hotModule)(moduleId);
  makeHotExport(sourceModule);

  // TODO: Ensure that all exports from this file are react components.

  return function (WrappedComponent) {
    // register proxy for wrapped component
    _reactHotLoader2.default.register(WrappedComponent, (0, _reactUtils.getComponentDisplayName)(WrappedComponent), 'RHL' + moduleId);

    return createHoc(WrappedComponent, function (_Component) {
      _inherits(ExportedComponent, _Component);

      function ExportedComponent() {
        _classCallCheck(this, ExportedComponent);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      ExportedComponent.prototype.componentWillMount = function componentWillMount() {
        module.instances.push(this);
      };

      ExportedComponent.prototype.componentWillUnmount = function componentWillUnmount() {
        var _this2 = this;

        if ((0, _modules.isOpened)(sourceModule)) {
          var componentName = (0, _reactUtils.getComponentDisplayName)(WrappedComponent);
          _logger2.default.error('React-hot-loader: Detected AppContainer unmount on module \'' + moduleId + '\' update.\n' + ('Did you use "hot(' + componentName + ')" and "ReactDOM.render()" in the same file?\n') + ('"hot(' + componentName + ')" shall only be used as export.\n') + 'Please refer to "Getting Started" (https://github.com/gaearon/react-hot-loader/).');
        }
        module.instances = module.instances.filter(function (a) {
          return a !== _this2;
        });
      };

      ExportedComponent.prototype.render = function render() {
        return _react2.default.createElement(
          _AppContainer2.default,
          null,
          _react2.default.createElement(WrappedComponent, this.props)
        );
      };

      return ExportedComponent;
    }(_react.Component));
  };
};

exports.default = hot;