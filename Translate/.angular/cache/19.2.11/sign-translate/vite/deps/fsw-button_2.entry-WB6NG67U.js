import {
  draggabilly
} from "./chunk-6VALTAEK.js";
import {
  fsw
} from "./chunk-JSNQT5RI.js";
import {
  style
} from "./chunk-U2LUJIOQ.js";
import {
  cssValues
} from "./chunk-2K7UIDHG.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-5ZULVOZL.js";
import "./chunk-H7FQKYJT.js";

// node_modules/@sutton-signwriting/sgnw-components/dist/esm/fsw-button_2.entry.js
var fswButtonCss = '*.sc-fsw-button,*.sc-fsw-button::before,*.sc-fsw-button::after{box-sizing:border-box}.sc-fsw-button-h{--font-color:#424242;--button-color:lightgray;--button-hover:darkgray;--bg-color:#fff}[data-color-mode="dark"] .sc-fsw-button-h,[data-theme="dark"] .sc-fsw-button-h{--font-color:#e1e1ff;--button-color:gray;--button-hover:darkgray;--bg-color:#161625}.swu.sc-fsw-button{font-family:SuttonSignWritingOneD !important}.sc-fsw-button-h{display:inline-block;position:relative;border-radius:5px;color:var(--font-color);background-color:var(--button-color);width:5rem;height:4rem}.sc-fsw-button-h:hover{background-color:var(--button-hover)}.sc-fsw-button-s>svg{position:absolute;top:10%;bottom:10%;left:5%;right:5%;margin:auto;max-width:90%;max-height:80%;cursor:default}.sc-fsw-button-s>svg g text.sym-line,.sc-fsw-button-s>svg path{fill:var(--font-color) !important}.sc-fsw-button-s>svg g text.sym-fill{fill:var(--button-color) !important}.sc-fsw-button-h:hover.sc-fsw-button-s>svg g text.sym-fill{fill:var(--button-hover) !important}';
var FswButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.sgnw = window.sgnw;
  }
  connectedCallback() {
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
    const styleStr = style.compose(Object.assign(cssValues(this.el), {
      background: "transparent",
      zoom: "x"
    }));
    let svg = "";
    if (this.symbol) {
      svg = this.sgnw ? fsw.symbolSvg(this.symbol + styleStr) : "";
    } else if (this.sign) {
      svg = this.sgnw ? fsw.signSvg(this.sign + styleStr) : "";
    } else if (this.svg) {
      svg = this.svg;
    }
    return h(Host, {
      innerHTML: svg
    });
  }
  get el() {
    return getElement(this);
  }
};
FswButton.style = fswButtonCss;
var fswPaletteSymbolCss = '*.sc-fsw-palette-symbol,*.sc-fsw-palette-symbol::before,*.sc-fsw-palette-symbol::after{box-sizing:border-box}.sc-fsw-palette-symbol-h{--font-color:#424242;--button-color:lightgray;--button-hover:darkgray;--bg-color:#fff}[data-color-mode="dark"] .sc-fsw-palette-symbol-h,[data-theme="dark"] .sc-fsw-palette-symbol-h{--font-color:#e1e1ff;--button-color:gray;--button-hover:darkgray;--bg-color:#161625}.swu.sc-fsw-palette-symbol{font-family:SuttonSignWritingOneD !important}.sc-fsw-palette-symbol-h{border:1px solid var(--font-color);cursor:move;font-size:30px;color:var(--font-color);background:var(--bg-color)}.is-dragging.sc-fsw-palette-symbol-h{border:0px;z-index:1;text-align:initial;vertical-align:top;line-height:0px;font-size:0px;background:transparent}.sc-fsw-palette-symbol-s>svg{position:absolute;display:block;top:2.5%;bottom:2.5%;left:2.5%;right:2.5%;margin:auto;max-width:95%;max-height:95%;cursor:default}.sc-fsw-palette-symbol-h.is-dragging.sc-fsw-palette-symbol-s>svg{top:0;bottom:initial;left:0;right:initial;margin:0;max-width:initial;max-height:initial}.sc-fsw-palette-symbol-s>svg g text.sym-line{fill:var(--font-color) !important}.sc-fsw-palette-symbol-s>svg g text.sym-fill{fill:var(--bg-color) !important}';
var FswPaletteSymbol = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.paletteSymbolClick = createEvent(this, "paletteSymbolClick", 7);
    this.paletteSymbolDrop = createEvent(this, "paletteSymbolDrop", 7);
    this.sgnw = window.sgnw;
  }
  paletteSymbolClickHandler() {
    this.paletteSymbolClick.emit(this.symbol);
  }
  paletteSymbolDropHandler({}, pointer) {
    this.paletteSymbolDrop.emit({
      encoding: "fsw",
      symbol: this.symbol,
      x: pointer.pageX,
      y: pointer.pageY
    });
    this.el.style.top = "0";
    this.el.style.left = "0";
  }
  connectedCallback() {
    if (!this.sgnw) {
      let handleSgnw = function() {
        self.sgnw = window.sgnw;
        window.removeEventListener("sgnw", handleSgnw, false);
      };
      let self = this;
      window.addEventListener("sgnw", handleSgnw, false);
    }
  }
  componentDidLoad() {
    this.draggie = new draggabilly(this.el);
    this.draggie.on("staticClick", this.paletteSymbolClickHandler.bind(this));
    this.draggie.on("dragEnd", this.paletteSymbolDropHandler.bind(this));
  }
  render() {
    return h(Host, {
      symbol: this.symbol,
      innerHTML: this.sgnw ? fsw.symbolSvg(this.symbol) : ""
    });
  }
  get el() {
    return getElement(this);
  }
};
FswPaletteSymbol.style = fswPaletteSymbolCss;
export {
  FswButton as fsw_button,
  FswPaletteSymbol as fsw_palette_symbol
};
/*! Bundled license information:

@sutton-signwriting/sgnw-components/dist/esm/fsw-button_2.entry.js:
  (*!
   * The Sutton SignWriting Web Components
   *)
*/
//# sourceMappingURL=fsw-button_2.entry-WB6NG67U.js.map
