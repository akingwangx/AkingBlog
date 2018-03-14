import React from 'react';

var getDisplayName = function getDisplayName(component) {
    return component.displayName || component.name || 'Component';
};

var shallowEquals = function shallowEquals(left, right) {
    return Object.keys(left).length === Object.keys(right).length && Object.keys(left).every(function (leftKey) {
        return left[leftKey] === right[leftKey];
    });
};

var thunk = function thunk(component, pure) {
    var ReactThunk = (function (_React$Component) {
        babelHelpers.inherits(ReactThunk, _React$Component);

        function ReactThunk(props) {
            babelHelpers.classCallCheck(this, ReactThunk);

            var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(ReactThunk).call(this, props));

            _this.componentFn = component(props);

            if (typeof _this.componentFn !== 'function') {
                throw new Error('[react-thunk] component supplied doesn\'t return a function');
            }
            return _this;
        }

        babelHelpers.createClass(ReactThunk, [{
            key: 'shouldComponentUpdate',
            value: function shouldComponentUpdate(nextProps) {
                if (pure) {
                    return !shallowEqual(this.props, nextProps);
                }

                return true;
            }
        }, {
            key: 'render',
            value: function render(props) {
                return this.componentFn(props);
            }
        }]);
        return ReactThunk;
    })(React.Component);

    ReactThunk.displayName = 'ReactThunk[' + getDisplayName(component) + ']';

    return ReactThunk;
};

export default thunk;