import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  __spreadProps,
  __spreadValues
} from "./chunk-5P6RLSS7.js";

// node_modules/@sutton-signwriting/font-ttf/fsw/fsw.mjs
var key2id = (key) => key === "S00000" ? 0 : 1 + (parseInt(key.slice(1, 4), 16) - 256) * 96 + parseInt(key.slice(4, 5), 16) * 16 + parseInt(key.slice(5, 6), 16);
var re$1 = {
  "null": "S00000",
  "symbol": "S[123][0-9a-f]{2}[0-5][0-9a-f]",
  "coord": "[0-9]{3}x[0-9]{3}",
  "sort": "A",
  "box": "[BLMR]"
};
re$1.nullorsymbol = `(?:${re$1.null}|${re$1.symbol})`;
re$1.prefix = `(?:${re$1.sort}${re$1.nullorsymbol}+)`;
re$1.spatial = `${re$1.symbol}${re$1.coord}`;
re$1.signbox = `${re$1.box}${re$1.coord}(?:${re$1.spatial})*`;
re$1.sign = `${re$1.prefix}?${re$1.signbox}`;
re$1.sortable = `${re$1.prefix}${re$1.signbox}`;
var re$2 = {
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
var prefixColor$1 = (color) => {
  const regex = new RegExp(`^${re$2.colorhex}$`);
  return (regex.test(color) ? "#" : "") + color;
};
var definedProps$1 = (obj) => Object.fromEntries(Object.entries(obj).filter(([k, v]) => v !== void 0));
var parse$1 = (styleString) => {
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
var fsw2coord = (fswCoord) => fswCoord.split("x").map((num) => parseInt(num));
var parse$2 = {
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
    const regex = `^(${re$1.symbol})(${re$1.coord})?(${re$2.full})?`;
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
    const regex = `^(${re$1.prefix})?(${re$1.signbox})(${re$2.full})?`;
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
    const regex = `(${re$1.sign}(${re$2.full})?|${re$1.spatial}(${re$2.full})?)`;
    const matches = fswText.match(new RegExp(regex, "g"));
    return matches ? [...matches] : [];
  }
};
var compose$1 = {
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
        const styleStr = typeof fswSymObject.style === "string" && (fswSymObject.style.match(re$2.full) || [""])[0] || "";
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
      prefix = fswSignObject.sequence.map((key) => (key.match(re$1.nullorsymbol) || [""])[0]).join("");
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
    const styleStr = typeof fswSignObject.style === "string" && (fswSignObject.style.match(re$2.full) || [""])[0] || "";
    return prefix + box + max + signbox + styleStr;
  }
};
var info = (fsw) => {
  let lanes = {
    "B": 0,
    "L": -1,
    "M": 0,
    "R": 1
  };
  let parsed = parse$2.sign(fsw);
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
    parsed = parse$2.symbol(fsw);
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
var columnDefaults = {
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
var columnDefaultsMerge = (options) => {
  if (typeof options !== "object") options = {};
  return __spreadProps(__spreadValues(__spreadValues({}, columnDefaults), options), {
    punctuation: __spreadValues(__spreadValues({}, columnDefaults.punctuation), options.punctuation),
    style: __spreadValues(__spreadValues({}, columnDefaults.style), options.style)
  });
};
var columns = (fswText, options) => {
  if (typeof fswText !== "string") return {};
  const values = columnDefaultsMerge(options);
  let input = parse$2.text(fswText);
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
var category = [256, 517, 759, 767, 877, 895, 903];
var ranges = {
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
var colors = ["#0000CC", "#CC0000", "#FF0099", "#006600", "#000000", "#884411", "#FF9900"];
var colorize = (key) => {
  const parsed = parse$2.symbol(key);
  let color = "#000000";
  if (parsed.symbol) {
    const dec = parseInt(parsed.symbol.slice(1, 4), 16);
    const index = category.findIndex((val) => val > dec);
    color = colors[index < 0 ? 6 : index - 1];
  }
  return color;
};
var sizes = {};
var zoom = 2;
var bound = 76 * zoom;
var context;
var symbolSize$1 = function(id) {
  if (id in sizes) {
    return [...sizes[id]];
  }
  if (!context) {
    const canvaser = document.createElement("canvas");
    canvaser.width = bound;
    canvaser.height = bound;
    context = canvaser.getContext("2d", {
      willReadFrequently: true
    });
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
var symbolSize = function(fsw) {
  const parsed = parse$2.symbol(fsw);
  if (!parsed.symbol) {
    return void 0;
  }
  return symbolSize$1(key2id(fsw));
};
var symbolLine$1 = function(id) {
  return String.fromCodePoint(id + 983040);
};
var symbolFill$1 = function(id) {
  return String.fromCodePoint(id + 1048576);
};
var symbolText$1 = function(id) {
  return `    <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">${symbolFill$1(id)}</text>
    <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">${symbolLine$1(id)}</text>`;
};
var symbolLine = function(fsw) {
  return symbolLine$1(key2id(fsw));
};
var symbolFill = function(fsw) {
  return symbolFill$1(key2id(fsw));
};
var symbolText = function(fsw) {
  return symbolText$1(key2id(fsw));
};
var re = {
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
var prefixColor = (color) => {
  const regex = new RegExp(`^${re.colorhex}$`);
  return (regex.test(color) ? "#" : "") + color;
};
var definedProps = (obj) => Object.fromEntries(Object.entries(obj).filter(([k, v]) => v !== void 0));
var parse = (styleString) => {
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
var compose = (styleObject) => {
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
  const zoom2 = styleObject.zoom === "x" ? "x" : parseFloat(styleObject.zoom);
  style1 += !zoom2 || zoom2 <= 0 ? "" : "Z" + zoom2;
  let style2 = "";
  const detailsym = !styleObject.detailsym || !Array.isArray(styleObject.detailsym) ? [] : styleObject.detailsym.map((styleObject2) => {
    const index = parseInt(styleObject2.index);
    if (!index || index <= 0 || index > 99) return "";
    let style = "D" + (index > 9 ? index : "0" + index);
    const detail12 = !styleObject2.detail || !styleObject2.detail[0] ? void 0 : styleObject2.detail[0].match(re.colorbase)[0];
    const detail22 = !styleObject2.detail || !styleObject2.detail[1] ? void 0 : styleObject2.detail[1].match(re.colorbase)[0];
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
  const classes = !styleObject.classes || !(typeof styleObject.classes === "string") ? void 0 : styleObject.classes.match(re.classes)[0];
  style3 += !classes ? "" : classes;
  const id = !styleObject.id || !(typeof styleObject.id === "string") ? void 0 : styleObject.id.match(re.id)[0];
  style3 += classes || id ? "!" : "";
  style3 += !id ? "" : id + "!";
  return style1 + (style2 || style3 ? "-" + style2 : "") + (style3 ? "-" + style3 : "");
};
var symbolSvgBody = (fswSym) => {
  const parsed = parse$2.symbol(fswSym);
  const blank2 = "";
  if (!parsed.symbol) return blank2;
  let styling = parse(parsed.style);
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
  return `  <text font-size="0">${fswSym}</text>${background}
${symSvg}`;
};
var symbolSvg = (fswSym) => {
  const parsed = parse$2.symbol(fswSym);
  const blank2 = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>';
  if (!parsed.symbol) return blank2;
  let styling = parse(parsed.style);
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
${symbolSvgBody(fswSym)}
</svg>`;
};
var symbolCanvas = function(fswSym) {
  const parsed = parse$2.symbol(fswSym);
  if (parsed.symbol) {
    let size = symbolSize(parsed.symbol);
    if (size) {
      const canvas = document.createElement("canvas");
      const context2 = canvas.getContext("2d");
      let styling = parse(parsed.style);
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
var symbolPng = (fswSym) => {
  const canvas = symbolCanvas(fswSym);
  const png = canvas.toDataURL("image/png");
  canvas.remove();
  return png;
};
var blank = null;
var symbolNormalize = (fswSym) => {
  const parsed = parse$2.symbol(fswSym);
  if (parsed.symbol) {
    let size = symbolSize(parsed.symbol);
    if (size) {
      return `${parsed.symbol}${500 - parseInt((size[0] + 1) / 2)}x${500 - parseInt((size[1] + 1) / 2)}${parsed.style || ""}`;
    }
  } else {
    return blank;
  }
};
var symbolMirror = (fswSym) => {
  let parsed = parse$2.symbol(fswSym);
  if (!parsed.symbol) {
    return fswSym;
  }
  const size = symbolSize(parsed.symbol);
  if (!size) {
    return fswSym;
  }
  const base = parsed.symbol.slice(0, 4);
  let fill = parsed.symbol.slice(4, 5);
  let rot = parseInt(parsed.symbol.slice(5, 6), 16);
  const key1 = base + "08";
  const key2 = base + "18";
  var rAdd;
  if (symbolSize(key1) || symbolSize(key2)) {
    rAdd = 8;
  } else {
    if (rot === 0 || rot == 4) {
      rAdd = 0;
    }
    if (rot == 1 || rot == 5) {
      rAdd = 6;
    }
    if (rot == 2 || rot == 6) {
      rAdd = 4;
    }
    if (rot == 3 || rot == 7) {
      rAdd = 2;
    }
  }
  let key = "";
  while (!key || !symbolSize(key)) {
    rot += rAdd;
    if (rot > 7 && rAdd < 8) {
      rot = rot - 8;
    }
    if (rot > 15) {
      rot = rot - 16;
    }
    key = base + fill + rot.toString(16);
  }
  parsed.symbol = key;
  return compose$1.symbol(parsed);
};
var symbolInvert = (fswSym) => {
  let parsed = parse$2.symbol(fswSym);
  if (!parsed.symbol) {
    return fswSym;
  }
  const size = symbolSize(parsed.symbol);
  if (!size) {
    return fswSym;
  }
  const base = parsed.symbol.slice(0, 4);
  let fill = parsed.symbol.slice(4, 5);
  let rot = parsed.symbol.slice(5, 6);
  const key1 = base + "08";
  const key2 = base + "18";
  let map;
  if (symbolSize(key1) || symbolSize(key2)) {
    map = {
      "0": "c",
      "1": "d",
      "2": "e",
      "3": "f",
      "4": "8",
      "5": "9",
      "6": "a",
      "7": "b",
      "c": "0",
      "d": "1",
      "e": "2",
      "f": "3",
      "8": "4",
      "9": "5",
      "a": "6",
      "b": "7"
    };
  } else {
    map = {
      "0": "4",
      "1": "3",
      "2": "2",
      "3": "1",
      "4": "0",
      "5": "7",
      "6": "6",
      "7": "5"
    };
  }
  if (rot in map) {
    const key = base + fill + map[rot];
    if (symbolSize(key)) {
      parsed.symbol = key;
    }
  }
  return compose$1.symbol(parsed);
};
var symbolRotate = (fswSym, clockwise = true) => {
  let parsed = parse$2.symbol(fswSym);
  if (!parsed.symbol) {
    return fswSym;
  }
  const size = symbolSize(parsed.symbol);
  if (!size) {
    return fswSym;
  }
  const step = clockwise ? 1 : -1;
  const base = parsed.symbol.slice(0, 4);
  let fill = parsed.symbol.slice(4, 5);
  let rot = parseInt(parsed.symbol.slice(5, 6), 16);
  let key = "";
  while (!key || !symbolSize(key)) {
    if (rot > 7) {
      rot += step;
      if (rot > 15) {
        rot = 8;
      }
      if (rot < 8) {
        rot = 15;
      }
      key = base + fill + rot.toString(16);
    } else {
      rot -= step;
      if (rot > 7) {
        rot = 0;
      }
      if (rot < 0) {
        rot = 7;
      }
      key = base + fill + rot;
    }
  }
  parsed.symbol = key;
  return compose$1.symbol(parsed);
};
var symbolFlop = (fswSym, positive = true) => {
  let parsed = parse$2.symbol(fswSym);
  if (!parsed.symbol) {
    return fswSym;
  }
  const size = symbolSize(parsed.symbol);
  if (!size) {
    return fswSym;
  }
  const step = positive ? 1 : -1;
  const base = parsed.symbol.slice(0, 4);
  let fill = parseInt(parsed.symbol.slice(4, 5));
  let rot = parsed.symbol.slice(5, 6);
  let key = "";
  while (!key || !symbolSize(key)) {
    fill += step;
    if (fill > 5) {
      fill = 0;
    }
    if (fill < 0) {
      fill = 5;
    }
    key = base + fill + rot;
  }
  parsed.symbol = key;
  return compose$1.symbol(parsed);
};
var symbolScroll = (fswSym, positive = true) => {
  let parsed = parse$2.symbol(fswSym);
  if (!parsed.symbol) {
    return fswSym;
  }
  const size = symbolSize(parsed.symbol);
  if (!size) {
    return fswSym;
  }
  const step = positive ? 1 : -1;
  const base = parseInt(parsed.symbol.slice(1, 4), 16) + step;
  const fill = parsed.symbol.slice(4, 5);
  const rot = parsed.symbol.slice(5, 6);
  const key = "S" + base.toString(16) + fill + rot;
  if (symbolSize(key)) {
    parsed.symbol = key;
  }
  return compose$1.symbol(parsed);
};
var signSvgBody = (fswSign) => {
  let parsed = parse$2.sign(fswSign);
  const blank2 = "";
  if (parsed.spatials) {
    let styling = parse(parsed.style);
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
    let svg = `  <text font-size="0">${fswSign}</text>${background}`;
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
var signSvg = (fswSign) => {
  let parsed = parse$2.sign(fswSign);
  const blank2 = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>';
  if (parsed.spatials) {
    let styling = parse(parsed.style);
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
    svg += signSvgBody(fswSign);
    svg += "\n</svg>";
    return svg;
  }
  return blank2;
};
var signCanvas = function(fswSign) {
  const parsed = parse$2.sign(fswSign);
  if (parsed.spatials) {
    const canvas = document.createElement("canvas");
    const context2 = canvas.getContext("2d");
    let styling = parse(parsed.style);
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
var signPng = (fswSign) => {
  const canvas = signCanvas(fswSign);
  const png = canvas.toDataURL("image/png");
  canvas.remove();
  return png;
};
var signNormalize = (fswSign) => {
  const parsed = parse$2.sign(fswSign);
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
    const fswout = (parsed.sequence ? "A" + parsed.sequence.join("") : "") + parsed.box + (max[0] - offset[0]) + "x" + (max[1] - offset[1]) + parsed.spatials.map((spatial) => spatial.symbol + (spatial.coord[0] - offset[0]) + "x" + (spatial.coord[1] - offset[1])).join("") + (parsed.style || "");
    return fswout;
  }
};
var columnSvg = (fswColumn, options) => {
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
  ${background}`;
  svg += fswColumn.map((item) => {
    const dash = item.text.indexOf("-");
    if (dash > 0) {
      const itemStyle = item.text.substring(dash);
      const newStyle = __spreadValues(__spreadValues({}, values.style), parse(itemStyle));
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
var columnsSvg = function(fswText, options) {
  if (typeof options !== "object") options = {};
  let values = columns(fswText, options);
  let cols = values.columns.map((col, i) => {
    return columnSvg(col, __spreadValues(__spreadValues({}, values.options), {
      width: values.widths[i]
    }));
  });
  return cols;
};
var columnCanvas = function(fswColumn, options) {
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
  fswColumn.map((item) => {
    const dash = item.text.indexOf("-");
    if (dash > 0) {
      const itemStyle = item.text.substring(dash);
      const newStyle = __spreadValues(__spreadValues({}, values.style), parse(itemStyle));
      item.text = item.text.replace(itemStyle, compose(newStyle));
    } else {
      item.text += compose(values.style);
    }
    item.zoom = item.zoom * values.style.zoom;
    let parsed = {};
    if (item.segment == "sign") {
      parsed = parse$2.sign(item.text);
    } else {
      let sym = parse$2.symbol(item.text);
      parsed.style = sym.style;
      parsed.spatials = [sym];
    }
    let styling = parse(parsed.style);
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
var columnPng = (fswColumn, options) => {
  const canvas = columnCanvas(fswColumn, options);
  const png = canvas.toDataURL("image/png");
  canvas.remove();
  return png;
};
var columnsPng = function(fswText, options) {
  if (typeof options !== "object") options = {};
  let values = columns(fswText, options);
  let cols = values.columns.map((col, i) => {
    return columnPng(col, __spreadValues(__spreadValues({}, values.options), {
      width: values.widths[i]
    }));
  });
  return cols;
};
export {
  columnPng,
  columnSvg,
  columnsPng,
  columnsSvg,
  signNormalize,
  signPng,
  signSvg,
  signSvgBody,
  symbolFill,
  symbolFlop,
  symbolInvert,
  symbolLine,
  symbolMirror,
  symbolNormalize,
  symbolPng,
  symbolRotate,
  symbolScroll,
  symbolSize,
  symbolSvg,
  symbolSvgBody,
  symbolText
};
//# sourceMappingURL=@sutton-signwriting_font-ttf_fsw_fsw.js.map
