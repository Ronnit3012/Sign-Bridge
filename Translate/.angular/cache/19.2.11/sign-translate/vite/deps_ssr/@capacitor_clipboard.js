import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  WebPlugin,
  registerPlugin
} from "./chunk-CCBP4DRQ.js";
import {
  __async
} from "./chunk-5P6RLSS7.js";

// node_modules/@capacitor/clipboard/dist/esm/web.js
var ClipboardWeb = class extends WebPlugin {
  write(options) {
    return __async(this, null, function* () {
      if (typeof navigator === "undefined" || !navigator.clipboard) {
        throw this.unavailable("Clipboard API not available in this browser");
      }
      if (options.string !== void 0) {
        yield this.writeText(options.string);
      } else if (options.url) {
        yield this.writeText(options.url);
      } else if (options.image) {
        if (typeof ClipboardItem !== "undefined") {
          try {
            const blob = yield (yield fetch(options.image)).blob();
            const clipboardItemInput = new ClipboardItem({
              [blob.type]: blob
            });
            yield navigator.clipboard.write([clipboardItemInput]);
          } catch (err) {
            throw new Error("Failed to write image");
          }
        } else {
          throw this.unavailable("Writing images to the clipboard is not supported in this browser");
        }
      } else {
        throw new Error("Nothing to write");
      }
    });
  }
  read() {
    return __async(this, null, function* () {
      if (typeof navigator === "undefined" || !navigator.clipboard) {
        throw this.unavailable("Clipboard API not available in this browser");
      }
      if (typeof ClipboardItem !== "undefined") {
        try {
          const clipboardItems = yield navigator.clipboard.read();
          const type = clipboardItems[0].types[0];
          const clipboardBlob = yield clipboardItems[0].getType(type);
          const data = yield this._getBlobData(clipboardBlob, type);
          return {
            value: data,
            type
          };
        } catch (err) {
          return this.readText();
        }
      } else {
        return this.readText();
      }
    });
  }
  readText() {
    return __async(this, null, function* () {
      if (typeof navigator === "undefined" || !navigator.clipboard || !navigator.clipboard.readText) {
        throw this.unavailable("Reading from clipboard not supported in this browser");
      }
      const text = yield navigator.clipboard.readText();
      return {
        value: text,
        type: "text/plain"
      };
    });
  }
  writeText(text) {
    return __async(this, null, function* () {
      if (typeof navigator === "undefined" || !navigator.clipboard || !navigator.clipboard.writeText) {
        throw this.unavailable("Writting to clipboard not supported in this browser");
      }
      yield navigator.clipboard.writeText(text);
    });
  }
  _getBlobData(clipboardBlob, type) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      if (type.includes("image")) {
        reader.readAsDataURL(clipboardBlob);
      } else {
        reader.readAsText(clipboardBlob);
      }
      reader.onloadend = () => {
        const r = reader.result;
        resolve(r);
      };
      reader.onerror = (e) => {
        reject(e);
      };
    });
  }
};

// node_modules/@capacitor/clipboard/dist/esm/index.js
var Clipboard = registerPlugin("Clipboard", {
  web: () => new ClipboardWeb()
});
export {
  Clipboard
};
//# sourceMappingURL=@capacitor_clipboard.js.map
