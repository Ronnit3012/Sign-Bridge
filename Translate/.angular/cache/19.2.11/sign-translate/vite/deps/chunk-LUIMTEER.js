import {
  commonjsGlobal,
  createCommonjsModule
} from "./chunk-5ZULVOZL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-H7FQKYJT.js";

// node_modules/@sutton-signwriting/sgnw-components/dist/esm/swu-f4cee096.js
var swu = createCommonjsModule(function(module, exports) {
  (function(global, factory) {
    factory(exports);
  })(commonjsGlobal, function(exports2) {
    let re$1 = {
      "symbol": "(?:(?:\uD8C0[\uDC01-\uDFFF])|(?:[\uD8C1-\uD8FC][\uDC00-\uDFFF])|(?:\uD8FD[\uDC00-\uDC80]))",
      "coord": "(?:\uD836[\uDC0C-\uDDFF]){2}",
      "sort": "𝠀",
      "box": "\uD836[\uDC01-\uDC04]"
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
    const swu2num = (swuNum) => parseInt(swuNum.codePointAt(0)) - 120844 + 250;
    const num2swu = (num) => String.fromCodePoint(120844 + parseInt(num) - 250);
    const swu2coord = (swuCoord) => [swu2num(swuCoord.slice(0, 2)), swu2num(swuCoord.slice(2, 4))];
    const coord2swu = (coord) => coord.map((num) => num2swu(num)).join("");
    const swu2code = (swuSym) => parseInt(swuSym.codePointAt(0));
    const parse = {
      /**
       * Function to parse an swu symbol with optional coordinate and style string
       * @function swu.parse.symbol
       * @param {string} swuSym - an swu symbol
       * @returns {SymbolObject} elements of swu symbol
       * @example
       * swu.parse.symbol('񀀁𝤆𝤆-C')
       * 
       * return {
       *  'symbol': '񀀁',
       *  'coord': [500, 500],
       *  'style': '-C'
       * }
       */
      symbol: (swuSym) => {
        const regex = `^(${re$1.symbol})(${re$1.coord})?(${re.full})?`;
        const symbol = typeof swuSym === "string" ? swuSym.match(new RegExp(regex)) : void 0;
        return {
          "symbol": symbol ? symbol[1] : void 0,
          "coord": symbol && symbol[2] ? swu2coord(symbol[2]) : void 0,
          "style": symbol ? symbol[3] : void 0
        };
      },
      /**
        * Function to parse an swu sign with style string
        * @function swu.parse.sign
        * @param {string} swuSign - an swu sign
        * @returns {SignObject} elements of swu sign
        * @example
        * swu.parse.sign('𝠀񀀒񀀚񋚥񋛩𝠃𝤟𝤩񋛩𝣵𝤐񀀒𝤇𝣤񋚥𝤐𝤆񀀚𝣮𝣭-C')
        * 
        * return {
        *  sequence: ['񀀒','񀀚','񋚥','񋛩'],
        *  box: '𝠃',
        *  max: [525, 535],
        *  spatials: [
        *    {
        *      symbol: '񋛩',
        *      coord: [483, 510]
        *    },
        *    {
        *      symbol: '񀀒',
        *      coord: [501, 466]
        *    },
        *    {
        *      symbol: '񋚥',
        *      coord: [510, 500]
        *    },
        *    {
        *      symbol: '񀀚',
        *      coord: [476, 475]
        *    }
        *  ],
        *  style: '-C'
        * }
        */
      sign: (swuSign) => {
        const regex = `^(${re$1.prefix})?(${re$1.signbox})(${re.full})?`;
        const sign = typeof swuSign === "string" ? swuSign.match(new RegExp(regex)) : void 0;
        if (sign) {
          return {
            "sequence": sign[1] ? sign[1].slice(2).match(/.{2}/g) : void 0,
            "box": sign[2].slice(0, 2),
            "max": swu2coord(sign[2].slice(2, 6)),
            "spatials": sign[2].length < 7 ? void 0 : sign[2].slice(6).match(/(.{6})/g).map((m) => {
              return {
                symbol: m.slice(0, 2),
                coord: swu2coord(m.slice(2))
              };
            }),
            "style": sign[3]
          };
        } else {
          return {};
        }
      },
      /**
       * Function to parse an swu text
       * @function swu.parse.text
       * @param {string} swuText - an swu text
       * @returns {string[]} swu signs and punctuations
       * @example
       * swu.parse.text('𝠀񁲡񈩧𝠃𝤘𝤣񁲡𝣳𝣩񈩧𝤉𝣻 𝠀񃊢񃊫񋛕񆇡𝠃𝤘𝤧񃊫𝣻𝤕񃊢𝣴𝣼񆇡𝤎𝤂񋛕𝤆𝣦 񏌁𝣢𝤂')
       * 
       * return [
       *  '𝠀񁲡񈩧𝠃𝤘𝤣񁲡𝣳𝣩񈩧𝤉𝣻',
       *  '𝠀񃊢񃊫񋛕񆇡𝠃𝤘𝤧񃊫𝣻𝤕񃊢𝣴𝣼񆇡𝤎𝤂񋛕𝤆𝣦',
       *  '񏌁𝣢𝤂'
       * ]
       */
      text: (swuText) => {
        if (typeof swuText !== "string") return [];
        const regex = `(${re$1.sign}(${re.full})?|${re$1.spatial}(${re.full})?)`;
        const matches = swuText.match(new RegExp(regex, "g"));
        return matches ? [...matches] : [];
      }
    };
    const encode = (swu2) => swu2.replace(/[\u007F-\uFFFF]/g, function(chr) {
      return "\\u" + ("0000" + chr.charCodeAt(0).toString(16)).substr(-4).toUpperCase();
    });
    const decode = (encoded) => encoded.replace(/\\u([0-9A-F]{4})/g, function(match, chr) {
      return String.fromCharCode(parseInt(chr, 16));
    });
    const pair = (swuChar) => [swuChar.charCodeAt(0).toString(16).toUpperCase(), swuChar.charCodeAt(1).toString(16).toUpperCase()];
    const compose = {
      /**
       * Function to compose an swu symbol with optional coordinate and style string
       * @function swu.compose.symbol
       * @param {SymbolObject} swuSymObject - an swu symbol object
       * @returns {string} an swu symbol string
       * @example
       * swu.compose.symbol({
       *  'symbol': '񀀁',
       *  'coord': [500, 500],
       *  'style': '-C'
       * })
       * 
       * return '񀀁𝤆𝤆-C'
       */
      symbol: (swuSymObject) => {
        if (typeof swuSymObject !== "object" || swuSymObject === null) return void 0;
        if (typeof swuSymObject.symbol === "string") {
          const symbol = (swuSymObject.symbol.match(re$1.symbol) || [""])[0];
          if (symbol) {
            const x = swuSymObject.coord && swuSymObject.coord[0] || "";
            const y = swuSymObject.coord && swuSymObject.coord[1] || "";
            const coord = x && y ? coord2swu([x, y]) : "";
            const styleStr = typeof swuSymObject.style === "string" && (swuSymObject.style.match(re.full) || [""])[0] || "";
            return symbol + coord + styleStr;
          }
        }
        return void 0;
      },
      /**
       * Function to compose an swu sign with style string
       * @function swu.compose.sign
       * @param {SignObject} swuSignObject - an swu sign object
       * @returns {string} an swu sign string
       * @example
       * swu.compose.sign({
       *  sequence: ['񀀒','񀀚','񋚥','񋛩'],
       *  box: '𝠃',
       *  max: [525, 535],
       *  spatials: [
       *    {
       *      symbol: '񋛩',
       *      coord: [483, 510]
       *    },
       *    {
       *      symbol: '񀀒',
       *      coord: [501, 466]
       *    },
       *    {
       *      symbol: '񋚥',
       *      coord: [510, 500]
       *    },
       *    {
       *      symbol: '񀀚',
       *      coord: [476, 475]
       *    }
       *  ],
       *  style: '-C'
       * })
       * 
       * return '𝠀񀀒񀀚񋚥񋛩𝠃𝤟𝤩񋛩𝣵𝤐񀀒𝤇𝣤񋚥𝤐𝤆񀀚𝣮𝣭-C'
       */
      sign: (swuSignObject) => {
        if (typeof swuSignObject !== "object" || swuSignObject === null) return void 0;
        let box = typeof swuSignObject.box !== "string" ? "𝠃" : (swuSignObject.box + "𝠃").match(re$1.box);
        const x = swuSignObject.max && swuSignObject.max[0] || "";
        const y = swuSignObject.max && swuSignObject.max[1] || "";
        const max = x && y ? coord2swu([x, y]) : void 0;
        if (!max) return void 0;
        let prefix = "";
        if (swuSignObject.sequence && Array.isArray(swuSignObject.sequence)) {
          prefix = swuSignObject.sequence.map((key) => (key.match(re$1.symbol) || [""])[0]).join("");
          prefix = prefix ? "𝠀" + prefix : "";
        }
        let signbox = "";
        if (swuSignObject.spatials && Array.isArray(swuSignObject.spatials)) {
          signbox = swuSignObject.spatials.map((spatial) => {
            if (typeof spatial.symbol === "string") {
              const symbol = (spatial.symbol.match(re$1.symbol) || [""])[0];
              if (symbol) {
                const x2 = spatial.coord && spatial.coord[0] || "";
                const y2 = spatial.coord && spatial.coord[1] || "";
                const coord = x2 && y2 ? coord2swu([x2, y2]) : "";
                if (coord) {
                  return symbol + coord;
                }
              }
            }
            return "";
          }).join("");
        }
        const styleStr = typeof swuSignObject.style === "string" && (swuSignObject.style.match(re.full) || [""])[0] || "";
        return prefix + box + max + signbox + styleStr;
      }
    };
    const info = (swu2) => {
      let lanes = {
        "𝠁": 0,
        "𝠂": -1,
        "𝠃": 0,
        "𝠄": 1
      };
      let parsed = parse.sign(swu2);
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
        parsed = parse.symbol(swu2);
        lane = "𝠃";
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
    const columns = (swuText, options) => {
      if (typeof swuText !== "string") return {};
      const values = columnDefaultsMerge(options);
      let input = parse.text(swuText);
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
    const kind = [262145, 323489, 324257];
    const category = [262145, 287201, 310433, 311201, 321761, 323489, 324257];
    const group = [262145, 263489, 265025, 268673, 269441, 275009, 277889, 280001, 281825, 285665, 287201, 288833, 290753, 294881, 296417, 299777, 302657, 304289, 307169, 308513, 310433, 311201, 312257, 315329, 316961, 319841, 321761, 322625, 323489, 324257];
    const ranges = {
      "all": [262145, 324736],
      "writing": [262145, 323488],
      "hand": [262145, 287200],
      "movement": [287201, 310432],
      "dynamic": [310433, 311200],
      "head": [311201, 321760],
      "hcenter": [311201, 321760],
      "vcenter": [311201, 322624],
      "trunk": [321761, 322624],
      "limb": [322625, 323488],
      "location": [323489, 324256],
      "punctuation": [324257, 324736]
    };
    const isType = (swuSym, type) => {
      const parsed = parse.symbol(swuSym);
      if (parsed.symbol) {
        const code = swu2code(parsed.symbol);
        const range = ranges[type];
        if (range) {
          return range[0] <= code && range[1] >= code;
        }
      }
      return false;
    };
    const colors = ["#0000CC", "#CC0000", "#FF0099", "#006600", "#000000", "#884411", "#FF9900"];
    const colorize = (swuSym) => {
      const parsed = parse.symbol(swuSym);
      let color = "#000000";
      if (parsed.symbol) {
        const code = swu2code(parsed.symbol);
        const index = category.findIndex((val) => val > code);
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
    exports2.decode = decode;
    exports2.encode = encode;
    exports2.group = group;
    exports2.info = info;
    exports2.isType = isType;
    exports2.kind = kind;
    exports2.pair = pair;
    exports2.parse = parse;
    exports2.ranges = ranges;
    exports2.re = re$1;
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
  });
});

export {
  swu
};
/*! Bundled license information:

@sutton-signwriting/sgnw-components/dist/esm/swu-f4cee096.js:
  (*!
   * The Sutton SignWriting Web Components
   *)
*/
//# sourceMappingURL=chunk-LUIMTEER.js.map
