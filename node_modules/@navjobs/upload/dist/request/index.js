'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _registerListeners = require('./register-listeners');

var _registerListeners2 = _interopRequireDefault(_registerListeners);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var request = _ref.request,
      files = _ref.files,
      instance = _ref.instance,
      progress = _ref.progress;
  return new Promise(function (resolve) {
    var xhr = new XMLHttpRequest();
    if (instance) instance(xhr);

    (0, _registerListeners2.default)({ xhr: xhr, resolve: resolve, progress: progress });

    xhr.open(request.method || 'POST', request.url);
    xhr.withCredentials = request.withCredentials || false;

    if (request.headers) {
      Object.keys(request.headers).forEach(function (header) {
        return xhr.setRequestHeader(header, request.headers[header]);
      });
    }
    //send just the file if no fields or filename is set
    if (!request.fileName && !request.fields) return xhr.send(files[0]);

    var formData = new FormData();

    //append fields first, fixes https://github.com/expressjs/multer/issues/322
    if (request.fields) {
      Object.keys(request.fields).forEach(function (field) {
        return formData.append(field, request.fields[field]);
      });
    }

    Array.from(files).forEach(function (file) {
      return formData.append(request.fileName || 'file', file);
    });

    xhr.send(formData);
  });
};