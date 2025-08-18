import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  __commonJS,
  __toESM
} from "./chunk-5P6RLSS7.js";

// node_modules/b64-to-blob/b64toBlob.js
var require_b64toBlob = __commonJS({
  "node_modules/b64-to-blob/b64toBlob.js"(exports, module) {
    (function(root, globalName, factory) {
      if (typeof define === "function" && define.amd) {
        define([], factory);
      } else if (typeof module === "object" && module.exports) {
        module.exports = factory();
        module.exports.default = module.exports;
      } else {
        window[globalName] = factory();
      }
    })(exports, "b64toBlob", function() {
      "use strict";
      return function b64toBlob(b64Data, contentType, sliceSize) {
        contentType = contentType || "";
        sliceSize = sliceSize || 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
          var slice = byteCharacters.slice(offset, offset + sliceSize);
          var byteNumbers = new Array(slice.length);
          for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }
          var byteArray = new Uint8Array(byteNumbers);
          byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, {
          type: contentType
        });
        return blob;
      };
    });
  }
});

// node_modules/base64-blob/lib/es/index.js
var import_b64_to_blob = __toESM(require_b64toBlob());
function base64ToBlob(base64) {
  try {
    var arr = base64.split(",");
    var mime = arr[0].match(/:(.*?);/)[1];
    return Promise.resolve((0, import_b64_to_blob.default)(arr[1], mime));
  } catch (e) {
    return Promise.reject(e);
  }
}
function blobToBase64(blob) {
  return new Promise(function(res, rej) {
    try {
      var a = new FileReader();
      a.onload = function(e) {
        res(e.target.result);
      };
      a.readAsDataURL(blob);
    } catch (e) {
      rej(e);
    }
  });
}
export {
  base64ToBlob,
  blobToBase64
};
//# sourceMappingURL=base64-blob.js.map
