import { createRequire } from 'module';const require = createRequire(import.meta.url);

// node_modules/@ionic/core/components/dir.js
var isRTL = (hostEl) => {
  if (hostEl) {
    if (hostEl.dir !== "") {
      return hostEl.dir.toLowerCase() === "rtl";
    }
  }
  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === "rtl";
};

export {
  isRTL
};
/*! Bundled license information:

@ionic/core/components/dir.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-3EI7GU7D.js.map
