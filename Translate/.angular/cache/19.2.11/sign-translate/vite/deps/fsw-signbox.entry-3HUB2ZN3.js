import {
  overlap
} from "./chunk-2K7UIDHG.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-5ZULVOZL.js";
import "./chunk-H7FQKYJT.js";

// node_modules/@sutton-signwriting/sgnw-components/dist/esm/fsw-signbox.entry.js
var fswSignboxCss = ".sc-fsw-signbox-h{width:100%;height:100%;border-radius:10px;display:block}";
var FswSignbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  paletteSymbolDropHandler(event) {
    const target = event.target;
    if (overlap(target, this.el)) {
      console.log(event.detail);
    }
  }
  render() {
    return h(Host, null, h("slot", null));
  }
  get el() {
    return getElement(this);
  }
};
FswSignbox.style = fswSignboxCss;
export {
  FswSignbox as fsw_signbox
};
/*! Bundled license information:

@sutton-signwriting/sgnw-components/dist/esm/fsw-signbox.entry.js:
  (*!
   * The Sutton SignWriting Web Components
   *)
*/
//# sourceMappingURL=fsw-signbox.entry-3HUB2ZN3.js.map
