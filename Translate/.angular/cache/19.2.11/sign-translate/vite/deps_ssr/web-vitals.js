import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  __spreadValues
} from "./chunk-5P6RLSS7.js";

// node_modules/web-vitals/dist/web-vitals.js
var e = -1;
var t = (t2) => {
  addEventListener("pageshow", (n2) => {
    n2.persisted && (e = n2.timeStamp, t2(n2));
  }, true);
};
var n = (e2, t2, n2, i2) => {
  let o2, s2;
  return (r2) => {
    t2.value >= 0 && (r2 || i2) && (s2 = t2.value - (o2 ?? 0), (s2 || void 0 === o2) && (o2 = t2.value, t2.delta = s2, t2.rating = ((e3, t3) => e3 > t3[1] ? "poor" : e3 > t3[0] ? "needs-improvement" : "good")(t2.value, n2), e2(t2)));
  };
};
var i = (e2) => {
  requestAnimationFrame(() => requestAnimationFrame(() => e2()));
};
var o = () => {
  const e2 = performance.getEntriesByType("navigation")[0];
  if (e2 && e2.responseStart > 0 && e2.responseStart < performance.now()) return e2;
};
var s = () => {
  const e2 = o();
  return e2?.activationStart ?? 0;
};
var r = (t2, n2 = -1) => {
  const i2 = o();
  let r2 = "navigate";
  e >= 0 ? r2 = "back-forward-cache" : i2 && (document.prerendering || s() > 0 ? r2 = "prerender" : document.wasDiscarded ? r2 = "restore" : i2.type && (r2 = i2.type.replace(/_/g, "-")));
  return {
    name: t2,
    value: n2,
    rating: "good",
    delta: 0,
    entries: [],
    id: `v5-${Date.now()}-${Math.floor(8999999999999 * Math.random()) + 1e12}`,
    navigationType: r2
  };
};
var c = /* @__PURE__ */ new WeakMap();
function a(e2, t2) {
  return c.get(e2) || c.set(e2, new t2()), c.get(e2);
}
var d = class {
  t;
  i = 0;
  o = [];
  h(e2) {
    if (e2.hadRecentInput) return;
    const t2 = this.o[0], n2 = this.o.at(-1);
    this.i && t2 && n2 && e2.startTime - n2.startTime < 1e3 && e2.startTime - t2.startTime < 5e3 ? (this.i += e2.value, this.o.push(e2)) : (this.i = e2.value, this.o = [e2]), this.t?.(e2);
  }
};
var h = (e2, t2, n2 = {}) => {
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(e2)) {
      const i2 = new PerformanceObserver((e3) => {
        Promise.resolve().then(() => {
          t2(e3.getEntries());
        });
      });
      return i2.observe(__spreadValues({
        type: e2,
        buffered: true
      }, n2)), i2;
    }
  } catch {
  }
};
var f = (e2) => {
  let t2 = false;
  return () => {
    t2 || (e2(), t2 = true);
  };
};
var u = -1;
var l = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0;
var m = (e2) => {
  "hidden" === document.visibilityState && u > -1 && (u = "visibilitychange" === e2.type ? e2.timeStamp : 0, v());
};
var g = () => {
  addEventListener("visibilitychange", m, true), addEventListener("prerenderingchange", m, true);
};
var v = () => {
  removeEventListener("visibilitychange", m, true), removeEventListener("prerenderingchange", m, true);
};
var p = () => {
  if (u < 0) {
    const e2 = s(), n2 = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").filter((t2) => "hidden" === t2.name && t2.startTime > e2)[0]?.startTime;
    u = n2 ?? l(), g(), t(() => {
      setTimeout(() => {
        u = l(), g();
      });
    });
  }
  return {
    get firstHiddenTime() {
      return u;
    }
  };
};
var y = (e2) => {
  document.prerendering ? addEventListener("prerenderingchange", () => e2(), true) : e2();
};
var b = [1800, 3e3];
var P = (e2, o2 = {}) => {
  y(() => {
    const c2 = p();
    let a2, d2 = r("FCP");
    const f2 = h("paint", (e3) => {
      for (const t2 of e3) "first-contentful-paint" === t2.name && (f2.disconnect(), t2.startTime < c2.firstHiddenTime && (d2.value = Math.max(t2.startTime - s(), 0), d2.entries.push(t2), a2(true)));
    });
    f2 && (a2 = n(e2, d2, b, o2.reportAllChanges), t((t2) => {
      d2 = r("FCP"), a2 = n(e2, d2, b, o2.reportAllChanges), i(() => {
        d2.value = performance.now() - t2.timeStamp, a2(true);
      });
    }));
  });
};
var T = [0.1, 0.25];
var E = (e2, o2 = {}) => {
  P(f(() => {
    let s2, c2 = r("CLS", 0);
    const f2 = a(o2, d), u2 = (e3) => {
      for (const t2 of e3) f2.h(t2);
      f2.i > c2.value && (c2.value = f2.i, c2.entries = f2.o, s2());
    }, l2 = h("layout-shift", u2);
    l2 && (s2 = n(e2, c2, T, o2.reportAllChanges), document.addEventListener("visibilitychange", () => {
      "hidden" === document.visibilityState && (u2(l2.takeRecords()), s2(true));
    }), t(() => {
      f2.i = 0, c2 = r("CLS", 0), s2 = n(e2, c2, T, o2.reportAllChanges), i(() => s2());
    }), setTimeout(s2));
  }));
};
var _ = 0;
var L = 1 / 0;
var M = 0;
var C = (e2) => {
  for (const t2 of e2) t2.interactionId && (L = Math.min(L, t2.interactionId), M = Math.max(M, t2.interactionId), _ = M ? (M - L) / 7 + 1 : 0);
};
var I;
var w = () => I ? _ : performance.interactionCount ?? 0;
var F = () => {
  "interactionCount" in performance || I || (I = h("event", C, {
    type: "event",
    buffered: true,
    durationThreshold: 0
  }));
};
var k = 0;
var A = class {
  u = [];
  l = /* @__PURE__ */ new Map();
  m;
  v;
  p() {
    k = w(), this.u.length = 0, this.l.clear();
  }
  P() {
    const e2 = Math.min(this.u.length - 1, Math.floor((w() - k) / 50));
    return this.u[e2];
  }
  h(e2) {
    if (this.m?.(e2), !e2.interactionId && "first-input" !== e2.entryType) return;
    const t2 = this.u.at(-1);
    let n2 = this.l.get(e2.interactionId);
    if (n2 || this.u.length < 10 || e2.duration > t2.T) {
      if (n2 ? e2.duration > n2.T ? (n2.entries = [e2], n2.T = e2.duration) : e2.duration === n2.T && e2.startTime === n2.entries[0].startTime && n2.entries.push(e2) : (n2 = {
        id: e2.interactionId,
        entries: [e2],
        T: e2.duration
      }, this.l.set(n2.id, n2), this.u.push(n2)), this.u.sort((e3, t3) => t3.T - e3.T), this.u.length > 10) {
        const e3 = this.u.splice(10);
        for (const t3 of e3) this.l.delete(t3.id);
      }
      this.v?.(n2);
    }
  }
};
var B = (e2) => {
  const t2 = globalThis.requestIdleCallback || setTimeout;
  "hidden" === document.visibilityState ? e2() : (e2 = f(e2), document.addEventListener("visibilitychange", e2, {
    once: true
  }), t2(() => {
    e2(), document.removeEventListener("visibilitychange", e2);
  }));
};
var N = [200, 500];
var S = (e2, i2 = {}) => {
  globalThis.PerformanceEventTiming && "interactionId" in PerformanceEventTiming.prototype && y(() => {
    F();
    let o2, s2 = r("INP");
    const c2 = a(i2, A), d2 = (e3) => {
      B(() => {
        for (const t3 of e3) c2.h(t3);
        const t2 = c2.P();
        t2 && t2.T !== s2.value && (s2.value = t2.T, s2.entries = t2.entries, o2());
      });
    }, f2 = h("event", d2, {
      durationThreshold: i2.durationThreshold ?? 40
    });
    o2 = n(e2, s2, N, i2.reportAllChanges), f2 && (f2.observe({
      type: "first-input",
      buffered: true
    }), document.addEventListener("visibilitychange", () => {
      "hidden" === document.visibilityState && (d2(f2.takeRecords()), o2(true));
    }), t(() => {
      c2.p(), s2 = r("INP"), o2 = n(e2, s2, N, i2.reportAllChanges);
    }));
  });
};
var q = class {
  m;
  h(e2) {
    this.m?.(e2);
  }
};
var x = [2500, 4e3];
var O = (e2, o2 = {}) => {
  y(() => {
    const c2 = p();
    let d2, u2 = r("LCP");
    const l2 = a(o2, q), m2 = (e3) => {
      o2.reportAllChanges || (e3 = e3.slice(-1));
      for (const t2 of e3) l2.h(t2), t2.startTime < c2.firstHiddenTime && (u2.value = Math.max(t2.startTime - s(), 0), u2.entries = [t2], d2());
    }, g2 = h("largest-contentful-paint", m2);
    if (g2) {
      d2 = n(e2, u2, x, o2.reportAllChanges);
      const s2 = f(() => {
        m2(g2.takeRecords()), g2.disconnect(), d2(true);
      });
      for (const e3 of ["keydown", "click", "visibilitychange"]) addEventListener(e3, () => B(s2), {
        capture: true,
        once: true
      });
      t((t2) => {
        u2 = r("LCP"), d2 = n(e2, u2, x, o2.reportAllChanges), i(() => {
          u2.value = performance.now() - t2.timeStamp, d2(true);
        });
      });
    }
  });
};
var $ = [800, 1800];
var D = (e2) => {
  document.prerendering ? y(() => D(e2)) : "complete" !== document.readyState ? addEventListener("load", () => D(e2), true) : setTimeout(e2);
};
var H = (e2, i2 = {}) => {
  let c2 = r("TTFB"), a2 = n(e2, c2, $, i2.reportAllChanges);
  D(() => {
    const d2 = o();
    d2 && (c2.value = Math.max(d2.responseStart - s(), 0), c2.entries = [d2], a2(true), t(() => {
      c2 = r("TTFB", 0), a2 = n(e2, c2, $, i2.reportAllChanges), a2(true);
    }));
  });
};
export {
  T as CLSThresholds,
  b as FCPThresholds,
  N as INPThresholds,
  x as LCPThresholds,
  $ as TTFBThresholds,
  E as onCLS,
  P as onFCP,
  S as onINP,
  O as onLCP,
  H as onTTFB
};
//# sourceMappingURL=web-vitals.js.map
