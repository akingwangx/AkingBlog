'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _updateMutation = require('./util/updateMutation');

var _updateMutation2 = _interopRequireDefault(_updateMutation);

var _rangeSort = require('./util/rangeSort');

var _rangeSort2 = _interopRequireDefault(_rangeSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var ENTITY_MAP = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;',
  '\n': '<br/>'
};

exports.default = function (block) {
  var blockText = [].concat(_toConsumableArray(block.text));

  var entities = block.entityRanges.sort(_rangeSort2.default);
  var styles = block.inlineStyleRanges.sort(_rangeSort2.default);
  var resultText = '';

  var _loop = function _loop(index) {
    var char = blockText[index];

    if (ENTITY_MAP[char] !== undefined) {
      (function () {
        var encoded = ENTITY_MAP[char];
        var resultIndex = resultText.length;
        resultText += encoded;

        var updateForChar = function updateForChar(mutation) {
          return (0, _updateMutation2.default)(mutation, resultIndex, char.length, encoded.length, 0, 0);
        };

        entities = entities.map(updateForChar);
        styles = styles.map(updateForChar);
      })();
    } else {
      resultText += char;
    }
  };

  for (var index = 0; index < blockText.length; index++) {
    _loop(index);
  }

  return Object.assign({}, block, {
    text: resultText,
    inlineStyleRanges: styles,
    entityRanges: entities
  });
};