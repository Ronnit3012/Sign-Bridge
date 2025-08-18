import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  bootstrapLazy,
  setNonce
} from "./chunk-2TSRW3KK.js";
import {
  __async
} from "./chunk-5P6RLSS7.js";

// node_modules/pose-viewer/dist/esm/app-globals-0f993ce5.js
var globalScripts = () => {
};

// node_modules/pose-viewer/dist/esm/loader.js
var defineCustomElements = (win, options) => __async(null, null, function* () {
  if (typeof window === "undefined") return void 0;
  yield globalScripts();
  return bootstrapLazy([["pose-viewer", [[1, "pose-viewer", {
    "src": [1],
    "svg": [4],
    "width": [1],
    "height": [1],
    "aspectRatio": [2, "aspect-ratio"],
    "padding": [1],
    "thickness": [2],
    "background": [1],
    "loop": [1028],
    "autoplay": [4],
    "playbackRate": [1026, "playback-rate"],
    "currentTime": [1026, "current-time"],
    "duration": [1026],
    "ended": [1028],
    "paused": [1028],
    "readyState": [1026, "ready-state"],
    "error": [32],
    "syncMedia": [64],
    "getPose": [64],
    "nextFrame": [64],
    "play": [64],
    "pause": [64]
  }, null, {
    "src": ["srcChange"]
  }]]]], options);
});

// node_modules/pose-viewer/loader/index.js
(function() {
  if ("undefined" !== typeof window && void 0 !== window.Reflect && void 0 !== window.customElements) {
    var a = HTMLElement;
    window.HTMLElement = function() {
      return Reflect.construct(a, [], this.constructor);
    };
    HTMLElement.prototype = a.prototype;
    HTMLElement.prototype.constructor = HTMLElement;
    Object.setPrototypeOf(HTMLElement, a);
  }
})();
export {
  defineCustomElements,
  setNonce
};
//# sourceMappingURL=pose-viewer_loader.js.map
