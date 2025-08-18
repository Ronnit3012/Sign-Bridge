import {
  commonjsGlobal,
  createCommonjsModule
} from "./chunk-5ZULVOZL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-H7FQKYJT.js";

// node_modules/@sutton-signwriting/sgnw-components/dist/esm/fsw-74700325.js
var fsw = createCommonjsModule(function(module, exports) {
  (function(global, factory) {
    factory(exports);
  })(commonjsGlobal, function(exports2) {
    let re$1 = {
      "symbol": "S[123][0-9a-f]{2}[0-5][0-9a-f]",
      "coord": "[0-9]{3}x[0-9]{3}",
      "sort": "A",
      "box": "[BLMR]"
    };
    re$1.prefix = `(?:${re$1.sort}(?:${re$1.symbol})+)`;
    re$1.spatial = `${re$1.symbol}${re$1.coord}`;
    re$1.signbox = `${re$1.box}${re$1.coord}(?:${re$1.spatial})*`;
    re$1.sign = `${re$1.prefix}?${re$1.signbox}`;
    re$1.sortable = `${re$1.prefix}${re$1.signbox}`;
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
    const parse$1 = (styleString) => {
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
    const fsw2coord = (fswCoord) => fswCoord.split("x").map((num) => parseInt(num));
    const parse = {
      /**
       * Function to parse an fsw symbol with optional coordinate and style string
       * @function fsw.parse.symbol
       * @param {string} fswSym - an fsw symbol
       * @returns {SymbolObject} elements of fsw symbol
       * @example
       * fsw.parse.symbol('S10000500x500-C')
       * 
       * return {
       *  'symbol': 'S10000',
       *  'coord': [500, 500],
       *  'style': '-C'
       * }
       */
      symbol: (fswSym) => {
        const regex = `^(${re$1.symbol})(${re$1.coord})?(${re.full})?`;
        const symbol = typeof fswSym === "string" ? fswSym.match(new RegExp(regex)) : void 0;
        return {
          "symbol": symbol ? symbol[1] : void 0,
          "coord": symbol && symbol[2] ? fsw2coord(symbol[2]) : void 0,
          "style": symbol ? symbol[3] : void 0
        };
      },
      /**
       * Function to parse an fsw sign with style string
       * @function fsw.parse.sign
       * @param {string} fswSign - an fsw sign
       * @returns { SignObject } elements of fsw sign
       * @example
       * fsw.parse.sign('AS10011S10019S2e704S2e748M525x535S2e748483x510S10011501x466S2e704510x500S10019476x475-C')
       * 
       * return {
       *  sequence: ['S10011', 'S10019', 'S2e704', 'S2e748'],
       *  box: 'M',
       *  max: [525, 535],
       *  spatials: [
       *    {
       *      symbol: 'S2e748',
       *      coord: [483, 510]
       *    },
       *    {
       *      symbol: 'S10011',
       *      coord: [501, 466]
       *    },
       *    {
       *      symbol: 'S2e704',
       *      coord: [510, 500]
       *    },
       *    {
       *      symbol: 'S10019',
       *      coord: [476, 475]
       *    }
       *  ],
       *  style: '-C'
       * }
       */
      sign: (fswSign) => {
        const regex = `^(${re$1.prefix})?(${re$1.signbox})(${re.full})?`;
        const sign = typeof fswSign === "string" ? fswSign.match(new RegExp(regex)) : void 0;
        if (sign) {
          return {
            "sequence": sign[1] ? sign[1].slice(1).match(/.{6}/g) : void 0,
            "box": sign[2][0],
            "max": fsw2coord(sign[2].slice(1, 8)),
            "spatials": sign[2].length < 9 ? void 0 : sign[2].slice(8).match(/(.{13})/g).map((m) => {
              return {
                symbol: m.slice(0, 6),
                coord: [parseInt(m.slice(6, 9)), parseInt(m.slice(10, 13))]
              };
            }),
            "style": sign[3]
          };
        } else {
          return {};
        }
      },
      /**
       * Function to parse an fsw text
       * @function fsw.parse.text
       * @param {string} fswText - an fsw text
       * @returns {string[]} fsw signs and punctuations
       * @example
       * fsw.parse.text('AS14c20S27106M518x529S14c20481x471S27106503x489 AS18701S1870aS2e734S20500M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468 S38800464x496')
       * 
       * return [
       *  'AS14c20S27106M518x529S14c20481x471S27106503x489',
       *  'AS18701S1870aS2e734S20500M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468',
       *  'S38800464x496'
       * ]
       */
      text: (fswText) => {
        if (typeof fswText !== "string") return [];
        const regex = `(${re$1.sign}(${re.full})?|${re$1.spatial}(${re.full})?)`;
        const matches = fswText.match(new RegExp(regex, "g"));
        return matches ? [...matches] : [];
      }
    };
    const compose = {
      /**
       * Function to compose an fsw symbol with optional coordinate and style string
       * @function fsw.compose.symbol
       * @param {SymbolObject} fswSymObject - an fsw symbol object
       * @returns {string} an fsw symbol string
       * @example
       * fsw.compose.symbol({
       *  'symbol': 'S10000',
       *  'coord': [480, 480],
       *  'style': '-C'
       * })
       * 
       * return 'S10000480x480-C'
       */
      symbol: (fswSymObject) => {
        if (typeof fswSymObject.symbol === "string") {
          const symbol = (fswSymObject.symbol.match(re$1.symbol) || [""])[0];
          if (symbol) {
            const x = (fswSymObject.coord && fswSymObject.coord[0] || "").toString();
            const y = (fswSymObject.coord && fswSymObject.coord[1] || "").toString();
            const coord = ((x + "x" + y).match(re$1.coord) || [""])[0] || "";
            const styleStr = typeof fswSymObject.style === "string" && (fswSymObject.style.match(re.full) || [""])[0] || "";
            return symbol + coord + styleStr;
          }
        }
        return void 0;
      },
      /**
       * Function to compose an fsw sign with style string
       * @function fsw.compose.sign
       * @param {SignObject} fswSignObject - an fsw symbol object
       * @returns {string} an fsw sign string
       * @example
       * fsw.compose.sign({
       *  sequence: ['S10011', 'S10019', 'S2e704', 'S2e748'],
       *  box: 'M',
       *  max: [525, 535],
       *  spatials: [
       *    {
       *      symbol: 'S2e748',
       *      coord: [483, 510]
       *    },
       *    {
       *      symbol: 'S10011',
       *      coord: [501, 466]
       *    },
       *    {
       *      symbol: 'S2e704',
       *      coord: [510, 500]
       *    },
       *    {
       *      symbol: 'S10019',
       *      coord: [476, 475]
       *    }
       *  ],
       *  style: '-C'
       * })
       * 
       * return 'AS10011S10019S2e704S2e748M525x535S2e748483x510S10011501x466S2e704510x500S10019476x475-C'
       */
      sign: (fswSignObject) => {
        let box = typeof fswSignObject.box !== "string" ? "M" : (fswSignObject.box + "M").match(re$1.box);
        const x = (fswSignObject.max && fswSignObject.max[0] || "").toString();
        const y = (fswSignObject.max && fswSignObject.max[1] || "").toString();
        const max = ((x + "x" + y).match(re$1.coord) || [""])[0] || "";
        if (!max) return void 0;
        let prefix = "";
        if (fswSignObject.sequence && Array.isArray(fswSignObject.sequence)) {
          prefix = fswSignObject.sequence.map((key) => (key.match(re$1.symbol) || [""])[0]).join("");
          prefix = prefix ? "A" + prefix : "";
        }
        let signbox = "";
        if (fswSignObject.spatials && Array.isArray(fswSignObject.spatials)) {
          signbox = fswSignObject.spatials.map((spatial) => {
            if (typeof spatial.symbol === "string") {
              const symbol = (spatial.symbol.match(re$1.symbol) || [""])[0];
              if (symbol) {
                const x2 = (spatial.coord && spatial.coord[0] || "").toString();
                const y2 = (spatial.coord && spatial.coord[1] || "").toString();
                const coord = ((x2 + "x" + y2).match(re$1.coord) || [""])[0] || "";
                if (coord) {
                  return symbol + coord;
                }
              }
            }
            return "";
          }).join("");
        }
        const styleStr = typeof fswSignObject.style === "string" && (fswSignObject.style.match(re.full) || [""])[0] || "";
        return prefix + box + max + signbox + styleStr;
      }
    };
    const info = (fsw2) => {
      let lanes = {
        "B": 0,
        "L": -1,
        "M": 0,
        "R": 1
      };
      let parsed = parse.sign(fsw2);
      let width, height, segment, x1, x2, y1, y2, lane;
      if (parsed.spatials) {
        x1 = Math.min(...parsed.spatials.map((spatial) => spatial.coord[0]));
        x2 = parsed.max[0];
        width = x2 - x1;
        y1 = Math.min(...parsed.spatials.map((spatial) => spatial.coord[1]));
        y2 = parsed.max[1];
        height = y2 - y1;
        segment = "sign";
        lane = parsed.box;
      } else {
        parsed = parse.symbol(fsw2);
        lane = "M";
        if (parsed.coord) {
          x1 = parsed.coord[0];
          width = (500 - x1) * 2;
          y1 = parsed.coord[1];
          height = (500 - y1) * 2;
          segment = "symbol";
        } else {
          x1 = 490;
          width = 20;
          y1 = 490;
          height = 20;
          segment = "none";
        }
      }
      let style = parse$1(parsed.style);
      let zoom = style.zoom || 1;
      let padding = style.padding || 0;
      return {
        minX: x1,
        minY: y1,
        width,
        height,
        segment,
        lane: lanes[lane],
        padding,
        zoom
      };
    };
    const columnDefaults = {
      "height": 500,
      "width": 150,
      "offset": 50,
      "pad": 20,
      "margin": 5,
      "dynamic": false,
      "background": void 0,
      "punctuation": {
        "spacing": true,
        "pad": 30,
        "pull": true
      },
      "style": {
        "detail": ["black", "white"],
        "zoom": 1
      }
    };
    const columnDefaultsMerge = (options) => {
      if (typeof options !== "object") options = {};
      return __spreadProps(__spreadValues(__spreadValues({}, columnDefaults), options), {
        punctuation: __spreadValues(__spreadValues({}, columnDefaults.punctuation), options.punctuation),
        style: __spreadValues(__spreadValues({}, columnDefaults.style), options.style)
      });
    };
    const columns = (fswText, options) => {
      if (typeof fswText !== "string") return {};
      const values = columnDefaultsMerge(options);
      let input = parse.text(fswText);
      let cursor = 0;
      let cols = [];
      let col = [];
      let plus = 0;
      let center = parseInt(values.width / 2);
      let maxHeight = values.height - values.margin;
      let pullable = true;
      let finalize = false;
      for (let val of input) {
        let informed = info(val);
        cursor += plus;
        if (values.punctuation.spacing) {
          cursor += informed.segment == "sign" ? values.pad : 0;
        } else {
          cursor += values.pad;
        }
        finalize = cursor + informed.height > maxHeight;
        if (finalize && informed.segment == "symbol" && values.punctuation.pull && pullable) {
          finalize = false;
          pullable = false;
        }
        if (col.length == 0) {
          finalize = false;
        }
        if (finalize) {
          cursor = values.pad;
          cols.push(col);
          col = [];
          pullable = true;
        }
        col.push(Object.assign(informed, {
          x: center + values.offset * informed.lane - (500 - informed.minX) * informed.zoom * values.style.zoom,
          y: cursor,
          text: val
        }));
        cursor += informed.height * informed.zoom * values.style.zoom;
        if (values.punctuation.spacing) {
          plus = informed.segment == "sign" ? values.pad : values.punctuation.pad;
        } else {
          plus = values.pad;
        }
      }
      if (col.length) {
        cols.push(col);
      }
      if (values.punctuation.pull) {
        for (let col2 of cols) {
          let last = col2[col2.length - 1];
          let diff = last.y + last.height - (values.height - values.margin);
          if (diff > 0) {
            let adj = parseInt(diff / col2.length) + 1;
            for (let i in col2) {
              col2[i].y -= adj * i + adj;
            }
          }
        }
      }
      let widths = [];
      for (let col2 of cols) {
        let min = [center - values.offset - values.pad];
        let max = [center + values.offset + values.pad];
        for (let item of col2) {
          min.push(item.x - values.pad);
          max.push(item.x + item.width + values.pad);
        }
        min = Math.min(...min);
        max = Math.max(...max);
        let width = values.width;
        let adj = 0;
        if (!values.dynamic) {
          adj = center - parseInt((min + max) / 2);
        } else {
          width = max - min;
          adj = -min;
        }
        for (let item of col2) {
          item.x += adj;
        }
        widths.push(width);
      }
      return {
        "options": values,
        "widths": widths,
        "columns": cols
      };
    };
    const kind = [256, 895, 903];
    const category = [256, 517, 759, 767, 877, 895, 903];
    const group = [256, 270, 286, 324, 332, 390, 420, 442, 461, 501, 517, 534, 554, 597, 613, 648, 678, 695, 725, 739, 759, 767, 778, 810, 827, 857, 877, 886, 895, 903];
    const ranges = {
      "all": [256, 907],
      "writing": [256, 894],
      "hand": [256, 516],
      "movement": [517, 758],
      "dynamic": [759, 766],
      "head": [767, 876],
      "hcenter": [767, 876],
      "vcenter": [767, 885],
      "trunk": [877, 885],
      "limb": [886, 894],
      "location": [895, 902],
      "punctuation": [903, 907]
    };
    const isType = (key, type) => {
      const parsed = parse.symbol(key);
      if (parsed.symbol) {
        const dec = parseInt(parsed.symbol.slice(1, 4), 16);
        const range = ranges[type];
        if (range) {
          return range[0] <= dec && range[1] >= dec;
        }
      }
      return false;
    };
    const colors = ["#0000CC", "#CC0000", "#FF0099", "#006600", "#000000", "#884411", "#FF9900"];
    const colorize = (key) => {
      const parsed = parse.symbol(key);
      let color = "#000000";
      if (parsed.symbol) {
        const dec = parseInt(parsed.symbol.slice(1, 4), 16);
        const index = category.findIndex((val) => val > dec);
        color = colors[index < 0 ? 6 : index - 1];
      }
      return color;
    };
    exports2.category = category;
    exports2.colorize = colorize;
    exports2.colors = colors;
    exports2.columnDefaults = columnDefaults;
    exports2.columnDefaultsMerge = columnDefaultsMerge;
    exports2.columns = columns;
    exports2.compose = compose;
    exports2.group = group;
    exports2.info = info;
    exports2.isType = isType;
    exports2.kind = kind;
    exports2.parse = parse;
    exports2.ranges = ranges;
    exports2.re = re$1;
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
  });
});

export {
  fsw
};
/*! Bundled license information:

@sutton-signwriting/sgnw-components/dist/esm/fsw-74700325.js:
  (*!
   * The Sutton SignWriting Web Components
   *)
*/
//# sourceMappingURL=chunk-QZQYGAE5.js.map
