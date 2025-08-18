import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  require_cjs
} from "./chunk-6KZ4PLYM.js";
import {
  __toESM
} from "./chunk-5P6RLSS7.js";

// node_modules/@angular/cdk/fesm2022/data-source-D34wiQZj.mjs
var import_rxjs = __toESM(require_cjs(), 1);
var DataSource = class {
};
function isDataSource(value) {
  return value && typeof value.connect === "function" && !(value instanceof import_rxjs.ConnectableObservable);
}

export {
  DataSource,
  isDataSource
};
//# sourceMappingURL=chunk-PRSS3CIB.js.map
