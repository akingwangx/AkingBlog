'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _draftJs = require('draft-js');

var _encodeBlock = require('./encodeBlock');

var _encodeBlock2 = _interopRequireDefault(_encodeBlock);

var _blockEntities = require('./blockEntities');

var _blockEntities2 = _interopRequireDefault(_blockEntities);

var _blockInlineStyles = require('./blockInlineStyles');

var _blockInlineStyles2 = _interopRequireDefault(_blockInlineStyles);

var _accumulateFunction = require('./util/accumulateFunction');

var _accumulateFunction2 = _interopRequireDefault(_accumulateFunction);

var _blockTypeObjectFunction = require('./util/blockTypeObjectFunction');

var _blockTypeObjectFunction2 = _interopRequireDefault(_blockTypeObjectFunction);

var _getBlockTags = require('./util/getBlockTags');

var _getBlockTags2 = _interopRequireDefault(_getBlockTags);

var _getNestedBlockTags = require('./util/getNestedBlockTags');

var _getNestedBlockTags2 = _interopRequireDefault(_getNestedBlockTags);

var _defaultBlockHTML = require('./default/defaultBlockHTML');

var _defaultBlockHTML2 = _interopRequireDefault(_defaultBlockHTML);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Immutable from 'immutable'; // eslint-disable-line no-unused-vars
var NESTED_BLOCK_TYPES = ['ordered-list-item', 'unordered-list-item'];

var defaultEntityToHTML = function defaultEntityToHTML(entity, originalText) {
  return originalText;
};

var convertToHTML = function convertToHTML(_ref) {
  var _ref$styleToHTML = _ref.styleToHTML,
      styleToHTML = _ref$styleToHTML === undefined ? {} : _ref$styleToHTML,
      _ref$blockToHTML = _ref.blockToHTML,
      blockToHTML = _ref$blockToHTML === undefined ? {} : _ref$blockToHTML,
      _ref$entityToHTML = _ref.entityToHTML,
      entityToHTML = _ref$entityToHTML === undefined ? defaultEntityToHTML : _ref$entityToHTML;
  return function (contentState) {
    (0, _invariant2.default)(contentState !== null && contentState !== undefined, 'Expected contentState to be non-null');

    var getBlockHTML = void 0;
    if (blockToHTML.__isMiddleware === true) {
      getBlockHTML = blockToHTML((0, _blockTypeObjectFunction2.default)(_defaultBlockHTML2.default));
    } else {
      getBlockHTML = (0, _accumulateFunction2.default)((0, _blockTypeObjectFunction2.default)(blockToHTML), (0, _blockTypeObjectFunction2.default)(_defaultBlockHTML2.default));
    }

    var rawState = (0, _draftJs.convertToRaw)(contentState);

    var listStack = [];

    var result = rawState.blocks.map(function (block) {
      var type = block.type,
          depth = block.depth;


      var closeNestTags = '';
      var openNestTags = '';

      if (NESTED_BLOCK_TYPES.indexOf(type) === -1) {
        // this block can't be nested, so reset all nesting if necessary
        closeNestTags = listStack.reduceRight(function (string, nestedBlock) {
          return string + (0, _getNestedBlockTags2.default)(getBlockHTML(nestedBlock)).nestEnd;
        }, '');
        listStack = [];
      } else {
        while (depth + 1 !== listStack.length || type !== listStack[depth].type) {
          if (depth + 1 === listStack.length) {
            // depth is right but doesn't match type
            var blockToClose = listStack[depth];
            closeNestTags += (0, _getNestedBlockTags2.default)(getBlockHTML(blockToClose)).nestEnd;
            openNestTags += (0, _getNestedBlockTags2.default)(getBlockHTML(block)).nestStart;
            listStack[depth] = block;
          } else if (depth + 1 < listStack.length) {
            var _blockToClose = listStack[listStack.length - 1];
            closeNestTags += (0, _getNestedBlockTags2.default)(getBlockHTML(_blockToClose)).nestEnd;
            listStack = listStack.slice(0, -1);
          } else {
            openNestTags += (0, _getNestedBlockTags2.default)(getBlockHTML(block)).nestStart;
            listStack.push(block);
          }
        }
      }

      var innerHTML = (0, _blockInlineStyles2.default)((0, _blockEntities2.default)((0, _encodeBlock2.default)(block), rawState.entityMap, entityToHTML), styleToHTML);

      var blockHTML = (0, _getBlockTags2.default)(getBlockHTML(block));

      var html = void 0;

      if (typeof blockHTML === 'string') {
        html = blockHTML;
      } else {
        html = blockHTML.start + innerHTML + blockHTML.end;
      }

      if (innerHTML.length === 0 && Object.prototype.hasOwnProperty.call(blockHTML, 'empty')) {
        if (_react2.default.isValidElement(blockHTML.empty)) {
          html = _server2.default.renderToStaticMarkup(blockHTML.empty);
        } else {
          html = blockHTML.empty;
        }
      }

      return closeNestTags + openNestTags + html;
    }).join('');

    result = listStack.reduce(function (res, nestBlock) {
      return res + (0, _getNestedBlockTags2.default)(getBlockHTML(nestBlock)).nestEnd;
    }, result);

    return result;
  };
};

exports.default = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 1 && Object.prototype.hasOwnProperty.call(args[0], '_map') && args[0].getBlockMap != null) {
    // skip higher-order function and use defaults
    return convertToHTML({}).apply(undefined, args);
  }

  return convertToHTML.apply(undefined, args);
};