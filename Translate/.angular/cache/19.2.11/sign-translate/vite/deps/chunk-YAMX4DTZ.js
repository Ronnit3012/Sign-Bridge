import {
  commonjsGlobal,
  createCommonjsModule
} from "./chunk-5ZULVOZL.js";

// node_modules/@sutton-signwriting/sgnw-components/dist/esm/icons-472d6293.js
var convert = createCommonjsModule(function(module, exports) {
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
      "symbol": "(?:(?:\uD8C0[\uDC01-\uDFFF])|(?:[\uD8C1-\uD8FC][\uDC00-\uDFFF])|(?:\uD8FD[\uDC00-\uDC80]))",
      "coord": "(?:\uD836[\uDC0C-\uDDFF]){2}",
      "sort": "𝠀",
      "box": "\uD836[\uDC01-\uDC04]"
    };
    re.prefix = `(?:${re.sort}(?:${re.symbol})+)`;
    re.spatial = `${re.symbol}${re.coord}`;
    re.signbox = `${re.box}${re.coord}(?:${re.spatial})*`;
    re.sign = `${re.prefix}?${re.signbox}`;
    re.sortable = `${re.prefix}${re.signbox}`;
    const swu2mark = (swuMark) => {
      return {
        "𝠀": "A",
        "𝠁": "B",
        "𝠂": "L",
        "𝠃": "M",
        "𝠄": "R"
      }[swuMark];
    };
    const mark2swu = (fswMark) => {
      return {
        "A": "𝠀",
        "B": "𝠁",
        "L": "𝠂",
        "M": "𝠃",
        "R": "𝠄"
      }[fswMark];
    };
    const swu2num = (swuNum) => parseInt(swuNum.codePointAt(0)) - 120844 + 250;
    const num2swu = (num) => String.fromCodePoint(120844 + parseInt(num) - 250);
    const swu2coord = (swuCoord) => [swu2num(swuCoord.slice(0, 2)), swu2num(swuCoord.slice(2, 4))];
    const coord2swu = (coord) => coord.map((num) => num2swu(num)).join("");
    const fsw2coord = (fswCoord) => fswCoord.split("x").map((num) => parseInt(num));
    const coord2fsw = (coord) => coord.join("x");
    const swu2code = (swuSym) => parseInt(swuSym.codePointAt(0));
    const code2swu = (code) => String.fromCodePoint(code);
    const swu2id = (swuSym) => swu2code(swuSym) - 262144;
    const id2swu = (id) => code2swu(id + 262144);
    const key2id = (key) => 1 + (parseInt(key.slice(1, 4), 16) - 256) * 96 + parseInt(key.slice(4, 5), 16) * 16 + parseInt(key.slice(5, 6), 16);
    const id2key = (id) => {
      const symcode = id - 1;
      const base = parseInt(symcode / 96);
      const fill = parseInt((symcode - base * 96) / 16);
      const rotation = parseInt(symcode - base * 96 - fill * 16);
      return "S" + (base + 256).toString(16) + fill.toString(16) + rotation.toString(16);
    };
    const swu2key = (swuSym) => {
      const symcode = swu2code(swuSym) - 262145;
      const base = parseInt(symcode / 96);
      const fill = parseInt((symcode - base * 96) / 16);
      const rotation = parseInt(symcode - base * 96 - fill * 16);
      return "S" + (base + 256).toString(16) + fill.toString(16) + rotation.toString(16);
    };
    const key2swu = (key) => code2swu(262145 + (parseInt(key.slice(1, 4), 16) - 256) * 96 + parseInt(key.slice(4, 5), 16) * 16 + parseInt(key.slice(5, 6), 16));
    const swu2fsw = (swuText) => {
      if (!swuText) return "";
      let fsw = swuText.replace(/𝠀/g, "A").replace(/𝠁/g, "B").replace(/𝠂/g, "L").replace(/𝠃/g, "M").replace(/𝠄/g, "R");
      const syms = fsw.match(new RegExp(re.symbol, "g"));
      if (syms) {
        syms.forEach(function(sym) {
          fsw = fsw.replace(sym, swu2key(sym));
        });
      }
      const coords = fsw.match(new RegExp(re.coord, "g"));
      if (coords) {
        coords.forEach(function(coord) {
          fsw = fsw.replace(coord, swu2coord(coord).join("x"));
        });
      }
      return fsw;
    };
    const fsw2swu = (fswText) => {
      if (!fswText) return "";
      const prefixes = fswText.match(new RegExp(re$1.prefix, "g"));
      if (prefixes) {
        prefixes.forEach(function(prefix) {
          fswText = fswText.replace(prefix, "𝠀" + prefix.slice(1).match(/.{6}/g).map((key) => key2swu(key)).join(""));
        });
      }
      const boxes = fswText.match(new RegExp(re$1.box + re$1.coord, "g"));
      if (boxes) {
        boxes.forEach(function(boxes2) {
          fswText = fswText.replace(boxes2, mark2swu(boxes2.slice(0, 1)) + coord2swu(fsw2coord(boxes2.slice(1, 8))));
        });
      }
      const spatials = fswText.match(new RegExp(re$1.spatial, "g"));
      if (spatials) {
        spatials.forEach(function(spatial) {
          fswText = fswText.replace(spatial, key2swu(spatial.slice(0, 6)) + coord2swu(fsw2coord(spatial.slice(6, 13))));
        });
      }
      return fswText;
    };
    exports2.code2swu = code2swu;
    exports2.coord2fsw = coord2fsw;
    exports2.coord2swu = coord2swu;
    exports2.fsw2coord = fsw2coord;
    exports2.fsw2swu = fsw2swu;
    exports2.id2key = id2key;
    exports2.id2swu = id2swu;
    exports2.key2id = key2id;
    exports2.key2swu = key2swu;
    exports2.mark2swu = mark2swu;
    exports2.num2swu = num2swu;
    exports2.swu2code = swu2code;
    exports2.swu2coord = swu2coord;
    exports2.swu2fsw = swu2fsw;
    exports2.swu2id = swu2id;
    exports2.swu2key = swu2key;
    exports2.swu2mark = swu2mark;
    exports2.swu2num = swu2num;
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
  });
});
var HomeIcon = "<svg viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z'></path></svg>";
var ChevronUpIcon = "<svg viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1683 1331l-166 165q-19 19-45 19t-45-19l-531-531-531 531q-19 19-45 19t-45-19l-166-165q-19-19-19-45.5t19-45.5l742-741q19-19 45-19t45 19l742 741q19 19 19 45.5t-19 45.5z'/></svg>";
var ArrowUpIcon = "<svg viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z'/></svg>";
var ArrowDownIcon = "<svg viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1675 832q0 53-37 90l-651 652q-39 37-91 37-53 0-90-37l-651-652q-38-36-38-90 0-53 38-91l74-75q39-37 91-37 53 0 90 37l294 294v-704q0-52 38-90t90-38h128q52 0 90 38t38 90v704l294-294q37-37 90-37 52 0 91 37l75 75q37 39 37 91z'/></svg>";
var ArrowLeftIcon = "<svg viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1664 896v128q0 53-32.5 90.5t-84.5 37.5h-704l293 294q38 36 38 90t-38 90l-75 76q-37 37-90 37-52 0-91-37l-651-652q-37-37-37-90 0-52 37-91l651-650q38-38 91-38 52 0 90 38l75 74q38 38 38 91t-38 91l-293 293h704q52 0 84.5 37.5t32.5 90.5z'/></svg>";
var ArrowRightIcon = "<svg viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293h-704q-52 0-84.5-37.5t-32.5-90.5v-128q0-53 32.5-90.5t84.5-37.5h704l-293-294q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z'/></svg>";

export {
  convert,
  HomeIcon,
  ChevronUpIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon
};
/*! Bundled license information:

@sutton-signwriting/sgnw-components/dist/esm/icons-472d6293.js:
  (*!
   * The Sutton SignWriting Web Components
   *)
*/
//# sourceMappingURL=chunk-YAMX4DTZ.js.map
