import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  fsw as fsw2
} from "./chunk-IOAFE3WI.js";
import {
  fsw
} from "./chunk-NFFLQAZ4.js";
import {
  style
} from "./chunk-NBBGOP42.js";
import {
  cssValues
} from "./chunk-E26NIBV5.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-TBXVSPOQ.js";
import "./chunk-5P6RLSS7.js";

// node_modules/@sutton-signwriting/sgnw-components/dist/esm/fsw-sign_2.entry.js
var fswSignCss = ":host{direction:ltr}";
var FswSign = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.sgnw = window.sgnw;
  }
  connectedCallback() {
    if (!this.sign) {
      let sign = fsw2.parse.sign(this.el.innerHTML);
      if (sign.style) {
        this.styling = style.compose(style.merge(style.parse(sign.style), style.parse(this.styling)));
      }
      sign.style = "";
      this.sign = fsw2.compose.sign(sign);
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
      innerHTML: this.sgnw ? fsw.signSvg(this.sign + styleStr) : ""
    }, h("slot", null));
  }
  get el() {
    return getElement(this);
  }
};
FswSign.style = fswSignCss;
var fswSymbolCss = "";
var FswSymbol = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.sgnw = window.sgnw;
  }
  connectedCallback() {
    if (!this.symbol) {
      let symbol = fsw2.parse.symbol(this.el.innerHTML);
      if (symbol.style) {
        this.styling = style.compose(style.merge(style.parse(symbol.style), style.parse(this.styling)));
      }
      this.symbol = symbol.symbol;
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
      innerHTML: this.sgnw ? fsw.symbolSvg(this.symbol + styleStr) : ""
    }, h("slot", null));
  }
  get el() {
    return getElement(this);
  }
};
FswSymbol.style = fswSymbolCss;
export {
  FswSign as fsw_sign,
  FswSymbol as fsw_symbol
};
/*! Bundled license information:

@sutton-signwriting/sgnw-components/dist/esm/fsw-sign_2.entry.js:
  (*!
   * The Sutton SignWriting Web Components
   *)
*/
//# sourceMappingURL=fsw-sign_2.entry-KV35JK4V.js.map
