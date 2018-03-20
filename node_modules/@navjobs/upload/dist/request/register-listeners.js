'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var xhr = _ref.xhr,
      progress = _ref.progress,
      resolve = _ref.resolve;

  xhr.upload.addEventListener('progress', function (event) {
    if (!progress) return false;
    progress(Math.round(event.loaded / event.total * 100));
  });

  xhr.addEventListener('load', function () {
    var response = void 0;
    try {
      response = JSON.parse(xhr.response);
    } catch (e) {
      response = xhr.response;
    }
    resolve({
      response: response,
      error: xhr.status < 200 || xhr.status >= 300,
      status: xhr.status
    });
  });

  xhr.addEventListener('error', function (error) {
    resolve({ error: error, status: xhr.status, response: xhr.response });
  });

  xhr.addEventListener('abort', function (aborted) {
    resolve({ aborted: aborted });
  });
};