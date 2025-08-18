import {
  WebPlugin
} from "./chunk-FX44ZPNA.js";
import {
  __async
} from "./chunk-H7FQKYJT.js";

// node_modules/@capacitor/share/dist/esm/web.js
var ShareWeb = class extends WebPlugin {
  canShare() {
    return __async(this, null, function* () {
      if (typeof navigator === "undefined" || !navigator.share) {
        return {
          value: false
        };
      } else {
        return {
          value: true
        };
      }
    });
  }
  share(options) {
    return __async(this, null, function* () {
      if (typeof navigator === "undefined" || !navigator.share) {
        throw this.unavailable("Share API not available in this browser");
      }
      yield navigator.share({
        title: options.title,
        text: options.text,
        url: options.url
      });
      return {};
    });
  }
};
export {
  ShareWeb
};
//# sourceMappingURL=web-YTT5B27E.js.map
