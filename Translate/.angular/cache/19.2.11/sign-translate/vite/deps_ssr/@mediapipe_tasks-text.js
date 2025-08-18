import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  __async
} from "./chunk-5P6RLSS7.js";

// node_modules/@mediapipe/tasks-text/text_bundle.mjs
var t = "undefined" != typeof self ? self : {};
function e() {
  throw Error("Invalid UTF8");
}
function n(t2, e2) {
  return e2 = String.fromCharCode.apply(null, e2), null == t2 ? e2 : t2 + e2;
}
var r;
var i;
var o = "undefined" != typeof TextDecoder;
var s;
var a = "undefined" != typeof TextEncoder;
function u(t2) {
  if (a) t2 = (s ||= new TextEncoder()).encode(t2);
  else {
    let n2 = 0;
    const r2 = new Uint8Array(3 * t2.length);
    for (let i2 = 0; i2 < t2.length; i2++) {
      var e2 = t2.charCodeAt(i2);
      if (e2 < 128) r2[n2++] = e2;
      else {
        if (e2 < 2048) r2[n2++] = e2 >> 6 | 192;
        else {
          if (e2 >= 55296 && e2 <= 57343) {
            if (e2 <= 56319 && i2 < t2.length) {
              const o2 = t2.charCodeAt(++i2);
              if (o2 >= 56320 && o2 <= 57343) {
                e2 = 1024 * (e2 - 55296) + o2 - 56320 + 65536, r2[n2++] = e2 >> 18 | 240, r2[n2++] = e2 >> 12 & 63 | 128, r2[n2++] = e2 >> 6 & 63 | 128, r2[n2++] = 63 & e2 | 128;
                continue;
              }
              i2--;
            }
            e2 = 65533;
          }
          r2[n2++] = e2 >> 12 | 224, r2[n2++] = e2 >> 6 & 63 | 128;
        }
        r2[n2++] = 63 & e2 | 128;
      }
    }
    t2 = n2 === r2.length ? r2 : r2.subarray(0, n2);
  }
  return t2;
}
var c;
var l;
t: {
  for (h = ["CLOSURE_FLAGS"], f = t, d = 0; d < h.length; d++) if (null == (f = f[h[d]])) {
    l = null;
    break t;
  }
  l = f;
}
var h;
var f;
var d;
var g;
var p = l && l[610401301];
c = null != p && p;
var m = t.navigator;
function y(t2) {
  return !!c && !!g && g.brands.some(({
    brand: e2
  }) => e2 && -1 != e2.indexOf(t2));
}
function b(e2) {
  var n2;
  return (n2 = t.navigator) && (n2 = n2.userAgent) || (n2 = ""), -1 != n2.indexOf(e2);
}
function v() {
  return !!c && !!g && g.brands.length > 0;
}
function w() {
  return v() ? y("Chromium") : (b("Chrome") || b("CriOS")) && !(!v() && b("Edge")) || b("Silk");
}
g = m && m.userAgentData || null;
var _ = !v() && (b("Trident") || b("MSIE"));
!b("Android") || w(), w(), b("Safari") && (w() || !v() && b("Coast") || !v() && b("Opera") || !v() && b("Edge") || (v() ? y("Microsoft Edge") : b("Edg/")) || v() && y("Opera"));
var S = {};
var A = null;
function E(t2) {
  const e2 = t2.length;
  let n2 = 3 * e2 / 4;
  n2 % 3 ? n2 = Math.floor(n2) : -1 != "=.".indexOf(t2[e2 - 1]) && (n2 = -1 != "=.".indexOf(t2[e2 - 2]) ? n2 - 2 : n2 - 1);
  const r2 = new Uint8Array(n2);
  let i2 = 0;
  return function(t3, e3) {
    function n3(e4) {
      for (; r3 < t3.length; ) {
        const e5 = t3.charAt(r3++), n4 = A[e5];
        if (null != n4) return n4;
        if (!/^[\s\xa0]*$/.test(e5)) throw Error("Unknown base64 encoding at char: " + e5);
      }
      return e4;
    }
    I();
    let r3 = 0;
    for (; ; ) {
      const t4 = n3(-1), r4 = n3(0), i3 = n3(64), o2 = n3(64);
      if (64 === o2 && -1 === t4) break;
      e3(t4 << 2 | r4 >> 4), 64 != i3 && (e3(r4 << 4 & 240 | i3 >> 2), 64 != o2 && e3(i3 << 6 & 192 | o2));
    }
  }(t2, function(t3) {
    r2[i2++] = t3;
  }), i2 !== n2 ? r2.subarray(0, i2) : r2;
}
function I() {
  if (!A) {
    A = {};
    var t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), e2 = ["+/=", "+/", "-_=", "-_.", "-_"];
    for (let n2 = 0; n2 < 5; n2++) {
      const r2 = t2.concat(e2[n2].split(""));
      S[n2] = r2;
      for (let t3 = 0; t3 < r2.length; t3++) {
        const e3 = r2[t3];
        void 0 === A[e3] && (A[e3] = t3);
      }
    }
  }
}
var T = "undefined" != typeof Uint8Array;
var x = !_ && "function" == typeof btoa;
function U(t2) {
  if (!x) {
    var e2;
    void 0 === e2 && (e2 = 0), I(), e2 = S[e2];
    var n2 = Array(Math.floor(t2.length / 3)), r2 = e2[64] || "";
    let u2 = 0, c2 = 0;
    for (; u2 < t2.length - 2; u2 += 3) {
      var i2 = t2[u2], o2 = t2[u2 + 1], s2 = t2[u2 + 2], a2 = e2[i2 >> 2];
      i2 = e2[(3 & i2) << 4 | o2 >> 4], o2 = e2[(15 & o2) << 2 | s2 >> 6], s2 = e2[63 & s2], n2[c2++] = a2 + i2 + o2 + s2;
    }
    switch (a2 = 0, s2 = r2, t2.length - u2) {
      case 2:
        s2 = e2[(15 & (a2 = t2[u2 + 1])) << 2] || r2;
      case 1:
        t2 = t2[u2], n2[c2] = e2[t2 >> 2] + e2[(3 & t2) << 4 | a2 >> 4] + s2 + r2;
    }
    return n2.join("");
  }
  for (e2 = "", n2 = 0, r2 = t2.length - 10240; n2 < r2; ) e2 += String.fromCharCode.apply(null, t2.subarray(n2, n2 += 10240));
  return e2 += String.fromCharCode.apply(null, n2 ? t2.subarray(n2) : t2), btoa(e2);
}
var P = /[-_.]/g;
var B = {
  "-": "+",
  _: "/",
  ".": "="
};
function L(t2) {
  return B[t2] || "";
}
function O(t2) {
  if (!x) return E(t2);
  P.test(t2) && (t2 = t2.replace(P, L)), t2 = atob(t2);
  const e2 = new Uint8Array(t2.length);
  for (let n2 = 0; n2 < t2.length; n2++) e2[n2] = t2.charCodeAt(n2);
  return e2;
}
function N(t2) {
  return T && null != t2 && t2 instanceof Uint8Array;
}
var k = {};
function F() {
  return C ||= new j(null, k);
}
function V(t2) {
  M(k);
  var e2 = t2.g;
  return null == (e2 = null == e2 || N(e2) ? e2 : "string" == typeof e2 ? O(e2) : null) ? e2 : t2.g = e2;
}
var j = class {
  i() {
    return new Uint8Array(V(this) || 0);
  }
  constructor(t2, e2) {
    if (M(e2), this.g = t2, null != t2 && 0 === t2.length) throw Error("ByteString should be constructed with non-empty values");
  }
};
var C;
var G;
function M(t2) {
  if (t2 !== k) throw Error("illegal external caller");
}
function D(t2, e2) {
  t2.__closure__error__context__984382 || (t2.__closure__error__context__984382 = {}), t2.__closure__error__context__984382.severity = e2;
}
function $() {
  const t2 = Error("int32");
  return D(t2, "warning"), t2;
}
var z = "function" == typeof Symbol && "symbol" == typeof Symbol();
var R = /* @__PURE__ */ new Set();
function W(t2, e2, n2 = false, r2 = false) {
  return t2 = "function" == typeof Symbol && "symbol" == typeof Symbol() ? r2 && Symbol.for && t2 ? Symbol.for(t2) : null != t2 ? Symbol(t2) : Symbol() : e2, n2 && R.add(t2), t2;
}
var H = W("jas", void 0, true, true);
var q = W(void 0, "2ex");
var J = W(void 0, "1oa", true);
var K = W(void 0, Symbol(), true);
var X = z ? H : "L";
var Y = {
  L: {
    value: 0,
    configurable: true,
    writable: true,
    enumerable: false
  }
};
var Q = Object.defineProperties;
function Z(t2, e2) {
  z || X in t2 || Q(t2, Y), t2[X] |= e2;
}
function tt(t2, e2) {
  z || X in t2 || Q(t2, Y), t2[X] = e2;
}
function et(t2, e2) {
  tt(e2, -30975 & (0 | t2));
}
function nt(t2, e2) {
  tt(e2, -30941 & (34 | t2));
}
function rt() {
  return "function" == typeof BigInt;
}
function it(t2) {
  return Array.prototype.slice.call(t2);
}
var ot;
var st = {};
var at = {};
function ut(t2) {
  return !(!t2 || "object" != typeof t2 || t2.g !== at);
}
function ct(t2) {
  return null !== t2 && "object" == typeof t2 && !Array.isArray(t2) && t2.constructor === Object;
}
function lt(t2, e2) {
  if (null != t2) {
    if ("string" == typeof t2) t2 = t2 ? new j(t2, k) : F();
    else if (t2.constructor !== j) if (N(t2)) t2 = t2.length ? new j(new Uint8Array(t2), k) : F();
    else {
      if (!e2) throw Error();
      t2 = void 0;
    }
  }
  return t2;
}
function ht(t2) {
  return !(!Array.isArray(t2) || t2.length) && !!(1 & (0 | t2[X]));
}
var ft = [];
function dt(t2) {
  if (2 & t2) throw Error();
}
function gt(t2) {
  return K ? t2[K] : void 0;
}
tt(ft, 55), ot = Object.freeze(ft);
var pt = Object.freeze({});
var mt = "function" == typeof t.BigInt && "bigint" == typeof t.BigInt(0);
var yt = (t2) => mt ? t2 >= vt && t2 <= _t : "-" === t2[0] ? St(t2, bt) : St(t2, wt);
var bt = Number.MIN_SAFE_INTEGER.toString();
var vt = mt ? BigInt(Number.MIN_SAFE_INTEGER) : void 0;
var wt = Number.MAX_SAFE_INTEGER.toString();
var _t = mt ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;
function St(t2, e2) {
  if (t2.length > e2.length) return false;
  if (t2.length < e2.length || t2 === e2) return true;
  for (let n2 = 0; n2 < t2.length; n2++) {
    const r2 = t2[n2], i2 = e2[n2];
    if (r2 > i2) return false;
    if (r2 < i2) return true;
  }
}
var At = "function" == typeof Uint8Array.prototype.slice;
var Et;
var It = 0;
var Tt = 0;
function xt(t2) {
  const e2 = t2 >>> 0;
  It = e2, Tt = (t2 - e2) / 4294967296 >>> 0;
}
function Ut(t2) {
  if (t2 < 0) {
    xt(-t2);
    const [e2, n2] = Ft(It, Tt);
    It = e2 >>> 0, Tt = n2 >>> 0;
  } else xt(t2);
}
function Pt(t2) {
  const e2 = Et ||= new DataView(new ArrayBuffer(8));
  e2.setFloat32(0, +t2, true), Tt = 0, It = e2.getUint32(0, true);
}
function Bt(t2, e2) {
  const n2 = 4294967296 * e2 + (t2 >>> 0);
  return Number.isSafeInteger(n2) ? n2 : Ot(t2, e2);
}
function Lt(t2, e2) {
  const n2 = 2147483648 & e2;
  return n2 && (e2 = ~e2 >>> 0, 0 == (t2 = 1 + ~t2 >>> 0) && (e2 = e2 + 1 >>> 0)), "number" == typeof (t2 = Bt(t2, e2)) ? n2 ? -t2 : t2 : n2 ? "-" + t2 : t2;
}
function Ot(t2, e2) {
  if (t2 >>>= 0, (e2 >>>= 0) <= 2097151) var n2 = "" + (4294967296 * e2 + t2);
  else rt() ? n2 = "" + (BigInt(e2) << BigInt(32) | BigInt(t2)) : (t2 = (16777215 & t2) + 6777216 * (n2 = 16777215 & (t2 >>> 24 | e2 << 8)) + 6710656 * (e2 = e2 >> 16 & 65535), n2 += 8147497 * e2, e2 *= 2, t2 >= 1e7 && (n2 += t2 / 1e7 >>> 0, t2 %= 1e7), n2 >= 1e7 && (e2 += n2 / 1e7 >>> 0, n2 %= 1e7), n2 = e2 + Nt(n2) + Nt(t2));
  return n2;
}
function Nt(t2) {
  return t2 = String(t2), "0000000".slice(t2.length) + t2;
}
function kt(t2) {
  if (t2.length < 16) Ut(Number(t2));
  else if (rt()) t2 = BigInt(t2), It = Number(t2 & BigInt(4294967295)) >>> 0, Tt = Number(t2 >> BigInt(32) & BigInt(4294967295));
  else {
    const e2 = +("-" === t2[0]);
    Tt = It = 0;
    const n2 = t2.length;
    for (let r2 = e2, i2 = (n2 - e2) % 6 + e2; i2 <= n2; r2 = i2, i2 += 6) {
      const e3 = Number(t2.slice(r2, i2));
      Tt *= 1e6, It = 1e6 * It + e3, It >= 4294967296 && (Tt += Math.trunc(It / 4294967296), Tt >>>= 0, It >>>= 0);
    }
    if (e2) {
      const [t3, e3] = Ft(It, Tt);
      It = t3, Tt = e3;
    }
  }
}
function Ft(t2, e2) {
  return e2 = ~e2, t2 ? t2 = 1 + ~t2 : e2 += 1, [t2, e2];
}
var Vt = "function" == typeof BigInt ? BigInt.asIntN : void 0;
var jt = "function" == typeof BigInt ? BigInt.asUintN : void 0;
var Ct = Number.isSafeInteger;
var Gt = Number.isFinite;
var Mt = Math.trunc;
function Dt(t2) {
  return null == t2 || "number" == typeof t2 ? t2 : "NaN" === t2 || "Infinity" === t2 || "-Infinity" === t2 ? Number(t2) : void 0;
}
function $t(t2) {
  if (null != t2 && "boolean" != typeof t2) {
    var e2 = typeof t2;
    throw Error(`Expected boolean but got ${"object" != e2 ? e2 : t2 ? Array.isArray(t2) ? "array" : e2 : "null"}: ${t2}`);
  }
  return t2;
}
var zt = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function Rt(t2) {
  switch (typeof t2) {
    case "bigint":
      return true;
    case "number":
      return Gt(t2);
    case "string":
      return zt.test(t2);
    default:
      return false;
  }
}
function Wt(t2) {
  if (null == t2) return t2;
  if ("string" == typeof t2 && t2) t2 = +t2;
  else if ("number" != typeof t2) return;
  return Gt(t2) ? 0 | t2 : void 0;
}
function Ht(t2) {
  if ("-" === t2[0]) return false;
  const e2 = t2.length;
  return e2 < 20 || 20 === e2 && Number(t2.substring(0, 6)) < 184467;
}
function qt(t2) {
  return t2 = Mt(t2), Ct(t2) || (Ut(t2), t2 = Lt(It, Tt)), t2;
}
function Jt(t2) {
  var e2 = Mt(Number(t2));
  if (Ct(e2)) return String(e2);
  if (-1 !== (e2 = t2.indexOf(".")) && (t2 = t2.substring(0, e2)), e2 = t2.length, !("-" === t2[0] ? e2 < 20 || 20 === e2 && Number(t2.substring(0, 7)) > -922337 : e2 < 19 || 19 === e2 && Number(t2.substring(0, 6)) < 922337)) if (kt(t2), t2 = It, 2147483648 & (e2 = Tt)) {
    if (rt()) t2 = "" + (BigInt(0 | e2) << BigInt(32) | BigInt(t2 >>> 0));
    else {
      const [n2, r2] = Ft(t2, e2);
      t2 = "-" + Ot(n2, r2);
    }
  } else t2 = Ot(t2, e2);
  return t2;
}
function Kt(t2) {
  return null == t2 ? t2 : "bigint" == typeof t2 ? (yt(t2) ? t2 = Number(t2) : (t2 = Vt(64, t2), t2 = yt(t2) ? Number(t2) : String(t2)), t2) : Rt(t2) ? "number" == typeof t2 ? qt(t2) : Jt(t2) : void 0;
}
function Xt(t2) {
  if (null == t2) return t2;
  var e2 = typeof t2;
  if ("bigint" === e2) return String(jt(64, t2));
  if (Rt(t2)) {
    if ("string" === e2) return e2 = Mt(Number(t2)), Ct(e2) && e2 >= 0 ? t2 = String(e2) : (-1 !== (e2 = t2.indexOf(".")) && (t2 = t2.substring(0, e2)), Ht(t2) || (kt(t2), t2 = Ot(It, Tt))), t2;
    if ("number" === e2) return (t2 = Mt(t2)) >= 0 && Ct(t2) ? t2 : function(t3) {
      if (t3 < 0) {
        Ut(t3);
        var e3 = Ot(It, Tt);
        return t3 = Number(e3), Ct(t3) ? t3 : e3;
      }
      return Ht(e3 = String(t3)) ? e3 : (Ut(t3), Bt(It, Tt));
    }(t2);
  }
}
function Yt(t2) {
  if ("string" != typeof t2) throw Error();
  return t2;
}
function Qt(t2) {
  if (null != t2 && "string" != typeof t2) throw Error();
  return t2;
}
function Zt(t2) {
  return null == t2 || "string" == typeof t2 ? t2 : void 0;
}
function te(t2, e2, n2) {
  if (null != t2 && "object" == typeof t2 && t2.B === st) return t2;
  if (Array.isArray(t2)) {
    var r2 = 0 | t2[X], i2 = r2;
    return 0 === i2 && (i2 |= 32 & n2), (i2 |= 2 & n2) !== r2 && tt(t2, i2), new e2(t2);
  }
}
function ee(t2, e2, n2, r2, i2) {
  if (null != t2) {
    if (Array.isArray(t2)) t2 = ht(t2) ? void 0 : i2 && 2 & (0 | t2[X]) ? t2 : ne(t2, e2, n2, void 0 !== r2, i2);
    else if (ct(t2)) {
      const o2 = {};
      for (let s2 in t2) o2[s2] = ee(t2[s2], e2, n2, r2, i2);
      t2 = o2;
    } else t2 = e2(t2, r2);
    return t2;
  }
}
function ne(t2, e2, n2, r2, i2) {
  const o2 = r2 || n2 ? 0 | t2[X] : 0, s2 = r2 ? !!(32 & o2) : void 0;
  r2 = it(t2);
  for (let t3 = 0; t3 < r2.length; t3++) r2[t3] = ee(r2[t3], e2, n2, s2, i2);
  return n2 && ((t2 = gt(t2)) && (r2[K] = it(t2)), n2(o2, r2)), r2;
}
function re(t2) {
  return t2.B === st ? t2.toJSON() : function(t3) {
    switch (typeof t3) {
      case "number":
        return isFinite(t3) ? t3 : String(t3);
      case "bigint":
        return yt(t3) ? Number(t3) : String(t3);
      case "boolean":
        return t3 ? 1 : 0;
      case "object":
        if (t3) if (Array.isArray(t3)) {
          if (ht(t3)) return;
        } else {
          if (N(t3)) return U(t3);
          if (t3 instanceof j) {
            const e2 = t3.g;
            return null == e2 ? "" : "string" == typeof e2 ? e2 : t3.g = U(e2);
          }
        }
    }
    return t3;
  }(t2);
}
function ie(t2) {
  return ne(t2, re, void 0, void 0, false);
}
var oe;
var se;
function ae(t2, e2, n2) {
  return t2 = ue(t2, e2[0], e2[1], n2 ? 1 : 2), e2 !== oe && n2 && Z(t2, 16384), t2;
}
function ue(t2, e2, n2, r2) {
  if (null == t2) {
    var i2 = 96;
    n2 ? (t2 = [n2], i2 |= 512) : t2 = [], e2 && (i2 = -33521665 & i2 | (1023 & e2) << 15);
  } else {
    if (!Array.isArray(t2)) throw Error("narr");
    if (2048 & (i2 = 0 | t2[X])) throw Error("farr");
    if (64 & i2) return t2;
    if (1 === r2 || 2 === r2 || (i2 |= 64), n2 && (i2 |= 512, n2 !== t2[0])) throw Error("mid");
    t: {
      if (r2 = (n2 = t2).length) {
        const t3 = r2 - 1;
        if (ct(n2[t3])) {
          if ((e2 = t3 - (512 & (i2 |= 256) ? 0 : -1)) >= 1024) throw Error("pvtlmt");
          i2 = -33521665 & i2 | (1023 & e2) << 15;
          break t;
        }
      }
      if (e2) {
        if ((e2 = Math.max(e2, r2 - (512 & i2 ? 0 : -1))) > 1024) throw Error("spvt");
        i2 = -33521665 & i2 | (1023 & e2) << 15;
      }
    }
  }
  return tt(t2, i2), t2;
}
function ce(t2, e2, n2 = nt) {
  if (null != t2) {
    if (T && t2 instanceof Uint8Array) return e2 ? t2 : new Uint8Array(t2);
    if (Array.isArray(t2)) {
      var r2 = 0 | t2[X];
      return 2 & r2 ? t2 : (e2 &&= 0 === r2 || !!(32 & r2) && !(64 & r2 || !(16 & r2)), e2 ? (tt(t2, -12293 & (34 | r2)), t2) : ne(t2, ce, 4 & r2 ? nt : n2, true, true));
    }
    return t2.B === st && (t2 = 2 & (r2 = 0 | (n2 = t2.l)[X]) ? t2 : new t2.constructor(he(n2, r2, true))), t2;
  }
}
function le(t2) {
  const e2 = t2.l;
  return new t2.constructor(he(e2, 0 | e2[X], false));
}
function he(t2, e2, n2) {
  const r2 = n2 || 2 & e2 ? nt : et, i2 = !!(32 & e2);
  return t2 = function(t3, e3, n3) {
    const r3 = it(t3);
    var i3 = r3.length;
    const o2 = 256 & e3 ? r3[i3 - 1] : void 0;
    for (i3 += o2 ? -1 : 0, e3 = 512 & e3 ? 1 : 0; e3 < i3; e3++) r3[e3] = n3(r3[e3]);
    if (o2) {
      e3 = r3[e3] = {};
      for (const t4 in o2) e3[t4] = n3(o2[t4]);
    }
    return (t3 = gt(t3)) && (r3[K] = it(t3)), r3;
  }(t2, e2, (t3) => ce(t3, i2, r2)), Z(t2, 32 | (n2 ? 2 : 0)), t2;
}
function fe(t2) {
  const e2 = t2.l, n2 = 0 | e2[X];
  return 2 & n2 ? new t2.constructor(he(e2, n2, false)) : t2;
}
function de(t2, e2) {
  return ge(t2 = t2.l, 0 | t2[X], e2);
}
function ge(e2, n2, r2, i2) {
  if (-1 === r2) return null;
  var o2 = r2 + (512 & n2 ? 0 : -1);
  const s2 = e2.length - 1;
  return o2 >= s2 && 256 & n2 ? e2[s2][r2] : i2 && 256 & n2 && null != (n2 = e2[s2][r2]) ? (null != e2[o2] && null != q && ((o2 = (e2 = G ??= {})[q] || 0) >= 4 || (e2[q] = o2 + 1, D(e2 = Error(), "incident"), function(e3) {
    t.setTimeout(() => {
      throw e3;
    }, 0);
  }(e2))), n2) : o2 <= s2 ? e2[o2] : void 0;
}
function pe(t2, e2, n2) {
  const r2 = t2.l;
  let i2 = 0 | r2[X];
  return dt(i2), me(r2, i2, e2, n2), t2;
}
function me(t2, e2, n2, r2) {
  const i2 = 512 & e2 ? 0 : -1, o2 = n2 + i2;
  var s2 = t2.length - 1;
  return o2 >= s2 && 256 & e2 ? (t2[s2][n2] = r2, e2) : o2 <= s2 ? (t2[o2] = r2, 256 & e2 && n2 in (t2 = t2[s2]) && delete t2[n2], e2) : (void 0 !== r2 && (n2 >= (s2 = e2 >> 15 & 1023 || 536870912) ? null != r2 && (t2[s2 + i2] = {
    [n2]: r2
  }, tt(t2, e2 |= 256)) : t2[o2] = r2), e2);
}
function ye(t2) {
  let e2 = 0 | (t2 = t2.l)[X];
  const n2 = ge(t2, e2, 1), r2 = lt(n2, true);
  return null != r2 && r2 !== n2 && me(t2, e2, 1, r2), r2;
}
function be(t2, e2, n2, r2, i2) {
  const o2 = t2.l, s2 = 2 & (t2 = 0 | o2[X]) ? 1 : r2;
  i2 = !!i2;
  let a2 = 0 | (r2 = ve(o2, t2, e2))[X];
  if (!(4 & a2)) {
    4 & a2 && (r2 = it(r2), a2 = Ve(a2, t2), t2 = me(o2, t2, e2, r2));
    let i3 = 0, s3 = 0;
    for (; i3 < r2.length; i3++) {
      const t3 = n2(r2[i3]);
      null != t3 && (r2[s3++] = t3);
    }
    s3 < i3 && (r2.length = s3), a2 = we(a2, t2), n2 = -4097 & (20 | a2), a2 = n2 &= -8193, tt(r2, a2), 2 & a2 && Object.freeze(r2);
  }
  return 1 === s2 || 4 === s2 && 32 & a2 ? _e(a2) || (i2 = a2, a2 |= 2, a2 !== i2 && tt(r2, a2), Object.freeze(r2)) : (2 === s2 && _e(a2) && (r2 = it(r2), a2 = Ve(a2, t2), a2 = je(a2, t2, i2), tt(r2, a2), t2 = me(o2, t2, e2, r2)), _e(a2) || (e2 = a2, a2 = je(a2, t2, i2), a2 !== e2 && tt(r2, a2))), r2;
}
function ve(t2, e2, n2, r2) {
  return t2 = ge(t2, e2, n2, r2), Array.isArray(t2) ? t2 : ot;
}
function we(t2, e2) {
  return 0 === t2 && (t2 = Ve(t2, e2)), 1 | t2;
}
function _e(t2) {
  return !!(2 & t2) && !!(4 & t2) || !!(2048 & t2);
}
function Se(t2, e2, n2) {
  let r2 = 0 | (t2 = t2.l)[X];
  if (dt(r2), null == n2) me(t2, r2, e2);
  else {
    var i2 = 0 | n2[X], o2 = i2, s2 = _e(i2), a2 = s2 || Object.isFrozen(n2);
    for (s2 || (i2 = 0), a2 || (n2 = it(n2), o2 = 0, i2 = je(i2 = Ve(i2, r2), r2, true), a2 = false), i2 |= 21, s2 = 0; s2 < n2.length; s2++) {
      const t3 = n2[s2], e3 = Yt(t3);
      Object.is(t3, e3) || (a2 && (n2 = it(n2), o2 = 0, i2 = je(i2 = Ve(i2, r2), r2, true), a2 = false), n2[s2] = e3);
    }
    i2 !== o2 && (a2 && (n2 = it(n2), i2 = je(i2 = Ve(i2, r2), r2, true)), tt(n2, i2)), me(t2, r2, e2, n2);
  }
}
function Ae(t2, e2) {
  let n2 = 0 | (t2 = t2.l)[X];
  dt(n2), me(t2, n2, 2, "" === e2 ? void 0 : e2);
}
function Ee(t2, e2, n2, r2, i2) {
  dt(e2);
  var o2 = !(!(64 & e2) && 16384 & e2);
  const s2 = (i2 = ve(t2, e2, n2, i2)) !== ot;
  if (o2 || !s2) {
    let a2 = o2 = s2 ? 0 | i2[X] : 0;
    (!s2 || 2 & a2 || _e(a2) || 4 & a2 && !(32 & a2)) && (i2 = it(i2), a2 = Ve(a2, e2), e2 = me(t2, e2, n2, i2)), a2 = -13 & we(a2, e2), a2 = je(r2 ? -17 & a2 : 16 | a2, e2, true), a2 !== o2 && tt(i2, a2);
  }
  return i2;
}
function Ie(t2, e2) {
  var n2 = fi;
  return Ue(Te(t2 = t2.l), t2, 0 | t2[X], n2) === e2 ? e2 : -1;
}
function Te(t2) {
  if (z) return t2[J] ?? (t2[J] = /* @__PURE__ */ new Map());
  if (J in t2) return t2[J];
  const e2 = /* @__PURE__ */ new Map();
  return Object.defineProperty(t2, J, {
    value: e2
  }), e2;
}
function xe(t2, e2, n2, r2) {
  const i2 = Te(t2), o2 = Ue(i2, t2, e2, n2);
  return o2 !== r2 && (o2 && (e2 = me(t2, e2, o2)), i2.set(n2, r2)), e2;
}
function Ue(t2, e2, n2, r2) {
  let i2 = t2.get(r2);
  if (null != i2) return i2;
  i2 = 0;
  for (let t3 = 0; t3 < r2.length; t3++) {
    const o2 = r2[t3];
    null != ge(e2, n2, o2) && (0 !== i2 && (n2 = me(e2, n2, i2)), i2 = o2);
  }
  return t2.set(r2, i2), i2;
}
function Pe(t2, e2, n2, r2) {
  let i2, o2 = 0 | t2[X];
  if (null != (r2 = ge(t2, o2, n2, r2)) && r2.B === st) return (e2 = fe(r2)) !== r2 && me(t2, o2, n2, e2), e2.l;
  if (Array.isArray(r2)) {
    const t3 = 0 | r2[X];
    i2 = 2 & t3 ? ae(he(r2, t3, false), e2, true) : 64 & t3 ? r2 : ae(i2, e2, true);
  } else i2 = ae(void 0, e2, true);
  return i2 !== r2 && me(t2, o2, n2, i2), i2;
}
function Be(t2, e2, n2, r2) {
  let i2 = 0 | (t2 = t2.l)[X];
  return (e2 = te(r2 = ge(t2, i2, n2, r2), e2, i2)) !== r2 && null != e2 && me(t2, i2, n2, e2), e2;
}
function Le(t2, e2, n2) {
  if (null == (e2 = Be(t2, e2, n2, false))) return e2;
  let r2 = 0 | (t2 = t2.l)[X];
  if (!(2 & r2)) {
    const i2 = fe(e2);
    i2 !== e2 && me(t2, r2, n2, e2 = i2);
  }
  return e2;
}
function Oe(t2, e2, n2, r2, i2, o2) {
  t2 = t2.l;
  var s2 = !!(2 & e2);
  const a2 = s2 ? 1 : r2;
  i2 = !!i2, o2 &&= !s2;
  var u2 = 0 | (r2 = ve(t2, e2, 1))[X];
  if (!(s2 = !!(4 & u2))) {
    var c2 = r2, l2 = e2;
    const t3 = !!(2 & (u2 = we(u2, e2)));
    t3 && (l2 |= 2);
    let i3 = !t3, o3 = true, s3 = 0, a3 = 0;
    for (; s3 < c2.length; s3++) {
      const e3 = te(c2[s3], n2, l2);
      if (e3 instanceof n2) {
        if (!t3) {
          const t4 = !!(2 & (0 | e3.l[X]));
          i3 &&= !t4, o3 &&= t4;
        }
        c2[a3++] = e3;
      }
    }
    a3 < s3 && (c2.length = a3), u2 |= 4, u2 = o3 ? 16 | u2 : -17 & u2, tt(c2, u2 = i3 ? 8 | u2 : -9 & u2), t3 && Object.freeze(c2);
  }
  if (o2 && !(8 & u2 || !r2.length && (1 === a2 || 4 === a2 && 32 & u2))) {
    for (_e(u2) && (r2 = it(r2), u2 = Ve(u2, e2), e2 = me(t2, e2, 1, r2)), n2 = r2, o2 = u2, c2 = 0; c2 < n2.length; c2++) (u2 = n2[c2]) !== (l2 = fe(u2)) && (n2[c2] = l2);
    o2 |= 8, tt(n2, o2 = n2.length ? -17 & o2 : 16 | o2), u2 = o2;
  }
  return 1 === a2 || 4 === a2 && 32 & u2 ? _e(u2) || (e2 = u2, (u2 |= !r2.length || 16 & u2 && (!s2 || 32 & u2) ? 2 : 2048) !== e2 && tt(r2, u2), Object.freeze(r2)) : (2 === a2 && _e(u2) && (tt(r2 = it(r2), u2 = je(u2 = Ve(u2, e2), e2, i2)), e2 = me(t2, e2, 1, r2)), _e(u2) || (t2 = u2, (u2 = je(u2, e2, i2)) !== t2 && tt(r2, u2))), r2;
}
function Ne(t2, e2) {
  const n2 = 0 | t2.l[X];
  return Oe(t2, n2, e2, void 0 === pt ? 2 : 4, false, !(2 & n2));
}
function ke(t2, e2, n2, r2) {
  return null == r2 && (r2 = void 0), pe(t2, n2, r2);
}
function Fe(t2, e2, n2) {
  var r2 = bi;
  null == n2 && (n2 = void 0);
  t: {
    let i2 = 0 | (t2 = t2.l)[X];
    if (dt(i2), null == n2) {
      const n3 = Te(t2);
      if (Ue(n3, t2, i2, r2) !== e2) break t;
      n3.set(r2, 0);
    } else i2 = xe(t2, i2, r2, e2);
    me(t2, i2, e2, n2);
  }
}
function Ve(t2, e2) {
  return -2049 & (t2 = 32 | (2 & e2 ? 2 | t2 : -3 & t2));
}
function je(t2, e2, n2) {
  return 32 & e2 && n2 || (t2 &= -33), t2;
}
function Ce(t2, e2) {
  var n2 = Qr;
  const r2 = 0 | t2.l[X];
  dt(r2), t2 = Oe(t2, r2, n2, 2, true), e2 = null != e2 ? e2 : new n2(), t2.push(e2), t2[X] = 2 & (0 | e2.l[X]) ? -9 & t2[X] : -17 & t2[X];
}
function Ge(t2, e2, n2) {
  dt(0 | t2.l[X]), be(t2, e2, Zt, 2, true).push(Yt(n2));
}
function Me(t2, e2) {
  return Error(`Invalid wire type: ${t2} (at position ${e2})`);
}
function De() {
  return Error("Failed to read varint, encoding is invalid.");
}
function $e(t2, e2) {
  return Error(`Tried to read past the end of the data ${e2} > ${t2}`);
}
function ze(t2) {
  if ("string" == typeof t2) return {
    buffer: O(t2),
    v: false
  };
  if (Array.isArray(t2)) return {
    buffer: new Uint8Array(t2),
    v: false
  };
  if (t2.constructor === Uint8Array) return {
    buffer: t2,
    v: false
  };
  if (t2.constructor === ArrayBuffer) return {
    buffer: new Uint8Array(t2),
    v: false
  };
  if (t2.constructor === j) return {
    buffer: V(t2) || new Uint8Array(0),
    v: true
  };
  if (t2 instanceof Uint8Array) return {
    buffer: new Uint8Array(t2.buffer, t2.byteOffset, t2.byteLength),
    v: false
  };
  throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
}
function Re(t2, e2) {
  let n2, r2 = 0, i2 = 0, o2 = 0;
  const s2 = t2.i;
  let a2 = t2.g;
  do {
    n2 = s2[a2++], r2 |= (127 & n2) << o2, o2 += 7;
  } while (o2 < 32 && 128 & n2);
  for (o2 > 32 && (i2 |= (127 & n2) >> 4), o2 = 3; o2 < 32 && 128 & n2; o2 += 7) n2 = s2[a2++], i2 |= (127 & n2) << o2;
  if (Xe(t2, a2), n2 < 128) return e2(r2 >>> 0, i2 >>> 0);
  throw De();
}
function We(t2) {
  let e2 = 0, n2 = t2.g;
  const r2 = n2 + 10, i2 = t2.i;
  for (; n2 < r2; ) {
    const r3 = i2[n2++];
    if (e2 |= r3, 0 == (128 & r3)) return Xe(t2, n2), !!(127 & e2);
  }
  throw De();
}
function He(t2) {
  const e2 = t2.i;
  let n2 = t2.g, r2 = e2[n2++], i2 = 127 & r2;
  if (128 & r2 && (r2 = e2[n2++], i2 |= (127 & r2) << 7, 128 & r2 && (r2 = e2[n2++], i2 |= (127 & r2) << 14, 128 & r2 && (r2 = e2[n2++], i2 |= (127 & r2) << 21, 128 & r2 && (r2 = e2[n2++], i2 |= r2 << 28, 128 & r2 && 128 & e2[n2++] && 128 & e2[n2++] && 128 & e2[n2++] && 128 & e2[n2++] && 128 & e2[n2++]))))) throw De();
  return Xe(t2, n2), i2;
}
function qe(t2) {
  var e2 = t2.i;
  const n2 = t2.g;
  var r2 = e2[n2], i2 = e2[n2 + 1];
  const o2 = e2[n2 + 2];
  return e2 = e2[n2 + 3], Xe(t2, t2.g + 4), t2 = 2 * ((i2 = (r2 << 0 | i2 << 8 | o2 << 16 | e2 << 24) >>> 0) >> 31) + 1, r2 = i2 >>> 23 & 255, i2 &= 8388607, 255 == r2 ? i2 ? NaN : t2 * (1 / 0) : 0 == r2 ? 1401298464324817e-60 * t2 * i2 : t2 * Math.pow(2, r2 - 150) * (i2 + 8388608);
}
function Je(t2) {
  return He(t2);
}
function Ke(t2, e2, {
  C: n2 = false
} = {}) {
  t2.C = n2, e2 && (e2 = ze(e2), t2.i = e2.buffer, t2.m = e2.v, t2.u = 0, t2.j = t2.i.length, t2.g = t2.u);
}
function Xe(t2, e2) {
  if (t2.g = e2, e2 > t2.j) throw $e(t2.j, e2);
}
function Ye(t2, e2) {
  if (e2 < 0) throw Error(`Tried to read a negative byte length: ${e2}`);
  const n2 = t2.g, r2 = n2 + e2;
  if (r2 > t2.j) throw $e(e2, t2.j - n2);
  return t2.g = r2, n2;
}
function Qe(t2, e2) {
  if (0 == e2) return F();
  var n2 = Ye(t2, e2);
  return t2.C && t2.m ? n2 = t2.i.subarray(n2, n2 + e2) : (t2 = t2.i, n2 = n2 === (e2 = n2 + e2) ? new Uint8Array(0) : At ? t2.slice(n2, e2) : new Uint8Array(t2.subarray(n2, e2))), 0 == n2.length ? F() : new j(n2, k);
}
var Ze = [];
function tn(t2) {
  var e2 = t2.g;
  if (e2.g == e2.j) return false;
  t2.j = t2.g.g;
  var n2 = He(t2.g) >>> 0;
  if (e2 = n2 >>> 3, !((n2 &= 7) >= 0 && n2 <= 5)) throw Me(n2, t2.j);
  if (e2 < 1) throw Error(`Invalid field number: ${e2} (at position ${t2.j})`);
  return t2.m = e2, t2.i = n2, true;
}
function en(t2) {
  switch (t2.i) {
    case 0:
      0 != t2.i ? en(t2) : We(t2.g);
      break;
    case 1:
      Xe(t2 = t2.g, t2.g + 8);
      break;
    case 2:
      if (2 != t2.i) en(t2);
      else {
        var e2 = He(t2.g) >>> 0;
        Xe(t2 = t2.g, t2.g + e2);
      }
      break;
    case 5:
      Xe(t2 = t2.g, t2.g + 4);
      break;
    case 3:
      for (e2 = t2.m; ; ) {
        if (!tn(t2)) throw Error("Unmatched start-group tag: stream EOF");
        if (4 == t2.i) {
          if (t2.m != e2) throw Error("Unmatched end-group tag");
          break;
        }
        en(t2);
      }
      break;
    default:
      throw Me(t2.i, t2.j);
  }
}
function nn(t2, e2, n2) {
  const r2 = t2.g.j, i2 = He(t2.g) >>> 0, o2 = t2.g.g + i2;
  let s2 = o2 - r2;
  if (s2 <= 0 && (t2.g.j = o2, n2(e2, t2, void 0, void 0, void 0), s2 = o2 - t2.g.g), s2) throw Error(`Message parsing ended unexpectedly. Expected to read ${i2} bytes, instead read ${i2 - s2} bytes, either the data ended unexpectedly or the message misreported its own length`);
  t2.g.g = o2, t2.g.j = r2;
}
function rn(t2) {
  var s2 = He(t2.g) >>> 0, a2 = Ye(t2 = t2.g, s2);
  if (t2 = t2.i, o) {
    var u2, c2 = t2;
    (u2 = i) || (u2 = i = new TextDecoder("utf-8", {
      fatal: true
    })), s2 = a2 + s2, c2 = 0 === a2 && s2 === c2.length ? c2 : c2.subarray(a2, s2);
    try {
      var l2 = u2.decode(c2);
    } catch (t3) {
      if (void 0 === r) {
        try {
          u2.decode(new Uint8Array([128]));
        } catch (t4) {
        }
        try {
          u2.decode(new Uint8Array([97])), r = true;
        } catch (t4) {
          r = false;
        }
      }
      throw !r && (i = void 0), t3;
    }
  } else {
    s2 = (l2 = a2) + s2, a2 = [];
    let r2, i2 = null;
    for (; l2 < s2; ) {
      var h = t2[l2++];
      h < 128 ? a2.push(h) : h < 224 ? l2 >= s2 ? e() : (r2 = t2[l2++], h < 194 || 128 != (192 & r2) ? (l2--, e()) : a2.push((31 & h) << 6 | 63 & r2)) : h < 240 ? l2 >= s2 - 1 ? e() : (r2 = t2[l2++], 128 != (192 & r2) || 224 === h && r2 < 160 || 237 === h && r2 >= 160 || 128 != (192 & (u2 = t2[l2++])) ? (l2--, e()) : a2.push((15 & h) << 12 | (63 & r2) << 6 | 63 & u2)) : h <= 244 ? l2 >= s2 - 2 ? e() : (r2 = t2[l2++], 128 != (192 & r2) || r2 - 144 + (h << 28) >> 30 != 0 || 128 != (192 & (u2 = t2[l2++])) || 128 != (192 & (c2 = t2[l2++])) ? (l2--, e()) : (h = (7 & h) << 18 | (63 & r2) << 12 | (63 & u2) << 6 | 63 & c2, h -= 65536, a2.push(55296 + (h >> 10 & 1023), 56320 + (1023 & h)))) : e(), a2.length >= 8192 && (i2 = n(i2, a2), a2.length = 0);
    }
    l2 = n(i2, a2);
  }
  return l2;
}
function on(t2) {
  const e2 = He(t2.g) >>> 0;
  return Qe(t2.g, e2);
}
function sn(t2, e2, n2) {
  var r2 = He(t2.g) >>> 0;
  for (r2 = t2.g.g + r2; t2.g.g < r2; ) n2.push(e2(t2.g));
}
var an = [];
function un(t2) {
  return t2;
}
var cn;
function ln(t2, e2, n2) {
  e2.g ? e2.j(t2, e2.g, e2.i, n2) : e2.j(t2, e2.i, n2);
}
var hn = class {
  constructor(t2, e2) {
    this.l = ue(t2, e2);
  }
  toJSON() {
    const t2 = !cn;
    try {
      return t2 && (cn = ie), fn(this);
    } finally {
      t2 && (cn = void 0);
    }
  }
  v() {
    return !!(2 & (0 | this.l[X]));
  }
};
function fn(t2) {
  var e2 = t2.l;
  {
    e2 = (t2 = cn(e2)) !== e2;
    let c2 = t2.length;
    if (c2) {
      var n2 = t2[c2 - 1], r2 = ct(n2);
      r2 ? c2-- : n2 = void 0;
      var i2 = t2;
      if (r2) {
        t: {
          var o2, s2 = n2, a2 = false;
          if (s2) for (let t3 in s2) isNaN(+t3) ? (o2 ??= {})[t3] = s2[t3] : (r2 = s2[t3], Array.isArray(r2) && (ht(r2) || ut(r2) && 0 === r2.size) && (r2 = null), null == r2 && (a2 = true), null != r2 && ((o2 ??= {})[t3] = r2));
          if (a2 || (o2 = s2), o2) for (let t3 in o2) {
            a2 = o2;
            break t;
          }
          a2 = null;
        }
        s2 = null == a2 ? null != n2 : a2 !== n2;
      }
      for (; c2 > 0 && (null == (o2 = i2[c2 - 1]) || ht(o2) || ut(o2) && 0 === o2.size); c2--) var u2 = true;
      (i2 !== t2 || s2 || u2) && (e2 ? (u2 || s2 || a2) && (i2.length = c2) : i2 = Array.prototype.slice.call(i2, 0, c2), a2 && i2.push(a2)), u2 = i2;
    } else u2 = t2;
  }
  return u2;
}
function dn(t2) {
  return t2 ? /^\d+$/.test(t2) ? (kt(t2), new gn(It, Tt)) : null : pn ||= new gn(0, 0);
}
hn.prototype.B = st, hn.prototype.toString = function() {
  try {
    return cn = un, fn(this).toString();
  } finally {
    cn = void 0;
  }
};
var gn = class {
  constructor(t2, e2) {
    this.i = t2 >>> 0, this.g = e2 >>> 0;
  }
};
var pn;
function mn(t2) {
  return t2 ? /^-?\d+$/.test(t2) ? (kt(t2), new yn(It, Tt)) : null : bn ||= new yn(0, 0);
}
var yn = class {
  constructor(t2, e2) {
    this.i = t2 >>> 0, this.g = e2 >>> 0;
  }
};
var bn;
function vn(t2, e2, n2) {
  for (; n2 > 0 || e2 > 127; ) t2.g.push(127 & e2 | 128), e2 = (e2 >>> 7 | n2 << 25) >>> 0, n2 >>>= 7;
  t2.g.push(e2);
}
function wn(t2, e2) {
  for (; e2 > 127; ) t2.g.push(127 & e2 | 128), e2 >>>= 7;
  t2.g.push(e2);
}
function _n(t2, e2) {
  if (e2 >= 0) wn(t2, e2);
  else {
    for (let n2 = 0; n2 < 9; n2++) t2.g.push(127 & e2 | 128), e2 >>= 7;
    t2.g.push(1);
  }
}
function Sn(t2) {
  var e2 = It;
  t2.g.push(e2 >>> 0 & 255), t2.g.push(e2 >>> 8 & 255), t2.g.push(e2 >>> 16 & 255), t2.g.push(e2 >>> 24 & 255);
}
function An(t2, e2) {
  0 !== e2.length && (t2.j.push(e2), t2.i += e2.length);
}
function En(t2, e2, n2) {
  wn(t2.g, 8 * e2 + n2);
}
function In(t2, e2) {
  return En(t2, e2, 2), e2 = t2.g.end(), An(t2, e2), e2.push(t2.i), e2;
}
function Tn(t2, e2) {
  var n2 = e2.pop();
  for (n2 = t2.i + t2.g.length() - n2; n2 > 127; ) e2.push(127 & n2 | 128), n2 >>>= 7, t2.i++;
  e2.push(n2), t2.i++;
}
function xn(t2, e2, n2) {
  En(t2, e2, 2), wn(t2.g, n2.length), An(t2, t2.g.end()), An(t2, n2);
}
function Un() {
  const t2 = class {
    constructor() {
      throw Error();
    }
  };
  return Object.setPrototypeOf(t2, t2.prototype), t2;
}
var Pn = Un();
var Bn = Un();
var Ln = Un();
var On = Un();
var Nn = Un();
var kn = Un();
var Fn = Un();
var Vn = Un();
var jn = class {
  constructor(t2, e2, n2) {
    this.g = t2, this.i = e2, t2 = Pn, this.j = !!t2 && n2 === t2 || false;
  }
};
function Cn(t2, e2) {
  return new jn(t2, e2, Pn);
}
function Gn(t2, e2, n2, r2, i2) {
  null != (e2 = Xn(e2, r2)) && (n2 = In(t2, n2), i2(e2, t2), Tn(t2, n2));
}
var Mn = Cn(function(t2, e2, n2, r2, i2) {
  return 2 === t2.i && (nn(t2, Pe(e2, r2, n2), i2), true);
}, Gn);
var Dn = Cn(function(t2, e2, n2, r2, i2) {
  return 2 === t2.i && (nn(t2, Pe(e2, r2, n2, true), i2), true);
}, Gn);
var $n = Symbol();
var zn = Symbol();
var Rn = Symbol();
var Wn = Symbol();
var Hn;
var qn;
function Jn(t2, e2, n2, r2) {
  var i2 = r2[t2];
  if (i2) return i2;
  (i2 = {}).N = r2, i2.A = function(t3) {
    switch (typeof t3) {
      case "boolean":
        return oe ||= [0, void 0, true];
      case "number":
        return t3 > 0 ? void 0 : 0 === t3 ? se ||= [0, void 0] : [-t3, void 0];
      case "string":
        return [0, t3];
      case "object":
        return t3;
    }
  }(r2[0]);
  var o2 = r2[1];
  let s2 = 1;
  o2 && o2.constructor === Object && (i2.F = o2, "function" == typeof (o2 = r2[++s2]) && (i2.G = true, Hn ??= o2, qn ??= r2[s2 + 1], o2 = r2[s2 += 2]));
  const a2 = {};
  for (; o2 && Array.isArray(o2) && o2.length && "number" == typeof o2[0] && o2[0] > 0; ) {
    for (var u2 = 0; u2 < o2.length; u2++) a2[o2[u2]] = o2;
    o2 = r2[++s2];
  }
  for (u2 = 1; void 0 !== o2; ) {
    let t3;
    "number" == typeof o2 && (u2 += o2, o2 = r2[++s2]);
    var c2 = void 0;
    if (o2 instanceof jn ? t3 = o2 : (t3 = Mn, s2--), t3?.j) {
      o2 = r2[++s2], c2 = r2;
      var l2 = s2;
      "function" == typeof o2 && (o2 = o2(), c2[l2] = o2), c2 = o2;
    }
    for (l2 = u2 + 1, "number" == typeof (o2 = r2[++s2]) && o2 < 0 && (l2 -= o2, o2 = r2[++s2]); u2 < l2; u2++) {
      const r3 = a2[u2];
      c2 ? n2(i2, u2, t3, c2, r3) : e2(i2, u2, t3, r3);
    }
  }
  return r2[t2] = i2;
}
function Kn(t2) {
  return Array.isArray(t2) ? t2[0] instanceof jn ? t2 : [Dn, t2] : [t2, void 0];
}
function Xn(t2, e2) {
  return t2 instanceof hn ? t2.l : Array.isArray(t2) ? ae(t2, e2, false) : void 0;
}
function Yn(t2, e2, n2, r2) {
  const i2 = n2.g;
  t2[e2] = r2 ? (t3, e3, n3) => i2(t3, e3, n3, r2) : i2;
}
function Qn(t2, e2, n2, r2, i2) {
  const o2 = n2.g;
  let s2, a2;
  t2[e2] = (t3, e3, n3) => o2(t3, e3, n3, a2 ||= Jn(zn, Yn, Qn, r2).A, s2 ||= Zn(r2), i2);
}
function Zn(t2) {
  let e2 = t2[Rn];
  if (null != e2) return e2;
  const n2 = Jn(zn, Yn, Qn, t2);
  return e2 = n2.G ? (t3, e3) => Hn(t3, e3, n2) : (t3, e3) => {
    const r2 = 0 | t3[X];
    for (; tn(e3) && 4 != e3.i; ) {
      var i2 = e3.m, o2 = n2[i2];
      if (null == o2) {
        var s2 = n2.F;
        s2 && (s2 = s2[i2]) && null != (s2 = tr(s2)) && (o2 = n2[i2] = s2);
      }
      null != o2 && o2(e3, t3, i2) || (i2 = (o2 = e3).j, en(o2), o2.D ? o2 = void 0 : (s2 = o2.g.g - i2, o2.g.g = i2, o2 = Qe(o2.g, s2)), i2 = t3, o2 && ((s2 = i2[K]) ? s2.push(o2) : i2[K] = [o2]));
    }
    return 16384 & r2 && Z(t3, 34), true;
  }, t2[Rn] = e2;
}
function tr(t2) {
  const e2 = (t2 = Kn(t2))[0].g;
  if (t2 = t2[1]) {
    const n2 = Zn(t2), r2 = Jn(zn, Yn, Qn, t2).A;
    return (t3, i2, o2) => e2(t3, i2, o2, r2, n2);
  }
  return e2;
}
function er(t2, e2, n2) {
  t2[e2] = n2.i;
}
function nr(t2, e2, n2, r2) {
  let i2, o2;
  const s2 = n2.i;
  t2[e2] = (t3, e3, n3) => s2(t3, e3, n3, o2 ||= Jn($n, er, nr, r2).A, i2 ||= rr(r2));
}
function rr(t2) {
  let e2 = t2[Wn];
  if (!e2) {
    const n2 = Jn($n, er, nr, t2);
    e2 = (t3, e3) => ir(t3, e3, n2), t2[Wn] = e2;
  }
  return e2;
}
function ir(t2, e2, n2) {
  for (var r2 = 0 | t2[X], i2 = 512 & r2 ? 0 : -1, o2 = t2.length, s2 = 512 & r2 ? 1 : 0, a2 = o2 + (256 & r2 ? -1 : 0); s2 < a2; s2++) {
    const r3 = t2[s2];
    if (null == r3) continue;
    const o3 = s2 - i2, a3 = or(n2, o3);
    a3 && a3(e2, r3, o3);
  }
  if (256 & r2) {
    r2 = t2[o2 - 1];
    for (const t3 in r2) i2 = +t3, Number.isNaN(i2) || null != (o2 = r2[i2]) && (a2 = or(n2, i2)) && a2(e2, o2, i2);
  }
  if (t2 = gt(t2)) for (An(e2, e2.g.end()), n2 = 0; n2 < t2.length; n2++) An(e2, V(t2[n2]) || new Uint8Array(0));
}
function or(t2, e2) {
  var n2 = t2[e2];
  if (n2) return n2;
  if ((n2 = t2.F) && (n2 = n2[e2])) {
    var r2 = (n2 = Kn(n2))[0].i;
    if (n2 = n2[1]) {
      const e3 = rr(n2), i2 = Jn($n, er, nr, n2).A;
      n2 = t2.G ? qn(i2, e3) : (t3, n3, o2) => r2(t3, n3, o2, i2, e3);
    } else n2 = r2;
    return t2[e2] = n2;
  }
}
function sr(t2, e2) {
  if (Array.isArray(e2)) {
    var n2 = 0 | e2[X];
    if (4 & n2) return e2;
    for (var r2 = 0, i2 = 0; r2 < e2.length; r2++) {
      const n3 = t2(e2[r2]);
      null != n3 && (e2[i2++] = n3);
    }
    return i2 < r2 && (e2.length = i2), tt(e2, -12289 & (5 | n2)), 2 & n2 && Object.freeze(e2), e2;
  }
}
function ar(t2, e2, n2) {
  return new jn(t2, e2, n2);
}
function ur(t2, e2, n2) {
  return new jn(t2, e2, n2);
}
function cr(t2, e2, n2) {
  me(t2, 0 | t2[X], e2, n2);
}
function lr(t2, e2, n2) {
  if (e2 = function(t3) {
    if (null == t3) return t3;
    const e3 = typeof t3;
    if ("bigint" === e3) return String(Vt(64, t3));
    if (Rt(t3)) {
      if ("string" === e3) return Jt(t3);
      if ("number" === e3) return qt(t3);
    }
  }(e2), null != e2) {
    if ("string" == typeof e2) mn(e2);
    if (null != e2) switch (En(t2, n2, 0), typeof e2) {
      case "number":
        t2 = t2.g, Ut(e2), vn(t2, It, Tt);
        break;
      case "bigint":
        n2 = BigInt.asUintN(64, e2), n2 = new yn(Number(n2 & BigInt(4294967295)), Number(n2 >> BigInt(32))), vn(t2.g, n2.i, n2.g);
        break;
      default:
        n2 = mn(e2), vn(t2.g, n2.i, n2.g);
    }
  }
}
function hr(t2, e2, n2) {
  null != (e2 = Wt(e2)) && null != e2 && (En(t2, n2, 0), _n(t2.g, e2));
}
function fr(t2, e2, n2) {
  null != (e2 = null == e2 || "boolean" == typeof e2 ? e2 : "number" == typeof e2 ? !!e2 : void 0) && (En(t2, n2, 0), t2.g.g.push(e2 ? 1 : 0));
}
function dr(t2, e2, n2) {
  null != (e2 = Zt(e2)) && xn(t2, n2, u(e2));
}
function gr(t2, e2, n2, r2, i2) {
  null != (e2 = Xn(e2, r2)) && (n2 = In(t2, n2), i2(e2, t2), Tn(t2, n2));
}
function pr(t2, e2, n2) {
  null != (e2 = null == e2 || "string" == typeof e2 || N(e2) || e2 instanceof j ? e2 : void 0) && xn(t2, n2, ze(e2).buffer);
}
var mr = ar(function(t2, e2, n2) {
  return 5 === t2.i && (cr(e2, n2, qe(t2.g)), true);
}, function(t2, e2, n2) {
  null != (e2 = Dt(e2)) && (En(t2, n2, 5), t2 = t2.g, Pt(e2), Sn(t2));
}, kn);
var yr = ur(function(t2, e2, n2) {
  return (5 === t2.i || 2 === t2.i) && (e2 = Ee(e2, 0 | e2[X], n2, false, false), 2 == t2.i ? sn(t2, qe, e2) : e2.push(qe(t2.g)), true);
}, function(t2, e2, n2) {
  if (null != (e2 = sr(Dt, e2)) && e2.length) {
    En(t2, n2, 2), wn(t2.g, 4 * e2.length);
    for (let r2 = 0; r2 < e2.length; r2++) n2 = t2.g, Pt(e2[r2]), Sn(n2);
  }
}, kn);
var br = ar(function(t2, e2, n2) {
  return 0 === t2.i && (cr(e2, n2, Re(t2.g, Lt)), true);
}, lr, Nn);
var vr = ar(function(t2, e2, n2) {
  return 0 === t2.i && (cr(e2, n2, 0 === (t2 = Re(t2.g, Lt)) ? void 0 : t2), true);
}, lr, Nn);
var wr = ar(function(t2, e2, n2) {
  return 0 === t2.i && (cr(e2, n2, Re(t2.g, Bt)), true);
}, function(t2, e2, n2) {
  if (null != (e2 = Xt(e2))) {
    if ("string" == typeof e2) dn(e2);
    if (null != e2) switch (En(t2, n2, 0), typeof e2) {
      case "number":
        t2 = t2.g, Ut(e2), vn(t2, It, Tt);
        break;
      case "bigint":
        n2 = BigInt.asUintN(64, e2), n2 = new gn(Number(n2 & BigInt(4294967295)), Number(n2 >> BigInt(32))), vn(t2.g, n2.i, n2.g);
        break;
      default:
        n2 = dn(e2), vn(t2.g, n2.i, n2.g);
    }
  }
}, Un());
var _r = ar(function(t2, e2, n2) {
  return 0 === t2.i && (cr(e2, n2, He(t2.g)), true);
}, hr, On);
var Sr = ur(function(t2, e2, n2) {
  return (0 === t2.i || 2 === t2.i) && (e2 = Ee(e2, 0 | e2[X], n2, false, false), 2 == t2.i ? sn(t2, He, e2) : e2.push(He(t2.g)), true);
}, function(t2, e2, n2) {
  if (null != (e2 = sr(Wt, e2)) && e2.length) {
    n2 = In(t2, n2);
    for (let n3 = 0; n3 < e2.length; n3++) _n(t2.g, e2[n3]);
    Tn(t2, n2);
  }
}, On);
var Ar = ar(function(t2, e2, n2) {
  return 0 === t2.i && (cr(e2, n2, 0 === (t2 = He(t2.g)) ? void 0 : t2), true);
}, hr, On);
var Er = ar(function(t2, e2, n2) {
  return 0 === t2.i && (cr(e2, n2, We(t2.g)), true);
}, fr, Bn);
var Ir = ar(function(t2, e2, n2) {
  return 0 === t2.i && (cr(e2, n2, false === (t2 = We(t2.g)) ? void 0 : t2), true);
}, fr, Bn);
var Tr = ur(function(t2, e2, n2) {
  return 2 === t2.i && (t2 = rn(t2), Ee(e2, 0 | e2[X], n2, false).push(t2), true);
}, function(t2, e2, n2) {
  if (null != (e2 = sr(Zt, e2))) for (let s2 = 0; s2 < e2.length; s2++) {
    var r2 = t2, i2 = n2, o2 = e2[s2];
    null != o2 && xn(r2, i2, u(o2));
  }
}, Ln);
var xr = ar(function(t2, e2, n2) {
  return 2 === t2.i && (cr(e2, n2, "" === (t2 = rn(t2)) ? void 0 : t2), true);
}, dr, Ln);
var Ur = ar(function(t2, e2, n2) {
  return 2 === t2.i && (cr(e2, n2, rn(t2)), true);
}, dr, Ln);
var Pr = function(t2, e2, n2 = Pn) {
  return new jn(t2, e2, n2);
}(function(t2, e2, n2, r2, i2) {
  return 2 === t2.i && (r2 = ae(void 0, r2, true), Ee(e2, 0 | e2[X], n2, true).push(r2), nn(t2, r2, i2), true);
}, function(t2, e2, n2, r2, i2) {
  if (Array.isArray(e2)) for (let o2 = 0; o2 < e2.length; o2++) gr(t2, e2[o2], n2, r2, i2);
});
var Br = Cn(function(t2, e2, n2, r2, i2, o2) {
  return 2 === t2.i && (xe(e2, 0 | e2[X], o2, n2), nn(t2, e2 = Pe(e2, r2, n2), i2), true);
}, gr);
var Lr = ar(function(t2, e2, n2) {
  return 2 === t2.i && (cr(e2, n2, on(t2)), true);
}, pr, Fn);
var Or = ar(function(t2, e2, n2) {
  return 0 === t2.i && (cr(e2, n2, 0 === (t2 = He(t2.g) >>> 0) ? void 0 : t2), true);
}, function(t2, e2, n2) {
  e2 = function(t3) {
    if (null == t3) return t3;
    if ("string" == typeof t3 && t3) t3 = +t3;
    else if ("number" != typeof t3) return;
    return Gt(t3) ? t3 >>> 0 : void 0;
  }(e2), null != e2 && null != e2 && (En(t2, n2, 0), wn(t2.g, e2));
}, Un());
var Nr = ar(function(t2, e2, n2) {
  return 0 === t2.i && (cr(e2, n2, He(t2.g)), true);
}, function(t2, e2, n2) {
  null != (e2 = Wt(e2)) && (e2 = parseInt(e2, 10), En(t2, n2, 0), _n(t2.g, e2));
}, Vn);
var kr = class {
  constructor(t2, e2) {
    this.i = t2, this.g = e2, this.j = ke, this.defaultValue = void 0;
  }
};
function Fr(t2, e2) {
  return (n2, r2) => {
    if (an.length) {
      const t3 = an.pop();
      t3.o(r2), Ke(t3.g, n2, r2), n2 = t3;
    } else n2 = new class {
      constructor(t3, e3) {
        if (Ze.length) {
          const n3 = Ze.pop();
          Ke(n3, t3, e3), t3 = n3;
        } else t3 = new class {
          constructor(t4, e4) {
            this.i = null, this.m = false, this.g = this.j = this.u = 0, Ke(this, t4, e4);
          }
          clear() {
            this.i = null, this.m = false, this.g = this.j = this.u = 0, this.C = false;
          }
        }(t3, e3);
        this.g = t3, this.j = this.g.g, this.i = this.m = -1, this.o(e3);
      }
      o({
        D: t3 = false
      } = {}) {
        this.D = t3;
      }
    }(n2, r2);
    try {
      const r3 = new t2(), o2 = r3.l;
      Zn(e2)(o2, n2);
      var i2 = r3;
    } finally {
      n2.g.clear(), n2.m = -1, n2.i = -1, an.length < 100 && an.push(n2);
    }
    return i2;
  };
}
var Vr = [0, xr, ar(function(t2, e2, n2) {
  return 2 === t2.i && (cr(e2, n2, (t2 = on(t2)) === F() ? void 0 : t2), true);
}, function(t2, e2, n2) {
  if (null != e2) {
    if (e2 instanceof hn) {
      const r2 = e2.O;
      return void (r2 && (e2 = r2(e2), null != e2 && xn(t2, n2, ze(e2).buffer)));
    }
    if (Array.isArray(e2)) return;
  }
  pr(t2, e2, n2);
}, Fn)];
var jr;
var Cr = globalThis.trustedTypes;
function Gr(t2) {
  void 0 === jr && (jr = function() {
    let t3 = null;
    if (!Cr) return t3;
    try {
      const e3 = (t4) => t4;
      t3 = Cr.createPolicy("goog#html", {
        createHTML: e3,
        createScript: e3,
        createScriptURL: e3
      });
    } catch (t4) {
    }
    return t3;
  }());
  var e2 = jr;
  return new class {
    constructor(t3) {
      this.g = t3;
    }
    toString() {
      return this.g + "";
    }
  }(e2 ? e2.createScriptURL(t2) : t2);
}
function Mr(t2, ...e2) {
  if (0 === e2.length) return Gr(t2[0]);
  let n2 = t2[0];
  for (let r2 = 0; r2 < e2.length; r2++) n2 += encodeURIComponent(e2[r2]) + t2[r2 + 1];
  return Gr(n2);
}
var Dr = [0, _r, Nr, Er, -1, Sr, Nr, -1];
var $r = class extends hn {
  constructor(t2) {
    super(t2);
  }
};
var zr = [0, Er, Ur, Er, Nr, -1, ur(function(t2, e2, n2) {
  return (0 === t2.i || 2 === t2.i) && (e2 = Ee(e2, 0 | e2[X], n2, false, false), 2 == t2.i ? sn(t2, Je, e2) : e2.push(He(t2.g)), true);
}, function(t2, e2, n2) {
  if (null != (e2 = sr(Wt, e2)) && e2.length) {
    n2 = In(t2, n2);
    for (let n3 = 0; n3 < e2.length; n3++) _n(t2.g, e2[n3]);
    Tn(t2, n2);
  }
}, Vn), Ur, -1, [0, Er, -1], Nr, Er, -1];
var Rr = [0, Ur, -2];
var Wr = class extends hn {
  constructor(t2) {
    super(t2);
  }
};
var Hr = [0];
var qr = [0, _r, Er, 1, Er, -3];
var Jr = class extends hn {
  constructor(t2) {
    super(t2, 2);
  }
};
var Kr = {};
Kr[336783863] = [0, Ur, Er, -1, _r, [0, [1, 2, 3, 4, 5, 6, 7, 8], Br, Hr, Br, zr, Br, Rr, Br, qr, Br, Dr, Br, [0, Ur, -2], Br, [0, Ur, Nr], Br, [0, Nr, Ur]], [0, Ur], Er, [0, [1, 3], [2, 4], Br, [0, Sr], -1, Br, [0, Tr], -1, Pr, [0, Ur, -1]], Ur];
var Xr = [0, vr, -1, Ir, -3, vr, Sr, xr, Ar, vr, -1, Ir, Ar, Ir, -2, xr];
function Yr(t2) {
  Ge(t2, 3, "TEXT:text_in");
}
var Qr = class extends hn {
  constructor(t2) {
    super(t2, 500);
  }
  o(t2) {
    return ke(this, 0, 7, t2);
  }
};
var Zr = [-1, {}];
var ti = [0, Ur, 1, Zr];
var ei = [0, Ur, Tr, Zr];
function ni(t2) {
  Ge(t2, 10, "text_in");
}
var ri;
var ii = class extends hn {
  constructor(t2) {
    super(t2, 500);
  }
  o(t2) {
    return ke(this, 0, 1001, t2);
  }
};
ii.prototype.g = (ri = [-500, Pr, [-500, xr, -1, Tr, -3, [-2, Kr, Er], Pr, Vr, Ar, -1, ti, ei, Pr, [0, xr, Ir], xr, Xr, Ar, Tr, 987, Tr], 4, Pr, [-500, Ur, -1, [-1, {}], 998, Ur], Pr, [-500, Ur, Tr, -1, [-2, {}, Er], 997, Tr, -1], Ar, Pr, [-500, Ur, Tr, Zr, 998, Tr], Tr, Ar, ti, ei, Pr, [0, xr, -1, Zr], Tr, -2, Xr, xr, -1, Ir, [0, Ir, Or], 978, Zr, Pr, Vr], function() {
  const t2 = new class {
    constructor() {
      this.j = [], this.i = 0, this.g = new class {
        constructor() {
          this.g = [];
        }
        length() {
          return this.g.length;
        }
        end() {
          const t3 = this.g;
          return this.g = [], t3;
        }
      }();
    }
  }();
  ir(this.l, t2, Jn($n, er, nr, ri)), An(t2, t2.g.end());
  const e2 = new Uint8Array(t2.i), n2 = t2.j, r2 = n2.length;
  let i2 = 0;
  for (let t3 = 0; t3 < r2; t3++) {
    const r3 = n2[t3];
    e2.set(r3, i2), i2 += r3.length;
  }
  return t2.j = [e2], e2;
});
var oi = class extends hn {
  constructor(t2) {
    super(t2);
  }
};
var si = class extends hn {
  constructor(t2) {
    super(t2);
  }
  g() {
    return Ne(this, oi);
  }
};
var ai = class extends hn {
  constructor(t2) {
    super(t2);
  }
};
var ui = Fr(class extends hn {
  constructor(t2) {
    super(t2);
  }
}, [0, Pr, [0, 1, _r, Ur, [0, Pr, [0, _r, mr, Ur, -1]]], br]);
var ci = class extends hn {
  constructor(t2) {
    super(t2);
  }
};
var li = class extends hn {
  constructor(t2) {
    super(t2);
  }
  H() {
    const t2 = ye(this);
    return null == t2 ? F() : t2;
  }
};
var hi = class extends hn {
  constructor(t2) {
    super(t2);
  }
};
var fi = [1, 2];
var di = Fr(class extends hn {
  constructor(t2) {
    super(t2);
  }
}, [0, Pr, [0, fi, Br, [0, yr], Br, [0, Lr], _r, Ur], br]);
var gi = class extends hn {
  constructor(t2) {
    super(t2);
  }
};
var pi = class extends hn {
  constructor(t2) {
    super(t2);
  }
};
var mi = [0, Er, -1];
var yi = class extends hn {
  constructor(t2) {
    super(t2);
  }
};
var bi = [1, 2, 3, 4, 5];
var vi = class extends hn {
  constructor(t2) {
    super(t2);
  }
  g() {
    return null != ye(this);
  }
  i() {
    return null != Zt(de(this, 2));
  }
};
var wi = class extends hn {
  constructor(t2) {
    super(t2);
  }
};
var _i = [0, [0, Lr, Ur, [0, _r, br, -1], [0, wr, br]], Er, [0, bi, Br, qr, Br, zr, Br, Dr, Br, Hr, Br, Rr], Nr];
var Si = class extends hn {
  constructor(t2) {
    super(t2);
  }
};
var Ai = new kr(462704549, Si);
Kr[462704549] = [0, _i, [0, Ur, _r, mr, Tr, -1]];
var Ei = class extends hn {
  constructor(t2) {
    super(t2);
  }
};
var Ii = new kr(477589892, Ei);
function Ti(t2, e2) {
  if (e2 = e2 ? le(e2) : new gi(), void 0 !== t2.displayNamesLocale ? pe(e2, 1, Qt(t2.displayNamesLocale)) : void 0 === t2.displayNamesLocale && pe(e2, 1), void 0 !== t2.maxResults) {
    var n2 = t2.maxResults;
    if (null != n2) {
      if ("number" != typeof n2) throw $();
      if (!Gt(n2)) throw $();
      n2 |= 0;
    }
    pe(e2, 2, n2);
  } else "maxResults" in t2 && pe(e2, 2);
  if (void 0 !== t2.scoreThreshold) {
    if (null != (n2 = t2.scoreThreshold) && "number" != typeof n2) throw Error(`Value of float/double field must be a number, found ${typeof n2}: ${n2}`);
    pe(e2, 3, n2);
  } else "scoreThreshold" in t2 && pe(e2, 3);
  return void 0 !== t2.categoryAllowlist ? Se(e2, 4, t2.categoryAllowlist) : "categoryAllowlist" in t2 && pe(e2, 4), void 0 !== t2.categoryDenylist ? Se(e2, 5, t2.categoryDenylist) : "categoryDenylist" in t2 && pe(e2, 5), e2;
}
function xi(t2) {
  const e2 = {
    classifications: Ne(t2, ai).map((t3) => function(t4, e3 = -1, n2 = "") {
      return {
        categories: t4.map((t5) => {
          var e4 = Wt(de(t5, 1)) ?? 0 ?? -1;
          const n3 = t5.l;
          let r2 = 0 | n3[X];
          const i2 = ge(n3, r2, 2), o2 = Dt(i2);
          return null != o2 && o2 !== i2 && me(n3, r2, 2, o2), {
            index: e4,
            score: o2 ?? 0 ?? 0,
            categoryName: Zt(de(t5, 3)) ?? "" ?? "",
            displayName: Zt(de(t5, 4)) ?? "" ?? ""
          };
        }),
        headIndex: e3,
        headName: n2
      };
    }(Le(t3, si, 4)?.g() ?? [], Wt(de(t3, 2)) ?? 0, Zt(de(t3, 3)) ?? ""))
  };
  return null != Kt(de(t2, 2)) && (e2.timestampMs = Kt(de(t2, 2)) ?? 0), e2;
}
function Ui(t2) {
  return Array.from(t2, (t3) => t3 > 127 ? t3 - 256 : t3);
}
function Pi(t2, e2) {
  if (t2.length !== e2.length) throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t2.length} vs. ${e2.length}).`);
  let n2 = 0, r2 = 0, i2 = 0;
  for (let o2 = 0; o2 < t2.length; o2++) n2 += t2[o2] * e2[o2], r2 += t2[o2] * t2[o2], i2 += e2[o2] * e2[o2];
  if (r2 <= 0 || i2 <= 0) throw Error("Cannot compute cosine similarity on embedding with 0 norm.");
  return n2 / Math.sqrt(r2 * i2);
}
var Bi;
Kr[477589892] = [0, _i, mi];
var Li = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]);
function Oi() {
  return __async(this, null, function* () {
    if (void 0 === Bi) try {
      yield WebAssembly.instantiate(Li), Bi = true;
    } catch {
      Bi = false;
    }
    return Bi;
  });
}
function Ni(_0) {
  return __async(this, arguments, function* (t2, e2 = Mr``) {
    const n2 = (yield Oi()) ? "wasm_internal" : "wasm_nosimd_internal";
    return {
      wasmLoaderPath: `${e2}/${t2}_${n2}.js`,
      wasmBinaryPath: `${e2}/${t2}_${n2}.wasm`
    };
  });
}
var ki = class {
};
function Fi() {
  var t2 = navigator;
  return "undefined" != typeof OffscreenCanvas && (!function(t3 = navigator) {
    return (t3 = t3.userAgent).includes("Safari") && !t3.includes("Chrome");
  }(t2) || !!((t2 = t2.userAgent.match(/Version\/([\d]+).*Safari/)) && t2.length >= 1 && Number(t2[1]) >= 17));
}
function Vi(t2) {
  return __async(this, null, function* () {
    if ("function" != typeof importScripts) {
      const e2 = document.createElement("script");
      return e2.src = t2.toString(), e2.crossOrigin = "anonymous", new Promise((t3, n2) => {
        e2.addEventListener("load", () => {
          t3();
        }, false), e2.addEventListener("error", (t4) => {
          n2(t4);
        }, false), document.body.appendChild(e2);
      });
    }
    importScripts(t2.toString());
  });
}
ki.forVisionTasks = function(t2) {
  return Ni("vision", t2);
}, ki.forTextTasks = function(t2) {
  return Ni("text", t2);
}, ki.forGenAiExperimentalTasks = function(t2) {
  return Ni("genai_experimental", t2);
}, ki.forGenAiTasks = function(t2) {
  return Ni("genai", t2);
}, ki.forAudioTasks = function(t2) {
  return Ni("audio", t2);
}, ki.isSimdSupported = function() {
  return Oi();
};
function ji(t2, e2, n2) {
  t2.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"), n2(e2 = t2.h.stringToNewUTF8(e2)), t2.h._free(e2);
}
function Ci(t2, e2, n2) {
  t2.m || console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");
  const r2 = new Uint32Array(e2.length);
  for (let n3 = 0; n3 < e2.length; n3++) r2[n3] = t2.h.stringToNewUTF8(e2[n3]);
  e2 = t2.h._malloc(4 * r2.length), t2.h.HEAPU32.set(r2, e2 >> 2), n2(e2);
  for (const e3 of r2) t2.h._free(e3);
  t2.h._free(e2);
}
function Gi(t2, e2, n2) {
  t2.h.simpleListeners = t2.h.simpleListeners || {}, t2.h.simpleListeners[e2] = n2;
}
function Mi(t2, e2, n2) {
  let r2 = [];
  t2.h.simpleListeners = t2.h.simpleListeners || {}, t2.h.simpleListeners[e2] = (t3, e3, i2) => {
    e3 ? (n2(r2, i2), r2 = []) : r2.push(t3);
  };
}
var Di = /* @__PURE__ */ function(t2) {
  return class extends t2 {
    M() {
      this.h._registerModelResourcesGraphService();
    }
  };
}(class {
  constructor(t2, e2) {
    this.j = true, this.h = t2, this.g = null, this.i = 0, this.m = "function" == typeof this.h._addIntToInputStream, void 0 !== e2 ? this.h.canvas = e2 : Fi() ? this.h.canvas = new OffscreenCanvas(1, 1) : (console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."), this.h.canvas = document.createElement("canvas"));
  }
  initializeGraph(t2) {
    return __async(this, null, function* () {
      const e2 = yield (yield fetch(t2)).arrayBuffer();
      t2 = !(t2.endsWith(".pbtxt") || t2.endsWith(".textproto")), this.setGraph(new Uint8Array(e2), t2);
    });
  }
  setGraphFromString(t2) {
    this.setGraph(new TextEncoder().encode(t2), false);
  }
  setGraph(t2, e2) {
    const n2 = t2.length, r2 = this.h._malloc(n2);
    this.h.HEAPU8.set(t2, r2), e2 ? this.h._changeBinaryGraph(n2, r2) : this.h._changeTextGraph(n2, r2), this.h._free(r2);
  }
  configureAudio(t2, e2, n2, r2, i2) {
    this.h._configureAudio || console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'), ji(this, r2 || "input_audio", (r3) => {
      ji(this, i2 = i2 || "audio_header", (i3) => {
        this.h._configureAudio(r3, i3, t2, e2 ?? 0, n2);
      });
    });
  }
  setAutoResizeCanvas(t2) {
    this.j = t2;
  }
  setAutoRenderToScreen(t2) {
    this.h._setAutoRenderToScreen(t2);
  }
  setGpuBufferVerticalFlip(t2) {
    this.h.gpuOriginForWebTexturesIsBottomLeft = t2;
  }
  attachErrorListener(t2) {
    this.h.errorListener = t2;
  }
  attachEmptyPacketListener(t2, e2) {
    this.h.emptyPacketListeners = this.h.emptyPacketListeners || {}, this.h.emptyPacketListeners[t2] = e2;
  }
  addAudioToStream(t2, e2, n2) {
    this.addAudioToStreamWithShape(t2, 0, 0, e2, n2);
  }
  addAudioToStreamWithShape(t2, e2, n2, r2, i2) {
    const o2 = 4 * t2.length;
    this.i !== o2 && (this.g && this.h._free(this.g), this.g = this.h._malloc(o2), this.i = o2), this.h.HEAPF32.set(t2, this.g / 4), ji(this, r2, (t3) => {
      this.h._addAudioToInputStream(this.g, e2, n2, t3, i2);
    });
  }
  addGpuBufferToStream(t2, e2, n2) {
    ji(this, e2, (e3) => {
      if (!this.h.canvas) throw Error("No OpenGL canvas configured.");
      e3 ? this.h._bindTextureToStream(e3) : this.h._bindTextureToCanvas();
      const r2 = this.h.canvas.getContext("webgl2") || this.h.canvas.getContext("webgl");
      if (!r2) throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");
      this.h.gpuOriginForWebTexturesIsBottomLeft && r2.pixelStorei(r2.UNPACK_FLIP_Y_WEBGL, true), r2.texImage2D(r2.TEXTURE_2D, 0, r2.RGBA, r2.RGBA, r2.UNSIGNED_BYTE, t2), this.h.gpuOriginForWebTexturesIsBottomLeft && r2.pixelStorei(r2.UNPACK_FLIP_Y_WEBGL, false);
      const [i2, o2] = void 0 !== t2.videoWidth ? [t2.videoWidth, t2.videoHeight] : void 0 !== t2.naturalWidth ? [t2.naturalWidth, t2.naturalHeight] : void 0 !== t2.displayWidth ? [t2.displayWidth, t2.displayHeight] : [t2.width, t2.height];
      !this.j || i2 === this.h.canvas.width && o2 === this.h.canvas.height || (this.h.canvas.width = i2, this.h.canvas.height = o2);
      const [s2, a2] = [i2, o2];
      this.h._addBoundTextureToStream(e3, s2, a2, n2);
    });
  }
  addBoolToStream(t2, e2, n2) {
    ji(this, e2, (e3) => {
      this.h._addBoolToInputStream(t2, e3, n2);
    });
  }
  addDoubleToStream(t2, e2, n2) {
    ji(this, e2, (e3) => {
      this.h._addDoubleToInputStream(t2, e3, n2);
    });
  }
  addFloatToStream(t2, e2, n2) {
    ji(this, e2, (e3) => {
      this.h._addFloatToInputStream(t2, e3, n2);
    });
  }
  addIntToStream(t2, e2, n2) {
    ji(this, e2, (e3) => {
      this.h._addIntToInputStream(t2, e3, n2);
    });
  }
  addUintToStream(t2, e2, n2) {
    ji(this, e2, (e3) => {
      this.h._addUintToInputStream(t2, e3, n2);
    });
  }
  addStringToStream(t2, e2, n2) {
    ji(this, e2, (e3) => {
      ji(this, t2, (t3) => {
        this.h._addStringToInputStream(t3, e3, n2);
      });
    });
  }
  addStringRecordToStream(t2, e2, n2) {
    ji(this, e2, (e3) => {
      Ci(this, Object.keys(t2), (r2) => {
        Ci(this, Object.values(t2), (i2) => {
          this.h._addFlatHashMapToInputStream(r2, i2, Object.keys(t2).length, e3, n2);
        });
      });
    });
  }
  addProtoToStream(t2, e2, n2, r2) {
    ji(this, n2, (n3) => {
      ji(this, e2, (e3) => {
        const i2 = this.h._malloc(t2.length);
        this.h.HEAPU8.set(t2, i2), this.h._addProtoToInputStream(i2, t2.length, e3, n3, r2), this.h._free(i2);
      });
    });
  }
  addEmptyPacketToStream(t2, e2) {
    ji(this, t2, (t3) => {
      this.h._addEmptyPacketToInputStream(t3, e2);
    });
  }
  addBoolVectorToStream(t2, e2, n2) {
    ji(this, e2, (e3) => {
      const r2 = this.h._allocateBoolVector(t2.length);
      if (!r2) throw Error("Unable to allocate new bool vector on heap.");
      for (const e4 of t2) this.h._addBoolVectorEntry(r2, e4);
      this.h._addBoolVectorToInputStream(r2, e3, n2);
    });
  }
  addDoubleVectorToStream(t2, e2, n2) {
    ji(this, e2, (e3) => {
      const r2 = this.h._allocateDoubleVector(t2.length);
      if (!r2) throw Error("Unable to allocate new double vector on heap.");
      for (const e4 of t2) this.h._addDoubleVectorEntry(r2, e4);
      this.h._addDoubleVectorToInputStream(r2, e3, n2);
    });
  }
  addFloatVectorToStream(t2, e2, n2) {
    ji(this, e2, (e3) => {
      const r2 = this.h._allocateFloatVector(t2.length);
      if (!r2) throw Error("Unable to allocate new float vector on heap.");
      for (const e4 of t2) this.h._addFloatVectorEntry(r2, e4);
      this.h._addFloatVectorToInputStream(r2, e3, n2);
    });
  }
  addIntVectorToStream(t2, e2, n2) {
    ji(this, e2, (e3) => {
      const r2 = this.h._allocateIntVector(t2.length);
      if (!r2) throw Error("Unable to allocate new int vector on heap.");
      for (const e4 of t2) this.h._addIntVectorEntry(r2, e4);
      this.h._addIntVectorToInputStream(r2, e3, n2);
    });
  }
  addUintVectorToStream(t2, e2, n2) {
    ji(this, e2, (e3) => {
      const r2 = this.h._allocateUintVector(t2.length);
      if (!r2) throw Error("Unable to allocate new unsigned int vector on heap.");
      for (const e4 of t2) this.h._addUintVectorEntry(r2, e4);
      this.h._addUintVectorToInputStream(r2, e3, n2);
    });
  }
  addStringVectorToStream(t2, e2, n2) {
    ji(this, e2, (e3) => {
      const r2 = this.h._allocateStringVector(t2.length);
      if (!r2) throw Error("Unable to allocate new string vector on heap.");
      for (const e4 of t2) ji(this, e4, (t3) => {
        this.h._addStringVectorEntry(r2, t3);
      });
      this.h._addStringVectorToInputStream(r2, e3, n2);
    });
  }
  addBoolToInputSidePacket(t2, e2) {
    ji(this, e2, (e3) => {
      this.h._addBoolToInputSidePacket(t2, e3);
    });
  }
  addDoubleToInputSidePacket(t2, e2) {
    ji(this, e2, (e3) => {
      this.h._addDoubleToInputSidePacket(t2, e3);
    });
  }
  addFloatToInputSidePacket(t2, e2) {
    ji(this, e2, (e3) => {
      this.h._addFloatToInputSidePacket(t2, e3);
    });
  }
  addIntToInputSidePacket(t2, e2) {
    ji(this, e2, (e3) => {
      this.h._addIntToInputSidePacket(t2, e3);
    });
  }
  addUintToInputSidePacket(t2, e2) {
    ji(this, e2, (e3) => {
      this.h._addUintToInputSidePacket(t2, e3);
    });
  }
  addStringToInputSidePacket(t2, e2) {
    ji(this, e2, (e3) => {
      ji(this, t2, (t3) => {
        this.h._addStringToInputSidePacket(t3, e3);
      });
    });
  }
  addProtoToInputSidePacket(t2, e2, n2) {
    ji(this, n2, (n3) => {
      ji(this, e2, (e3) => {
        const r2 = this.h._malloc(t2.length);
        this.h.HEAPU8.set(t2, r2), this.h._addProtoToInputSidePacket(r2, t2.length, e3, n3), this.h._free(r2);
      });
    });
  }
  addBoolVectorToInputSidePacket(t2, e2) {
    ji(this, e2, (e3) => {
      const n2 = this.h._allocateBoolVector(t2.length);
      if (!n2) throw Error("Unable to allocate new bool vector on heap.");
      for (const e4 of t2) this.h._addBoolVectorEntry(n2, e4);
      this.h._addBoolVectorToInputSidePacket(n2, e3);
    });
  }
  addDoubleVectorToInputSidePacket(t2, e2) {
    ji(this, e2, (e3) => {
      const n2 = this.h._allocateDoubleVector(t2.length);
      if (!n2) throw Error("Unable to allocate new double vector on heap.");
      for (const e4 of t2) this.h._addDoubleVectorEntry(n2, e4);
      this.h._addDoubleVectorToInputSidePacket(n2, e3);
    });
  }
  addFloatVectorToInputSidePacket(t2, e2) {
    ji(this, e2, (e3) => {
      const n2 = this.h._allocateFloatVector(t2.length);
      if (!n2) throw Error("Unable to allocate new float vector on heap.");
      for (const e4 of t2) this.h._addFloatVectorEntry(n2, e4);
      this.h._addFloatVectorToInputSidePacket(n2, e3);
    });
  }
  addIntVectorToInputSidePacket(t2, e2) {
    ji(this, e2, (e3) => {
      const n2 = this.h._allocateIntVector(t2.length);
      if (!n2) throw Error("Unable to allocate new int vector on heap.");
      for (const e4 of t2) this.h._addIntVectorEntry(n2, e4);
      this.h._addIntVectorToInputSidePacket(n2, e3);
    });
  }
  addUintVectorToInputSidePacket(t2, e2) {
    ji(this, e2, (e3) => {
      const n2 = this.h._allocateUintVector(t2.length);
      if (!n2) throw Error("Unable to allocate new unsigned int vector on heap.");
      for (const e4 of t2) this.h._addUintVectorEntry(n2, e4);
      this.h._addUintVectorToInputSidePacket(n2, e3);
    });
  }
  addStringVectorToInputSidePacket(t2, e2) {
    ji(this, e2, (e3) => {
      const n2 = this.h._allocateStringVector(t2.length);
      if (!n2) throw Error("Unable to allocate new string vector on heap.");
      for (const e4 of t2) ji(this, e4, (t3) => {
        this.h._addStringVectorEntry(n2, t3);
      });
      this.h._addStringVectorToInputSidePacket(n2, e3);
    });
  }
  attachBoolListener(t2, e2) {
    Gi(this, t2, e2), ji(this, t2, (t3) => {
      this.h._attachBoolListener(t3);
    });
  }
  attachBoolVectorListener(t2, e2) {
    Mi(this, t2, e2), ji(this, t2, (t3) => {
      this.h._attachBoolVectorListener(t3);
    });
  }
  attachIntListener(t2, e2) {
    Gi(this, t2, e2), ji(this, t2, (t3) => {
      this.h._attachIntListener(t3);
    });
  }
  attachIntVectorListener(t2, e2) {
    Mi(this, t2, e2), ji(this, t2, (t3) => {
      this.h._attachIntVectorListener(t3);
    });
  }
  attachUintListener(t2, e2) {
    Gi(this, t2, e2), ji(this, t2, (t3) => {
      this.h._attachUintListener(t3);
    });
  }
  attachUintVectorListener(t2, e2) {
    Mi(this, t2, e2), ji(this, t2, (t3) => {
      this.h._attachUintVectorListener(t3);
    });
  }
  attachDoubleListener(t2, e2) {
    Gi(this, t2, e2), ji(this, t2, (t3) => {
      this.h._attachDoubleListener(t3);
    });
  }
  attachDoubleVectorListener(t2, e2) {
    Mi(this, t2, e2), ji(this, t2, (t3) => {
      this.h._attachDoubleVectorListener(t3);
    });
  }
  attachFloatListener(t2, e2) {
    Gi(this, t2, e2), ji(this, t2, (t3) => {
      this.h._attachFloatListener(t3);
    });
  }
  attachFloatVectorListener(t2, e2) {
    Mi(this, t2, e2), ji(this, t2, (t3) => {
      this.h._attachFloatVectorListener(t3);
    });
  }
  attachStringListener(t2, e2) {
    Gi(this, t2, e2), ji(this, t2, (t3) => {
      this.h._attachStringListener(t3);
    });
  }
  attachStringVectorListener(t2, e2) {
    Mi(this, t2, e2), ji(this, t2, (t3) => {
      this.h._attachStringVectorListener(t3);
    });
  }
  attachProtoListener(t2, e2, n2) {
    Gi(this, t2, e2), ji(this, t2, (t3) => {
      this.h._attachProtoListener(t3, n2 || false);
    });
  }
  attachProtoVectorListener(t2, e2, n2) {
    Mi(this, t2, e2), ji(this, t2, (t3) => {
      this.h._attachProtoVectorListener(t3, n2 || false);
    });
  }
  attachAudioListener(t2, e2, n2) {
    this.h._attachAudioListener || console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'), Gi(this, t2, (t3, n3) => {
      t3 = new Float32Array(t3.buffer, t3.byteOffset, t3.length / 4), e2(t3, n3);
    }), ji(this, t2, (t3) => {
      this.h._attachAudioListener(t3, n2 || false);
    });
  }
  finishProcessing() {
    this.h._waitUntilIdle();
  }
  closeGraph() {
    this.h._closeGraph(), this.h.simpleListeners = void 0, this.h.emptyPacketListeners = void 0;
  }
});
var $i = class extends Di {
};
function zi(t2, e2, n2) {
  return __async(this, null, function* () {
    return t2 = yield ((t3, e3, n3, r2) => __async(null, null, function* () {
      if (e3 && (yield Vi(e3)), !self.ModuleFactory) throw Error("ModuleFactory not set.");
      if (n3 && (yield Vi(n3), !self.ModuleFactory)) throw Error("ModuleFactory not set.");
      return self.Module && r2 && ((e3 = self.Module).locateFile = r2.locateFile, r2.mainScriptUrlOrBlob && (e3.mainScriptUrlOrBlob = r2.mainScriptUrlOrBlob)), r2 = yield self.ModuleFactory(self.Module || r2), self.ModuleFactory = self.Module = void 0, new t3(r2, null);
    }))(t2, e2.wasmLoaderPath, e2.assetLoaderPath, {
      locateFile: (t3) => t3.endsWith(".wasm") ? e2.wasmBinaryPath.toString() : e2.assetBinaryPath && t3.endsWith(".data") ? e2.assetBinaryPath.toString() : t3
    }), yield t2.o(n2), t2;
  });
}
function Ri(t2, e2, n2) {
  return __async(this, null, function* () {
    return zi(t2, e2, n2);
  });
}
function Wi(t2, e2) {
  const n2 = Le(t2.baseOptions, vi, 1) || new vi();
  "string" == typeof e2 ? (pe(n2, 2, Qt(e2)), pe(n2, 1)) : e2 instanceof Uint8Array && (pe(n2, 1, lt(e2, false)), pe(n2, 2)), ke(t2.baseOptions, 0, 1, n2);
}
function Hi(t2, e2) {
  const n2 = e2.baseOptions || {};
  if (e2.baseOptions?.modelAssetBuffer && e2.baseOptions?.modelAssetPath) throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");
  if (!(Le(t2.baseOptions, vi, 1)?.g() || Le(t2.baseOptions, vi, 1)?.i() || e2.baseOptions?.modelAssetBuffer || e2.baseOptions?.modelAssetPath)) throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");
  if (function(t3, e3) {
    let n3 = Le(t3.baseOptions, yi, 3);
    if (!n3) {
      var r2 = n3 = new yi();
      Fe(r2, 4, new Wr());
    }
    "delegate" in e3 && ("GPU" === e3.delegate ? Fe(e3 = n3, 2, r2 = new $r()) : Fe(e3 = n3, 4, r2 = new Wr())), ke(t3.baseOptions, 0, 3, n3);
  }(t2, n2), n2.modelAssetPath) return fetch(n2.modelAssetPath.toString()).then((t3) => {
    if (t3.ok) return t3.arrayBuffer();
    throw Error(`Failed to fetch model: ${n2.modelAssetPath} (${t3.status})`);
  }).then((e3) => {
    try {
      t2.g.h.FS_unlink("/model.dat");
    } catch {
    }
    t2.g.h.FS_createDataFile("/", "model.dat", new Uint8Array(e3), true, false, false), Wi(t2, "/model.dat"), t2.u();
  });
  if (n2.modelAssetBuffer instanceof Uint8Array) Wi(t2, n2.modelAssetBuffer);
  else if (n2.modelAssetBuffer) return function(t3) {
    return __async(this, null, function* () {
      const e3 = [];
      for (var n3 = 0; ; ) {
        const {
          done: r2,
          value: i2
        } = yield t3.read();
        if (r2) break;
        e3.push(i2), n3 += i2.length;
      }
      if (0 === e3.length) return new Uint8Array(0);
      if (1 === e3.length) return e3[0];
      t3 = new Uint8Array(n3), n3 = 0;
      for (const r2 of e3) t3.set(r2, n3), n3 += r2.length;
      return t3;
    });
  }(n2.modelAssetBuffer).then((e3) => {
    Wi(t2, e3), t2.u();
  });
  return t2.u(), Promise.resolve();
}
function qi(t2) {
  try {
    const e2 = t2.m.length;
    if (1 === e2) throw Error(t2.m[0].message);
    if (e2 > 1) throw Error("Encountered multiple errors: " + t2.m.map((t3) => t3.message).join(", "));
  } finally {
    t2.m = [];
  }
}
function Ji(t2, e2) {
  t2.j = Math.max(t2.j, e2);
}
var Ki = class {
  constructor(t2) {
    this.g = t2, this.m = [], this.j = 0, this.g.setAutoRenderToScreen(false);
  }
  setGraph(t2, e2) {
    this.g.attachErrorListener((t3, e3) => {
      this.m.push(Error(e3));
    }), this.g.M(), this.g.setGraph(t2, e2), qi(this);
  }
  finishProcessing() {
    this.g.finishProcessing(), qi(this);
  }
  close() {
    this.g.closeGraph();
  }
};
Ki.prototype.close = Ki.prototype.close, function(e2, n2) {
  e2 = e2.split(".");
  var r2, i2 = t;
  e2[0] in i2 || void 0 === i2.execScript || i2.execScript("var " + e2[0]);
  for (; e2.length && (r2 = e2.shift()); ) e2.length || void 0 === n2 ? i2 = i2[r2] && i2[r2] !== Object.prototype[r2] ? i2[r2] : i2[r2] = {} : i2[r2] = n2;
}("TaskRunner", Ki);
var Xi = class extends Ki {
  constructor(t2, e2) {
    super(new $i(t2, e2)), this.s = {
      languages: []
    }, ke(t2 = this.i = new Si(), 0, 1, e2 = new wi());
  }
  o(t2) {
    return ke(this.i, 0, 2, Ti(t2, Le(this.i, gi, 2))), Hi(this, t2);
  }
  get baseOptions() {
    return Le(this.i, wi, 1);
  }
  set baseOptions(t2) {
    ke(this.i, 0, 1, t2);
  }
  J(t2) {
    return this.s = {
      languages: []
    }, this.g.addStringToStream(t2, "text_in", this.j + 1), this.finishProcessing(), this.s;
  }
  u() {
    var t2 = new ii();
    ni(t2), Ge(t2, 15, "classifications_out");
    const e2 = new Jr();
    ln(e2, Ai, this.i);
    const n2 = new Qr();
    Ae(n2, Qt("mediapipe.tasks.text.text_classifier.TextClassifierGraph")), Yr(n2), Ge(n2, 4, "CLASSIFICATIONS:classifications_out"), n2.o(e2), Ce(t2, n2), this.g.attachProtoListener("classifications_out", (t3, e3) => {
      if ({
        classifications: t3
      } = xi(ui(t3)), 1 !== t3.length) throw Error(`Expected 1 classification head, got ${t3.length}`);
      this.s.languages = t3[0].categories.map((t4) => ({
        languageCode: t4.categoryName,
        probability: t4.score
      })), Ji(this, e3);
    }), this.g.attachEmptyPacketListener("classifications_out", (t3) => {
      Ji(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
Xi.prototype.detect = Xi.prototype.J, Xi.prototype.setOptions = Xi.prototype.o, Xi.createFromModelPath = function(t2, e2) {
  return Ri(Xi, t2, {
    baseOptions: {
      modelAssetPath: e2
    }
  });
}, Xi.createFromModelBuffer = function(t2, e2) {
  return Ri(Xi, t2, {
    baseOptions: {
      modelAssetBuffer: e2
    }
  });
}, Xi.createFromOptions = function(t2, e2) {
  return Ri(Xi, t2, e2);
};
var Yi = class extends Ki {
  constructor(t2, e2) {
    super(new $i(t2, e2)), this.s = {
      classifications: []
    }, ke(t2 = this.i = new Si(), 0, 1, e2 = new wi());
  }
  o(t2) {
    return ke(this.i, 0, 2, Ti(t2, Le(this.i, gi, 2))), Hi(this, t2);
  }
  get baseOptions() {
    return Le(this.i, wi, 1);
  }
  set baseOptions(t2) {
    ke(this.i, 0, 1, t2);
  }
  I(t2) {
    return this.s = {
      classifications: []
    }, this.g.addStringToStream(t2, "text_in", this.j + 1), this.finishProcessing(), this.s;
  }
  u() {
    var t2 = new ii();
    ni(t2), Ge(t2, 15, "classifications_out");
    const e2 = new Jr();
    ln(e2, Ai, this.i);
    const n2 = new Qr();
    Ae(n2, Qt("mediapipe.tasks.text.text_classifier.TextClassifierGraph")), Yr(n2), Ge(n2, 4, "CLASSIFICATIONS:classifications_out"), n2.o(e2), Ce(t2, n2), this.g.attachProtoListener("classifications_out", (t3, e3) => {
      this.s = xi(ui(t3)), Ji(this, e3);
    }), this.g.attachEmptyPacketListener("classifications_out", (t3) => {
      Ji(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
Yi.prototype.classify = Yi.prototype.I, Yi.prototype.setOptions = Yi.prototype.o, Yi.createFromModelPath = function(t2, e2) {
  return Ri(Yi, t2, {
    baseOptions: {
      modelAssetPath: e2
    }
  });
}, Yi.createFromModelBuffer = function(t2, e2) {
  return Ri(Yi, t2, {
    baseOptions: {
      modelAssetBuffer: e2
    }
  });
}, Yi.createFromOptions = function(t2, e2) {
  return Ri(Yi, t2, e2);
};
var Qi = class extends Ki {
  constructor(t2, e2) {
    super(new $i(t2, e2)), this.s = {
      embeddings: []
    }, ke(t2 = this.i = new Ei(), 0, 1, e2 = new wi());
  }
  o(t2) {
    var e2 = this.i, n2 = Le(this.i, pi, 2);
    return n2 = n2 ? le(n2) : new pi(), void 0 !== t2.l2Normalize ? pe(n2, 1, $t(t2.l2Normalize)) : "l2Normalize" in t2 && pe(n2, 1), void 0 !== t2.quantize ? pe(n2, 2, $t(t2.quantize)) : "quantize" in t2 && pe(n2, 2), ke(e2, 0, 2, n2), Hi(this, t2);
  }
  get baseOptions() {
    return Le(this.i, wi, 1);
  }
  set baseOptions(t2) {
    ke(this.i, 0, 1, t2);
  }
  K(t2) {
    return this.g.addStringToStream(t2, "text_in", this.j + 1), this.finishProcessing(), this.s;
  }
  u() {
    var t2 = new ii();
    ni(t2), Ge(t2, 15, "embeddings_out");
    const e2 = new Jr();
    ln(e2, Ii, this.i);
    const n2 = new Qr();
    Ae(n2, Qt("mediapipe.tasks.text.text_embedder.TextEmbedderGraph")), Yr(n2), Ge(n2, 4, "EMBEDDINGS:embeddings_out"), n2.o(e2), Ce(t2, n2), this.g.attachProtoListener("embeddings_out", (t3, e3) => {
      t3 = di(t3), this.s = function(t4) {
        return {
          embeddings: Ne(t4, hi).map((t5) => {
            const e4 = {
              headIndex: Wt(de(t5, 3)) ?? 0 ?? -1,
              headName: Zt(de(t5, 4)) ?? "" ?? ""
            };
            if (void 0 !== Be(t5, ci, Ie(t5, 1))) e4.floatEmbedding = be(Le(t5, ci, Ie(t5, 1)), 1, Dt, void 0 === pt ? 2 : 4).slice();
            else {
              const n3 = new Uint8Array(0);
              e4.quantizedEmbedding = Le(t5, li, Ie(t5, 2))?.H()?.i() ?? n3;
            }
            return e4;
          }),
          timestampMs: Kt(de(t4, 2)) ?? 0
        };
      }(t3), Ji(this, e3);
    }), this.g.attachEmptyPacketListener("embeddings_out", (t3) => {
      Ji(this, t3);
    }), t2 = t2.g(), this.setGraph(new Uint8Array(t2), true);
  }
};
Qi.cosineSimilarity = function(t2, e2) {
  if (t2.floatEmbedding && e2.floatEmbedding) t2 = Pi(t2.floatEmbedding, e2.floatEmbedding);
  else {
    if (!t2.quantizedEmbedding || !e2.quantizedEmbedding) throw Error("Cannot compute cosine similarity between quantized and float embeddings.");
    t2 = Pi(Ui(t2.quantizedEmbedding), Ui(e2.quantizedEmbedding));
  }
  return t2;
}, Qi.prototype.embed = Qi.prototype.K, Qi.prototype.setOptions = Qi.prototype.o, Qi.createFromModelPath = function(t2, e2) {
  return Ri(Qi, t2, {
    baseOptions: {
      modelAssetPath: e2
    }
  });
}, Qi.createFromModelBuffer = function(t2, e2) {
  return Ri(Qi, t2, {
    baseOptions: {
      modelAssetBuffer: e2
    }
  });
}, Qi.createFromOptions = function(t2, e2) {
  return Ri(Qi, t2, e2);
};
export {
  ki as FilesetResolver,
  Xi as LanguageDetector,
  Yi as TextClassifier,
  Qi as TextEmbedder
};
//# sourceMappingURL=@mediapipe_tasks-text.js.map
