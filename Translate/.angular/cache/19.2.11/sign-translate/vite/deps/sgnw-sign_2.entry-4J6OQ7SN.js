import {
  swu
} from "./chunk-QQUHLBOP.js";
import {
  swu as swu2
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

// node_modules/@sutton-signwriting/sgnw-components/dist/esm/sgnw-sign_2.entry.js
var sgnwSignCss = ":host{direction:ltr}";
var SgnwSign = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.sgnw = window.sgnw;
  }
  connectedCallback() {
    if (!this.sign) {
      let sign = swu2.parse.sign(this.el.innerHTML);
      if (sign.style) {
        this.styling = style.compose(style.merge(style.parse(sign.style), style.parse(this.styling)));
      }
      sign.style = "";
      this.sign = swu2.compose.sign(sign);
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
    const styleStr = style.compose(style.merge(cssValues(this.el), style.parse(this.styling)));
    return h(Host, {
      sign: this.sign,
      styling: this.styling,
      innerHTML: this.sgnw ? swu.signSvg(this.sign + styleStr) : ""
    }, h("slot", null));
  }
  get el() {
    return getElement(this);
  }
};
SgnwSign.style = sgnwSignCss;
var sgnwSymbolCss = "";
var SgnwSymbol = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.sgnw = window.sgnw;
  }
  connectedCallback() {
    if (!this.symbol) {
      let symbol = swu2.parse.symbol(this.el.innerHTML);
      if (symbol.style) {
        this.styling = style.compose(style.merge(style.parse(symbol.style), style.parse(this.styling)));
      }
      symbol.style = "";
      this.symbol = swu2.compose.symbol(symbol);
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
    const styleStr = style.compose(style.merge(cssValues(this.el), style.parse(this.styling)));
    return h(Host, {
      symbol: this.symbol,
      styling: this.styling,
      innerHTML: this.sgnw ? swu.symbolSvg(this.symbol + styleStr) : ""
    }, h("slot", null));
  }
  get el() {
    return getElement(this);
  }
};
SgnwSymbol.style = sgnwSymbolCss;
export {
  SgnwSign as sgnw_sign,
  SgnwSymbol as sgnw_symbol
};
/*! Bundled license information:

@sutton-signwriting/sgnw-components/dist/esm/sgnw-sign_2.entry.js:
  (*!
   * The Sutton SignWriting Web Components
   *)
*/
//# sourceMappingURL=sgnw-sign_2.entry-4J6OQ7SN.js.map
