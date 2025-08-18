import {
  commonjsGlobal,
  createCommonjsModule
} from "./chunk-5ZULVOZL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-H7FQKYJT.js";

// node_modules/@sutton-signwriting/sgnw-components/dist/esm/swu-a03963b7.js
var swu = createCommonjsModule(function(module, exports) {
  (function(global, factory) {
    factory(exports);
  })(commonjsGlobal, function(exports2) {
    const num2swu = (num) => String.fromCodePoint(120844 + parseInt(num) - 250);
    const coord2swu = (coord) => coord.map((num) => num2swu(num)).join("");
    const swu2code$1 = (swuSym) => parseInt(swuSym.codePointAt(0));
    const swu2id = (swuSym) => swu2code$1(swuSym) - 262144;
    let sizes = {};
    const zoom = 2;
    const bound = 76 * zoom;
    let context;
    const symbolSize$1 = function(id) {
      if (id in sizes) {
        return [...sizes[id]];
      }
      if (!context) {
        const canvaser = document.createElement("canvas");
        canvaser.width = bound;
        canvaser.height = bound;
        context = canvaser.getContext("2d");
      }
      context.clearRect(0, 0, bound, bound);
      context.font = 30 * zoom + "px 'SuttonSignWritingLine'";
      context.fillText(String.fromCodePoint(id + 983040), 0, 0);
      const imgData = context.getImageData(0, 0, bound, bound).data;
      let w, h, i, s;
      wloop: for (w = bound - 1; w >= 0; w--) {
        for (h = 0; h < bound; h += 1) {
          for (s = 0; s < 4; s += 1) {
            i = w * 4 + h * 4 * bound + s;
            if (imgData[i]) {
              break wloop;
            }
          }
        }
      }
      var width = w;
      hloop: for (h = bound - 1; h >= 0; h--) {
        for (w = 0; w < width; w += 1) {
          for (s = 0; s < 4; s += 1) {
            i = w * 4 + h * 4 * bound + s;
            if (imgData[i]) {
              break hloop;
            }
          }
        }
      }
      var height = h + 1;
      width = Math.ceil(width / zoom);
      height = Math.ceil(height / zoom);
      if (14394 == id) {
        width = 19;
      }
      if ([10468, 10480, 10496, 10512, 10500, 10532, 10548, 10862, 10878, 10894, 11058, 11074, 11476, 11488, 11492, 11504, 11508, 11520, 10516, 10910, 10926, 11042, 11082, 10942].includes(id)) {
        width = 20;
      }
      if (31921 == id) {
        width = 22;
      }
      if (38460 == id) {
        width = 23;
      }
      if ([20164, 20212].includes(id)) {
        width = 25;
      }
      if (31894 == id) {
        width = 28;
      }
      if (46698 == id) {
        width = 29;
      }
      if (29606 == id) {
        width = 30;
      }
      if (44855 == id) {
        width = 40;
      }
      if (32667 == id) {
        width = 50;
      }
      if ([11088, 11474, 11490, 11506].includes(id)) {
        height = 20;
      }
      if (6285 == id) {
        height = 21;
      }
      if (40804 == id) {
        height = 31;
      }
      if (41475 == id) {
        height = 36;
      }
      if (width == 0 && height == 0) {
        const sizefix = {
          9: [15, 30],
          10: [21, 30],
          11: [30, 15],
          12: [30, 21],
          13: [15, 30],
          14: [21, 30]
        };
        if (id in sizefix) {
          width = sizefix[id][0];
          height = sizefix[id][1];
        }
      }
      if (width == 0 && height == 0) {
        return void 0;
      }
      sizes[id] = [width, height];
      return [width, height];
    };
    const symbolSize = function(swu2) {
      return symbolSize$1(swu2id(swu2));
    };
    const symbolLine$1 = function(id) {
      return String.fromCodePoint(id + 983040);
    };
    const symbolFill$1 = function(id) {
      return String.fromCodePoint(id + 1048576);
    };
    const symbolText$1 = function(id) {
      return `    <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">${symbolFill$1(id)}</text>
    <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">${symbolLine$1(id)}</text>`;
    };
    const symbolLine = function(swu2) {
      return symbolLine$1(swu2id(swu2));
    };
    const symbolFill = function(swu2) {
      return symbolFill$1(swu2id(swu2));
    };
    const symbolText = function(swu2) {
      return symbolText$1(swu2id(swu2));
    };
    let re$2 = {
      "colorize": "C",
      "colorhex": "(?:[0-9a-fA-F]{3}){1,2}",
      "colorname": "[a-zA-Z]+",
      "padding": "P[0-9]{2}",
      "zoom": "Z(?:[0-9]+(?:\\.[0-9]+)?|x)",
      "classbase": "-?[_a-zA-Z][_a-zA-Z0-9-]{0,100}",
      "id": "[a-zA-Z][_a-zA-Z0-9-]{0,100}"
    };
    re$2.colorbase = `(?:${re$2.colorhex}|${re$2.colorname})`;
    re$2.color = `_${re$2.colorbase}_`;
    re$2.colors = `_${re$2.colorbase}(?:,${re$2.colorbase})?_`;
    re$2.background = `G${re$2.color}`;
    re$2.detail = `D${re$2.colors}`;
    re$2.detailsym = `D[0-9]{2}${re$2.colors}`;
    re$2.classes = `${re$2.classbase}(?: ${re$2.classbase})*`;
    re$2.full = `-(${re$2.colorize})?(${re$2.padding})?(${re$2.background})?(${re$2.detail})?(${re$2.zoom})?(?:-((?:${re$2.detailsym})*))?(?:-(${re$2.classes})?!(?:(${re$2.id})!)?)?`;
    const prefixColor$1 = (color) => {
      const regex = new RegExp(`^${re$2.colorhex}$`);
      return (regex.test(color) ? "#" : "") + color;
    };
    const definedProps$1 = (obj) => Object.fromEntries(Object.entries(obj).filter(([k, v]) => v !== void 0));
    const parse$2 = (styleString) => {
      const regex = `^${re$2.full}`;
      const m = (typeof styleString === "string" ? styleString.match(new RegExp(regex)) : []) || [];
      return definedProps$1({
        "colorize": !m[1] ? void 0 : !!m[1],
        "padding": !m[2] ? void 0 : parseInt(m[2].slice(1)),
        "background": !m[3] ? void 0 : prefixColor$1(m[3].slice(2, -1)),
        "detail": !m[4] ? void 0 : m[4].slice(2, -1).split(",").map(prefixColor$1),
        "zoom": !m[5] ? void 0 : m[5] === "Zx" ? "x" : parseFloat(m[5].slice(1)),
        "detailsym": !m[6] ? void 0 : m[6].match(new RegExp(re$2.detailsym, "g")).map((val) => {
          const parts = val.split("_");
          const detail = parts[1].split(",").map(prefixColor$1);
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
      const background = !styleObject.background || !(typeof styleObject.background === "string") ? void 0 : styleObject.background.match(re$2.colorbase)[0];
      style1 += !background ? "" : "G_" + background + "_";
      const detail1 = !styleObject.detail || !styleObject.detail[0] || !(typeof styleObject.detail[0] === "string") ? void 0 : styleObject.detail[0].match(re$2.colorbase)[0];
      const detail2 = !styleObject.detail || !styleObject.detail[1] || !(typeof styleObject.detail[1] === "string") ? void 0 : styleObject.detail[1].match(re$2.colorbase)[0];
      if (detail1) {
        style1 += "D_" + detail1;
        if (detail2) {
          style1 += "," + detail2;
        }
        style1 += "_";
      }
      const zoom2 = styleObject.zoom === "x" ? "x" : parseFloat(styleObject.zoom);
      style1 += !zoom2 || zoom2 <= 0 ? "" : "Z" + zoom2;
      let style2 = "";
      const detailsym = !styleObject.detailsym || !Array.isArray(styleObject.detailsym) ? [] : styleObject.detailsym.map((styleObject2) => {
        const index = parseInt(styleObject2.index);
        if (!index || index <= 0 || index > 99) return "";
        let style = "D" + (index > 9 ? index : "0" + index);
        const detail12 = !styleObject2.detail || !styleObject2.detail[0] ? void 0 : styleObject2.detail[0].match(re$2.colorbase)[0];
        const detail22 = !styleObject2.detail || !styleObject2.detail[1] ? void 0 : styleObject2.detail[1].match(re$2.colorbase)[0];
        if (detail12) {
          style += "_" + detail12;
          if (detail22) {
            style += "," + detail22;
          }
          style += "_";
        }
        return style;
      });
      style2 += detailsym.join("");
      let style3 = "";
      const classes = !styleObject.classes || !(typeof styleObject.classes === "string") ? void 0 : styleObject.classes.match(re$2.classes)[0];
      style3 += !classes ? "" : classes;
      const id = !styleObject.id || !(typeof styleObject.id === "string") ? void 0 : styleObject.id.match(re$2.id)[0];
      style3 += classes || id ? "!" : "";
      style3 += !id ? "" : id + "!";
      return style1 + (style2 || style3 ? "-" + style2 : "") + (style3 ? "-" + style3 : "");
    };
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
    const swu2coord = (swuCoord) => [swu2num(swuCoord.slice(0, 2)), swu2num(swuCoord.slice(2, 4))];
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
      let zoom2 = style.zoom || 1;
      let padding = style.padding || 0;
      return {
        minX: x1,
        minY: y1,
        width,
        height,
        segment,
        lane: lanes[lane],
        padding,
        zoom: zoom2
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
    const category = [262145, 287201, 310433, 311201, 321761, 323489, 324257];
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
    const symbolSvgBody = (swuSym) => {
      const parsed = parse.symbol(swuSym);
      const blank2 = "";
      if (!parsed.symbol) return blank2;
      let styling = parse$2(parsed.style);
      let x1, y1, x2, y2;
      if (parsed.coord) {
        x1 = parsed.coord[0];
        y1 = parsed.coord[1];
        x2 = 500 + (500 - x1);
        y2 = 500 + (500 - y1);
      } else {
        let size = symbolSize(parsed.symbol);
        if (!size) return blank2;
        x1 = 500 - parseInt((size[0] + 1) / 2);
        y1 = 500 - parseInt((size[1] + 1) / 2);
        x2 = 500 + (500 - x1);
        y2 = 500 + (500 - y1);
      }
      let symSvg = symbolText(parsed.symbol);
      symSvg = `  <g transform="translate(${x1},${y1})">
${symSvg}
  </g>`;
      let line;
      if (styling.colorize) {
        line = colorize(parsed.symbol);
      } else if (styling.detail) {
        line = styling.detail[0];
      }
      if (line) {
        symSvg = symSvg.replace(/class="sym-line" fill="black"/, `class="sym-line" fill="${line}"`);
      }
      let fill = styling.detail && styling.detail[1];
      if (fill) {
        symSvg = symSvg.replace(/class="sym-fill" fill="white"/, `class="sym-fill" fill="${fill}"`);
      }
      let background = "";
      if (styling.padding) {
        x1 -= styling.padding;
        y1 -= styling.padding;
        x2 += styling.padding;
        y2 += styling.padding;
      }
      if (styling.background) {
        background = `
  <rect x="${x1}" y="${y1}" width="${x2 - x1}" height="${y2 - y1}" style="fill:${styling.background};" />`;
      }
      return `  <text font-size="0">${swuSym}</text>${background}
${symSvg}`;
    };
    const symbolSvg = (swuSym) => {
      const parsed = parse.symbol(swuSym);
      const blank2 = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>';
      if (!parsed.symbol) return blank2;
      let styling = parse$2(parsed.style);
      let x1, y1, x2, y2;
      if (parsed.coord) {
        x1 = parsed.coord[0];
        y1 = parsed.coord[1];
        x2 = 500 + (500 - x1);
        y2 = 500 + (500 - y1);
      } else {
        let size = symbolSize(parsed.symbol);
        if (!size) return blank2;
        x1 = parseInt(500 - size[0] / 2);
        y1 = parseInt(500 - size[1] / 2);
        x2 = x1 + size[0];
        y2 = y1 + size[1];
      }
      let classes = "";
      if (styling.classes) {
        classes = ` class="${styling.classes}"`;
      }
      let id = "";
      if (styling.id) {
        id = ` id="${styling.id}"`;
      }
      if (styling.padding) {
        x1 -= styling.padding;
        y1 -= styling.padding;
        x2 += styling.padding;
        y2 += styling.padding;
      }
      let sizing = "";
      if (styling.zoom != "x") {
        sizing = ` width="${(x2 - x1) * (styling.zoom ? styling.zoom : 1)}" height="${(y2 - y1) * (styling.zoom ? styling.zoom : 1)}"`;
      }
      return `<svg${classes}${id} version="1.1" xmlns="http://www.w3.org/2000/svg"${sizing} viewBox="${x1} ${y1} ${x2 - x1} ${y2 - y1}">
${symbolSvgBody(swuSym)}
</svg>`;
    };
    const symbolCanvas = function(swuSym) {
      const parsed = parse.symbol(swuSym);
      if (parsed.symbol) {
        let size = symbolSize(parsed.symbol);
        if (size) {
          const canvas = document.createElement("canvas");
          const context2 = canvas.getContext("2d");
          let styling = parse$2(parsed.style);
          let line = "black";
          if (styling.colorize) {
            line = colorize(parsed.symbol);
          } else if (styling.detail) {
            line = styling.detail[0];
          }
          let fill = styling.detail && styling.detail[1] || "white";
          let x1 = 500;
          let x2 = x1 + size[0];
          let y1 = 500;
          let y2 = y1 + size[1];
          if (styling.padding) {
            x1 -= styling.padding;
            y1 -= styling.padding;
            x2 += styling.padding;
            y2 += styling.padding;
          }
          let sizing = 1;
          if (styling.zoom != "x") {
            sizing = styling.zoom;
          }
          let w = (x2 - x1) * sizing;
          let h = (y2 - y1) * sizing;
          canvas.width = w ? w : 1;
          canvas.height = h ? h : 1;
          if (styling.background) {
            context2.rect(0, 0, w, h);
            context2.fillStyle = styling.background;
            context2.fill();
          }
          context2.font = 30 * sizing + "px 'SuttonSignWritingFill'";
          context2.fillStyle = fill;
          context2.fillText(symbolFill(parsed.symbol), (500 - x1) * sizing, (500 - y1) * sizing);
          context2.font = 30 * sizing + "px 'SuttonSignWritingLine'";
          context2.fillStyle = line;
          context2.fillText(symbolLine(parsed.symbol), (500 - x1) * sizing, (500 - y1) * sizing);
          return canvas;
        }
      }
    };
    const symbolPng = (swuSym) => {
      const canvas = symbolCanvas(swuSym);
      const png = canvas.toDataURL("image/png");
      canvas.remove();
      return png;
    };
    const blank = null;
    const symbolNormalize = (swuSym) => {
      const parsed = parse.symbol(swuSym);
      if (parsed.symbol) {
        let size = symbolSize(parsed.symbol);
        if (size) {
          return `${parsed.symbol}${coord2swu([500 - parseInt((size[0] + 1) / 2), 500 - parseInt((size[1] + 1) / 2)])}${parsed.style || ""}`;
        }
      } else {
        return blank;
      }
    };
    const signSvgBody = (swuSign) => {
      let parsed = parse.sign(swuSign);
      const blank2 = "";
      if (parsed.spatials) {
        let styling = parse$2(parsed.style);
        if (styling.detailsym) {
          styling.detailsym.forEach((sym) => {
            if (parsed.spatials[sym.index - 1]) {
              parsed.spatials[sym.index - 1].detail = sym.detail;
            }
          });
        }
        let x1 = Math.min(...parsed.spatials.map((spatial) => spatial.coord[0]));
        let y1 = Math.min(...parsed.spatials.map((spatial) => spatial.coord[1]));
        let x2 = parsed.max[0];
        let y2 = parsed.max[1];
        let background = "";
        if (styling.padding) {
          x1 -= styling.padding;
          y1 -= styling.padding;
          x2 += styling.padding;
          y2 += styling.padding;
        }
        if (styling.background) {
          background = `
  <rect x="${x1}" y="${y1}" width="${x2 - x1}" height="${y2 - y1}" style="fill:${styling.background};" />`;
        }
        let svg = `  <text font-size="0">${swuSign}</text>${background}`;
        const line = styling.detail && styling.detail[0];
        const fill = styling.detail && styling.detail[1];
        svg += "\n" + parsed.spatials.map((spatial) => {
          let svg2 = symbolText(spatial.symbol);
          let symLine = line;
          if (spatial.detail) {
            symLine = spatial.detail[0];
          } else if (styling.colorize) {
            symLine = colorize(spatial.symbol);
          }
          if (symLine) {
            svg2 = svg2.replace(/class="sym-line" fill="black"/, `class="sym-line" fill="${symLine}"`);
          }
          let symFill = fill;
          if (spatial.detail && spatial.detail[1]) {
            symFill = spatial.detail[1];
          }
          if (symFill) {
            svg2 = svg2.replace(/class="sym-fill" fill="white"/, `class="sym-fill" fill="${symFill}"`);
          }
          return `  <g transform="translate(${spatial.coord[0]},${spatial.coord[1]})">
${svg2}
  </g>`;
        }).join("\n");
        return svg;
      }
      return blank2;
    };
    const signSvg = (swuSign) => {
      let parsed = parse.sign(swuSign);
      const blank2 = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>';
      if (parsed.spatials) {
        let styling = parse$2(parsed.style);
        let x1 = Math.min(...parsed.spatials.map((spatial) => spatial.coord[0]));
        let y1 = Math.min(...parsed.spatials.map((spatial) => spatial.coord[1]));
        let x2 = parsed.max[0];
        let y2 = parsed.max[1];
        let classes = "";
        if (styling.classes) {
          classes = ` class="${styling.classes}"`;
        }
        let id = "";
        if (styling.id) {
          id = ` id="${styling.id}"`;
        }
        if (styling.padding) {
          x1 -= styling.padding;
          y1 -= styling.padding;
          x2 += styling.padding;
          y2 += styling.padding;
        }
        let sizing = "";
        if (styling.zoom != "x") {
          sizing = ` width="${(x2 - x1) * (styling.zoom ? styling.zoom : 1)}" height="${(y2 - y1) * (styling.zoom ? styling.zoom : 1)}"`;
        }
        let svg = `<svg${classes}${id} version="1.1" xmlns="http://www.w3.org/2000/svg"${sizing} viewBox="${x1} ${y1} ${x2 - x1} ${y2 - y1}">
`;
        svg += signSvgBody(swuSign);
        svg += "\n</svg>";
        return svg;
      }
      return blank2;
    };
    const signCanvas = function(swuSign) {
      const parsed = parse.sign(swuSign);
      if (parsed.spatials) {
        const canvas = document.createElement("canvas");
        const context2 = canvas.getContext("2d");
        let styling = parse$2(parsed.style);
        if (styling.detailsym) {
          styling.detailsym.forEach((sym) => {
            if (parsed.spatials[sym.index - 1]) {
              parsed.spatials[sym.index - 1].detail = sym.detail;
            }
          });
        }
        let x1 = Math.min(...parsed.spatials.map((spatial) => spatial.coord[0]));
        let y1 = Math.min(...parsed.spatials.map((spatial) => spatial.coord[1]));
        let x2 = parsed.max[0];
        let y2 = parsed.max[1];
        if (styling.padding) {
          x1 -= styling.padding;
          y1 -= styling.padding;
          x2 += styling.padding;
          y2 += styling.padding;
        }
        let sizing = 1;
        if (styling.zoom != "x") {
          sizing = styling.zoom;
        }
        let w = (x2 - x1) * sizing;
        let h = (y2 - y1) * sizing;
        canvas.width = w ? w : 1;
        canvas.height = h ? h : 1;
        if (styling.background) {
          context2.rect(0, 0, w, h);
          context2.fillStyle = styling.background;
          context2.fill();
        }
        const line = styling.detail && styling.detail[0] || "black";
        const fill = styling.detail && styling.detail[1] || "white";
        parsed.spatials.forEach((spatial) => {
          let symLine = line;
          if (spatial.detail) {
            symLine = spatial.detail[0];
          } else if (styling.colorize) {
            symLine = colorize(spatial.symbol);
          }
          let symFill = fill;
          if (spatial.detail && spatial.detail[1]) {
            symFill = spatial.detail[1];
          }
          context2.font = 30 * sizing + "px 'SuttonSignWritingFill'";
          context2.fillStyle = symFill;
          context2.fillText(symbolFill(spatial.symbol), (spatial.coord[0] - x1) * sizing, (spatial.coord[1] - y1) * sizing);
          context2.font = 30 * sizing + "px 'SuttonSignWritingLine'";
          context2.fillStyle = symLine;
          context2.fillText(symbolLine(spatial.symbol), (spatial.coord[0] - x1) * sizing, (spatial.coord[1] - y1) * sizing);
        });
        return canvas;
      }
    };
    const signPng = (swuSign) => {
      const canvas = signCanvas(swuSign);
      const png = canvas.toDataURL("image/png");
      canvas.remove();
      return png;
    };
    const signNormalize = (swuSign) => {
      const parsed = parse.sign(swuSign);
      if (parsed.spatials) {
        const symbolsizes = parsed.spatials.reduce((output, spatial) => {
          const size = symbolSize(spatial.symbol);
          output[spatial.symbol] = {
            width: size[0],
            height: size[1]
          };
          return output;
        }, {});
        const bbox = (symbols) => {
          const x1 = Math.min(...symbols.map((spatial) => spatial.coord[0]));
          const y1 = Math.min(...symbols.map((spatial) => spatial.coord[1]));
          const x2 = Math.max(...symbols.map((spatial) => spatial.coord[0] + parseInt(symbolsizes[spatial.symbol].width)));
          const y2 = Math.max(...symbols.map((spatial) => spatial.coord[1] + parseInt(symbolsizes[spatial.symbol].height)));
          return {
            x1,
            y1,
            x2,
            y2
          };
        };
        const hrange = ranges["hcenter"];
        const hsyms = parsed.spatials.filter((spatial) => {
          const dec = parseInt(spatial.symbol.slice(1, 4), 16);
          return hrange[0] <= dec && hrange[1] >= dec;
        });
        const vrange = ranges["vcenter"];
        const vsyms = parsed.spatials.filter((spatial) => {
          const dec = parseInt(spatial.symbol.slice(1, 4), 16);
          return vrange[0] <= dec && vrange[1] >= dec;
        });
        let abox = bbox(parsed.spatials);
        let max = [abox.x2, abox.y2];
        if (hsyms.length) {
          const hbox = bbox(hsyms);
          abox.x1 = hbox.x1;
          abox.x2 = hbox.x2;
        }
        if (vsyms.length) {
          const vbox = bbox(vsyms);
          abox.y1 = vbox.y1;
          abox.y2 = vbox.y2;
        }
        const offset = [parseInt((abox.x2 + abox.x1) / 2) - 500, parseInt((abox.y2 + abox.y1) / 2) - 500];
        const swuout = (parsed.sequence ? "𝠀" + parsed.sequence.join("") : "") + parsed.box + coord2swu([max[0] - offset[0], max[1] - offset[1]]) + parsed.spatials.map((spatial) => spatial.symbol + coord2swu([spatial.coord[0] - offset[0], spatial.coord[1] - offset[1]])).join("") + (parsed.style || "");
        return swuout;
      }
    };
    const columnSvg = (swuColumn, options) => {
      if (typeof options !== "object") options = {};
      const values = Object.assign(columnDefaults, options);
      let x1 = 0;
      let y1 = 0;
      let x2 = values.width;
      let y2 = values.height;
      let background = "";
      if (values.background) {
        background = `
  <rect x="${x1}" y="${y1}" width="${x2 - x1}" height="${y2 - y1}" style="fill:${values.background};" />`;
      }
      let sizing = ` width="${values.width}" height="${values.height}"`;
      let svg = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg"${sizing} viewBox="${x1} ${y1} ${x2 - x1} ${y2 - y1}">
  <text font-size="0">${x1}</text>${background}`;
      svg += swuColumn.map((item) => {
        const dash = item.text.indexOf("-");
        if (dash > 0) {
          const itemStyle = item.text.substring(dash);
          const newStyle = __spreadValues(__spreadValues({}, values.style), parse$2(itemStyle));
          item.text = item.text.replace(itemStyle, compose(newStyle));
        } else {
          item.text += compose(values.style);
        }
        item.zoom = item.zoom * values.style.zoom;
        return '<g transform="translate(' + item.x + "," + item.y + ") scale(" + item.zoom + ") translate(" + -item.minX + "," + -item.minY + ') ">' + (item.segment == "sign" ? signSvgBody(item.text) : symbolSvgBody(item.text)) + "</g>";
      }).join("\n");
      svg += "\n</svg>";
      return svg;
    };
    const columnsSvg = function(swuText, options) {
      if (typeof options !== "object") options = {};
      let values = columns(swuText, options);
      let cols = values.columns.map((col, i) => {
        return columnSvg(col, __spreadValues(__spreadValues({}, values.options), {
          width: values.widths[i]
        }));
      });
      return cols;
    };
    const columnCanvas = function(swuColumn, options) {
      if (typeof options !== "object") options = {};
      const values = Object.assign(columnDefaults, options);
      const canvas = document.createElement("canvas");
      canvas.width = values.width;
      canvas.height = values.height;
      const context2 = canvas.getContext("2d");
      if (values.background) {
        context2.rect(0, 0, values.width, values.height);
        context2.fillStyle = values.background;
        context2.fill();
      }
      swuColumn.map((item) => {
        const dash = item.text.indexOf("-");
        if (dash > 0) {
          const itemStyle = item.text.substring(dash);
          const newStyle = __spreadValues(__spreadValues({}, values.style), parse$2(itemStyle));
          item.text = item.text.replace(itemStyle, compose(newStyle));
        } else {
          item.text += compose(values.style);
        }
        item.zoom = item.zoom * values.style.zoom;
        let parsed = {};
        if (item.segment == "sign") {
          parsed = parse.sign(item.text);
        } else {
          let sym = parse.symbol(item.text);
          parsed.style = sym.style;
          parsed.spatials = [sym];
        }
        let styling = parse$2(parsed.style);
        if (styling.background) {
          context2.fillStyle = styling.background;
          context2.fillRect(item.x - styling.padding * item.zoom, item.y - styling.padding * item.zoom, (item.width + styling.padding * 2) * item.zoom, (item.height + styling.padding * 2) * item.zoom);
        }
        if (styling.detailsym) {
          styling.detailsym.forEach((sym) => {
            if (parsed.spatials[sym.index - 1]) {
              parsed.spatials[sym.index - 1].detail = sym.detail;
            }
          });
        }
        const line = styling.detail && styling.detail[0] || "black";
        const fill = styling.detail && styling.detail[1] || "white";
        parsed.spatials.forEach((spatial) => {
          let symLine = line;
          if (spatial.detail) {
            symLine = spatial.detail[0];
          } else if (styling.colorize) {
            symLine = colorize(spatial.symbol);
          }
          let symFill = fill;
          if (spatial.detail && spatial.detail[1]) {
            symFill = spatial.detail[1];
          }
          context2.font = 30 * item.zoom + "px 'SuttonSignWritingFill'";
          context2.fillStyle = symFill;
          context2.fillText(symbolFill(spatial.symbol), item.x + (spatial.coord[0] - item.minX) * item.zoom, item.y + (spatial.coord[1] - item.minY) * item.zoom);
          context2.font = 30 * item.zoom + "px 'SuttonSignWritingLine'";
          context2.fillStyle = symLine;
          context2.fillText(symbolLine(spatial.symbol), item.x + (spatial.coord[0] - item.minX) * item.zoom, item.y + (spatial.coord[1] - item.minY) * item.zoom);
        });
      });
      return canvas;
    };
    const columnPng = (swuColumn, options) => {
      const canvas = columnCanvas(swuColumn, options);
      const png = canvas.toDataURL("image/png");
      canvas.remove();
      return png;
    };
    const columnsPng = function(swuText, options) {
      if (typeof options !== "object") options = {};
      let values = columns(swuText, options);
      let cols = values.columns.map((col, i) => {
        return columnPng(col, __spreadValues(__spreadValues({}, values.options), {
          width: values.widths[i]
        }));
      });
      return cols;
    };
    exports2.columnPng = columnPng;
    exports2.columnSvg = columnSvg;
    exports2.columnsPng = columnsPng;
    exports2.columnsSvg = columnsSvg;
    exports2.signNormalize = signNormalize;
    exports2.signPng = signPng;
    exports2.signSvg = signSvg;
    exports2.signSvgBody = signSvgBody;
    exports2.symbolFill = symbolFill;
    exports2.symbolLine = symbolLine;
    exports2.symbolNormalize = symbolNormalize;
    exports2.symbolPng = symbolPng;
    exports2.symbolSize = symbolSize;
    exports2.symbolSvg = symbolSvg;
    exports2.symbolSvgBody = symbolSvgBody;
    exports2.symbolText = symbolText;
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
  });
});

export {
  swu
};
/*! Bundled license information:

@sutton-signwriting/sgnw-components/dist/esm/swu-a03963b7.js:
  (*!
   * The Sutton SignWriting Web Components
   *)
*/
//# sourceMappingURL=chunk-QQUHLBOP.js.map
