import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  wrap
} from "./chunk-7VP65B66.js";
import {
  __esm,
  __export,
  __toCommonJS
} from "./chunk-5P6RLSS7.js";

// node_modules/web-worker/src/node/index.js
var node_exports = {};
__export(node_exports, {
  default: () => node_default
});
import { URL, fileURLToPath, pathToFileURL } from "url";
import path from "path";
import fs from "fs";
import VM from "vm";
import threads from "worker_threads";
function Event(type, target) {
  this.type = type;
  this.timeStamp = Date.now();
  this.target = this.currentTarget = this.data = null;
}
function mainThread() {
  class Worker2 extends EventTarget {
    constructor(url, options) {
      super();
      const {
        name,
        type
      } = options || {};
      url += "";
      let mod;
      if (/^data:/.test(url)) {
        mod = url;
      } else {
        mod = fileURLToPath(new URL(url, baseUrl));
      }
      const worker = new threads.Worker(fileURLToPath(import.meta.url), {
        workerData: {
          mod,
          name,
          type
        }
      });
      Object.defineProperty(this, WORKER, {
        value: worker
      });
      worker.on("message", (data) => {
        const event = new Event("message");
        event.data = data;
        this.dispatchEvent(event);
      });
      worker.on("error", (error) => {
        error.type = "error";
        this.dispatchEvent(error);
      });
      worker.on("exit", () => {
        this.dispatchEvent(new Event("close"));
      });
    }
    postMessage(data, transferList) {
      this[WORKER].postMessage(data, transferList);
    }
    terminate() {
      this[WORKER].terminate();
    }
  }
  Worker2.prototype.onmessage = Worker2.prototype.onerror = Worker2.prototype.onclose = null;
  return Worker2;
}
function workerThread() {
  if (typeof global.WorkerGlobalScope === "function") {
    return;
  }
  let {
    mod,
    name,
    type
  } = threads.workerData;
  if (!mod) return mainThread();
  const self = global.self = global;
  let q = [];
  function flush() {
    const buffered = q;
    q = null;
    buffered.forEach((event) => {
      self.dispatchEvent(event);
    });
  }
  threads.parentPort.on("message", (data) => {
    const event = new Event("message");
    event.data = data;
    if (q == null) self.dispatchEvent(event);
    else q.push(event);
  });
  threads.parentPort.on("error", (err) => {
    err.type = "Error";
    self.dispatchEvent(err);
  });
  class WorkerGlobalScope extends EventTarget {
    postMessage(data, transferList) {
      threads.parentPort.postMessage(data, transferList);
    }
    // Emulates https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/close
    close() {
      process.exit();
    }
    importScripts() {
      for (let i = 0; i < arguments.length; i++) {
        const url = arguments[i];
        let code;
        if (/^data:/.test(url)) {
          code = parseDataUrl(url).data;
        } else {
          code = fs.readFileSync(new URL(path.posix.normalize(url), pathToFileURL(mod)), "utf-8");
        }
        VM.runInThisContext(code, {
          filename: url
        });
      }
    }
  }
  let proto = Object.getPrototypeOf(global);
  delete proto.constructor;
  Object.defineProperties(WorkerGlobalScope.prototype, proto);
  proto = Object.setPrototypeOf(global, new WorkerGlobalScope());
  ["postMessage", "addEventListener", "removeEventListener", "dispatchEvent"].forEach((fn) => {
    proto[fn] = proto[fn].bind(global);
  });
  global.name = name;
  global.WorkerGlobalScope = WorkerGlobalScope;
  const isDataUrl = /^data:/.test(mod);
  if (type === "module") {
    (isDataUrl ? import(mod) : import(pathToFileURL(mod))).catch((err) => {
      if (isDataUrl && err.message === "Not supported") {
        console.warn("Worker(): Importing data: URLs requires Node 12.10+. Falling back to classic worker.");
        return evaluateDataUrl(mod, name);
      }
      console.error(err);
    }).then(flush);
  } else {
    try {
      if (/^data:/.test(mod)) {
        evaluateDataUrl(mod, name);
      } else {
        global.importScripts(mod);
      }
    } catch (err) {
      console.error(err);
    }
    Promise.resolve().then(flush);
  }
}
function evaluateDataUrl(url, name) {
  const {
    data
  } = parseDataUrl(url);
  return VM.runInThisContext(data, {
    filename: "worker.<" + (name || "data:") + ">"
  });
}
function parseDataUrl(url) {
  let [m, type, encoding, data] = url.match(/^data: *([^;,]*)(?: *; *([^,]*))? *,(.*)$/) || [];
  if (!m) throw Error("Invalid Data URL.");
  data = decodeURIComponent(data);
  if (encoding) switch (encoding.toLowerCase()) {
    case "base64":
      data = Buffer.from(data, "base64").toString();
      break;
    default:
      throw Error('Unknown Data URL encoding "' + encoding + '"');
  }
  return {
    type,
    data
  };
}
var WORKER, EVENTS, EventTarget, node_default, baseUrl;
var init_node = __esm({
  "node_modules/web-worker/src/node/index.js"() {
    WORKER = Symbol.for("worker");
    EVENTS = Symbol.for("events");
    EventTarget = class {
      constructor() {
        Object.defineProperty(this, EVENTS, {
          value: /* @__PURE__ */ new Map()
        });
      }
      dispatchEvent(event) {
        event.target = event.currentTarget = this;
        if (this["on" + event.type]) {
          try {
            this["on" + event.type](event);
          } catch (err) {
            console.error(err);
          }
        }
        const list = this[EVENTS].get(event.type);
        if (list == null) return;
        list.forEach((handler) => {
          try {
            handler.call(this, event);
          } catch (err) {
            console.error(err);
          }
        });
      }
      addEventListener(type, fn) {
        let events = this[EVENTS].get(type);
        if (!events) this[EVENTS].set(type, events = []);
        events.push(fn);
      }
      removeEventListener(type, fn) {
        let events = this[EVENTS].get(type);
        if (events) {
          const index = events.indexOf(fn);
          if (index !== -1) events.splice(index, 1);
        }
      }
    };
    node_default = typeof Worker === "function" ? Worker : threads.isMainThread ? mainThread() : workerThread();
    baseUrl = pathToFileURL(process.cwd() + "/");
  }
});

// node_modules/@sign-mt/browsermt/build/esm/index.js
function createBergamotWorker(path2) {
  const workerClass = "Worker" in globalThis ? globalThis.Worker : (init_node(), __toCommonJS(node_exports));
  const worker = new workerClass(path2);
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
