import {
  commonjsGlobal,
  createCommonjsModule
} from "./chunk-5ZULVOZL.js";
import {
  __spreadValues
} from "./chunk-H7FQKYJT.js";

// node_modules/@sutton-signwriting/sgnw-components/dist/esm/style-fd531f8d.js
var style = createCommonjsModule(function(module, exports) {
  (function(global, factory) {
    factory(exports);
  })(commonjsGlobal, function(exports2) {
    let re = {
      "colorize": "C",
      "colorhex": "(?:[0-9a-fA-F]{3}){1,2}",
      "colorname": "[a-zA-Z]+",
      "padding": "P[0-9]{2}",
      "zoom": "Z(?:[0-9]+(?:\\.[0-9]+)?|x)",
      "classbase": "-?[_a-zA-Z][_a-zA-Z0-9-]{0,100}",
      "id": "[a-zA-Z][_a-zA-Z0-9-]{0,100}"
    };
    re.colorbase = `(?:${re.colorhex}|${re.colorname})`;
    re.color = `_${re.colorbase}_`;
    re.colors = `_${re.colorbase}(?:,${re.colorbase})?_`;
    re.background = `G${re.color}`;
    re.detail = `D${re.colors}`;
    re.detailsym = `D[0-9]{2}${re.colors}`;
    re.classes = `${re.classbase}(?: ${re.classbase})*`;
    re.full = `-(${re.colorize})?(${re.padding})?(${re.background})?(${re.detail})?(${re.zoom})?(?:-((?:${re.detailsym})*))?(?:-(${re.classes})?!(?:(${re.id})!)?)?`;
    const prefixColor = (color) => {
      const regex = new RegExp(`^${re.colorhex}$`);
      return (regex.test(color) ? "#" : "") + color;
    };
    const definedProps = (obj) => Object.fromEntries(Object.entries(obj).filter(([k, v]) => v !== void 0));
    const parse = (styleString) => {
      const regex = `^${re.full}`;
      const m = (typeof styleString === "string" ? styleString.match(new RegExp(regex)) : []) || [];
      return definedProps({
        "colorize": !m[1] ? void 0 : !!m[1],
        "padding": !m[2] ? void 0 : parseInt(m[2].slice(1)),
        "background": !m[3] ? void 0 : prefixColor(m[3].slice(2, -1)),
        "detail": !m[4] ? void 0 : m[4].slice(2, -1).split(",").map(prefixColor),
        "zoom": !m[5] ? void 0 : m[5] === "Zx" ? "x" : parseFloat(m[5].slice(1)),
        "detailsym": !m[6] ? void 0 : m[6].match(new RegExp(re.detailsym, "g")).map((val) => {
          const parts = val.split("_");
          const detail = parts[1].split(",").map(prefixColor);
          return {
            "index": parseInt(parts[0].slice(1)),
            "detail": detail
          };
        }),
        "classes": !m[7] ? void 0 : m[7],
        "id": !m[8] ? void 0 : m[8]
      });
    };
    const compose = (styleObject) => {
      if (typeof styleObject !== "object" || styleObject === null) return void 0;
      let style1 = "-";
      style1 += !styleObject.colorize ? "" : "C";
      const padding = parseInt(styleObject.padding);
      style1 += !padding || padding <= 0 || padding > 99 ? "" : "P" + (padding > 9 ? padding : "0" + padding);
      const background = !styleObject.background || !(typeof styleObject.background === "string") ? void 0 : styleObject.background.match(re.colorbase)[0];
      style1 += !background ? "" : "G_" + background + "_";
      const detail1 = !styleObject.detail || !styleObject.detail[0] || !(typeof styleObject.detail[0] === "string") ? void 0 : styleObject.detail[0].match(re.colorbase)[0];
      const detail2 = !styleObject.detail || !styleObject.detail[1] || !(typeof styleObject.detail[1] === "string") ? void 0 : styleObject.detail[1].match(re.colorbase)[0];
      if (detail1) {
        style1 += "D_" + detail1;
        if (detail2) {
          style1 += "," + detail2;
        }
        style1 += "_";
      }
      const zoom = styleObject.zoom === "x" ? "x" : parseFloat(styleObject.zoom);
      style1 += !zoom || zoom <= 0 ? "" : "Z" + zoom;
      let style2 = "";
      const detailsym = !styleObject.detailsym || !Array.isArray(styleObject.detailsym) ? [] : styleObject.detailsym.map((styleObject2) => {
        const index = parseInt(styleObject2.index);
        if (!index || index <= 0 || index > 99) return "";
        let style4 = "D" + (index > 9 ? index : "0" + index);
        const detail12 = !styleObject2.detail || !styleObject2.detail[0] ? void 0 : styleObject2.detail[0].match(re.colorbase)[0];
        const detail22 = !styleObject2.detail || !styleObject2.detail[1] ? void 0 : styleObject2.detail[1].match(re.colorbase)[0];
        if (detail12) {
          style4 += "_" + detail12;
          if (detail22) {
            style4 += "," + detail22;
          }
          style4 += "_";
        }
        return style4;
      });
      style2 += detailsym.join("");
      let style3 = "";
      const classes = !styleObject.classes || !(typeof styleObject.classes === "string") ? void 0 : styleObject.classes.match(re.classes)[0];
      style3 += !classes ? "" : classes;
      const id = !styleObject.id || !(typeof styleObject.id === "string") ? void 0 : styleObject.id.match(re.id)[0];
      style3 += classes || id ? "!" : "";
      style3 += !id ? "" : id + "!";
      return style1 + (style2 || style3 ? "-" + style2 : "") + (style3 ? "-" + style3 : "");
    };
    const merge = (style1, style2) => {
      if (typeof style1 !== "object") style1 = {};
      if (typeof style2 !== "object") style2 = {};
      const zoom1 = "zoom" in style1 ? style1["zoom"] : 1;
      const zoom2 = "zoom" in style2 ? style2["zoom"] : 1;
      return __spreadValues(__spreadValues(__spreadValues({}, style1), style2), {
        zoom: zoom1 * zoom2
      });
    };
    const rgb2arr = (rgb) => {
      if (typeof rgb !== "string") return [0, 0, 0];
      return rgb.replace(/rgba?\((.+?)\)/ig, (_, values) => {
        return values;
      }).split(",").map(Number);
    };
    const arr2hex = (arr) => {
      return arr.slice(0, 3).map((num) => num.toString(16).padStart(2, "0")).join("");
    };
    const rgb2hex = (rgb, tolerance = 0) => {
      const arr = rgb2arr(rgb);
      if (arr.length == 4 && arr[3] <= tolerance) {
        return "transparent";
      } else {
        return arr2hex(arr);
      }
    };
    const rgba2hex = (color, background) => {
      const bArr = rgb2arr(background);
      const cArr = rgb2arr(color);
      const alpha = cArr.length == 4 ? cArr[3] : 1;
      if (alpha == 0) {
        return "transparent";
      } else {
        return arr2hex(cArr.map((v, i) => parseInt((1 - alpha) * bArr[i] + alpha * v)));
      }
    };
    exports2.compose = compose;
    exports2.merge = merge;
    exports2.parse = parse;
    exports2.re = re;
    exports2.rgb2hex = rgb2hex;
    exports2.rgba2hex = rgba2hex;
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
  });
});

export {
  style
};
/*! Bundled license information:

@sutton-signwriting/sgnw-components/dist/esm/style-fd531f8d.js:
  (*!
   * The Sutton SignWriting Web Components
   *)
*/
//# sourceMappingURL=chunk-U2LUJIOQ.js.map
