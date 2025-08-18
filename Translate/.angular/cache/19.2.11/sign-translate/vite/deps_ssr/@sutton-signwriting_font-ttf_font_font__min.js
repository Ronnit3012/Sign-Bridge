import { createRequire } from 'module';const require = createRequire(import.meta.url);
import "./chunk-5P6RLSS7.js";

// node_modules/@sutton-signwriting/font-ttf/font/font.min.mjs
var t = function(t2 = "") {
  if (!document.getElementById("SgnwFontCss")) {
    const n2 = document.createElement("style");
    n2.setAttribute("id", "SgnwFontCss"), n2.appendChild(document.createTextNode(`
  @font-face {
    font-family: "SuttonSignWritingLine";
    src: 
      local('SuttonSignWritingLine'),
      ${t2 ? `url('${t2}SuttonSignWritingLine.ttf') format('truetype'),` : ""}
      url('https://cdn.jsdelivr.net/npm/@sutton-signwriting/font-ttf@1.0.0/font/SuttonSignWritingLine.ttf') format('truetype');
  }
  @font-face {
    font-family: "SuttonSignWritingFill";
    src: 
      local('SuttonSignWritingFill'),
      ${t2 ? `url('${t2}SuttonSignWritingFill.ttf') format('truetype'),` : ""}
      url('https://cdn.jsdelivr.net/npm/@sutton-signwriting/font-ttf@1.0.0/font/SuttonSignWritingFill.ttf') format('truetype');
  }
  @font-face {
    font-family: "SuttonSignWritingOneD";
    src: 
      local('SuttonSignWritingOneD'),
      ${t2 ? `url('${t2}SuttonSignWritingOneD.ttf') format('truetype'),` : ""}
      url('https://cdn.jsdelivr.net/npm/@sutton-signwriting/font-ttf@1.0.0/font/SuttonSignWritingOneD.ttf') format('truetype');
  }
    `)), document.head.appendChild(n2);
  }
};
var n = {};
var e = 152;
var i;
var o = function(t2) {
  if (t2 in n) return [...n[t2]];
  if (!i) {
    const t3 = document.createElement("canvas");
    t3.width = e, t3.height = e, i = t3.getContext("2d", {
      willReadFrequently: true
    });
  }
  i.clearRect(0, 0, e, e), i.font = "60px 'SuttonSignWritingLine'", i.fillText(String.fromCodePoint(t2 + 983040), 0, 0);
  const o2 = i.getImageData(0, 0, e, e).data;
  let r2, l2, f2, c2;
  t: for (r2 = 151; r2 >= 0; r2--) for (l2 = 0; l2 < e; l2 += 1) for (c2 = 0; c2 < 4; c2 += 1) if (f2 = 4 * r2 + 4 * l2 * e + c2, o2[f2]) break t;
  var u2 = r2;
  t: for (l2 = 151; l2 >= 0; l2--) for (r2 = 0; r2 < u2; r2 += 1) for (c2 = 0; c2 < 4; c2 += 1) if (f2 = 4 * r2 + 4 * l2 * e + c2, o2[f2]) break t;
  var a2 = l2 + 1;
  if (u2 = Math.ceil(u2 / 2), a2 = Math.ceil(a2 / 2), 14394 == t2 && (u2 = 19), [10468, 10480, 10496, 10512, 10500, 10532, 10548, 10862, 10878, 10894, 11058, 11074, 11476, 11488, 11492, 11504, 11508, 11520, 10516, 10910, 10926, 11042, 11082, 10942].includes(t2) && (u2 = 20), 31921 == t2 && (u2 = 22), 38460 == t2 && (u2 = 23), [20164, 20212].includes(t2) && (u2 = 25), 31894 == t2 && (u2 = 28), 46698 == t2 && (u2 = 29), 29606 == t2 && (u2 = 30), 44855 == t2 && (u2 = 40), 32667 == t2 && (u2 = 50), [11088, 11474, 11490, 11506].includes(t2) && (a2 = 20), 6285 == t2 && (a2 = 21), 40804 == t2 && (a2 = 31), 41475 == t2 && (a2 = 36), 0 == u2 && 0 == a2) {
    const n2 = {
      9: [15, 30],
      10: [21, 30],
      11: [30, 15],
      12: [30, 21],
      13: [15, 30],
      14: [21, 30]
    };
    t2 in n2 && (u2 = n2[t2][0], a2 = n2[t2][1]);
  }
  return 0 != u2 || 0 != a2 ? (n[t2] = [u2, a2], [u2, a2]) : void 0;
};
var r = function(t2) {
  return String.fromCodePoint(t2 + 983040);
};
var l = function(t2) {
  return String.fromCodePoint(t2 + 1048576);
};
var f = function(t2) {
  return `    <text class="sym-fill" fill="white" style="pointer-events:none;font-family:'SuttonSignWritingFill';font-size:30px;">${l(t2)}</text>
    <text class="sym-line" fill="black" style="pointer-events:none;font-family:'SuttonSignWritingLine';font-size:30px;">${r(t2)}</text>`;
};
var c = function(t2) {
  let n2 = false, e2 = false;
  u(() => {
    n2 = true;
  }), a(() => {
    e2 = true;
  });
  const i2 = setInterval(function() {
    n2 && e2 && (clearInterval(i2), t2());
  }, 100);
};
var u = function(t2) {
  if (o(1)) t2();
  else {
    const n2 = setInterval(function() {
      o(1) && (clearInterval(n2), t2());
    }, 100);
  }
};
var a = function(t2) {
  const n2 = function() {
    const t3 = document.createElement("canvas");
    t3.width = 15, t3.height = 30;
    const n3 = t3.getContext("2d");
    n3.font = "30px 'SuttonSignWritingFill'", n3.fillText(l(1), 0, 0);
    return !n3.getImageData(0, 0, 15, 30).data.every((t4) => 0 === t4);
  };
  if (n2()) t2();
  else {
    const e2 = setInterval(function() {
      n2() && (clearInterval(e2), t2());
    }, 100);
  }
};
export {
  t as cssAppend,
  c as cssLoaded,
  a as cssLoadedFill,
  u as cssLoadedLine,
  l as symbolFill,
  r as symbolLine,
  o as symbolSize,
  f as symbolText
};
//# sourceMappingURL=@sutton-signwriting_font-ttf_font_font__min.js.map
