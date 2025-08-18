import {
  appGlobalScript
} from "./chunk-2K7UIDHG.js";
import {
  bootstrapLazy,
  promiseResolve
} from "./chunk-5ZULVOZL.js";
import "./chunk-H7FQKYJT.js";

// node_modules/@sutton-signwriting/sgnw-components/dist/esm/polyfills/index.js
function applyPolyfills() {
  var promises = [];
  if (typeof window !== "undefined") {
    var win = window;
    if (!win.customElements || win.Element && (!win.Element.prototype.closest || !win.Element.prototype.matches || !win.Element.prototype.remove || !win.Element.prototype.getRootNode)) {
      promises.push(import(
        /* webpackChunkName: "polyfills-dom" */
        "./dom-K4Q7EWIT.js"
      ));
    }
    var checkIfURLIsSupported = function() {
      try {
        var u = new URL("b", "http://a");
        u.pathname = "c%20d";
        return u.href === "http://a/c%20d" && u.searchParams;
      } catch (e) {
        return false;
      }
    };
    if ("function" !== typeof Object.assign || !Object.entries || !Array.prototype.find || !Array.prototype.includes || !String.prototype.startsWith || !String.prototype.endsWith || win.NodeList && !win.NodeList.prototype.forEach || !win.fetch || !checkIfURLIsSupported() || typeof WeakMap == "undefined") {
      promises.push(import(
        /* webpackChunkName: "polyfills-core-js" */
        "./core-js-WECDNA7H.js"
      ));
    }
  }
  return Promise.all(promises);
}

// node_modules/@sutton-signwriting/sgnw-components/dist/esm/app-globals-0d55dcb4.js
var globalScripts = appGlobalScript;

// node_modules/@sutton-signwriting/sgnw-components/dist/esm/loader.js
var patchEsm = () => {
  return promiseResolve();
};
var defineCustomElements = (win, options) => {
  if (typeof window === "undefined") return Promise.resolve();
  return patchEsm().then(() => {
    globalScripts();
    return bootstrapLazy([["fsw-palette", [[2, "fsw-palette", {
      "orientation": [1],
      "size": [1],
      "alphabet": [1],
      "group": [1537],
      "base": [1537],
      "more": [1540],
      "lower": [1540],
      "palette": [32]
    }, [[0, "paletteSymbolClick", "paletteSymbolClickHandler"]]]]], ["fsw-vp", [[1, "fsw-vp", {
      "vp": [1537],
      "colorize": [1540],
      "sgnw": [32],
      "items": [32]
    }]]], ["sgnw-palette", [[2, "sgnw-palette", {
      "orientation": [1],
      "size": [1],
      "alphabet": [1],
      "group": [1537],
      "base": [1537],
      "more": [1540],
      "lower": [1540],
      "palette": [32]
    }, [[0, "paletteSymbolClick", "paletteSymbolClickHandler"]]]]], ["sgnw-vp", [[1, "sgnw-vp", {
      "vp": [1537],
      "colorize": [1540],
      "sgnw": [32],
      "items": [32]
    }]]], ["fsw-signbox", [[6, "fsw-signbox", null, [[8, "paletteSymbolDrop", "paletteSymbolDropHandler"]]]]], ["fsw-spatial", [[6, "fsw-spatial"]]], ["sgnw-signbox", [[6, "sgnw-signbox", null, [[8, "paletteSymbolDrop", "paletteSymbolDropHandler"]]]]], ["fsw-button_2", [[2, "fsw-button", {
      "symbol": [1537],
      "sign": [1537],
      "svg": [1537],
      "sgnw": [32]
    }], [2, "fsw-palette-symbol", {
      "symbol": [1537],
      "sgnw": [32]
    }]]], ["fsw-sign_2", [[1, "fsw-sign", {
      "sign": [1537],
      "styling": [1537],
      "sgnw": [32]
    }], [1, "fsw-symbol", {
      "symbol": [1537],
      "styling": [1537],
      "sgnw": [32]
    }]]], ["sgnw-button_2", [[2, "sgnw-button", {
      "symbol": [1537],
      "sign": [1537],
      "svg": [1537],
      "sgnw": [32]
    }], [2, "sgnw-palette-symbol", {
      "symbol": [1537],
      "sgnw": [32]
    }]]], ["sgnw-sign_2", [[1, "sgnw-sign", {
      "sign": [1537],
      "styling": [1537],
      "sgnw": [32]
    }], [1, "sgnw-symbol", {
      "symbol": [1537],
      "styling": [1537],
      "sgnw": [32]
    }]]]], options);
  });
};

// node_modules/@sutton-signwriting/sgnw-components/loader/index.js
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
  applyPolyfills,
  defineCustomElements
};
/*! Bundled license information:

@sutton-signwriting/sgnw-components/dist/esm/app-globals-0d55dcb4.js:
@sutton-signwriting/sgnw-components/dist/esm/loader.js:
@sutton-signwriting/sgnw-components/loader/index.js:
  (*!
   * The Sutton SignWriting Web Components
   *)
*/
//# sourceMappingURL=@sutton-signwriting_sgnw-components_loader.js.map
