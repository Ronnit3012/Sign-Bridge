import {
  wrap
} from "./chunk-LDKUDABB.js";
import {
  __esm,
  __export,
  __toCommonJS
} from "./chunk-H7FQKYJT.js";

// node_modules/web-worker/src/browser/index.js
var browser_exports = {};
__export(browser_exports, {
  default: () => browser_default
});
var browser_default;
var init_browser = __esm({
  "node_modules/web-worker/src/browser/index.js"() {
    browser_default = typeof Worker !== "undefined" ? Worker : void 0;
  }
});

// node_modules/@sign-mt/browsermt/build/esm/index.js
function createBergamotWorker(path) {
  const workerClass = "Worker" in globalThis ? globalThis.Worker : (init_browser(), __toCommonJS(browser_exports));
  const worker = new workerClass(path);
  const abortionError = new Promise((resolve, reject) => {
    worker.addEventListener("error", reject);
    worker.addEventListener("close", resolve);
  });
  return new Proxy(wrap(worker), {
    get(target, prop, receiver) {
      if (prop === "terminate") {
        return () => {
          worker.terminate();
        };
      }
      const targetProp = Reflect.get(target, prop, receiver);
      if (typeof targetProp === "function") {
        return (...args) => {
          return Promise.race([targetProp(...args), abortionError]);
        };
      }
      return targetProp;
    }
  });
}
export {
  createBergamotWorker
};
//# sourceMappingURL=@sign-mt_browsermt.js.map
