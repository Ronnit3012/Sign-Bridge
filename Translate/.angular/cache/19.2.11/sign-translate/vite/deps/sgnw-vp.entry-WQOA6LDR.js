import {
  swu
} from "./chunk-LUIMTEER.js";
import {
  style
} from "./chunk-U2LUJIOQ.js";
import {
  cssValues
} from "./chunk-2K7UIDHG.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-5ZULVOZL.js";
import "./chunk-H7FQKYJT.js";

// node_modules/@sutton-signwriting/sgnw-components/dist/esm/sgnw-vp.entry.js
var sgnwVpCss = ":host{writing-mode:vertical-lr;border-left:1px solid blue;border-right:1px solid blue;height:100%}:host svg{display:block}:host span.outside{font-size:0%;line-height:0%;border-left:1px solid blue;vertical-align:top}:host span.middle{vertical-align:bottom}:host span.inside{border-left:1px dashed red}sgnw-sign,sgnw-symbol{writing-mode:horizontal-tb;display:inline-block;vertical-align:middle;box-sizing:content-box}";
var SgnwVp = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.sgnw = window.sgnw;
    this.items = [];
  }
  parseText(newValue) {
    this.items = swu.parse.text(newValue).map((val) => {
      let i = swu.info(val);
      i["text"] = val;
      return i;
    });
  }
  connectedCallback() {
    if (!this.vp) {
      this.vp = this.el.innerHTML;
    } else {
      this.parseText(this.vp);
    }
    if (!this.sgnw) {
      let handleSgnw = function() {
        self.sgnw = window.sgnw;
        window.removeEventListener("sgnw", handleSgnw, false);
      };
      let self = this;
      window.addEventListener("sgnw", handleSgnw, false);
    }
  }
  render() {
    const values = cssValues(this.el);
    const styling = style.compose({
      colorize: this.colorize,
      detail: values.detail
    });
    const offset = 150;
    return h(Host, {
      vp: this.vp
    }, h("span", {
      class: "outside"
    }, h("span", {
      class: "middle"
    }, h("span", {
      class: "inside"
    }, this.items.map((item) => {
      let zoom, pad, width, height, right, padding;
      if (item["segment"] == "sign") {
        zoom = values.zoom * item["zoom"];
        pad = item["padding"] * zoom;
        width = item["width"] * zoom + pad * 2;
        height = item["height"] * zoom + pad * 2;
        right = (1e3 - item["minX"] * 2 - item["width"]) * zoom - offset * values.zoom * item["lane"];
        padding = Math.max(0, 20 * zoom - pad);
        return h("sgnw-sign", {
          styling,
          style: {
            "font-size": values.zoom * 30 + "px",
            "width": width + "px",
            "height": height + "px",
            "margin-right": (right > 0 ? right : 0) + "px",
            "border-left": (right < 0 ? -right : 0) + "px solid transparent",
            "padding": padding + "px"
          }
        }, item["text"]);
      } else if (item["segment"] == "symbol") {
        zoom = values.zoom * item["zoom"];
        pad = item["padding"] * zoom;
        width = item["width"] * zoom + pad * 2;
        height = item["height"] * zoom + pad * 2;
        padding = Math.max(0, 20 * zoom - pad);
        return h("sgnw-symbol", {
          styling,
          style: {
            "font-size": values.zoom * 30 + "px",
            "width": width + "px",
            "height": height + "px",
            "padding-bottom": padding + "px"
          }
        }, item["text"]);
      } else {
        console.log("other");
        return h("div", null, item["text"]);
      }
    })))));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "vp": ["parseText"]
    };
  }
};
SgnwVp.style = sgnwVpCss;
export {
  SgnwVp as sgnw_vp
};
/*! Bundled license information:

@sutton-signwriting/sgnw-components/dist/esm/sgnw-vp.entry.js:
  (*!
   * The Sutton SignWriting Web Components
   *)
*/
//# sourceMappingURL=sgnw-vp.entry-WQOA6LDR.js.map
