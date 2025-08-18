import {
  require_fs
} from "./chunk-JZ6XV56A.js";
import {
  Abs,
  Acos,
  Acosh,
  Add,
  AddN,
  All,
  Any,
  ArgMax,
  ArgMin,
  Asin,
  Asinh,
  Atan,
  Atan2,
  Atanh,
  AvgPool,
  AvgPool3D,
  AvgPool3DGrad,
  AvgPoolGrad,
  BatchMatMul,
  BatchToSpaceND,
  Bincount,
  BitwiseAnd,
  BroadcastArgs,
  Cast,
  Ceil,
  ClipByValue,
  Concat,
  Conv2D,
  Conv2DBackpropInput,
  Conv3D,
  Conv3DBackpropFilterV2,
  Conv3DBackpropInputV2,
  Cos,
  Cosh,
  CropAndResize,
  Cumprod,
  Cumsum,
  DataStorage,
  DenseBincount,
  DepthToSpace,
  DepthwiseConv2dNative,
  Diag,
  Dilation2D,
  Dilation2DBackpropFilter,
  Dilation2DBackpropInput,
  Elu,
  EluGrad,
  Equal,
  Erf,
  Exp,
  ExpandDims,
  Expm1,
  Fill,
  FlipLeftRight,
  Floor,
  FloorDiv,
  FusedBatchNorm,
  FusedConv2D,
  FusedDepthwiseConv2D,
  GatherNd,
  GatherV2,
  Greater,
  GreaterEqual,
  Identity,
  IsFinite,
  IsInf,
  IsNan,
  KernelBackend,
  LRN,
  LRNGrad,
  LeakyRelu,
  Less,
  LessEqual,
  LinSpace,
  Log,
  Log1p,
  LogicalAnd,
  LogicalNot,
  LogicalOr,
  LogicalXor,
  Max,
  MaxPool,
  MaxPool3D,
  MaxPool3DGrad,
  MaxPoolGrad,
  MaxPoolWithArgmax,
  Maximum,
  Mean,
  Min,
  Minimum,
  MirrorPad,
  Mod,
  Multinomial,
  Multiply,
  Neg,
  NonMaxSuppressionV3,
  NonMaxSuppressionV4,
  NonMaxSuppressionV5,
  NotEqual,
  OneHot,
  OnesLike,
  Pack,
  PadV2,
  Pow,
  Prelu,
  Prod,
  Range,
  RealDiv,
  Reciprocal,
  Relu,
  Relu6,
  Reshape,
  ResizeBilinear,
  ResizeBilinearGrad,
  ResizeNearestNeighbor,
  ResizeNearestNeighborGrad,
  Reverse,
  RotateWithOffset,
  Round,
  Rsqrt,
  ScatterNd,
  SearchSorted,
  Select,
  Selu,
  Sigmoid,
  Sign,
  Sin,
  Sinh,
  Slice,
  Softmax,
  Softplus,
  SpaceToBatchND,
  SparseFillEmptyRows,
  SparseReshape,
  SparseSegmentMean,
  SparseSegmentSum,
  SparseToDense,
  SplitV,
  Sqrt,
  Square,
  SquaredDifference,
  Step,
  StridedSlice,
  StringNGrams,
  StringSplit,
  StringToHashBucketFast,
  Sub,
  Sum,
  Tan,
  Tanh,
  TensorScatterUpdate,
  Tile,
  TopK,
  Transform,
  Transpose,
  Unique,
  Unpack,
  ZerosLike,
  _FusedMatMul,
  backend_util_exports,
  broadcast_util_exports,
  concatImpl,
  deprecationWarn,
  engine,
  env,
  gather_nd_util_exports,
  init_dist,
  rangeImpl,
  registerBackend,
  registerKernel,
  scatter_nd_util_exports,
  sliceImpl,
  slice_util_exports,
  stringNGramsImpl,
  stringSplitImpl,
  stringToHashBucketFastImpl,
  tensor,
  uniqueImpl,
  util_exports
} from "./chunk-Y67JEHGJ.js";
import {
  __async,
  __commonJS,
  __toESM
} from "./chunk-H7FQKYJT.js";

// node_modules/@tensorflow/tfjs-backend-wasm/dist/flags_wasm.js
var require_flags_wasm = __commonJS({
  "node_modules/@tensorflow/tfjs-backend-wasm/dist/flags_wasm.js"(exports) {
    init_dist();
    var ENV = env();
    ENV.registerFlag("WASM_HAS_SIMD_SUPPORT", () => __async(null, null, function* () {
      try {
        return WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 9, 1, 7, 0, 65, 0, 253, 15, 26, 11]));
      } catch (e) {
        return false;
      }
    }));
    ENV.registerFlag("WASM_HAS_MULTITHREAD_SUPPORT", () => __async(null, null, function* () {
      if (ENV.get("IS_NODE")) {
        return false;
      }
      try {
        new MessageChannel().port1.postMessage(new SharedArrayBuffer(1));
        return WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 4, 1, 3, 1, 1, 10, 11, 1, 9, 0, 65, 0, 254, 16, 2, 0, 26, 11]));
      } catch (e) {
        return false;
      }
    }));
  }
});

// browser-external:path
var require_path = __commonJS({
  "browser-external:path"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "path" has been externalized for browser compatibility. Cannot access "path.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:worker_threads
var require_worker_threads = __commonJS({
  "browser-external:worker_threads"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "worker_threads" has been externalized for browser compatibility. Cannot access "worker_threads.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:perf_hooks
var require_perf_hooks = __commonJS({
  "browser-external:perf_hooks"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "perf_hooks" has been externalized for browser compatibility. Cannot access "perf_hooks.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:os
var require_os = __commonJS({
  "browser-external:os"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "os" has been externalized for browser compatibility. Cannot access "os.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/@tensorflow/tfjs-backend-wasm/wasm-out/tfjs-backend-wasm-threaded-simd.js
var require_tfjs_backend_wasm_threaded_simd = __commonJS({
  "node_modules/@tensorflow/tfjs-backend-wasm/wasm-out/tfjs-backend-wasm-threaded-simd.js"(exports, module) {
    var WasmBackendModuleThreadedSimd2 = (() => {
      var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : void 0;
      if (typeof __filename !== "undefined") _scriptDir = _scriptDir || __filename;
      return function(WasmBackendModuleThreadedSimd3) {
        WasmBackendModuleThreadedSimd3 = WasmBackendModuleThreadedSimd3 || {};
        function GROWABLE_HEAP_I8() {
          if (wasmMemory.buffer != buffer) {
            updateGlobalBufferAndViews(wasmMemory.buffer);
          }
          return HEAP8;
        }
        function GROWABLE_HEAP_U8() {
          if (wasmMemory.buffer != buffer) {
            updateGlobalBufferAndViews(wasmMemory.buffer);
          }
          return HEAPU8;
        }
        function GROWABLE_HEAP_I16() {
          if (wasmMemory.buffer != buffer) {
            updateGlobalBufferAndViews(wasmMemory.buffer);
          }
          return HEAP16;
        }
        function GROWABLE_HEAP_I32() {
          if (wasmMemory.buffer != buffer) {
            updateGlobalBufferAndViews(wasmMemory.buffer);
          }
          return HEAP32;
        }
        function GROWABLE_HEAP_U32() {
          if (wasmMemory.buffer != buffer) {
            updateGlobalBufferAndViews(wasmMemory.buffer);
          }
          return HEAPU32;
        }
        function GROWABLE_HEAP_F32() {
          if (wasmMemory.buffer != buffer) {
            updateGlobalBufferAndViews(wasmMemory.buffer);
          }
          return HEAPF32;
        }
        function GROWABLE_HEAP_F64() {
          if (wasmMemory.buffer != buffer) {
            updateGlobalBufferAndViews(wasmMemory.buffer);
          }
          return HEAPF64;
        }
        var Module = typeof WasmBackendModuleThreadedSimd3 != "undefined" ? WasmBackendModuleThreadedSimd3 : {};
        var readyPromiseResolve, readyPromiseReject;
        Module["ready"] = new Promise(function(resolve, reject) {
          readyPromiseResolve = resolve;
          readyPromiseReject = reject;
        });
        var beforeListeners;
        if (typeof process !== "undefined" && process.listeners) {
          beforeListeners = {
            uncaughtException: process.listeners("uncaughtException"),
            unhandledRejection: process.listeners("unhandledRejection")
          };
        }
        var moduleOverrides = Object.assign({}, Module);
        var arguments_ = [];
        var thisProgram = "./this.program";
        var quit_ = (status, toThrow) => {
          throw toThrow;
        };
        var ENVIRONMENT_IS_WEB = typeof window == "object";
        var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
        var ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
        var ENVIRONMENT_IS_PTHREAD = Module["ENVIRONMENT_IS_PTHREAD"] || false;
        var scriptDirectory = "";
        function locateFile(path) {
          if (Module["locateFile"]) {
            return Module["locateFile"](path, scriptDirectory);
          }
          return scriptDirectory + path;
        }
        var read_, readAsync, readBinary, setWindowTitle;
        function logExceptionOnExit(e) {
          if (e instanceof ExitStatus) return;
          let toLog = e;
          err("exiting due to exception: " + toLog);
        }
        if (ENVIRONMENT_IS_NODE) {
          var fs = require_fs();
          var nodePath = require_path();
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = nodePath.dirname(scriptDirectory) + "/";
          } else {
            scriptDirectory = __dirname + "/";
          }
          read_ = (filename, binary) => {
            filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
            return fs.readFileSync(filename, binary ? void 0 : "utf8");
          };
          readBinary = (filename) => {
            var ret = read_(filename, true);
            if (!ret.buffer) {
              ret = new Uint8Array(ret);
            }
            return ret;
          };
          readAsync = (filename, onload, onerror) => {
            filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
            fs.readFile(filename, function(err2, data) {
              if (err2) onerror(err2);
              else onload(data.buffer);
            });
          };
          if (process["argv"].length > 1) {
            thisProgram = process["argv"][1].replace(/\\/g, "/");
          }
          arguments_ = process["argv"].slice(2);
          process["on"]("uncaughtException", function(ex) {
            if (!(ex instanceof ExitStatus)) {
              throw ex;
            }
          });
          process["on"]("unhandledRejection", function(reason) {
            throw reason;
          });
          quit_ = (status, toThrow) => {
            if (keepRuntimeAlive()) {
              process["exitCode"] = status;
              throw toThrow;
            }
            logExceptionOnExit(toThrow);
            process["exit"](status);
          };
          Module["inspect"] = function() {
            return "[Emscripten Module object]";
          };
          let nodeWorkerThreads;
          try {
            nodeWorkerThreads = require_worker_threads();
          } catch (e) {
            console.error('The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?');
            throw e;
          }
          global.Worker = nodeWorkerThreads.Worker;
        } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = self.location.href;
          } else if (typeof document != "undefined" && document.currentScript) {
            scriptDirectory = document.currentScript.src;
          }
          if (typeof _scriptDir !== "undefined" && _scriptDir) {
            scriptDirectory = _scriptDir;
          }
          if (scriptDirectory.indexOf("blob:") !== 0) {
            scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
          } else {
            scriptDirectory = "";
          }
          if (!ENVIRONMENT_IS_NODE) {
            read_ = (url) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, false);
              xhr.send(null);
              return xhr.responseText;
            };
            if (ENVIRONMENT_IS_WORKER) {
              readBinary = (url) => {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(xhr.response);
              };
            }
            readAsync = (url, onload, onerror) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, true);
              xhr.responseType = "arraybuffer";
              xhr.onload = () => {
                if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                  onload(xhr.response);
                  return;
                }
                onerror();
              };
              xhr.onerror = onerror;
              xhr.send(null);
            };
          }
          setWindowTitle = (title) => document.title = title;
        } else {
        }
        if (ENVIRONMENT_IS_NODE) {
          if (typeof performance == "undefined") {
            global.performance = require_perf_hooks().performance;
          }
        }
        var defaultPrint = console.log.bind(console);
        var defaultPrintErr = console.warn.bind(console);
        if (ENVIRONMENT_IS_NODE) {
          defaultPrint = (str) => fs.writeSync(1, str + "\n");
          defaultPrintErr = (str) => fs.writeSync(2, str + "\n");
        }
        var out = Module["print"] || defaultPrint;
        var err = Module["printErr"] || defaultPrintErr;
        Object.assign(Module, moduleOverrides);
        moduleOverrides = null;
        if (Module["arguments"]) arguments_ = Module["arguments"];
        if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
        if (Module["quit"]) quit_ = Module["quit"];
        var POINTER_SIZE = 4;
        var Atomics_load = Atomics.load;
        var Atomics_store = Atomics.store;
        var Atomics_compareExchange = Atomics.compareExchange;
        var wasmBinary;
        if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
        var noExitRuntime = Module["noExitRuntime"] || true;
        if (typeof WebAssembly != "object") {
          abort("no native wasm support detected");
        }
        var wasmMemory;
        var wasmModule;
        var ABORT = false;
        var EXITSTATUS;
        function assert(condition, text) {
          if (!condition) {
            abort(text);
          }
        }
        var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0;
        function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
          idx >>>= 0;
          var endIdx = idx + maxBytesToRead;
          var endPtr = idx;
          while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
          if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
            return UTF8Decoder.decode(heapOrArray.buffer instanceof SharedArrayBuffer ? heapOrArray.slice(idx, endPtr) : heapOrArray.subarray(idx, endPtr));
          }
          var str = "";
          while (idx < endPtr) {
            var u0 = heapOrArray[idx++];
            if (!(u0 & 128)) {
              str += String.fromCharCode(u0);
              continue;
            }
            var u1 = heapOrArray[idx++] & 63;
            if ((u0 & 224) == 192) {
              str += String.fromCharCode((u0 & 31) << 6 | u1);
              continue;
            }
            var u2 = heapOrArray[idx++] & 63;
            if ((u0 & 240) == 224) {
              u0 = (u0 & 15) << 12 | u1 << 6 | u2;
            } else {
              u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
            }
            if (u0 < 65536) {
              str += String.fromCharCode(u0);
            } else {
              var ch = u0 - 65536;
              str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
            }
          }
          return str;
        }
        function UTF8ToString(ptr, maxBytesToRead) {
          ptr >>>= 0;
          return ptr ? UTF8ArrayToString(GROWABLE_HEAP_U8(), ptr, maxBytesToRead) : "";
        }
        function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
          outIdx >>>= 0;
          if (!(maxBytesToWrite > 0)) return 0;
          var startIdx = outIdx;
          var endIdx = outIdx + maxBytesToWrite - 1;
          for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343) {
              var u1 = str.charCodeAt(++i);
              u = 65536 + ((u & 1023) << 10) | u1 & 1023;
            }
            if (u <= 127) {
              if (outIdx >= endIdx) break;
              heap[outIdx++ >>> 0] = u;
            } else if (u <= 2047) {
              if (outIdx + 1 >= endIdx) break;
              heap[outIdx++ >>> 0] = 192 | u >> 6;
              heap[outIdx++ >>> 0] = 128 | u & 63;
            } else if (u <= 65535) {
              if (outIdx + 2 >= endIdx) break;
              heap[outIdx++ >>> 0] = 224 | u >> 12;
              heap[outIdx++ >>> 0] = 128 | u >> 6 & 63;
              heap[outIdx++ >>> 0] = 128 | u & 63;
            } else {
              if (outIdx + 3 >= endIdx) break;
              heap[outIdx++ >>> 0] = 240 | u >> 18;
              heap[outIdx++ >>> 0] = 128 | u >> 12 & 63;
              heap[outIdx++ >>> 0] = 128 | u >> 6 & 63;
              heap[outIdx++ >>> 0] = 128 | u & 63;
            }
          }
          heap[outIdx >>> 0] = 0;
          return outIdx - startIdx;
        }
        function stringToUTF8(str, outPtr, maxBytesToWrite) {
          return stringToUTF8Array(str, GROWABLE_HEAP_U8(), outPtr, maxBytesToWrite);
        }
        var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
        if (ENVIRONMENT_IS_PTHREAD) {
          buffer = Module["buffer"];
        }
        function updateGlobalBufferAndViews(buf) {
          buffer = buf;
          Module["HEAP8"] = HEAP8 = new Int8Array(buf);
          Module["HEAP16"] = HEAP16 = new Int16Array(buf);
          Module["HEAP32"] = HEAP32 = new Int32Array(buf);
          Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
          Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
          Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
          Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
          Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
        }
        var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 16777216;
        if (ENVIRONMENT_IS_PTHREAD) {
          wasmMemory = Module["wasmMemory"];
          buffer = Module["buffer"];
        } else {
          if (Module["wasmMemory"]) {
            wasmMemory = Module["wasmMemory"];
          } else {
            wasmMemory = new WebAssembly.Memory({
              "initial": INITIAL_MEMORY / 65536,
              "maximum": 4294967296 / 65536,
              "shared": true
            });
            if (!(wasmMemory.buffer instanceof SharedArrayBuffer)) {
              err("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag");
              if (ENVIRONMENT_IS_NODE) {
                err("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)");
              }
              throw Error("bad memory");
            }
          }
        }
        if (wasmMemory) {
          buffer = wasmMemory.buffer;
        }
        INITIAL_MEMORY = buffer.byteLength;
        updateGlobalBufferAndViews(buffer);
        var wasmTable;
        var __ATPRERUN__ = [];
        var __ATINIT__ = [];
        var __ATPOSTRUN__ = [];
        var runtimeInitialized = false;
        function keepRuntimeAlive() {
          return noExitRuntime;
        }
        function preRun() {
          if (Module["preRun"]) {
            if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
            while (Module["preRun"].length) {
              addOnPreRun(Module["preRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPRERUN__);
        }
        function initRuntime() {
          runtimeInitialized = true;
          if (ENVIRONMENT_IS_PTHREAD) return;
          callRuntimeCallbacks(__ATINIT__);
        }
        function postRun() {
          if (ENVIRONMENT_IS_PTHREAD) return;
          if (Module["postRun"]) {
            if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
            while (Module["postRun"].length) {
              addOnPostRun(Module["postRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPOSTRUN__);
        }
        function addOnPreRun(cb) {
          __ATPRERUN__.unshift(cb);
        }
        function addOnInit(cb) {
          __ATINIT__.unshift(cb);
        }
        function addOnPostRun(cb) {
          __ATPOSTRUN__.unshift(cb);
        }
        var runDependencies = 0;
        var runDependencyWatcher = null;
        var dependenciesFulfilled = null;
        function addRunDependency(id) {
          runDependencies++;
          if (Module["monitorRunDependencies"]) {
            Module["monitorRunDependencies"](runDependencies);
          }
        }
        function removeRunDependency(id) {
          runDependencies--;
          if (Module["monitorRunDependencies"]) {
            Module["monitorRunDependencies"](runDependencies);
          }
          if (runDependencies == 0) {
            if (runDependencyWatcher !== null) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
            }
            if (dependenciesFulfilled) {
              var callback = dependenciesFulfilled;
              dependenciesFulfilled = null;
              callback();
            }
          }
        }
        function abort(what) {
          if (Module["onAbort"]) {
            Module["onAbort"](what);
          }
          what = "Aborted(" + what + ")";
          err(what);
          ABORT = true;
          EXITSTATUS = 1;
          what += ". Build with -sASSERTIONS for more info.";
          var e = new WebAssembly.RuntimeError(what);
          readyPromiseReject(e);
          throw e;
        }
        var dataURIPrefix = "data:application/octet-stream;base64,";
        function isDataURI(filename) {
          return filename.startsWith(dataURIPrefix);
        }
        function isFileURI(filename) {
          return filename.startsWith("file://");
        }
        var wasmBinaryFile;
        wasmBinaryFile = "tfjs-backend-wasm-threaded-simd.wasm";
        if (!isDataURI(wasmBinaryFile)) {
          wasmBinaryFile = locateFile(wasmBinaryFile);
        }
        function getBinary(file) {
          try {
            if (file == wasmBinaryFile && wasmBinary) {
              return new Uint8Array(wasmBinary);
            }
            if (readBinary) {
              return readBinary(file);
            }
            throw "both async and sync fetching of the wasm failed";
          } catch (err2) {
            abort(err2);
          }
        }
        function getBinaryPromise() {
          if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
            if (typeof fetch == "function" && !isFileURI(wasmBinaryFile)) {
              return fetch(wasmBinaryFile, {
                credentials: "same-origin"
              }).then(function(response) {
                if (!response["ok"]) {
                  throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
                }
                return response["arrayBuffer"]();
              }).catch(function() {
                return getBinary(wasmBinaryFile);
              });
            } else {
              if (readAsync) {
                return new Promise(function(resolve, reject) {
                  readAsync(wasmBinaryFile, function(response) {
                    resolve(new Uint8Array(response));
                  }, reject);
                });
              }
            }
          }
          return Promise.resolve().then(function() {
            return getBinary(wasmBinaryFile);
          });
        }
        function createWasm() {
          var info = {
            "env": asmLibraryArg,
            "wasi_snapshot_preview1": asmLibraryArg
          };
          function receiveInstance(instance, module2) {
            var exports3 = instance.exports;
            Module["asm"] = exports3;
            registerTLSInit(Module["asm"]["_emscripten_tls_init"]);
            wasmTable = Module["asm"]["__indirect_function_table"];
            addOnInit(Module["asm"]["__wasm_call_ctors"]);
            wasmModule = module2;
            if (!ENVIRONMENT_IS_PTHREAD) {
              var numWorkersToLoad = PThread.unusedWorkers.length;
              PThread.unusedWorkers.forEach(function(w) {
                PThread.loadWasmModuleToWorker(w, function() {
                  if (!--numWorkersToLoad) removeRunDependency("wasm-instantiate");
                });
              });
            }
          }
          if (!ENVIRONMENT_IS_PTHREAD) {
            addRunDependency("wasm-instantiate");
          }
          function receiveInstantiationResult(result) {
            receiveInstance(result["instance"], result["module"]);
          }
          function instantiateArrayBuffer(receiver) {
            return getBinaryPromise().then(function(binary) {
              return WebAssembly.instantiate(binary, info);
            }).then(function(instance) {
              return instance;
            }).then(receiver, function(reason) {
              err("failed to asynchronously prepare wasm: " + reason);
              abort(reason);
            });
          }
          function instantiateAsync() {
            if (!wasmBinary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(wasmBinaryFile) && !isFileURI(wasmBinaryFile) && !ENVIRONMENT_IS_NODE && typeof fetch == "function") {
              return fetch(wasmBinaryFile, {
                credentials: "same-origin"
              }).then(function(response) {
                var result = WebAssembly.instantiateStreaming(response, info);
                return result.then(receiveInstantiationResult, function(reason) {
                  err("wasm streaming compile failed: " + reason);
                  err("falling back to ArrayBuffer instantiation");
                  return instantiateArrayBuffer(receiveInstantiationResult);
                });
              });
            } else {
              return instantiateArrayBuffer(receiveInstantiationResult);
            }
          }
          if (Module["instantiateWasm"]) {
            try {
              var exports2 = Module["instantiateWasm"](info, receiveInstance);
              return exports2;
            } catch (e) {
              err("Module.instantiateWasm callback failed with error: " + e);
              readyPromiseReject(e);
            }
          }
          instantiateAsync().catch(readyPromiseReject);
          return {};
        }
        var tempDouble;
        var tempI64;
        var ASM_CONSTS = {};
        function ExitStatus(status) {
          this.name = "ExitStatus";
          this.message = "Program terminated with exit(" + status + ")";
          this.status = status;
        }
        function killThread(pthread_ptr) {
          var worker = PThread.pthreads[pthread_ptr];
          delete PThread.pthreads[pthread_ptr];
          worker.terminate();
          __emscripten_thread_free_data(pthread_ptr);
          PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(worker), 1);
          worker.pthread_ptr = 0;
        }
        function cancelThread(pthread_ptr) {
          var worker = PThread.pthreads[pthread_ptr];
          worker.postMessage({
            "cmd": "cancel"
          });
        }
        function cleanupThread(pthread_ptr) {
          var worker = PThread.pthreads[pthread_ptr];
          assert(worker);
          PThread.returnWorkerToPool(worker);
        }
        function spawnThread(threadParams) {
          var worker = PThread.getNewWorker();
          if (!worker) {
            return 6;
          }
          PThread.runningWorkers.push(worker);
          PThread.pthreads[threadParams.pthread_ptr] = worker;
          worker.pthread_ptr = threadParams.pthread_ptr;
          var msg = {
            "cmd": "run",
            "start_routine": threadParams.startRoutine,
            "arg": threadParams.arg,
            "pthread_ptr": threadParams.pthread_ptr
          };
          worker.runPthread = () => {
            if (ENVIRONMENT_IS_NODE) {
              worker.ref();
            }
            worker.postMessage(msg, threadParams.transferList);
            delete worker.runPthread;
          };
          if (worker.loaded) {
            worker.runPthread();
          }
          return 0;
        }
        var SYSCALLS = {
          varargs: void 0,
          get: function() {
            SYSCALLS.varargs += 4;
            var ret = GROWABLE_HEAP_I32()[SYSCALLS.varargs - 4 >>> 2];
            return ret;
          },
          getStr: function(ptr) {
            var ret = UTF8ToString(ptr);
            return ret;
          }
        };
        function _proc_exit(code) {
          if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(1, 1, code);
          EXITSTATUS = code;
          if (!keepRuntimeAlive()) {
            PThread.terminateAllThreads();
            if (Module["onExit"]) Module["onExit"](code);
            ABORT = true;
          }
          quit_(code, new ExitStatus(code));
        }
        function exitJS(status, implicit) {
          EXITSTATUS = status;
          if (!implicit) {
            if (ENVIRONMENT_IS_PTHREAD) {
              exitOnMainThread(status);
              throw "unwind";
            } else {
            }
          }
          _proc_exit(status);
        }
        var _exit = exitJS;
        function handleException(e) {
          if (e instanceof ExitStatus || e == "unwind") {
            return EXITSTATUS;
          }
          quit_(1, e);
        }
        var PThread = {
          unusedWorkers: [],
          runningWorkers: [],
          tlsInitFunctions: [],
          pthreads: {},
          init: function() {
            if (ENVIRONMENT_IS_PTHREAD) {
              PThread.initWorker();
            } else {
              PThread.initMainThread();
            }
          },
          initMainThread: function() {
            var pthreadPoolSize = 8;
            while (pthreadPoolSize--) {
              PThread.allocateUnusedWorker();
            }
          },
          initWorker: function() {
            noExitRuntime = false;
          },
          setExitStatus: function(status) {
            EXITSTATUS = status;
          },
          terminateAllThreads: function() {
            for (var worker of Object.values(PThread.pthreads)) {
              PThread.returnWorkerToPool(worker);
            }
            for (var worker of PThread.unusedWorkers) {
              worker.terminate();
            }
            PThread.unusedWorkers = [];
          },
          returnWorkerToPool: function(worker) {
            var pthread_ptr = worker.pthread_ptr;
            delete PThread.pthreads[pthread_ptr];
            PThread.unusedWorkers.push(worker);
            PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(worker), 1);
            worker.pthread_ptr = 0;
            if (ENVIRONMENT_IS_NODE) {
              worker.unref();
            }
            __emscripten_thread_free_data(pthread_ptr);
          },
          receiveObjectTransfer: function(data) {
          },
          threadInitTLS: function() {
            PThread.tlsInitFunctions.forEach((f) => f());
          },
          loadWasmModuleToWorker: function(worker, onFinishedLoading) {
            worker.onmessage = (e) => {
              var d = e["data"];
              var cmd = d["cmd"];
              if (worker.pthread_ptr) PThread.currentProxiedOperationCallerThread = worker.pthread_ptr;
              if (d["targetThread"] && d["targetThread"] != _pthread_self()) {
                var targetWorker = PThread.pthreads[d.targetThread];
                if (targetWorker) {
                  targetWorker.postMessage(d, d["transferList"]);
                } else {
                  err('Internal error! Worker sent a message "' + cmd + '" to target pthread ' + d["targetThread"] + ", but that thread no longer exists!");
                }
                PThread.currentProxiedOperationCallerThread = void 0;
                return;
              }
              if (cmd === "processProxyingQueue") {
                executeNotifiedProxyingQueue(d["queue"]);
              } else if (cmd === "spawnThread") {
                spawnThread(d);
              } else if (cmd === "cleanupThread") {
                cleanupThread(d["thread"]);
              } else if (cmd === "killThread") {
                killThread(d["thread"]);
              } else if (cmd === "cancelThread") {
                cancelThread(d["thread"]);
              } else if (cmd === "loaded") {
                worker.loaded = true;
                if (ENVIRONMENT_IS_NODE) {
                  worker.unref();
                }
                if (onFinishedLoading) onFinishedLoading(worker);
                if (worker.runPthread) {
                  worker.runPthread();
                }
              } else if (cmd === "print") {
                out("Thread " + d["threadId"] + ": " + d["text"]);
              } else if (cmd === "printErr") {
                err("Thread " + d["threadId"] + ": " + d["text"]);
              } else if (cmd === "alert") {
                alert("Thread " + d["threadId"] + ": " + d["text"]);
              } else if (d.target === "setimmediate") {
                worker.postMessage(d);
              } else if (cmd === "callHandler") {
                Module[d["handler"]](...d["args"]);
              } else if (cmd) {
                err("worker sent an unknown command " + cmd);
              }
              PThread.currentProxiedOperationCallerThread = void 0;
            };
            worker.onerror = (e) => {
              var message = "worker sent an error!";
              err(message + " " + e.filename + ":" + e.lineno + ": " + e.message);
              throw e;
            };
            if (ENVIRONMENT_IS_NODE) {
              worker.on("message", function(data) {
                worker.onmessage({
                  data
                });
              });
              worker.on("error", function(e) {
                worker.onerror(e);
              });
              worker.on("detachedExit", function() {
              });
            }
            var handlers = [];
            var knownHandlers = ["onExit", "onAbort", "print", "printErr"];
            for (var handler of knownHandlers) {
              if (Module.hasOwnProperty(handler)) {
                handlers.push(handler);
              }
            }
            worker.postMessage({
              "cmd": "load",
              "handlers": handlers,
              "urlOrBlob": Module["mainScriptUrlOrBlob"] || _scriptDir,
              "wasmMemory": wasmMemory,
              "wasmModule": wasmModule
            });
          },
          allocateUnusedWorker: function() {
            var worker;
            var pthreadMainJs = locateFile("tfjs-backend-wasm-threaded-simd.worker.js");
            worker = new Worker(pthreadMainJs);
            PThread.unusedWorkers.push(worker);
          },
          getNewWorker: function() {
            if (PThread.unusedWorkers.length == 0) {
              PThread.allocateUnusedWorker();
              PThread.loadWasmModuleToWorker(PThread.unusedWorkers[0]);
            }
            return PThread.unusedWorkers.pop();
          }
        };
        Module["PThread"] = PThread;
        function callRuntimeCallbacks(callbacks) {
          while (callbacks.length > 0) {
            callbacks.shift()(Module);
          }
        }
        function establishStackSpace() {
          var pthread_ptr = _pthread_self();
          var stackTop = GROWABLE_HEAP_I32()[pthread_ptr + 52 >>> 2];
          var stackSize = GROWABLE_HEAP_I32()[pthread_ptr + 56 >>> 2];
          var stackMax = stackTop - stackSize;
          _emscripten_stack_set_limits(stackTop, stackMax);
          stackRestore(stackTop);
        }
        Module["establishStackSpace"] = establishStackSpace;
        function exitOnMainThread(returnCode) {
          if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(2, 0, returnCode);
          try {
            _exit(returnCode);
          } catch (e) {
            handleException(e);
          }
        }
        var wasmTableMirror = [];
        function getWasmTableEntry(funcPtr) {
          var func = wasmTableMirror[funcPtr];
          if (!func) {
            if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
            wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
          }
          return func;
        }
        function invokeEntryPoint(ptr, arg) {
          var result = getWasmTableEntry(ptr)(arg);
          if (keepRuntimeAlive()) {
            PThread.setExitStatus(result);
          } else {
            __emscripten_thread_exit(result);
          }
        }
        Module["invokeEntryPoint"] = invokeEntryPoint;
        function registerTLSInit(tlsInitFunc) {
          PThread.tlsInitFunctions.push(tlsInitFunc);
        }
        function ___emscripten_init_main_thread_js(tb) {
          __emscripten_thread_init(tb, !ENVIRONMENT_IS_WORKER, 1, !ENVIRONMENT_IS_WEB);
          PThread.threadInitTLS();
        }
        function ___emscripten_thread_cleanup(thread) {
          if (!ENVIRONMENT_IS_PTHREAD) cleanupThread(thread);
          else postMessage({
            "cmd": "cleanupThread",
            "thread": thread
          });
        }
        function pthreadCreateProxied(pthread_ptr, attr, startRoutine, arg) {
          if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(3, 1, pthread_ptr, attr, startRoutine, arg);
          return ___pthread_create_js(pthread_ptr, attr, startRoutine, arg);
        }
        function ___pthread_create_js(pthread_ptr, attr, startRoutine, arg) {
          if (typeof SharedArrayBuffer == "undefined") {
            err("Current environment does not support SharedArrayBuffer, pthreads are not available!");
            return 6;
          }
          var transferList = [];
          var error = 0;
          if (ENVIRONMENT_IS_PTHREAD && (transferList.length === 0 || error)) {
            return pthreadCreateProxied(pthread_ptr, attr, startRoutine, arg);
          }
          if (error) return error;
          var threadParams = {
            startRoutine,
            pthread_ptr,
            arg,
            transferList
          };
          if (ENVIRONMENT_IS_PTHREAD) {
            threadParams.cmd = "spawnThread";
            postMessage(threadParams, transferList);
            return 0;
          }
          return spawnThread(threadParams);
        }
        function __emscripten_default_pthread_stack_size() {
          return 65536;
        }
        var nowIsMonotonic = true;
        function __emscripten_get_now_is_monotonic() {
          return nowIsMonotonic;
        }
        function executeNotifiedProxyingQueue(queue) {
          Atomics.store(GROWABLE_HEAP_I32(), queue >> 2, 1);
          if (_pthread_self()) {
            __emscripten_proxy_execute_task_queue(queue);
          }
          Atomics.compareExchange(GROWABLE_HEAP_I32(), queue >> 2, 1, 0);
        }
        Module["executeNotifiedProxyingQueue"] = executeNotifiedProxyingQueue;
        function __emscripten_notify_task_queue(targetThreadId, currThreadId, mainThreadId, queue) {
          if (targetThreadId == currThreadId) {
            setTimeout(() => executeNotifiedProxyingQueue(queue));
          } else if (ENVIRONMENT_IS_PTHREAD) {
            postMessage({
              "targetThread": targetThreadId,
              "cmd": "processProxyingQueue",
              "queue": queue
            });
          } else {
            var worker = PThread.pthreads[targetThreadId];
            if (!worker) {
              return;
            }
            worker.postMessage({
              "cmd": "processProxyingQueue",
              "queue": queue
            });
          }
          return 1;
        }
        function __emscripten_set_offscreencanvas_size(target, width, height) {
          return -1;
        }
        function _abort() {
          abort("");
        }
        function warnOnce(text) {
          if (!warnOnce.shown) warnOnce.shown = {};
          if (!warnOnce.shown[text]) {
            warnOnce.shown[text] = 1;
            if (ENVIRONMENT_IS_NODE) text = "warning: " + text;
            err(text);
          }
        }
        function _emscripten_check_blocking_allowed() {
          if (ENVIRONMENT_IS_NODE) return;
          if (ENVIRONMENT_IS_WORKER) return;
          warnOnce("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread");
        }
        function _emscripten_date_now() {
          return Date.now();
        }
        function getHeapMax() {
          return 4294901760;
        }
        function _emscripten_get_heap_max() {
          return getHeapMax();
        }
        var _emscripten_get_now;
        if (ENVIRONMENT_IS_NODE) {
          _emscripten_get_now = () => {
            var t = process["hrtime"]();
            return t[0] * 1e3 + t[1] / 1e6;
          };
        } else _emscripten_get_now = () => performance.timeOrigin + performance.now();
        function _emscripten_memcpy_big(dest, src, num) {
          GROWABLE_HEAP_U8().copyWithin(dest >>> 0, src >>> 0, src + num >>> 0);
        }
        function _emscripten_num_logical_cores() {
          if (ENVIRONMENT_IS_NODE) return require_os().cpus().length;
          return navigator["hardwareConcurrency"];
        }
        function withStackSave(f) {
          var stack = stackSave();
          var ret = f();
          stackRestore(stack);
          return ret;
        }
        function _emscripten_proxy_to_main_thread_js(index, sync) {
          var numCallArgs = arguments.length - 2;
          var outerArgs = arguments;
          return withStackSave(() => {
            var serializedNumCallArgs = numCallArgs;
            var args = stackAlloc(serializedNumCallArgs * 8);
            var b = args >> 3;
            for (var i = 0; i < numCallArgs; i++) {
              var arg = outerArgs[2 + i];
              GROWABLE_HEAP_F64()[b + i >>> 0] = arg;
            }
            return _emscripten_run_in_main_runtime_thread_js(index, serializedNumCallArgs, args, sync);
          });
        }
        var _emscripten_receive_on_main_thread_js_callArgs = [];
        function _emscripten_receive_on_main_thread_js(index, numCallArgs, args) {
          _emscripten_receive_on_main_thread_js_callArgs.length = numCallArgs;
          var b = args >> 3;
          for (var i = 0; i < numCallArgs; i++) {
            _emscripten_receive_on_main_thread_js_callArgs[i] = GROWABLE_HEAP_F64()[b + i >>> 0];
          }
          var isEmAsmConst = index < 0;
          var func = !isEmAsmConst ? proxiedFunctionTable[index] : ASM_CONSTS[-index - 1];
          return func.apply(null, _emscripten_receive_on_main_thread_js_callArgs);
        }
        function emscripten_realloc_buffer(size) {
          try {
            wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
            updateGlobalBufferAndViews(wasmMemory.buffer);
            return 1;
          } catch (e) {
          }
        }
        function _emscripten_resize_heap(requestedSize) {
          var oldSize = GROWABLE_HEAP_U8().length;
          requestedSize = requestedSize >>> 0;
          if (requestedSize <= oldSize) {
            return false;
          }
          var maxHeapSize = getHeapMax();
          if (requestedSize > maxHeapSize) {
            return false;
          }
          let alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
          for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
            var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
            overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
            var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
            var replacement = emscripten_realloc_buffer(newSize);
            if (replacement) {
              return true;
            }
          }
          return false;
        }
        function _emscripten_unwind_to_js_event_loop() {
          throw "unwind";
        }
        function _fd_close(fd) {
          if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(4, 1, fd);
          return 52;
        }
        function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
          if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(5, 1, fd, offset_low, offset_high, whence, newOffset);
          return 70;
        }
        var printCharBuffers = [null, [], []];
        function printChar(stream, curr) {
          var buffer2 = printCharBuffers[stream];
          if (curr === 0 || curr === 10) {
            (stream === 1 ? out : err)(UTF8ArrayToString(buffer2, 0));
            buffer2.length = 0;
          } else {
            buffer2.push(curr);
          }
        }
        function _fd_write(fd, iov, iovcnt, pnum) {
          if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(6, 1, fd, iov, iovcnt, pnum);
          var num = 0;
          for (var i = 0; i < iovcnt; i++) {
            var ptr = GROWABLE_HEAP_U32()[iov >>> 2];
            var len = GROWABLE_HEAP_U32()[iov + 4 >>> 2];
            iov += 8;
            for (var j = 0; j < len; j++) {
              printChar(fd, GROWABLE_HEAP_U8()[ptr + j >>> 0]);
            }
            num += len;
          }
          GROWABLE_HEAP_U32()[pnum >>> 2] = num;
          return 0;
        }
        function getCFunc(ident) {
          var func = Module["_" + ident];
          return func;
        }
        function writeArrayToMemory(array, buffer2) {
          GROWABLE_HEAP_I8().set(array, buffer2 >>> 0);
        }
        function ccall(ident, returnType, argTypes, args, opts) {
          var toC = {
            "string": (str) => {
              var ret2 = 0;
              if (str !== null && str !== void 0 && str !== 0) {
                var len = (str.length << 2) + 1;
                ret2 = stackAlloc(len);
                stringToUTF8(str, ret2, len);
              }
              return ret2;
            },
            "array": (arr) => {
              var ret2 = stackAlloc(arr.length);
              writeArrayToMemory(arr, ret2);
              return ret2;
            }
          };
          function convertReturnValue(ret2) {
            if (returnType === "string") {
              return UTF8ToString(ret2);
            }
            if (returnType === "boolean") return Boolean(ret2);
            return ret2;
          }
          var func = getCFunc(ident);
          var cArgs = [];
          var stack = 0;
          if (args) {
            for (var i = 0; i < args.length; i++) {
              var converter = toC[argTypes[i]];
              if (converter) {
                if (stack === 0) stack = stackSave();
                cArgs[i] = converter(args[i]);
              } else {
                cArgs[i] = args[i];
              }
            }
          }
          var ret = func.apply(null, cArgs);
          function onDone(ret2) {
            if (stack !== 0) stackRestore(stack);
            return convertReturnValue(ret2);
          }
          ret = onDone(ret);
          return ret;
        }
        function cwrap(ident, returnType, argTypes, opts) {
          argTypes = argTypes || [];
          var numericArgs = argTypes.every((type) => type === "number" || type === "boolean");
          var numericRet = returnType !== "string";
          if (numericRet && numericArgs && !opts) {
            return getCFunc(ident);
          }
          return function() {
            return ccall(ident, returnType, argTypes, arguments, opts);
          };
        }
        PThread.init();
        var proxiedFunctionTable = [null, _proc_exit, exitOnMainThread, pthreadCreateProxied, _fd_close, _fd_seek, _fd_write];
        var asmLibraryArg = {
          "__emscripten_init_main_thread_js": ___emscripten_init_main_thread_js,
          "__emscripten_thread_cleanup": ___emscripten_thread_cleanup,
          "__pthread_create_js": ___pthread_create_js,
          "_emscripten_default_pthread_stack_size": __emscripten_default_pthread_stack_size,
          "_emscripten_get_now_is_monotonic": __emscripten_get_now_is_monotonic,
          "_emscripten_notify_task_queue": __emscripten_notify_task_queue,
          "_emscripten_set_offscreencanvas_size": __emscripten_set_offscreencanvas_size,
          "abort": _abort,
          "emscripten_check_blocking_allowed": _emscripten_check_blocking_allowed,
          "emscripten_date_now": _emscripten_date_now,
          "emscripten_get_heap_max": _emscripten_get_heap_max,
          "emscripten_get_now": _emscripten_get_now,
          "emscripten_memcpy_big": _emscripten_memcpy_big,
          "emscripten_num_logical_cores": _emscripten_num_logical_cores,
          "emscripten_receive_on_main_thread_js": _emscripten_receive_on_main_thread_js,
          "emscripten_resize_heap": _emscripten_resize_heap,
          "emscripten_unwind_to_js_event_loop": _emscripten_unwind_to_js_event_loop,
          "exit": _exit,
          "fd_close": _fd_close,
          "fd_seek": _fd_seek,
          "fd_write": _fd_write,
          "memory": wasmMemory || Module["wasmMemory"]
        };
        var asm = createWasm();
        var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
          return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["__wasm_call_ctors"]).apply(null, arguments);
        };
        var _init = Module["_init"] = function() {
          return (_init = Module["_init"] = Module["asm"]["init"]).apply(null, arguments);
        };
        var _init_with_threads_count = Module["_init_with_threads_count"] = function() {
          return (_init_with_threads_count = Module["_init_with_threads_count"] = Module["asm"]["init_with_threads_count"]).apply(null, arguments);
        };
        var _get_threads_count = Module["_get_threads_count"] = function() {
          return (_get_threads_count = Module["_get_threads_count"] = Module["asm"]["get_threads_count"]).apply(null, arguments);
        };
        var _register_tensor = Module["_register_tensor"] = function() {
          return (_register_tensor = Module["_register_tensor"] = Module["asm"]["register_tensor"]).apply(null, arguments);
        };
        var _dispose_data = Module["_dispose_data"] = function() {
          return (_dispose_data = Module["_dispose_data"] = Module["asm"]["dispose_data"]).apply(null, arguments);
        };
        var _dispose = Module["_dispose"] = function() {
          return (_dispose = Module["_dispose"] = Module["asm"]["dispose"]).apply(null, arguments);
        };
        var _Abs = Module["_Abs"] = function() {
          return (_Abs = Module["_Abs"] = Module["asm"]["Abs"]).apply(null, arguments);
        };
        var _Acos = Module["_Acos"] = function() {
          return (_Acos = Module["_Acos"] = Module["asm"]["Acos"]).apply(null, arguments);
        };
        var _Acosh = Module["_Acosh"] = function() {
          return (_Acosh = Module["_Acosh"] = Module["asm"]["Acosh"]).apply(null, arguments);
        };
        var _Add = Module["_Add"] = function() {
          return (_Add = Module["_Add"] = Module["asm"]["Add"]).apply(null, arguments);
        };
        var _AddN = Module["_AddN"] = function() {
          return (_AddN = Module["_AddN"] = Module["asm"]["AddN"]).apply(null, arguments);
        };
        var _All = Module["_All"] = function() {
          return (_All = Module["_All"] = Module["asm"]["All"]).apply(null, arguments);
        };
        var _Any = Module["_Any"] = function() {
          return (_Any = Module["_Any"] = Module["asm"]["Any"]).apply(null, arguments);
        };
        var _ArgMax = Module["_ArgMax"] = function() {
          return (_ArgMax = Module["_ArgMax"] = Module["asm"]["ArgMax"]).apply(null, arguments);
        };
        var _ArgMin = Module["_ArgMin"] = function() {
          return (_ArgMin = Module["_ArgMin"] = Module["asm"]["ArgMin"]).apply(null, arguments);
        };
        var _Asin = Module["_Asin"] = function() {
          return (_Asin = Module["_Asin"] = Module["asm"]["Asin"]).apply(null, arguments);
        };
        var _Asinh = Module["_Asinh"] = function() {
          return (_Asinh = Module["_Asinh"] = Module["asm"]["Asinh"]).apply(null, arguments);
        };
        var _Atan = Module["_Atan"] = function() {
          return (_Atan = Module["_Atan"] = Module["asm"]["Atan"]).apply(null, arguments);
        };
        var _Atan2 = Module["_Atan2"] = function() {
          return (_Atan2 = Module["_Atan2"] = Module["asm"]["Atan2"]).apply(null, arguments);
        };
        var _Atanh = Module["_Atanh"] = function() {
          return (_Atanh = Module["_Atanh"] = Module["asm"]["Atanh"]).apply(null, arguments);
        };
        var _AvgPool = Module["_AvgPool"] = function() {
          return (_AvgPool = Module["_AvgPool"] = Module["asm"]["AvgPool"]).apply(null, arguments);
        };
        var _AvgPool3D = Module["_AvgPool3D"] = function() {
          return (_AvgPool3D = Module["_AvgPool3D"] = Module["asm"]["AvgPool3D"]).apply(null, arguments);
        };
        var _AvgPool3DGrad = Module["_AvgPool3DGrad"] = function() {
          return (_AvgPool3DGrad = Module["_AvgPool3DGrad"] = Module["asm"]["AvgPool3DGrad"]).apply(null, arguments);
        };
        var _AvgPoolGrad = Module["_AvgPoolGrad"] = function() {
          return (_AvgPoolGrad = Module["_AvgPoolGrad"] = Module["asm"]["AvgPoolGrad"]).apply(null, arguments);
        };
        var _BatchMatMul = Module["_BatchMatMul"] = function() {
          return (_BatchMatMul = Module["_BatchMatMul"] = Module["asm"]["BatchMatMul"]).apply(null, arguments);
        };
        var _Bincount = Module["_Bincount"] = function() {
          return (_Bincount = Module["_Bincount"] = Module["asm"]["Bincount"]).apply(null, arguments);
        };
        var _BitwiseAnd = Module["_BitwiseAnd"] = function() {
          return (_BitwiseAnd = Module["_BitwiseAnd"] = Module["asm"]["BitwiseAnd"]).apply(null, arguments);
        };
        var _Ceil = Module["_Ceil"] = function() {
          return (_Ceil = Module["_Ceil"] = Module["asm"]["Ceil"]).apply(null, arguments);
        };
        var _ClipByValue = Module["_ClipByValue"] = function() {
          return (_ClipByValue = Module["_ClipByValue"] = Module["asm"]["ClipByValue"]).apply(null, arguments);
        };
        var _Conv2D = Module["_Conv2D"] = function() {
          return (_Conv2D = Module["_Conv2D"] = Module["asm"]["Conv2D"]).apply(null, arguments);
        };
        var _Conv2DBackpropInput = Module["_Conv2DBackpropInput"] = function() {
          return (_Conv2DBackpropInput = Module["_Conv2DBackpropInput"] = Module["asm"]["Conv2DBackpropInput"]).apply(null, arguments);
        };
        var _Conv3D = Module["_Conv3D"] = function() {
          return (_Conv3D = Module["_Conv3D"] = Module["asm"]["Conv3D"]).apply(null, arguments);
        };
        var _Conv3DBackpropFilterV2 = Module["_Conv3DBackpropFilterV2"] = function() {
          return (_Conv3DBackpropFilterV2 = Module["_Conv3DBackpropFilterV2"] = Module["asm"]["Conv3DBackpropFilterV2"]).apply(null, arguments);
        };
        var _Conv3DBackpropInputV2 = Module["_Conv3DBackpropInputV2"] = function() {
          return (_Conv3DBackpropInputV2 = Module["_Conv3DBackpropInputV2"] = Module["asm"]["Conv3DBackpropInputV2"]).apply(null, arguments);
        };
        var _Cos = Module["_Cos"] = function() {
          return (_Cos = Module["_Cos"] = Module["asm"]["Cos"]).apply(null, arguments);
        };
        var _Cosh = Module["_Cosh"] = function() {
          return (_Cosh = Module["_Cosh"] = Module["asm"]["Cosh"]).apply(null, arguments);
        };
        var _CropAndResize = Module["_CropAndResize"] = function() {
          return (_CropAndResize = Module["_CropAndResize"] = Module["asm"]["CropAndResize"]).apply(null, arguments);
        };
        var _Cumprod = Module["_Cumprod"] = function() {
          return (_Cumprod = Module["_Cumprod"] = Module["asm"]["Cumprod"]).apply(null, arguments);
        };
        var _Cumsum = Module["_Cumsum"] = function() {
          return (_Cumsum = Module["_Cumsum"] = Module["asm"]["Cumsum"]).apply(null, arguments);
        };
        var _DenseBincount = Module["_DenseBincount"] = function() {
          return (_DenseBincount = Module["_DenseBincount"] = Module["asm"]["DenseBincount"]).apply(null, arguments);
        };
        var _DepthToSpace = Module["_DepthToSpace"] = function() {
          return (_DepthToSpace = Module["_DepthToSpace"] = Module["asm"]["DepthToSpace"]).apply(null, arguments);
        };
        var _DepthwiseConv2dNative = Module["_DepthwiseConv2dNative"] = function() {
          return (_DepthwiseConv2dNative = Module["_DepthwiseConv2dNative"] = Module["asm"]["DepthwiseConv2dNative"]).apply(null, arguments);
        };
        var _Diag = Module["_Diag"] = function() {
          return (_Diag = Module["_Diag"] = Module["asm"]["Diag"]).apply(null, arguments);
        };
        var _Dilation2D = Module["_Dilation2D"] = function() {
          return (_Dilation2D = Module["_Dilation2D"] = Module["asm"]["Dilation2D"]).apply(null, arguments);
        };
        var _Dilation2DBackpropFilter = Module["_Dilation2DBackpropFilter"] = function() {
          return (_Dilation2DBackpropFilter = Module["_Dilation2DBackpropFilter"] = Module["asm"]["Dilation2DBackpropFilter"]).apply(null, arguments);
        };
        var _Dilation2DBackpropInput = Module["_Dilation2DBackpropInput"] = function() {
          return (_Dilation2DBackpropInput = Module["_Dilation2DBackpropInput"] = Module["asm"]["Dilation2DBackpropInput"]).apply(null, arguments);
        };
        var _Elu = Module["_Elu"] = function() {
          return (_Elu = Module["_Elu"] = Module["asm"]["Elu"]).apply(null, arguments);
        };
        var _EluGrad = Module["_EluGrad"] = function() {
          return (_EluGrad = Module["_EluGrad"] = Module["asm"]["EluGrad"]).apply(null, arguments);
        };
        var _Equal = Module["_Equal"] = function() {
          return (_Equal = Module["_Equal"] = Module["asm"]["Equal"]).apply(null, arguments);
        };
        var _Erf = Module["_Erf"] = function() {
          return (_Erf = Module["_Erf"] = Module["asm"]["Erf"]).apply(null, arguments);
        };
        var _Exp = Module["_Exp"] = function() {
          return (_Exp = Module["_Exp"] = Module["asm"]["Exp"]).apply(null, arguments);
        };
        var _Expm1 = Module["_Expm1"] = function() {
          return (_Expm1 = Module["_Expm1"] = Module["asm"]["Expm1"]).apply(null, arguments);
        };
        var _FlipLeftRight = Module["_FlipLeftRight"] = function() {
          return (_FlipLeftRight = Module["_FlipLeftRight"] = Module["asm"]["FlipLeftRight"]).apply(null, arguments);
        };
        var _Floor = Module["_Floor"] = function() {
          return (_Floor = Module["_Floor"] = Module["asm"]["Floor"]).apply(null, arguments);
        };
        var _FloorDiv = Module["_FloorDiv"] = function() {
          return (_FloorDiv = Module["_FloorDiv"] = Module["asm"]["FloorDiv"]).apply(null, arguments);
        };
        var _FusedBatchNorm = Module["_FusedBatchNorm"] = function() {
          return (_FusedBatchNorm = Module["_FusedBatchNorm"] = Module["asm"]["FusedBatchNorm"]).apply(null, arguments);
        };
        var _FusedConv2D = Module["_FusedConv2D"] = function() {
          return (_FusedConv2D = Module["_FusedConv2D"] = Module["asm"]["FusedConv2D"]).apply(null, arguments);
        };
        var _FusedDepthwiseConv2D = Module["_FusedDepthwiseConv2D"] = function() {
          return (_FusedDepthwiseConv2D = Module["_FusedDepthwiseConv2D"] = Module["asm"]["FusedDepthwiseConv2D"]).apply(null, arguments);
        };
        var _Gather = Module["_Gather"] = function() {
          return (_Gather = Module["_Gather"] = Module["asm"]["Gather"]).apply(null, arguments);
        };
        var _GatherNd = Module["_GatherNd"] = function() {
          return (_GatherNd = Module["_GatherNd"] = Module["asm"]["GatherNd"]).apply(null, arguments);
        };
        var _Greater = Module["_Greater"] = function() {
          return (_Greater = Module["_Greater"] = Module["asm"]["Greater"]).apply(null, arguments);
        };
        var _GreaterEqual = Module["_GreaterEqual"] = function() {
          return (_GreaterEqual = Module["_GreaterEqual"] = Module["asm"]["GreaterEqual"]).apply(null, arguments);
        };
        var _IsFinite = Module["_IsFinite"] = function() {
          return (_IsFinite = Module["_IsFinite"] = Module["asm"]["IsFinite"]).apply(null, arguments);
        };
        var _IsInf = Module["_IsInf"] = function() {
          return (_IsInf = Module["_IsInf"] = Module["asm"]["IsInf"]).apply(null, arguments);
        };
        var _IsNan = Module["_IsNan"] = function() {
          return (_IsNan = Module["_IsNan"] = Module["asm"]["IsNan"]).apply(null, arguments);
        };
        var _LRN = Module["_LRN"] = function() {
          return (_LRN = Module["_LRN"] = Module["asm"]["LRN"]).apply(null, arguments);
        };
        var _LRNGrad = Module["_LRNGrad"] = function() {
          return (_LRNGrad = Module["_LRNGrad"] = Module["asm"]["LRNGrad"]).apply(null, arguments);
        };
        var _LeakyRelu = Module["_LeakyRelu"] = function() {
          return (_LeakyRelu = Module["_LeakyRelu"] = Module["asm"]["LeakyRelu"]).apply(null, arguments);
        };
        var _Less = Module["_Less"] = function() {
          return (_Less = Module["_Less"] = Module["asm"]["Less"]).apply(null, arguments);
        };
        var _LessEqual = Module["_LessEqual"] = function() {
          return (_LessEqual = Module["_LessEqual"] = Module["asm"]["LessEqual"]).apply(null, arguments);
        };
        var _LinSpace = Module["_LinSpace"] = function() {
          return (_LinSpace = Module["_LinSpace"] = Module["asm"]["LinSpace"]).apply(null, arguments);
        };
        var _Log = Module["_Log"] = function() {
          return (_Log = Module["_Log"] = Module["asm"]["Log"]).apply(null, arguments);
        };
        var _Log1p = Module["_Log1p"] = function() {
          return (_Log1p = Module["_Log1p"] = Module["asm"]["Log1p"]).apply(null, arguments);
        };
        var _LogicalAnd = Module["_LogicalAnd"] = function() {
          return (_LogicalAnd = Module["_LogicalAnd"] = Module["asm"]["LogicalAnd"]).apply(null, arguments);
        };
        var _LogicalNot = Module["_LogicalNot"] = function() {
          return (_LogicalNot = Module["_LogicalNot"] = Module["asm"]["LogicalNot"]).apply(null, arguments);
        };
        var _LogicalOr = Module["_LogicalOr"] = function() {
          return (_LogicalOr = Module["_LogicalOr"] = Module["asm"]["LogicalOr"]).apply(null, arguments);
        };
        var _LogicalXor = Module["_LogicalXor"] = function() {
          return (_LogicalXor = Module["_LogicalXor"] = Module["asm"]["LogicalXor"]).apply(null, arguments);
        };
        var _Max = Module["_Max"] = function() {
          return (_Max = Module["_Max"] = Module["asm"]["Max"]).apply(null, arguments);
        };
        var _MaxPool = Module["_MaxPool"] = function() {
          return (_MaxPool = Module["_MaxPool"] = Module["asm"]["MaxPool"]).apply(null, arguments);
        };
        var _MaxPool3D = Module["_MaxPool3D"] = function() {
          return (_MaxPool3D = Module["_MaxPool3D"] = Module["asm"]["MaxPool3D"]).apply(null, arguments);
        };
        var _MaxPool3DGrad = Module["_MaxPool3DGrad"] = function() {
          return (_MaxPool3DGrad = Module["_MaxPool3DGrad"] = Module["asm"]["MaxPool3DGrad"]).apply(null, arguments);
        };
        var _MaxPoolGrad = Module["_MaxPoolGrad"] = function() {
          return (_MaxPoolGrad = Module["_MaxPoolGrad"] = Module["asm"]["MaxPoolGrad"]).apply(null, arguments);
        };
        var _MaxPoolWithArgmax = Module["_MaxPoolWithArgmax"] = function() {
          return (_MaxPoolWithArgmax = Module["_MaxPoolWithArgmax"] = Module["asm"]["MaxPoolWithArgmax"]).apply(null, arguments);
        };
        var _Maximum = Module["_Maximum"] = function() {
          return (_Maximum = Module["_Maximum"] = Module["asm"]["Maximum"]).apply(null, arguments);
        };
        var _Mean = Module["_Mean"] = function() {
          return (_Mean = Module["_Mean"] = Module["asm"]["Mean"]).apply(null, arguments);
        };
        var _Min = Module["_Min"] = function() {
          return (_Min = Module["_Min"] = Module["asm"]["Min"]).apply(null, arguments);
        };
        var _Minimum = Module["_Minimum"] = function() {
          return (_Minimum = Module["_Minimum"] = Module["asm"]["Minimum"]).apply(null, arguments);
        };
        var _MirrorPad = Module["_MirrorPad"] = function() {
          return (_MirrorPad = Module["_MirrorPad"] = Module["asm"]["MirrorPad"]).apply(null, arguments);
        };
        var _Mod = Module["_Mod"] = function() {
          return (_Mod = Module["_Mod"] = Module["asm"]["Mod"]).apply(null, arguments);
        };
        var _Multinomial = Module["_Multinomial"] = function() {
          return (_Multinomial = Module["_Multinomial"] = Module["asm"]["Multinomial"]).apply(null, arguments);
        };
        var _Multiply = Module["_Multiply"] = function() {
          return (_Multiply = Module["_Multiply"] = Module["asm"]["Multiply"]).apply(null, arguments);
        };
        var _Neg = Module["_Neg"] = function() {
          return (_Neg = Module["_Neg"] = Module["asm"]["Neg"]).apply(null, arguments);
        };
        var _NonMaxSuppressionV3 = Module["_NonMaxSuppressionV3"] = function() {
          return (_NonMaxSuppressionV3 = Module["_NonMaxSuppressionV3"] = Module["asm"]["NonMaxSuppressionV3"]).apply(null, arguments);
        };
        var _NonMaxSuppressionV4 = Module["_NonMaxSuppressionV4"] = function() {
          return (_NonMaxSuppressionV4 = Module["_NonMaxSuppressionV4"] = Module["asm"]["NonMaxSuppressionV4"]).apply(null, arguments);
        };
        var _NonMaxSuppressionV5 = Module["_NonMaxSuppressionV5"] = function() {
          return (_NonMaxSuppressionV5 = Module["_NonMaxSuppressionV5"] = Module["asm"]["NonMaxSuppressionV5"]).apply(null, arguments);
        };
        var _NotEqual = Module["_NotEqual"] = function() {
          return (_NotEqual = Module["_NotEqual"] = Module["asm"]["NotEqual"]).apply(null, arguments);
        };
        var _OneHot = Module["_OneHot"] = function() {
          return (_OneHot = Module["_OneHot"] = Module["asm"]["OneHot"]).apply(null, arguments);
        };
        var _PadV2 = Module["_PadV2"] = function() {
          return (_PadV2 = Module["_PadV2"] = Module["asm"]["PadV2"]).apply(null, arguments);
        };
        var _Pow = Module["_Pow"] = function() {
          return (_Pow = Module["_Pow"] = Module["asm"]["Pow"]).apply(null, arguments);
        };
        var _Prelu = Module["_Prelu"] = function() {
          return (_Prelu = Module["_Prelu"] = Module["asm"]["Prelu"]).apply(null, arguments);
        };
        var _Prod = Module["_Prod"] = function() {
          return (_Prod = Module["_Prod"] = Module["asm"]["Prod"]).apply(null, arguments);
        };
        var _RealDiv = Module["_RealDiv"] = function() {
          return (_RealDiv = Module["_RealDiv"] = Module["asm"]["RealDiv"]).apply(null, arguments);
        };
        var _Reciprocal = Module["_Reciprocal"] = function() {
          return (_Reciprocal = Module["_Reciprocal"] = Module["asm"]["Reciprocal"]).apply(null, arguments);
        };
        var _Relu = Module["_Relu"] = function() {
          return (_Relu = Module["_Relu"] = Module["asm"]["Relu"]).apply(null, arguments);
        };
        var _Relu6 = Module["_Relu6"] = function() {
          return (_Relu6 = Module["_Relu6"] = Module["asm"]["Relu6"]).apply(null, arguments);
        };
        var _ResizeBilinear = Module["_ResizeBilinear"] = function() {
          return (_ResizeBilinear = Module["_ResizeBilinear"] = Module["asm"]["ResizeBilinear"]).apply(null, arguments);
        };
        var _ResizeBilinearGrad = Module["_ResizeBilinearGrad"] = function() {
          return (_ResizeBilinearGrad = Module["_ResizeBilinearGrad"] = Module["asm"]["ResizeBilinearGrad"]).apply(null, arguments);
        };
        var _ResizeNearestNeighbor = Module["_ResizeNearestNeighbor"] = function() {
          return (_ResizeNearestNeighbor = Module["_ResizeNearestNeighbor"] = Module["asm"]["ResizeNearestNeighbor"]).apply(null, arguments);
        };
        var _ResizeNearestNeighborGrad = Module["_ResizeNearestNeighborGrad"] = function() {
          return (_ResizeNearestNeighborGrad = Module["_ResizeNearestNeighborGrad"] = Module["asm"]["ResizeNearestNeighborGrad"]).apply(null, arguments);
        };
        var _Reverse = Module["_Reverse"] = function() {
          return (_Reverse = Module["_Reverse"] = Module["asm"]["Reverse"]).apply(null, arguments);
        };
        var _RotateWithOffset = Module["_RotateWithOffset"] = function() {
          return (_RotateWithOffset = Module["_RotateWithOffset"] = Module["asm"]["RotateWithOffset"]).apply(null, arguments);
        };
        var _Round = Module["_Round"] = function() {
          return (_Round = Module["_Round"] = Module["asm"]["Round"]).apply(null, arguments);
        };
        var _Rsqrt = Module["_Rsqrt"] = function() {
          return (_Rsqrt = Module["_Rsqrt"] = Module["asm"]["Rsqrt"]).apply(null, arguments);
        };
        var _ScatterNd = Module["_ScatterNd"] = function() {
          return (_ScatterNd = Module["_ScatterNd"] = Module["asm"]["ScatterNd"]).apply(null, arguments);
        };
        var _SearchSorted = Module["_SearchSorted"] = function() {
          return (_SearchSorted = Module["_SearchSorted"] = Module["asm"]["SearchSorted"]).apply(null, arguments);
        };
        var _SelectV2 = Module["_SelectV2"] = function() {
          return (_SelectV2 = Module["_SelectV2"] = Module["asm"]["SelectV2"]).apply(null, arguments);
        };
        var _Selu = Module["_Selu"] = function() {
          return (_Selu = Module["_Selu"] = Module["asm"]["Selu"]).apply(null, arguments);
        };
        var _Sigmoid = Module["_Sigmoid"] = function() {
          return (_Sigmoid = Module["_Sigmoid"] = Module["asm"]["Sigmoid"]).apply(null, arguments);
        };
        var _Sign = Module["_Sign"] = function() {
          return (_Sign = Module["_Sign"] = Module["asm"]["Sign"]).apply(null, arguments);
        };
        var _Sin = Module["_Sin"] = function() {
          return (_Sin = Module["_Sin"] = Module["asm"]["Sin"]).apply(null, arguments);
        };
        var _Sinh = Module["_Sinh"] = function() {
          return (_Sinh = Module["_Sinh"] = Module["asm"]["Sinh"]).apply(null, arguments);
        };
        var _Softmax = Module["_Softmax"] = function() {
          return (_Softmax = Module["_Softmax"] = Module["asm"]["Softmax"]).apply(null, arguments);
        };
        var _Softplus = Module["_Softplus"] = function() {
          return (_Softplus = Module["_Softplus"] = Module["asm"]["Softplus"]).apply(null, arguments);
        };
        var _SparseFillEmptyRows = Module["_SparseFillEmptyRows"] = function() {
          return (_SparseFillEmptyRows = Module["_SparseFillEmptyRows"] = Module["asm"]["SparseFillEmptyRows"]).apply(null, arguments);
        };
        var _SparseReshape = Module["_SparseReshape"] = function() {
          return (_SparseReshape = Module["_SparseReshape"] = Module["asm"]["SparseReshape"]).apply(null, arguments);
        };
        var _SparseSegmentReduction = Module["_SparseSegmentReduction"] = function() {
          return (_SparseSegmentReduction = Module["_SparseSegmentReduction"] = Module["asm"]["SparseSegmentReduction"]).apply(null, arguments);
        };
        var _SparseToDense = Module["_SparseToDense"] = function() {
          return (_SparseToDense = Module["_SparseToDense"] = Module["asm"]["SparseToDense"]).apply(null, arguments);
        };
        var _Sqrt = Module["_Sqrt"] = function() {
          return (_Sqrt = Module["_Sqrt"] = Module["asm"]["Sqrt"]).apply(null, arguments);
        };
        var _Square = Module["_Square"] = function() {
          return (_Square = Module["_Square"] = Module["asm"]["Square"]).apply(null, arguments);
        };
        var _SquaredDifference = Module["_SquaredDifference"] = function() {
          return (_SquaredDifference = Module["_SquaredDifference"] = Module["asm"]["SquaredDifference"]).apply(null, arguments);
        };
        var _Step = Module["_Step"] = function() {
          return (_Step = Module["_Step"] = Module["asm"]["Step"]).apply(null, arguments);
        };
        var _StridedSlice = Module["_StridedSlice"] = function() {
          return (_StridedSlice = Module["_StridedSlice"] = Module["asm"]["StridedSlice"]).apply(null, arguments);
        };
        var _Sub = Module["_Sub"] = function() {
          return (_Sub = Module["_Sub"] = Module["asm"]["Sub"]).apply(null, arguments);
        };
        var _Sum = Module["_Sum"] = function() {
          return (_Sum = Module["_Sum"] = Module["asm"]["Sum"]).apply(null, arguments);
        };
        var _Tan = Module["_Tan"] = function() {
          return (_Tan = Module["_Tan"] = Module["asm"]["Tan"]).apply(null, arguments);
        };
        var _Tanh = Module["_Tanh"] = function() {
          return (_Tanh = Module["_Tanh"] = Module["asm"]["Tanh"]).apply(null, arguments);
        };
        var _TensorScatterUpdate = Module["_TensorScatterUpdate"] = function() {
          return (_TensorScatterUpdate = Module["_TensorScatterUpdate"] = Module["asm"]["TensorScatterUpdate"]).apply(null, arguments);
        };
        var _Tile = Module["_Tile"] = function() {
          return (_Tile = Module["_Tile"] = Module["asm"]["Tile"]).apply(null, arguments);
        };
        var _TopK = Module["_TopK"] = function() {
          return (_TopK = Module["_TopK"] = Module["asm"]["TopK"]).apply(null, arguments);
        };
        var _Transform = Module["_Transform"] = function() {
          return (_Transform = Module["_Transform"] = Module["asm"]["Transform"]).apply(null, arguments);
        };
        var _Transpose = Module["_Transpose"] = function() {
          return (_Transpose = Module["_Transpose"] = Module["asm"]["Transpose"]).apply(null, arguments);
        };
        var __FusedMatMul = Module["__FusedMatMul"] = function() {
          return (__FusedMatMul = Module["__FusedMatMul"] = Module["asm"]["_FusedMatMul"]).apply(null, arguments);
        };
        var _malloc = Module["_malloc"] = function() {
          return (_malloc = Module["_malloc"] = Module["asm"]["malloc"]).apply(null, arguments);
        };
        var _free = Module["_free"] = function() {
          return (_free = Module["_free"] = Module["asm"]["free"]).apply(null, arguments);
        };
        var __emscripten_tls_init = Module["__emscripten_tls_init"] = function() {
          return (__emscripten_tls_init = Module["__emscripten_tls_init"] = Module["asm"]["_emscripten_tls_init"]).apply(null, arguments);
        };
        var _pthread_self = Module["_pthread_self"] = function() {
          return (_pthread_self = Module["_pthread_self"] = Module["asm"]["pthread_self"]).apply(null, arguments);
        };
        var ___errno_location = Module["___errno_location"] = function() {
          return (___errno_location = Module["___errno_location"] = Module["asm"]["__errno_location"]).apply(null, arguments);
        };
        var __emscripten_thread_init = Module["__emscripten_thread_init"] = function() {
          return (__emscripten_thread_init = Module["__emscripten_thread_init"] = Module["asm"]["_emscripten_thread_init"]).apply(null, arguments);
        };
        var __emscripten_thread_crashed = Module["__emscripten_thread_crashed"] = function() {
          return (__emscripten_thread_crashed = Module["__emscripten_thread_crashed"] = Module["asm"]["_emscripten_thread_crashed"]).apply(null, arguments);
        };
        var _emscripten_main_thread_process_queued_calls = Module["_emscripten_main_thread_process_queued_calls"] = function() {
          return (_emscripten_main_thread_process_queued_calls = Module["_emscripten_main_thread_process_queued_calls"] = Module["asm"]["emscripten_main_thread_process_queued_calls"]).apply(null, arguments);
        };
        var _emscripten_main_browser_thread_id = Module["_emscripten_main_browser_thread_id"] = function() {
          return (_emscripten_main_browser_thread_id = Module["_emscripten_main_browser_thread_id"] = Module["asm"]["emscripten_main_browser_thread_id"]).apply(null, arguments);
        };
        var _emscripten_run_in_main_runtime_thread_js = Module["_emscripten_run_in_main_runtime_thread_js"] = function() {
          return (_emscripten_run_in_main_runtime_thread_js = Module["_emscripten_run_in_main_runtime_thread_js"] = Module["asm"]["emscripten_run_in_main_runtime_thread_js"]).apply(null, arguments);
        };
        var _emscripten_dispatch_to_thread_ = Module["_emscripten_dispatch_to_thread_"] = function() {
          return (_emscripten_dispatch_to_thread_ = Module["_emscripten_dispatch_to_thread_"] = Module["asm"]["emscripten_dispatch_to_thread_"]).apply(null, arguments);
        };
        var __emscripten_proxy_execute_task_queue = Module["__emscripten_proxy_execute_task_queue"] = function() {
          return (__emscripten_proxy_execute_task_queue = Module["__emscripten_proxy_execute_task_queue"] = Module["asm"]["_emscripten_proxy_execute_task_queue"]).apply(null, arguments);
        };
        var __emscripten_thread_free_data = Module["__emscripten_thread_free_data"] = function() {
          return (__emscripten_thread_free_data = Module["__emscripten_thread_free_data"] = Module["asm"]["_emscripten_thread_free_data"]).apply(null, arguments);
        };
        var __emscripten_thread_exit = Module["__emscripten_thread_exit"] = function() {
          return (__emscripten_thread_exit = Module["__emscripten_thread_exit"] = Module["asm"]["_emscripten_thread_exit"]).apply(null, arguments);
        };
        var _emscripten_stack_set_limits = Module["_emscripten_stack_set_limits"] = function() {
          return (_emscripten_stack_set_limits = Module["_emscripten_stack_set_limits"] = Module["asm"]["emscripten_stack_set_limits"]).apply(null, arguments);
        };
        var stackSave = Module["stackSave"] = function() {
          return (stackSave = Module["stackSave"] = Module["asm"]["stackSave"]).apply(null, arguments);
        };
        var stackRestore = Module["stackRestore"] = function() {
          return (stackRestore = Module["stackRestore"] = Module["asm"]["stackRestore"]).apply(null, arguments);
        };
        var stackAlloc = Module["stackAlloc"] = function() {
          return (stackAlloc = Module["stackAlloc"] = Module["asm"]["stackAlloc"]).apply(null, arguments);
        };
        var dynCall_iijjiiii = Module["dynCall_iijjiiii"] = function() {
          return (dynCall_iijjiiii = Module["dynCall_iijjiiii"] = Module["asm"]["dynCall_iijjiiii"]).apply(null, arguments);
        };
        var dynCall_jiji = Module["dynCall_jiji"] = function() {
          return (dynCall_jiji = Module["dynCall_jiji"] = Module["asm"]["dynCall_jiji"]).apply(null, arguments);
        };
        Module["keepRuntimeAlive"] = keepRuntimeAlive;
        Module["wasmMemory"] = wasmMemory;
        Module["cwrap"] = cwrap;
        Module["ExitStatus"] = ExitStatus;
        Module["PThread"] = PThread;
        var calledRun;
        dependenciesFulfilled = function runCaller() {
          if (!calledRun) run();
          if (!calledRun) dependenciesFulfilled = runCaller;
        };
        function run(args) {
          args = args || arguments_;
          if (runDependencies > 0) {
            return;
          }
          if (ENVIRONMENT_IS_PTHREAD) {
            readyPromiseResolve(Module);
            initRuntime();
            startWorker(Module);
            return;
          }
          preRun();
          if (runDependencies > 0) {
            return;
          }
          function doRun() {
            if (calledRun) return;
            calledRun = true;
            Module["calledRun"] = true;
            if (ABORT) return;
            initRuntime();
            readyPromiseResolve(Module);
            if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
            postRun();
          }
          if (Module["setStatus"]) {
            Module["setStatus"]("Running...");
            setTimeout(function() {
              setTimeout(function() {
                Module["setStatus"]("");
              }, 1);
              doRun();
            }, 1);
          } else {
            doRun();
          }
        }
        if (Module["preInit"]) {
          if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
          while (Module["preInit"].length > 0) {
            Module["preInit"].pop()();
          }
        }
        run();
        var listenersAdded;
        if (beforeListeners) {
          listenersAdded = {
            uncaughtException: process.listeners("uncaughtException").filter(function(listener) {
              return !beforeListeners.uncaughtException.indexOf(listener) > -1;
            }),
            unhandledRejection: process.listeners("unhandledRejection").filter(function(listener) {
              return !beforeListeners.unhandledRejection.indexOf(listener) > -1;
            })
          };
        }
        var actualModule;
        if (typeof WasmBackendModule !== "undefined") {
          actualModule = WasmBackendModule;
        } else if (typeof WasmBackendModuleThreadedSimd3 !== "undefined") {
          actualModule = WasmBackendModuleThreadedSimd3;
        } else {
          throw new Error("Could not find wasm module in post.js");
        }
        if (listenersAdded) {
          var tmpDispose = actualModule["_dispose"];
          actualModule["_dispose"] = function() {
            tmpDispose();
            listenersAdded.uncaughtException.forEach(function(listener) {
              process.removeListener("uncaughtException", listener);
            });
            listenersAdded.unhandledRejection.forEach(function(listener) {
              process.removeListener("unhandledRejection", listener);
            });
          };
        }
        return WasmBackendModuleThreadedSimd3.ready;
      };
    })();
    if (typeof exports === "object" && typeof module === "object") module.exports = WasmBackendModuleThreadedSimd2;
    else if (typeof define === "function" && define["amd"]) define([], function() {
      return WasmBackendModuleThreadedSimd2;
    });
    else if (typeof exports === "object") exports["WasmBackendModuleThreadedSimd"] = WasmBackendModuleThreadedSimd2;
  }
});

// node_modules/@tensorflow/tfjs-backend-wasm/wasm-out/tfjs-backend-wasm-threaded-simd.worker.js
var require_tfjs_backend_wasm_threaded_simd_worker = __commonJS({
  "node_modules/@tensorflow/tfjs-backend-wasm/wasm-out/tfjs-backend-wasm-threaded-simd.worker.js"(exports, module) {
    module.exports.wasmWorkerContents = `"use strict";var Module={};var ENVIRONMENT_IS_NODE=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";if(ENVIRONMENT_IS_NODE){var nodeWorkerThreads=require("worker_threads");var parentPort=nodeWorkerThreads.parentPort;parentPort.on("message",data=>onmessage({data:data}));var fs=require("fs");Object.assign(global,{self:global,require:require,Module:Module,location:{href:__filename},Worker:nodeWorkerThreads.Worker,importScripts:function(f){(0,eval)(fs.readFileSync(f,"utf8")+"//# sourceURL="+f)},postMessage:function(msg){parentPort.postMessage(msg)},performance:global.performance||{now:function(){return Date.now()}}})}var initializedJS=false;var pendingNotifiedProxyingQueues=[];function threadPrintErr(){var text=Array.prototype.slice.call(arguments).join(" ");if(ENVIRONMENT_IS_NODE){fs.writeSync(2,text+"
");return}console.error(text)}function threadAlert(){var text=Array.prototype.slice.call(arguments).join(" ");postMessage({cmd:"alert",text:text,threadId:Module["_pthread_self"]()})}var err=threadPrintErr;self.alert=threadAlert;Module["instantiateWasm"]=(info,receiveInstance)=>{var instance=new WebAssembly.Instance(Module["wasmModule"],info);receiveInstance(instance);Module["wasmModule"]=null;return instance.exports};self.onunhandledrejection=e=>{throw e.reason??e};self.startWorker=instance=>{Module=instance;postMessage({"cmd":"loaded"})};self.onmessage=e=>{try{if(e.data.cmd==="load"){Module["wasmModule"]=e.data.wasmModule;for(const handler of e.data.handlers){Module[handler]=function(){postMessage({cmd:"callHandler",handler:handler,args:[...arguments]})}}Module["wasmMemory"]=e.data.wasmMemory;Module["buffer"]=Module["wasmMemory"].buffer;Module["ENVIRONMENT_IS_PTHREAD"]=true;if(typeof e.data.urlOrBlob=="string"){importScripts(e.data.urlOrBlob)}else{var objectUrl=URL.createObjectURL(e.data.urlOrBlob);importScripts(objectUrl);URL.revokeObjectURL(objectUrl)}WasmBackendModuleThreadedSimd(Module)}else if(e.data.cmd==="run"){Module["__emscripten_thread_init"](e.data.pthread_ptr,0,0,1);Module["establishStackSpace"]();Module["PThread"].receiveObjectTransfer(e.data);Module["PThread"].threadInitTLS();if(!initializedJS){pendingNotifiedProxyingQueues.forEach(queue=>{Module["executeNotifiedProxyingQueue"](queue)});pendingNotifiedProxyingQueues=[];initializedJS=true}try{Module["invokeEntryPoint"](e.data.start_routine,e.data.arg)}catch(ex){if(ex!="unwind"){if(ex instanceof Module["ExitStatus"]){if(Module["keepRuntimeAlive"]()){}else{Module["__emscripten_thread_exit"](ex.status)}}else{throw ex}}}}else if(e.data.cmd==="cancel"){if(Module["_pthread_self"]()){Module["__emscripten_thread_exit"](-1)}}else if(e.data.target==="setimmediate"){}else if(e.data.cmd==="processProxyingQueue"){if(initializedJS){Module["executeNotifiedProxyingQueue"](e.data.queue)}else{pendingNotifiedProxyingQueues.push(e.data.queue)}}else if(e.data.cmd){err("worker.js received unknown command "+e.data.cmd);err(e.data)}}catch(ex){if(Module["__emscripten_thread_crashed"]){Module["__emscripten_thread_crashed"]()}throw ex}};`;
  }
});

// node_modules/@tensorflow/tfjs-backend-wasm/wasm-out/tfjs-backend-wasm.js
var require_tfjs_backend_wasm = __commonJS({
  "node_modules/@tensorflow/tfjs-backend-wasm/wasm-out/tfjs-backend-wasm.js"(exports, module) {
    var WasmBackendModule2 = (() => {
      var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : void 0;
      if (typeof __filename !== "undefined") _scriptDir = _scriptDir || __filename;
      return function(WasmBackendModule3) {
        WasmBackendModule3 = WasmBackendModule3 || {};
        var Module = typeof WasmBackendModule3 != "undefined" ? WasmBackendModule3 : {};
        var readyPromiseResolve, readyPromiseReject;
        Module["ready"] = new Promise(function(resolve, reject) {
          readyPromiseResolve = resolve;
          readyPromiseReject = reject;
        });
        var beforeListeners;
        if (typeof process !== "undefined" && process.listeners) {
          beforeListeners = {
            uncaughtException: process.listeners("uncaughtException"),
            unhandledRejection: process.listeners("unhandledRejection")
          };
        }
        var moduleOverrides = Object.assign({}, Module);
        var arguments_ = [];
        var thisProgram = "./this.program";
        var quit_ = (status, toThrow) => {
          throw toThrow;
        };
        var ENVIRONMENT_IS_WEB = typeof window == "object";
        var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
        var ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
        var scriptDirectory = "";
        function locateFile(path) {
          if (Module["locateFile"]) {
            return Module["locateFile"](path, scriptDirectory);
          }
          return scriptDirectory + path;
        }
        var read_, readAsync, readBinary, setWindowTitle;
        function logExceptionOnExit(e) {
          if (e instanceof ExitStatus) return;
          let toLog = e;
          err("exiting due to exception: " + toLog);
        }
        if (ENVIRONMENT_IS_NODE) {
          var fs = require_fs();
          var nodePath = require_path();
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = nodePath.dirname(scriptDirectory) + "/";
          } else {
            scriptDirectory = __dirname + "/";
          }
          read_ = (filename, binary) => {
            filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
            return fs.readFileSync(filename, binary ? void 0 : "utf8");
          };
          readBinary = (filename) => {
            var ret = read_(filename, true);
            if (!ret.buffer) {
              ret = new Uint8Array(ret);
            }
            return ret;
          };
          readAsync = (filename, onload, onerror) => {
            filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
            fs.readFile(filename, function(err2, data) {
              if (err2) onerror(err2);
              else onload(data.buffer);
            });
          };
          if (process["argv"].length > 1) {
            thisProgram = process["argv"][1].replace(/\\/g, "/");
          }
          arguments_ = process["argv"].slice(2);
          process["on"]("uncaughtException", function(ex) {
            if (!(ex instanceof ExitStatus)) {
              throw ex;
            }
          });
          process["on"]("unhandledRejection", function(reason) {
            throw reason;
          });
          quit_ = (status, toThrow) => {
            if (keepRuntimeAlive()) {
              process["exitCode"] = status;
              throw toThrow;
            }
            logExceptionOnExit(toThrow);
            process["exit"](status);
          };
          Module["inspect"] = function() {
            return "[Emscripten Module object]";
          };
        } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = self.location.href;
          } else if (typeof document != "undefined" && document.currentScript) {
            scriptDirectory = document.currentScript.src;
          }
          if (_scriptDir) {
            scriptDirectory = _scriptDir;
          }
          if (scriptDirectory.indexOf("blob:") !== 0) {
            scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
          } else {
            scriptDirectory = "";
          }
          {
            read_ = (url) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, false);
              xhr.send(null);
              return xhr.responseText;
            };
            if (ENVIRONMENT_IS_WORKER) {
              readBinary = (url) => {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(xhr.response);
              };
            }
            readAsync = (url, onload, onerror) => {
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url, true);
              xhr.responseType = "arraybuffer";
              xhr.onload = () => {
                if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                  onload(xhr.response);
                  return;
                }
                onerror();
              };
              xhr.onerror = onerror;
              xhr.send(null);
            };
          }
          setWindowTitle = (title) => document.title = title;
        } else {
        }
        var out = Module["print"] || console.log.bind(console);
        var err = Module["printErr"] || console.warn.bind(console);
        Object.assign(Module, moduleOverrides);
        moduleOverrides = null;
        if (Module["arguments"]) arguments_ = Module["arguments"];
        if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
        if (Module["quit"]) quit_ = Module["quit"];
        var POINTER_SIZE = 4;
        var wasmBinary;
        if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
        var noExitRuntime = Module["noExitRuntime"] || true;
        if (typeof WebAssembly != "object") {
          abort("no native wasm support detected");
        }
        var wasmMemory;
        var ABORT = false;
        var EXITSTATUS;
        function assert(condition, text) {
          if (!condition) {
            abort(text);
          }
        }
        var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0;
        function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
          idx >>>= 0;
          var endIdx = idx + maxBytesToRead;
          var endPtr = idx;
          while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
          if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
            return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
          }
          var str = "";
          while (idx < endPtr) {
            var u0 = heapOrArray[idx++];
            if (!(u0 & 128)) {
              str += String.fromCharCode(u0);
              continue;
            }
            var u1 = heapOrArray[idx++] & 63;
            if ((u0 & 224) == 192) {
              str += String.fromCharCode((u0 & 31) << 6 | u1);
              continue;
            }
            var u2 = heapOrArray[idx++] & 63;
            if ((u0 & 240) == 224) {
              u0 = (u0 & 15) << 12 | u1 << 6 | u2;
            } else {
              u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
            }
            if (u0 < 65536) {
              str += String.fromCharCode(u0);
            } else {
              var ch = u0 - 65536;
              str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
            }
          }
          return str;
        }
        function UTF8ToString(ptr, maxBytesToRead) {
          ptr >>>= 0;
          return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
        }
        function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
          outIdx >>>= 0;
          if (!(maxBytesToWrite > 0)) return 0;
          var startIdx = outIdx;
          var endIdx = outIdx + maxBytesToWrite - 1;
          for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343) {
              var u1 = str.charCodeAt(++i);
              u = 65536 + ((u & 1023) << 10) | u1 & 1023;
            }
            if (u <= 127) {
              if (outIdx >= endIdx) break;
              heap[outIdx++ >>> 0] = u;
            } else if (u <= 2047) {
              if (outIdx + 1 >= endIdx) break;
              heap[outIdx++ >>> 0] = 192 | u >> 6;
              heap[outIdx++ >>> 0] = 128 | u & 63;
            } else if (u <= 65535) {
              if (outIdx + 2 >= endIdx) break;
              heap[outIdx++ >>> 0] = 224 | u >> 12;
              heap[outIdx++ >>> 0] = 128 | u >> 6 & 63;
              heap[outIdx++ >>> 0] = 128 | u & 63;
            } else {
              if (outIdx + 3 >= endIdx) break;
              heap[outIdx++ >>> 0] = 240 | u >> 18;
              heap[outIdx++ >>> 0] = 128 | u >> 12 & 63;
              heap[outIdx++ >>> 0] = 128 | u >> 6 & 63;
              heap[outIdx++ >>> 0] = 128 | u & 63;
            }
          }
          heap[outIdx >>> 0] = 0;
          return outIdx - startIdx;
        }
        function stringToUTF8(str, outPtr, maxBytesToWrite) {
          return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
        }
        var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
        function updateGlobalBufferAndViews(buf) {
          buffer = buf;
          Module["HEAP8"] = HEAP8 = new Int8Array(buf);
          Module["HEAP16"] = HEAP16 = new Int16Array(buf);
          Module["HEAP32"] = HEAP32 = new Int32Array(buf);
          Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
          Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
          Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
          Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
          Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
        }
        var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 16777216;
        var wasmTable;
        var __ATPRERUN__ = [];
        var __ATINIT__ = [];
        var __ATPOSTRUN__ = [];
        var runtimeInitialized = false;
        function keepRuntimeAlive() {
          return noExitRuntime;
        }
        function preRun() {
          if (Module["preRun"]) {
            if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
            while (Module["preRun"].length) {
              addOnPreRun(Module["preRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPRERUN__);
        }
        function initRuntime() {
          runtimeInitialized = true;
          callRuntimeCallbacks(__ATINIT__);
        }
        function postRun() {
          if (Module["postRun"]) {
            if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
            while (Module["postRun"].length) {
              addOnPostRun(Module["postRun"].shift());
            }
          }
          callRuntimeCallbacks(__ATPOSTRUN__);
        }
        function addOnPreRun(cb) {
          __ATPRERUN__.unshift(cb);
        }
        function addOnInit(cb) {
          __ATINIT__.unshift(cb);
        }
        function addOnPostRun(cb) {
          __ATPOSTRUN__.unshift(cb);
        }
        var runDependencies = 0;
        var runDependencyWatcher = null;
        var dependenciesFulfilled = null;
        function addRunDependency(id) {
          runDependencies++;
          if (Module["monitorRunDependencies"]) {
            Module["monitorRunDependencies"](runDependencies);
          }
        }
        function removeRunDependency(id) {
          runDependencies--;
          if (Module["monitorRunDependencies"]) {
            Module["monitorRunDependencies"](runDependencies);
          }
          if (runDependencies == 0) {
            if (runDependencyWatcher !== null) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
            }
            if (dependenciesFulfilled) {
              var callback = dependenciesFulfilled;
              dependenciesFulfilled = null;
              callback();
            }
          }
        }
        function abort(what) {
          if (Module["onAbort"]) {
            Module["onAbort"](what);
          }
          what = "Aborted(" + what + ")";
          err(what);
          ABORT = true;
          EXITSTATUS = 1;
          what += ". Build with -sASSERTIONS for more info.";
          var e = new WebAssembly.RuntimeError(what);
          readyPromiseReject(e);
          throw e;
        }
        var dataURIPrefix = "data:application/octet-stream;base64,";
        function isDataURI(filename) {
          return filename.startsWith(dataURIPrefix);
        }
        function isFileURI(filename) {
          return filename.startsWith("file://");
        }
        var wasmBinaryFile;
        wasmBinaryFile = "tfjs-backend-wasm.wasm";
        if (!isDataURI(wasmBinaryFile)) {
          wasmBinaryFile = locateFile(wasmBinaryFile);
        }
        function getBinary(file) {
          try {
            if (file == wasmBinaryFile && wasmBinary) {
              return new Uint8Array(wasmBinary);
            }
            if (readBinary) {
              return readBinary(file);
            }
            throw "both async and sync fetching of the wasm failed";
          } catch (err2) {
            abort(err2);
          }
        }
        function getBinaryPromise() {
          if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
            if (typeof fetch == "function" && !isFileURI(wasmBinaryFile)) {
              return fetch(wasmBinaryFile, {
                credentials: "same-origin"
              }).then(function(response) {
                if (!response["ok"]) {
                  throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
                }
                return response["arrayBuffer"]();
              }).catch(function() {
                return getBinary(wasmBinaryFile);
              });
            } else {
              if (readAsync) {
                return new Promise(function(resolve, reject) {
                  readAsync(wasmBinaryFile, function(response) {
                    resolve(new Uint8Array(response));
                  }, reject);
                });
              }
            }
          }
          return Promise.resolve().then(function() {
            return getBinary(wasmBinaryFile);
          });
        }
        function createWasm() {
          var info = {
            "env": asmLibraryArg,
            "wasi_snapshot_preview1": asmLibraryArg
          };
          function receiveInstance(instance, module2) {
            var exports3 = instance.exports;
            Module["asm"] = exports3;
            wasmMemory = Module["asm"]["memory"];
            updateGlobalBufferAndViews(wasmMemory.buffer);
            wasmTable = Module["asm"]["__indirect_function_table"];
            addOnInit(Module["asm"]["__wasm_call_ctors"]);
            removeRunDependency("wasm-instantiate");
          }
          addRunDependency("wasm-instantiate");
          function receiveInstantiationResult(result) {
            receiveInstance(result["instance"]);
          }
          function instantiateArrayBuffer(receiver) {
            return getBinaryPromise().then(function(binary) {
              return WebAssembly.instantiate(binary, info);
            }).then(function(instance) {
              return instance;
            }).then(receiver, function(reason) {
              err("failed to asynchronously prepare wasm: " + reason);
              abort(reason);
            });
          }
          function instantiateAsync() {
            if (!wasmBinary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(wasmBinaryFile) && !isFileURI(wasmBinaryFile) && !ENVIRONMENT_IS_NODE && typeof fetch == "function") {
              return fetch(wasmBinaryFile, {
                credentials: "same-origin"
              }).then(function(response) {
                var result = WebAssembly.instantiateStreaming(response, info);
                return result.then(receiveInstantiationResult, function(reason) {
                  err("wasm streaming compile failed: " + reason);
                  err("falling back to ArrayBuffer instantiation");
                  return instantiateArrayBuffer(receiveInstantiationResult);
                });
              });
            } else {
              return instantiateArrayBuffer(receiveInstantiationResult);
            }
          }
          if (Module["instantiateWasm"]) {
            try {
              var exports2 = Module["instantiateWasm"](info, receiveInstance);
              return exports2;
            } catch (e) {
              err("Module.instantiateWasm callback failed with error: " + e);
              readyPromiseReject(e);
            }
          }
          instantiateAsync().catch(readyPromiseReject);
          return {};
        }
        var tempDouble;
        var tempI64;
        function ExitStatus(status) {
          this.name = "ExitStatus";
          this.message = "Program terminated with exit(" + status + ")";
          this.status = status;
        }
        function callRuntimeCallbacks(callbacks) {
          while (callbacks.length > 0) {
            callbacks.shift()(Module);
          }
        }
        function _abort() {
          abort("");
        }
        function getHeapMax() {
          return 4294901760;
        }
        function _emscripten_get_heap_max() {
          return getHeapMax();
        }
        function _emscripten_memcpy_big(dest, src, num) {
          HEAPU8.copyWithin(dest >>> 0, src >>> 0, src + num >>> 0);
        }
        function emscripten_realloc_buffer(size) {
          try {
            wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
            updateGlobalBufferAndViews(wasmMemory.buffer);
            return 1;
          } catch (e) {
          }
        }
        function _emscripten_resize_heap(requestedSize) {
          var oldSize = HEAPU8.length;
          requestedSize = requestedSize >>> 0;
          var maxHeapSize = getHeapMax();
          if (requestedSize > maxHeapSize) {
            return false;
          }
          let alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
          for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
            var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
            overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
            var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
            var replacement = emscripten_realloc_buffer(newSize);
            if (replacement) {
              return true;
            }
          }
          return false;
        }
        var SYSCALLS = {
          varargs: void 0,
          get: function() {
            SYSCALLS.varargs += 4;
            var ret = HEAP32[SYSCALLS.varargs - 4 >>> 2];
            return ret;
          },
          getStr: function(ptr) {
            var ret = UTF8ToString(ptr);
            return ret;
          }
        };
        function _fd_close(fd) {
          return 52;
        }
        function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
          return 70;
        }
        var printCharBuffers = [null, [], []];
        function printChar(stream, curr) {
          var buffer2 = printCharBuffers[stream];
          if (curr === 0 || curr === 10) {
            (stream === 1 ? out : err)(UTF8ArrayToString(buffer2, 0));
            buffer2.length = 0;
          } else {
            buffer2.push(curr);
          }
        }
        function _fd_write(fd, iov, iovcnt, pnum) {
          var num = 0;
          for (var i = 0; i < iovcnt; i++) {
            var ptr = HEAPU32[iov >>> 2];
            var len = HEAPU32[iov + 4 >>> 2];
            iov += 8;
            for (var j = 0; j < len; j++) {
              printChar(fd, HEAPU8[ptr + j >>> 0]);
            }
            num += len;
          }
          HEAPU32[pnum >>> 2] = num;
          return 0;
        }
        function getCFunc(ident) {
          var func = Module["_" + ident];
          return func;
        }
        function writeArrayToMemory(array, buffer2) {
          HEAP8.set(array, buffer2 >>> 0);
        }
        function ccall(ident, returnType, argTypes, args, opts) {
          var toC = {
            "string": (str) => {
              var ret2 = 0;
              if (str !== null && str !== void 0 && str !== 0) {
                var len = (str.length << 2) + 1;
                ret2 = stackAlloc(len);
                stringToUTF8(str, ret2, len);
              }
              return ret2;
            },
            "array": (arr) => {
              var ret2 = stackAlloc(arr.length);
              writeArrayToMemory(arr, ret2);
              return ret2;
            }
          };
          function convertReturnValue(ret2) {
            if (returnType === "string") {
              return UTF8ToString(ret2);
            }
            if (returnType === "boolean") return Boolean(ret2);
            return ret2;
          }
          var func = getCFunc(ident);
          var cArgs = [];
          var stack = 0;
          if (args) {
            for (var i = 0; i < args.length; i++) {
              var converter = toC[argTypes[i]];
              if (converter) {
                if (stack === 0) stack = stackSave();
                cArgs[i] = converter(args[i]);
              } else {
                cArgs[i] = args[i];
              }
            }
          }
          var ret = func.apply(null, cArgs);
          function onDone(ret2) {
            if (stack !== 0) stackRestore(stack);
            return convertReturnValue(ret2);
          }
          ret = onDone(ret);
          return ret;
        }
        function cwrap(ident, returnType, argTypes, opts) {
          argTypes = argTypes || [];
          var numericArgs = argTypes.every((type) => type === "number" || type === "boolean");
          var numericRet = returnType !== "string";
          if (numericRet && numericArgs && !opts) {
            return getCFunc(ident);
          }
          return function() {
            return ccall(ident, returnType, argTypes, arguments, opts);
          };
        }
        var asmLibraryArg = {
          "abort": _abort,
          "emscripten_get_heap_max": _emscripten_get_heap_max,
          "emscripten_memcpy_big": _emscripten_memcpy_big,
          "emscripten_resize_heap": _emscripten_resize_heap,
          "fd_close": _fd_close,
          "fd_seek": _fd_seek,
          "fd_write": _fd_write
        };
        var asm = createWasm();
        var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
          return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["__wasm_call_ctors"]).apply(null, arguments);
        };
        var _init = Module["_init"] = function() {
          return (_init = Module["_init"] = Module["asm"]["init"]).apply(null, arguments);
        };
        var _init_with_threads_count = Module["_init_with_threads_count"] = function() {
          return (_init_with_threads_count = Module["_init_with_threads_count"] = Module["asm"]["init_with_threads_count"]).apply(null, arguments);
        };
        var _get_threads_count = Module["_get_threads_count"] = function() {
          return (_get_threads_count = Module["_get_threads_count"] = Module["asm"]["get_threads_count"]).apply(null, arguments);
        };
        var _register_tensor = Module["_register_tensor"] = function() {
          return (_register_tensor = Module["_register_tensor"] = Module["asm"]["register_tensor"]).apply(null, arguments);
        };
        var _dispose_data = Module["_dispose_data"] = function() {
          return (_dispose_data = Module["_dispose_data"] = Module["asm"]["dispose_data"]).apply(null, arguments);
        };
        var _dispose = Module["_dispose"] = function() {
          return (_dispose = Module["_dispose"] = Module["asm"]["dispose"]).apply(null, arguments);
        };
        var _Abs = Module["_Abs"] = function() {
          return (_Abs = Module["_Abs"] = Module["asm"]["Abs"]).apply(null, arguments);
        };
        var _Acos = Module["_Acos"] = function() {
          return (_Acos = Module["_Acos"] = Module["asm"]["Acos"]).apply(null, arguments);
        };
        var _Acosh = Module["_Acosh"] = function() {
          return (_Acosh = Module["_Acosh"] = Module["asm"]["Acosh"]).apply(null, arguments);
        };
        var _Add = Module["_Add"] = function() {
          return (_Add = Module["_Add"] = Module["asm"]["Add"]).apply(null, arguments);
        };
        var _AddN = Module["_AddN"] = function() {
          return (_AddN = Module["_AddN"] = Module["asm"]["AddN"]).apply(null, arguments);
        };
        var _All = Module["_All"] = function() {
          return (_All = Module["_All"] = Module["asm"]["All"]).apply(null, arguments);
        };
        var _Any = Module["_Any"] = function() {
          return (_Any = Module["_Any"] = Module["asm"]["Any"]).apply(null, arguments);
        };
        var _ArgMax = Module["_ArgMax"] = function() {
          return (_ArgMax = Module["_ArgMax"] = Module["asm"]["ArgMax"]).apply(null, arguments);
        };
        var _ArgMin = Module["_ArgMin"] = function() {
          return (_ArgMin = Module["_ArgMin"] = Module["asm"]["ArgMin"]).apply(null, arguments);
        };
        var _Asin = Module["_Asin"] = function() {
          return (_Asin = Module["_Asin"] = Module["asm"]["Asin"]).apply(null, arguments);
        };
        var _Asinh = Module["_Asinh"] = function() {
          return (_Asinh = Module["_Asinh"] = Module["asm"]["Asinh"]).apply(null, arguments);
        };
        var _Atan = Module["_Atan"] = function() {
          return (_Atan = Module["_Atan"] = Module["asm"]["Atan"]).apply(null, arguments);
        };
        var _Atan2 = Module["_Atan2"] = function() {
          return (_Atan2 = Module["_Atan2"] = Module["asm"]["Atan2"]).apply(null, arguments);
        };
        var _Atanh = Module["_Atanh"] = function() {
          return (_Atanh = Module["_Atanh"] = Module["asm"]["Atanh"]).apply(null, arguments);
        };
        var _AvgPool = Module["_AvgPool"] = function() {
          return (_AvgPool = Module["_AvgPool"] = Module["asm"]["AvgPool"]).apply(null, arguments);
        };
        var _AvgPool3D = Module["_AvgPool3D"] = function() {
          return (_AvgPool3D = Module["_AvgPool3D"] = Module["asm"]["AvgPool3D"]).apply(null, arguments);
        };
        var _AvgPool3DGrad = Module["_AvgPool3DGrad"] = function() {
          return (_AvgPool3DGrad = Module["_AvgPool3DGrad"] = Module["asm"]["AvgPool3DGrad"]).apply(null, arguments);
        };
        var _AvgPoolGrad = Module["_AvgPoolGrad"] = function() {
          return (_AvgPoolGrad = Module["_AvgPoolGrad"] = Module["asm"]["AvgPoolGrad"]).apply(null, arguments);
        };
        var _BatchMatMul = Module["_BatchMatMul"] = function() {
          return (_BatchMatMul = Module["_BatchMatMul"] = Module["asm"]["BatchMatMul"]).apply(null, arguments);
        };
        var _Bincount = Module["_Bincount"] = function() {
          return (_Bincount = Module["_Bincount"] = Module["asm"]["Bincount"]).apply(null, arguments);
        };
        var _BitwiseAnd = Module["_BitwiseAnd"] = function() {
          return (_BitwiseAnd = Module["_BitwiseAnd"] = Module["asm"]["BitwiseAnd"]).apply(null, arguments);
        };
        var _Ceil = Module["_Ceil"] = function() {
          return (_Ceil = Module["_Ceil"] = Module["asm"]["Ceil"]).apply(null, arguments);
        };
        var _ClipByValue = Module["_ClipByValue"] = function() {
          return (_ClipByValue = Module["_ClipByValue"] = Module["asm"]["ClipByValue"]).apply(null, arguments);
        };
        var _Conv2D = Module["_Conv2D"] = function() {
          return (_Conv2D = Module["_Conv2D"] = Module["asm"]["Conv2D"]).apply(null, arguments);
        };
        var _Conv2DBackpropInput = Module["_Conv2DBackpropInput"] = function() {
          return (_Conv2DBackpropInput = Module["_Conv2DBackpropInput"] = Module["asm"]["Conv2DBackpropInput"]).apply(null, arguments);
        };
        var _Conv3D = Module["_Conv3D"] = function() {
          return (_Conv3D = Module["_Conv3D"] = Module["asm"]["Conv3D"]).apply(null, arguments);
        };
        var _Conv3DBackpropFilterV2 = Module["_Conv3DBackpropFilterV2"] = function() {
          return (_Conv3DBackpropFilterV2 = Module["_Conv3DBackpropFilterV2"] = Module["asm"]["Conv3DBackpropFilterV2"]).apply(null, arguments);
        };
        var _Conv3DBackpropInputV2 = Module["_Conv3DBackpropInputV2"] = function() {
          return (_Conv3DBackpropInputV2 = Module["_Conv3DBackpropInputV2"] = Module["asm"]["Conv3DBackpropInputV2"]).apply(null, arguments);
        };
        var _Cos = Module["_Cos"] = function() {
          return (_Cos = Module["_Cos"] = Module["asm"]["Cos"]).apply(null, arguments);
        };
        var _Cosh = Module["_Cosh"] = function() {
          return (_Cosh = Module["_Cosh"] = Module["asm"]["Cosh"]).apply(null, arguments);
        };
        var _CropAndResize = Module["_CropAndResize"] = function() {
          return (_CropAndResize = Module["_CropAndResize"] = Module["asm"]["CropAndResize"]).apply(null, arguments);
        };
        var _Cumprod = Module["_Cumprod"] = function() {
          return (_Cumprod = Module["_Cumprod"] = Module["asm"]["Cumprod"]).apply(null, arguments);
        };
        var _Cumsum = Module["_Cumsum"] = function() {
          return (_Cumsum = Module["_Cumsum"] = Module["asm"]["Cumsum"]).apply(null, arguments);
        };
        var _DenseBincount = Module["_DenseBincount"] = function() {
          return (_DenseBincount = Module["_DenseBincount"] = Module["asm"]["DenseBincount"]).apply(null, arguments);
        };
        var _DepthToSpace = Module["_DepthToSpace"] = function() {
          return (_DepthToSpace = Module["_DepthToSpace"] = Module["asm"]["DepthToSpace"]).apply(null, arguments);
        };
        var _DepthwiseConv2dNative = Module["_DepthwiseConv2dNative"] = function() {
          return (_DepthwiseConv2dNative = Module["_DepthwiseConv2dNative"] = Module["asm"]["DepthwiseConv2dNative"]).apply(null, arguments);
        };
        var _Diag = Module["_Diag"] = function() {
          return (_Diag = Module["_Diag"] = Module["asm"]["Diag"]).apply(null, arguments);
        };
        var _Dilation2D = Module["_Dilation2D"] = function() {
          return (_Dilation2D = Module["_Dilation2D"] = Module["asm"]["Dilation2D"]).apply(null, arguments);
        };
        var _Dilation2DBackpropFilter = Module["_Dilation2DBackpropFilter"] = function() {
          return (_Dilation2DBackpropFilter = Module["_Dilation2DBackpropFilter"] = Module["asm"]["Dilation2DBackpropFilter"]).apply(null, arguments);
        };
        var _Dilation2DBackpropInput = Module["_Dilation2DBackpropInput"] = function() {
          return (_Dilation2DBackpropInput = Module["_Dilation2DBackpropInput"] = Module["asm"]["Dilation2DBackpropInput"]).apply(null, arguments);
        };
        var _Elu = Module["_Elu"] = function() {
          return (_Elu = Module["_Elu"] = Module["asm"]["Elu"]).apply(null, arguments);
        };
        var _EluGrad = Module["_EluGrad"] = function() {
          return (_EluGrad = Module["_EluGrad"] = Module["asm"]["EluGrad"]).apply(null, arguments);
        };
        var _Equal = Module["_Equal"] = function() {
          return (_Equal = Module["_Equal"] = Module["asm"]["Equal"]).apply(null, arguments);
        };
        var _Erf = Module["_Erf"] = function() {
          return (_Erf = Module["_Erf"] = Module["asm"]["Erf"]).apply(null, arguments);
        };
        var _Exp = Module["_Exp"] = function() {
          return (_Exp = Module["_Exp"] = Module["asm"]["Exp"]).apply(null, arguments);
        };
        var _Expm1 = Module["_Expm1"] = function() {
          return (_Expm1 = Module["_Expm1"] = Module["asm"]["Expm1"]).apply(null, arguments);
        };
        var _FlipLeftRight = Module["_FlipLeftRight"] = function() {
          return (_FlipLeftRight = Module["_FlipLeftRight"] = Module["asm"]["FlipLeftRight"]).apply(null, arguments);
        };
        var _Floor = Module["_Floor"] = function() {
          return (_Floor = Module["_Floor"] = Module["asm"]["Floor"]).apply(null, arguments);
        };
        var _FloorDiv = Module["_FloorDiv"] = function() {
          return (_FloorDiv = Module["_FloorDiv"] = Module["asm"]["FloorDiv"]).apply(null, arguments);
        };
        var _FusedBatchNorm = Module["_FusedBatchNorm"] = function() {
          return (_FusedBatchNorm = Module["_FusedBatchNorm"] = Module["asm"]["FusedBatchNorm"]).apply(null, arguments);
        };
        var _FusedConv2D = Module["_FusedConv2D"] = function() {
          return (_FusedConv2D = Module["_FusedConv2D"] = Module["asm"]["FusedConv2D"]).apply(null, arguments);
        };
        var _FusedDepthwiseConv2D = Module["_FusedDepthwiseConv2D"] = function() {
          return (_FusedDepthwiseConv2D = Module["_FusedDepthwiseConv2D"] = Module["asm"]["FusedDepthwiseConv2D"]).apply(null, arguments);
        };
        var _Gather = Module["_Gather"] = function() {
          return (_Gather = Module["_Gather"] = Module["asm"]["Gather"]).apply(null, arguments);
        };
        var _GatherNd = Module["_GatherNd"] = function() {
          return (_GatherNd = Module["_GatherNd"] = Module["asm"]["GatherNd"]).apply(null, arguments);
        };
        var _Greater = Module["_Greater"] = function() {
          return (_Greater = Module["_Greater"] = Module["asm"]["Greater"]).apply(null, arguments);
        };
        var _GreaterEqual = Module["_GreaterEqual"] = function() {
          return (_GreaterEqual = Module["_GreaterEqual"] = Module["asm"]["GreaterEqual"]).apply(null, arguments);
        };
        var _IsFinite = Module["_IsFinite"] = function() {
          return (_IsFinite = Module["_IsFinite"] = Module["asm"]["IsFinite"]).apply(null, arguments);
        };
        var _IsInf = Module["_IsInf"] = function() {
          return (_IsInf = Module["_IsInf"] = Module["asm"]["IsInf"]).apply(null, arguments);
        };
        var _IsNan = Module["_IsNan"] = function() {
          return (_IsNan = Module["_IsNan"] = Module["asm"]["IsNan"]).apply(null, arguments);
        };
        var _LRN = Module["_LRN"] = function() {
          return (_LRN = Module["_LRN"] = Module["asm"]["LRN"]).apply(null, arguments);
        };
        var _LRNGrad = Module["_LRNGrad"] = function() {
          return (_LRNGrad = Module["_LRNGrad"] = Module["asm"]["LRNGrad"]).apply(null, arguments);
        };
        var _LeakyRelu = Module["_LeakyRelu"] = function() {
          return (_LeakyRelu = Module["_LeakyRelu"] = Module["asm"]["LeakyRelu"]).apply(null, arguments);
        };
        var _Less = Module["_Less"] = function() {
          return (_Less = Module["_Less"] = Module["asm"]["Less"]).apply(null, arguments);
        };
        var _LessEqual = Module["_LessEqual"] = function() {
          return (_LessEqual = Module["_LessEqual"] = Module["asm"]["LessEqual"]).apply(null, arguments);
        };
        var _LinSpace = Module["_LinSpace"] = function() {
          return (_LinSpace = Module["_LinSpace"] = Module["asm"]["LinSpace"]).apply(null, arguments);
        };
        var _Log = Module["_Log"] = function() {
          return (_Log = Module["_Log"] = Module["asm"]["Log"]).apply(null, arguments);
        };
        var _Log1p = Module["_Log1p"] = function() {
          return (_Log1p = Module["_Log1p"] = Module["asm"]["Log1p"]).apply(null, arguments);
        };
        var _LogicalAnd = Module["_LogicalAnd"] = function() {
          return (_LogicalAnd = Module["_LogicalAnd"] = Module["asm"]["LogicalAnd"]).apply(null, arguments);
        };
        var _LogicalNot = Module["_LogicalNot"] = function() {
          return (_LogicalNot = Module["_LogicalNot"] = Module["asm"]["LogicalNot"]).apply(null, arguments);
        };
        var _LogicalOr = Module["_LogicalOr"] = function() {
          return (_LogicalOr = Module["_LogicalOr"] = Module["asm"]["LogicalOr"]).apply(null, arguments);
        };
        var _LogicalXor = Module["_LogicalXor"] = function() {
          return (_LogicalXor = Module["_LogicalXor"] = Module["asm"]["LogicalXor"]).apply(null, arguments);
        };
        var _Max = Module["_Max"] = function() {
          return (_Max = Module["_Max"] = Module["asm"]["Max"]).apply(null, arguments);
        };
        var _MaxPool = Module["_MaxPool"] = function() {
          return (_MaxPool = Module["_MaxPool"] = Module["asm"]["MaxPool"]).apply(null, arguments);
        };
        var _MaxPool3D = Module["_MaxPool3D"] = function() {
          return (_MaxPool3D = Module["_MaxPool3D"] = Module["asm"]["MaxPool3D"]).apply(null, arguments);
        };
        var _MaxPool3DGrad = Module["_MaxPool3DGrad"] = function() {
          return (_MaxPool3DGrad = Module["_MaxPool3DGrad"] = Module["asm"]["MaxPool3DGrad"]).apply(null, arguments);
        };
        var _MaxPoolGrad = Module["_MaxPoolGrad"] = function() {
          return (_MaxPoolGrad = Module["_MaxPoolGrad"] = Module["asm"]["MaxPoolGrad"]).apply(null, arguments);
        };
        var _MaxPoolWithArgmax = Module["_MaxPoolWithArgmax"] = function() {
          return (_MaxPoolWithArgmax = Module["_MaxPoolWithArgmax"] = Module["asm"]["MaxPoolWithArgmax"]).apply(null, arguments);
        };
        var _Maximum = Module["_Maximum"] = function() {
          return (_Maximum = Module["_Maximum"] = Module["asm"]["Maximum"]).apply(null, arguments);
        };
        var _Mean = Module["_Mean"] = function() {
          return (_Mean = Module["_Mean"] = Module["asm"]["Mean"]).apply(null, arguments);
        };
        var _Min = Module["_Min"] = function() {
          return (_Min = Module["_Min"] = Module["asm"]["Min"]).apply(null, arguments);
        };
        var _Minimum = Module["_Minimum"] = function() {
          return (_Minimum = Module["_Minimum"] = Module["asm"]["Minimum"]).apply(null, arguments);
        };
        var _MirrorPad = Module["_MirrorPad"] = function() {
          return (_MirrorPad = Module["_MirrorPad"] = Module["asm"]["MirrorPad"]).apply(null, arguments);
        };
        var _Mod = Module["_Mod"] = function() {
          return (_Mod = Module["_Mod"] = Module["asm"]["Mod"]).apply(null, arguments);
        };
        var _Multinomial = Module["_Multinomial"] = function() {
          return (_Multinomial = Module["_Multinomial"] = Module["asm"]["Multinomial"]).apply(null, arguments);
        };
        var _Multiply = Module["_Multiply"] = function() {
          return (_Multiply = Module["_Multiply"] = Module["asm"]["Multiply"]).apply(null, arguments);
        };
        var _Neg = Module["_Neg"] = function() {
          return (_Neg = Module["_Neg"] = Module["asm"]["Neg"]).apply(null, arguments);
        };
        var _NonMaxSuppressionV3 = Module["_NonMaxSuppressionV3"] = function() {
          return (_NonMaxSuppressionV3 = Module["_NonMaxSuppressionV3"] = Module["asm"]["NonMaxSuppressionV3"]).apply(null, arguments);
        };
        var _NonMaxSuppressionV4 = Module["_NonMaxSuppressionV4"] = function() {
          return (_NonMaxSuppressionV4 = Module["_NonMaxSuppressionV4"] = Module["asm"]["NonMaxSuppressionV4"]).apply(null, arguments);
        };
        var _NonMaxSuppressionV5 = Module["_NonMaxSuppressionV5"] = function() {
          return (_NonMaxSuppressionV5 = Module["_NonMaxSuppressionV5"] = Module["asm"]["NonMaxSuppressionV5"]).apply(null, arguments);
        };
        var _NotEqual = Module["_NotEqual"] = function() {
          return (_NotEqual = Module["_NotEqual"] = Module["asm"]["NotEqual"]).apply(null, arguments);
        };
        var _OneHot = Module["_OneHot"] = function() {
          return (_OneHot = Module["_OneHot"] = Module["asm"]["OneHot"]).apply(null, arguments);
        };
        var _PadV2 = Module["_PadV2"] = function() {
          return (_PadV2 = Module["_PadV2"] = Module["asm"]["PadV2"]).apply(null, arguments);
        };
        var _Pow = Module["_Pow"] = function() {
          return (_Pow = Module["_Pow"] = Module["asm"]["Pow"]).apply(null, arguments);
        };
        var _Prelu = Module["_Prelu"] = function() {
          return (_Prelu = Module["_Prelu"] = Module["asm"]["Prelu"]).apply(null, arguments);
        };
        var _Prod = Module["_Prod"] = function() {
          return (_Prod = Module["_Prod"] = Module["asm"]["Prod"]).apply(null, arguments);
        };
        var _RealDiv = Module["_RealDiv"] = function() {
          return (_RealDiv = Module["_RealDiv"] = Module["asm"]["RealDiv"]).apply(null, arguments);
        };
        var _Reciprocal = Module["_Reciprocal"] = function() {
          return (_Reciprocal = Module["_Reciprocal"] = Module["asm"]["Reciprocal"]).apply(null, arguments);
        };
        var _Relu = Module["_Relu"] = function() {
          return (_Relu = Module["_Relu"] = Module["asm"]["Relu"]).apply(null, arguments);
        };
        var _Relu6 = Module["_Relu6"] = function() {
          return (_Relu6 = Module["_Relu6"] = Module["asm"]["Relu6"]).apply(null, arguments);
        };
        var _ResizeBilinear = Module["_ResizeBilinear"] = function() {
          return (_ResizeBilinear = Module["_ResizeBilinear"] = Module["asm"]["ResizeBilinear"]).apply(null, arguments);
        };
        var _ResizeBilinearGrad = Module["_ResizeBilinearGrad"] = function() {
          return (_ResizeBilinearGrad = Module["_ResizeBilinearGrad"] = Module["asm"]["ResizeBilinearGrad"]).apply(null, arguments);
        };
        var _ResizeNearestNeighbor = Module["_ResizeNearestNeighbor"] = function() {
          return (_ResizeNearestNeighbor = Module["_ResizeNearestNeighbor"] = Module["asm"]["ResizeNearestNeighbor"]).apply(null, arguments);
        };
        var _ResizeNearestNeighborGrad = Module["_ResizeNearestNeighborGrad"] = function() {
          return (_ResizeNearestNeighborGrad = Module["_ResizeNearestNeighborGrad"] = Module["asm"]["ResizeNearestNeighborGrad"]).apply(null, arguments);
        };
        var _Reverse = Module["_Reverse"] = function() {
          return (_Reverse = Module["_Reverse"] = Module["asm"]["Reverse"]).apply(null, arguments);
        };
        var _RotateWithOffset = Module["_RotateWithOffset"] = function() {
          return (_RotateWithOffset = Module["_RotateWithOffset"] = Module["asm"]["RotateWithOffset"]).apply(null, arguments);
        };
        var _Round = Module["_Round"] = function() {
          return (_Round = Module["_Round"] = Module["asm"]["Round"]).apply(null, arguments);
        };
        var _Rsqrt = Module["_Rsqrt"] = function() {
          return (_Rsqrt = Module["_Rsqrt"] = Module["asm"]["Rsqrt"]).apply(null, arguments);
        };
        var _ScatterNd = Module["_ScatterNd"] = function() {
          return (_ScatterNd = Module["_ScatterNd"] = Module["asm"]["ScatterNd"]).apply(null, arguments);
        };
        var _SearchSorted = Module["_SearchSorted"] = function() {
          return (_SearchSorted = Module["_SearchSorted"] = Module["asm"]["SearchSorted"]).apply(null, arguments);
        };
        var _SelectV2 = Module["_SelectV2"] = function() {
          return (_SelectV2 = Module["_SelectV2"] = Module["asm"]["SelectV2"]).apply(null, arguments);
        };
        var _Selu = Module["_Selu"] = function() {
          return (_Selu = Module["_Selu"] = Module["asm"]["Selu"]).apply(null, arguments);
        };
        var _Sigmoid = Module["_Sigmoid"] = function() {
          return (_Sigmoid = Module["_Sigmoid"] = Module["asm"]["Sigmoid"]).apply(null, arguments);
        };
        var _Sign = Module["_Sign"] = function() {
          return (_Sign = Module["_Sign"] = Module["asm"]["Sign"]).apply(null, arguments);
        };
        var _Sin = Module["_Sin"] = function() {
          return (_Sin = Module["_Sin"] = Module["asm"]["Sin"]).apply(null, arguments);
        };
        var _Sinh = Module["_Sinh"] = function() {
          return (_Sinh = Module["_Sinh"] = Module["asm"]["Sinh"]).apply(null, arguments);
        };
        var _Softmax = Module["_Softmax"] = function() {
          return (_Softmax = Module["_Softmax"] = Module["asm"]["Softmax"]).apply(null, arguments);
        };
        var _Softplus = Module["_Softplus"] = function() {
          return (_Softplus = Module["_Softplus"] = Module["asm"]["Softplus"]).apply(null, arguments);
        };
        var _SparseFillEmptyRows = Module["_SparseFillEmptyRows"] = function() {
          return (_SparseFillEmptyRows = Module["_SparseFillEmptyRows"] = Module["asm"]["SparseFillEmptyRows"]).apply(null, arguments);
        };
        var _SparseReshape = Module["_SparseReshape"] = function() {
          return (_SparseReshape = Module["_SparseReshape"] = Module["asm"]["SparseReshape"]).apply(null, arguments);
        };
        var _SparseSegmentReduction = Module["_SparseSegmentReduction"] = function() {
          return (_SparseSegmentReduction = Module["_SparseSegmentReduction"] = Module["asm"]["SparseSegmentReduction"]).apply(null, arguments);
        };
        var _SparseToDense = Module["_SparseToDense"] = function() {
          return (_SparseToDense = Module["_SparseToDense"] = Module["asm"]["SparseToDense"]).apply(null, arguments);
        };
        var _Sqrt = Module["_Sqrt"] = function() {
          return (_Sqrt = Module["_Sqrt"] = Module["asm"]["Sqrt"]).apply(null, arguments);
        };
        var _Square = Module["_Square"] = function() {
          return (_Square = Module["_Square"] = Module["asm"]["Square"]).apply(null, arguments);
        };
        var _SquaredDifference = Module["_SquaredDifference"] = function() {
          return (_SquaredDifference = Module["_SquaredDifference"] = Module["asm"]["SquaredDifference"]).apply(null, arguments);
        };
        var _Step = Module["_Step"] = function() {
          return (_Step = Module["_Step"] = Module["asm"]["Step"]).apply(null, arguments);
        };
        var _StridedSlice = Module["_StridedSlice"] = function() {
          return (_StridedSlice = Module["_StridedSlice"] = Module["asm"]["StridedSlice"]).apply(null, arguments);
        };
        var _Sub = Module["_Sub"] = function() {
          return (_Sub = Module["_Sub"] = Module["asm"]["Sub"]).apply(null, arguments);
        };
        var _Sum = Module["_Sum"] = function() {
          return (_Sum = Module["_Sum"] = Module["asm"]["Sum"]).apply(null, arguments);
        };
        var _Tan = Module["_Tan"] = function() {
          return (_Tan = Module["_Tan"] = Module["asm"]["Tan"]).apply(null, arguments);
        };
        var _Tanh = Module["_Tanh"] = function() {
          return (_Tanh = Module["_Tanh"] = Module["asm"]["Tanh"]).apply(null, arguments);
        };
        var _TensorScatterUpdate = Module["_TensorScatterUpdate"] = function() {
          return (_TensorScatterUpdate = Module["_TensorScatterUpdate"] = Module["asm"]["TensorScatterUpdate"]).apply(null, arguments);
        };
        var _Tile = Module["_Tile"] = function() {
          return (_Tile = Module["_Tile"] = Module["asm"]["Tile"]).apply(null, arguments);
        };
        var _TopK = Module["_TopK"] = function() {
          return (_TopK = Module["_TopK"] = Module["asm"]["TopK"]).apply(null, arguments);
        };
        var _Transform = Module["_Transform"] = function() {
          return (_Transform = Module["_Transform"] = Module["asm"]["Transform"]).apply(null, arguments);
        };
        var _Transpose = Module["_Transpose"] = function() {
          return (_Transpose = Module["_Transpose"] = Module["asm"]["Transpose"]).apply(null, arguments);
        };
        var __FusedMatMul = Module["__FusedMatMul"] = function() {
          return (__FusedMatMul = Module["__FusedMatMul"] = Module["asm"]["_FusedMatMul"]).apply(null, arguments);
        };
        var _malloc = Module["_malloc"] = function() {
          return (_malloc = Module["_malloc"] = Module["asm"]["malloc"]).apply(null, arguments);
        };
        var _free = Module["_free"] = function() {
          return (_free = Module["_free"] = Module["asm"]["free"]).apply(null, arguments);
        };
        var ___errno_location = Module["___errno_location"] = function() {
          return (___errno_location = Module["___errno_location"] = Module["asm"]["__errno_location"]).apply(null, arguments);
        };
        var stackSave = Module["stackSave"] = function() {
          return (stackSave = Module["stackSave"] = Module["asm"]["stackSave"]).apply(null, arguments);
        };
        var stackRestore = Module["stackRestore"] = function() {
          return (stackRestore = Module["stackRestore"] = Module["asm"]["stackRestore"]).apply(null, arguments);
        };
        var stackAlloc = Module["stackAlloc"] = function() {
          return (stackAlloc = Module["stackAlloc"] = Module["asm"]["stackAlloc"]).apply(null, arguments);
        };
        var dynCall_iijjiiii = Module["dynCall_iijjiiii"] = function() {
          return (dynCall_iijjiiii = Module["dynCall_iijjiiii"] = Module["asm"]["dynCall_iijjiiii"]).apply(null, arguments);
        };
        var dynCall_jiji = Module["dynCall_jiji"] = function() {
          return (dynCall_jiji = Module["dynCall_jiji"] = Module["asm"]["dynCall_jiji"]).apply(null, arguments);
        };
        Module["cwrap"] = cwrap;
        var calledRun;
        dependenciesFulfilled = function runCaller() {
          if (!calledRun) run();
          if (!calledRun) dependenciesFulfilled = runCaller;
        };
        function run(args) {
          args = args || arguments_;
          if (runDependencies > 0) {
            return;
          }
          preRun();
          if (runDependencies > 0) {
            return;
          }
          function doRun() {
            if (calledRun) return;
            calledRun = true;
            Module["calledRun"] = true;
            if (ABORT) return;
            initRuntime();
            readyPromiseResolve(Module);
            if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
            postRun();
          }
          if (Module["setStatus"]) {
            Module["setStatus"]("Running...");
            setTimeout(function() {
              setTimeout(function() {
                Module["setStatus"]("");
              }, 1);
              doRun();
            }, 1);
          } else {
            doRun();
          }
        }
        if (Module["preInit"]) {
          if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
          while (Module["preInit"].length > 0) {
            Module["preInit"].pop()();
          }
        }
        run();
        var listenersAdded;
        if (beforeListeners) {
          listenersAdded = {
            uncaughtException: process.listeners("uncaughtException").filter(function(listener) {
              return !beforeListeners.uncaughtException.indexOf(listener) > -1;
            }),
            unhandledRejection: process.listeners("unhandledRejection").filter(function(listener) {
              return !beforeListeners.unhandledRejection.indexOf(listener) > -1;
            })
          };
        }
        var actualModule;
        if (typeof WasmBackendModule3 !== "undefined") {
          actualModule = WasmBackendModule3;
        } else if (typeof WasmBackendModuleThreadedSimd !== "undefined") {
          actualModule = WasmBackendModuleThreadedSimd;
        } else {
          throw new Error("Could not find wasm module in post.js");
        }
        if (listenersAdded) {
          var tmpDispose = actualModule["_dispose"];
          actualModule["_dispose"] = function() {
            tmpDispose();
            listenersAdded.uncaughtException.forEach(function(listener) {
              process.removeListener("uncaughtException", listener);
            });
            listenersAdded.unhandledRejection.forEach(function(listener) {
              process.removeListener("unhandledRejection", listener);
            });
          };
        }
        return WasmBackendModule3.ready;
      };
    })();
    if (typeof exports === "object" && typeof module === "object") module.exports = WasmBackendModule2;
    else if (typeof define === "function" && define["amd"]) define([], function() {
      return WasmBackendModule2;
    });
    else if (typeof exports === "object") exports["WasmBackendModule"] = WasmBackendModule2;
  }
});

// node_modules/@tensorflow/tfjs-backend-wasm/dist/register_all_kernels.js
init_dist();

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/_FusedMatMul.js
init_dist();

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/types.js
var CppDType;
(function(CppDType2) {
  CppDType2[CppDType2["float32"] = 0] = "float32";
  CppDType2[CppDType2["int32"] = 1] = "int32";
  CppDType2[CppDType2["bool"] = 2] = "bool";
  CppDType2[CppDType2["string"] = 3] = "string";
  CppDType2[CppDType2["complex64"] = 4] = "complex64";
})(CppDType || (CppDType = {}));
var FusableActivation;
(function(FusableActivation2) {
  FusableActivation2[FusableActivation2["linear"] = 0] = "linear";
  FusableActivation2[FusableActivation2["relu"] = 1] = "relu";
  FusableActivation2[FusableActivation2["relu6"] = 2] = "relu6";
  FusableActivation2[FusableActivation2["prelu"] = 3] = "prelu";
  FusableActivation2[FusableActivation2["leakyrelu"] = 4] = "leakyrelu";
  FusableActivation2[FusableActivation2["sigmoid"] = 5] = "sigmoid";
  FusableActivation2[FusableActivation2["elu"] = 6] = "elu";
})(FusableActivation || (FusableActivation = {}));

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/_FusedMatMul.js
var wasmFusedMatMul;
function setup(backend) {
  wasmFusedMatMul = backend.wasm.cwrap(_FusedMatMul, null, [
    "number",
    "array",
    "number",
    "number",
    "array",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // out_id
  ]);
}
function fusedBatchMatMul(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    a,
    b,
    bias,
    preluActivationWeights
  } = inputs;
  if (a.dtype !== "float32" || b.dtype !== "float32") {
    throw new Error(`_FusedMatMul for non non-float32 tensors not yet supported.`);
  }
  const {
    transposeA,
    transposeB,
    activation,
    leakyreluAlpha
  } = attrs;
  const aId = backend.dataIdMap.get(a.dataId).id;
  const bId = backend.dataIdMap.get(b.dataId).id;
  let biasId = 0;
  if (bias != null) {
    const biasData = backend.dataIdMap.get(bias.dataId);
    if (biasData.shape.length !== 1) {
      throw new Error(`_FusedMatMul only supports rank-1 bias but got rank ${biasData.shape.length}.`);
    }
    biasId = biasData.id;
  }
  const preluActivationWeightsId = preluActivationWeights == null ? 0 : backend.dataIdMap.get(preluActivationWeights.dataId).id;
  const fusedActivation = FusableActivation[activation];
  if (fusedActivation == null) {
    throw new Error(`${activation} activation not yet supported for FusedConv2D in the wasm backend.`);
  }
  const leftDim = transposeA ? a.shape[2] : a.shape[1];
  const rightDim = transposeB ? b.shape[1] : b.shape[2];
  const batchDims = broadcast_util_exports.assertAndGetBroadcastShape(a.shape.slice(0, -2), b.shape.slice(0, -2));
  const out = backend.makeOutput([...batchDims, leftDim, rightDim], a.dtype);
  const outId = backend.dataIdMap.get(out.dataId).id;
  const aShapeBytes = new Uint8Array(new Int32Array(a.shape).buffer);
  const bShapeBytes = new Uint8Array(new Int32Array(b.shape).buffer);
  wasmFusedMatMul(aId, aShapeBytes, a.shape.length, bId, bShapeBytes, b.shape.length, transposeA, transposeB, fusedActivation, biasId, preluActivationWeightsId, leakyreluAlpha || 0, outId);
  return out;
}
var _fusedMatMulConfig = {
  kernelName: _FusedMatMul,
  backendName: "wasm",
  setupFunc: setup,
  kernelFunc: fusedBatchMatMul
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Abs.js
init_dist();

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/unary_kernel.js
init_dist();
function createUnaryKernelConfig(kernelName, outType) {
  let wasmFunc8;
  function setupFunc3(backend) {
    wasmFunc8 = backend.wasm.cwrap(kernelName, null, [
      "number",
      "number",
      "number"
      // out_id
    ]);
  }
  function kernelFunc3(args) {
    const {
      backend,
      inputs: {
        x
      }
    } = args;
    const xId = backend.dataIdMap.get(x.dataId).id;
    const out = backend.makeOutput(x.shape, outType || x.dtype);
    const outId = backend.dataIdMap.get(out.dataId).id;
    if (util_exports.sizeFromShape(out.shape) === 0) {
      return out;
    }
    wasmFunc8(xId, CppDType[x.dtype], outId);
    return out;
  }
  return {
    kernelName,
    backendName: "wasm",
    setupFunc: setupFunc3,
    kernelFunc: kernelFunc3
  };
}

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Abs.js
var absConfig = createUnaryKernelConfig(Abs);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Acos.js
init_dist();
var acosConfig = createUnaryKernelConfig(Acos);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Acosh.js
init_dist();
var acoshConfig = createUnaryKernelConfig(Acosh);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Add.js
init_dist();

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/binary_kernel.js
init_dist();
function createBinaryKernelConfig(kernelName, supportsFullBroadcast20, dtype) {
  let wasmFunc8;
  function setupFunc3(backend) {
    wasmFunc8 = backend.wasm.cwrap(kernelName, null, [
      "number",
      "array",
      "number",
      "number",
      "array",
      "number",
      "number",
      "number"
      // out_id
    ]);
  }
  function kernelFunc3(args) {
    const {
      backend,
      inputs
    } = args;
    const {
      a,
      b
    } = inputs;
    const aId = backend.dataIdMap.get(a.dataId).id;
    const bId = backend.dataIdMap.get(b.dataId).id;
    const outputType = dtype != null ? dtype : a.dtype;
    const newShape = backend_util_exports.assertAndGetBroadcastShape(a.shape, b.shape);
    const out = backend.makeOutput(newShape, outputType);
    if (util_exports.sizeFromShape(newShape) === 0) {
      return out;
    }
    const aShapeBytes = new Uint8Array(new Int32Array(a.shape).buffer);
    const bShapeBytes = new Uint8Array(new Int32Array(b.shape).buffer);
    const outId = backend.dataIdMap.get(out.dataId).id;
    const kernelFunc4 = () => wasmFunc8(aId, aShapeBytes, a.shape.length, bId, bShapeBytes, b.shape.length, CppDType[a.dtype], outId);
    kernelFunc4();
    return out;
  }
  return {
    kernelName,
    backendName: "wasm",
    setupFunc: setupFunc3,
    kernelFunc: kernelFunc3
  };
}

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Add.js
var supportsFullBroadcast = true;
var addConfig = createBinaryKernelConfig(Add, supportsFullBroadcast);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/AddN.js
init_dist();
var wasmFunc;
function setupFunc(backend) {
  wasmFunc = backend.wasm.cwrap(AddN, null, [
    "array",
    "number",
    "number",
    "number"
    // out_id
  ]);
}
function addn(args) {
  const {
    inputs,
    backend
  } = args;
  const out = backend.makeOutput(inputs[0].shape, inputs[0].dtype);
  if (util_exports.sizeFromShape(out.shape) === 0) {
    return out;
  }
  const inputIds = inputs.map((x) => backend.dataIdMap.get(x.dataId).id);
  const inputIdsBytes = new Uint8Array(new Int32Array(inputIds).buffer);
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmFunc(inputIdsBytes, inputIds.length, CppDType[out.dtype], outId);
  return out;
}
var addNConfig = {
  kernelName: AddN,
  backendName: "wasm",
  setupFunc,
  kernelFunc: addn
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/All.js
init_dist();

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/kernel_utils.js
init_dist();

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Transpose.js
init_dist();

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Identity.js
init_dist();
function identity(args) {
  const {
    inputs: {
      x
    },
    backend
  } = args;
  if (x.dtype === "string") {
    return tensor(backend.readSync(x.dataId), x.shape, x.dtype);
  }
  const out = backend.makeOutput(x.shape, x.dtype);
  const inVals = backend.typedArrayFromHeap(x);
  const outVals = backend.typedArrayFromHeap(out);
  outVals.set(inVals);
  return out;
}
var identityConfig = {
  kernelName: Identity,
  backendName: "wasm",
  kernelFunc: identity
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Transpose.js
var wasmTranspose;
function setup2(backend) {
  wasmTranspose = backend.wasm.cwrap(Transpose, null, [
    "number",
    "array",
    "number",
    "number",
    "number",
    "array",
    "number"
    // perm.length
  ]);
}
function transpose(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const [reducedShape, perm] = removeOneSizeDims(inputs.x.shape, attrs.perm);
  let permIsNoOp = true;
  for (let i = 0; i < perm.length; i++) {
    if (perm[i] !== i) {
      permIsNoOp = false;
    }
  }
  const outShape = computeOutShape(inputs.x.shape, attrs.perm);
  const x = {
    dataId: inputs.x.dataId,
    shape: reducedShape,
    dtype: inputs.x.dtype
  };
  if (permIsNoOp) {
    const cloned = identity({
      inputs,
      backend
    });
    cloned.shape = outShape;
    return cloned;
  }
  const out = backend.makeOutput(outShape, x.dtype);
  const xId = backend.dataIdMap.get(x.dataId).id;
  const outId = backend.dataIdMap.get(out.dataId).id;
  const permBytes = new Uint8Array(new Int32Array(perm).buffer);
  const xShapeBytes = new Uint8Array(new Int32Array(x.shape).buffer);
  wasmTranspose(xId, xShapeBytes, x.shape.length, CppDType[x.dtype], outId, permBytes, perm.length);
  return out;
}
function computeOutShape(inShape, perm) {
  const outShape = new Array(inShape.length);
  for (let i = 0; i < outShape.length; i++) {
    outShape[i] = inShape[perm[i]];
  }
  return outShape;
}
function removeOneSizeDims(shape, perm) {
  const newShape = [];
  const newPerm = [];
  for (let i = 0; i < shape.length; ++i) {
    if (shape[i] !== 1) {
      newShape.push(shape[i]);
    }
    if (shape[perm[i]] !== 1) {
      newPerm.push(perm[i]);
    }
  }
  for (let i = 0; i < newPerm.length; ++i) {
    let minValIdx = -1;
    for (let j = 0; j < newPerm.length; ++j) {
      if (newPerm[j] >= i && (minValIdx === -1 || newPerm[minValIdx] > newPerm[j])) {
        minValIdx = j;
      }
    }
    newPerm[minValIdx] = i;
  }
  return [newShape, newPerm];
}
var transposeConfig = {
  kernelName: Transpose,
  backendName: "wasm",
  kernelFunc: transpose,
  setupFunc: setup2
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/kernel_utils.js
function permuteAxesAndTranspose(x, axis, backend) {
  const xShape = x.shape;
  const xRank = x.shape.length;
  const originalAxes = util_exports.parseAxisParam(axis, xShape);
  let axes = originalAxes;
  const permutedAxes = backend_util_exports.getAxesPermutation(axes, xRank);
  let xTransposed = null;
  let inputWasTransposed = false;
  if (permutedAxes != null) {
    const newShape = new Array(xRank);
    for (let i = 0; i < newShape.length; i++) {
      newShape[i] = xShape[permutedAxes[i]];
    }
    axes = backend_util_exports.getInnerMostAxes(axes.length, xRank);
    xTransposed = transpose({
      inputs: {
        x
      },
      attrs: {
        perm: permutedAxes
      },
      backend
    });
    const xId = backend.dataIdMap.get(x.dataId).id;
    const transposedId = backend.dataIdMap.get(xTransposed.dataId).id;
    if (transposedId !== xId) {
      inputWasTransposed = true;
    }
  }
  return {
    transposed: xTransposed,
    originalAxes,
    axes,
    inputWasTransposed
  };
}

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/All.js
var wasmAll;
function setup3(backend) {
  wasmAll = backend.wasm.cwrap(All, null, ["number, number, number"]);
}
function all(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    axis,
    keepDims
  } = attrs;
  const {
    x
  } = inputs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  let inputId = xId;
  let input = x;
  const {
    transposed,
    axes,
    originalAxes,
    inputWasTransposed
  } = permuteAxesAndTranspose(x, axis, backend);
  if (inputWasTransposed) {
    const transposedId = backend.dataIdMap.get(transposed.dataId).id;
    input = transposed;
    inputId = transposedId;
  }
  const inputRank = input.shape.length;
  backend_util_exports.assertAxesAreInnerMostDims("all", axes, inputRank);
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(input.shape, axes);
  const reduceSize = util_exports.sizeFromShape(reduceShape);
  const out = backend.makeOutput(outShape, x.dtype);
  if (util_exports.sizeFromShape(input.shape) !== 0) {
    const outId = backend.dataIdMap.get(out.dataId).id;
    wasmAll(inputId, reduceSize, outId);
  }
  if (inputWasTransposed) {
    backend.disposeData(transposed.dataId);
  }
  if (keepDims) {
    const newShape = backend_util_exports.expandShapeToKeepDim(out.shape, originalAxes);
    out.shape = newShape;
  }
  return out;
}
var allConfig = {
  kernelName: All,
  backendName: "wasm",
  setupFunc: setup3,
  kernelFunc: all
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Any.js
init_dist();
var wasmAny;
function setup4(backend) {
  wasmAny = backend.wasm.cwrap(Any, null, ["number, number, number"]);
}
function any(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    axis,
    keepDims
  } = attrs;
  const {
    x
  } = inputs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  let inputId = xId;
  let input = x;
  const {
    transposed,
    axes,
    originalAxes,
    inputWasTransposed
  } = permuteAxesAndTranspose(x, axis, backend);
  if (inputWasTransposed) {
    const transposedId = backend.dataIdMap.get(transposed.dataId).id;
    input = transposed;
    inputId = transposedId;
  }
  const inputRank = input.shape.length;
  backend_util_exports.assertAxesAreInnerMostDims("any", axes, inputRank);
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(input.shape, axes);
  const reduceSize = util_exports.sizeFromShape(reduceShape);
  const out = backend.makeOutput(outShape, x.dtype);
  if (util_exports.sizeFromShape(input.shape) !== 0) {
    const outId = backend.dataIdMap.get(out.dataId).id;
    wasmAny(inputId, reduceSize, outId);
  }
  if (inputWasTransposed) {
    backend.disposeData(transposed.dataId);
  }
  if (keepDims) {
    const newShape = backend_util_exports.expandShapeToKeepDim(out.shape, originalAxes);
    out.shape = newShape;
  }
  return out;
}
var anyConfig = {
  kernelName: Any,
  backendName: "wasm",
  setupFunc: setup4,
  kernelFunc: any
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/ArgMax.js
init_dist();

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/argminmax_kernel.js
init_dist();
function createArgMinMaxKernelConfig(kernelName) {
  let wasmFunc8;
  function setupFunc3(backend) {
    wasmFunc8 = backend.wasm.cwrap(kernelName, null, [
      "number",
      "number",
      "number",
      "number",
      "number"
      // out_id
    ]);
  }
  function kernelFunc3(args) {
    const {
      backend,
      inputs,
      attrs
    } = args;
    const {
      axis
    } = attrs;
    const {
      x
    } = inputs;
    const xId = backend.dataIdMap.get(x.dataId).id;
    let inputId = xId;
    let input = x;
    const {
      transposed,
      axes,
      inputWasTransposed
    } = permuteAxesAndTranspose(x, axis, backend);
    if (inputWasTransposed) {
      const transposedId = backend.dataIdMap.get(transposed.dataId).id;
      if (transposedId !== xId) {
        input = transposed;
        inputId = transposedId;
      }
    }
    const outShape = input.shape.slice(0, -1);
    const out = backend.makeOutput(outShape, "int32");
    const outId = backend.dataIdMap.get(out.dataId).id;
    const outerSize = util_exports.sizeFromShape(out.shape);
    const innerSize = input.shape[axes[0]];
    wasmFunc8(inputId, CppDType[input.dtype], outerSize, innerSize, outId);
    if (inputWasTransposed) {
      backend.disposeData(transposed.dataId);
    }
    return out;
  }
  return {
    kernelName,
    backendName: "wasm",
    setupFunc: setupFunc3,
    kernelFunc: kernelFunc3
  };
}

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/ArgMax.js
var argMaxConfig = createArgMinMaxKernelConfig(ArgMax);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/ArgMin.js
init_dist();
var argMinConfig = createArgMinMaxKernelConfig(ArgMin);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Asin.js
init_dist();
var asinConfig = createUnaryKernelConfig(Asin);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Asinh.js
init_dist();
var asinhConfig = createUnaryKernelConfig(Asinh);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Atan.js
init_dist();
var atanConfig = createUnaryKernelConfig(Atan);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Atan2.js
init_dist();
var atan2Config = createBinaryKernelConfig(
  Atan2,
  /*supportsFullBroadcast=*/
  false
);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Atanh.js
init_dist();
var atanhConfig = createUnaryKernelConfig(Atanh);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/AvgPool.js
init_dist();
var wasmAvgPool;
function setup5(backend) {
  wasmAvgPool = backend.wasm.cwrap(AvgPool, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // outId
  ]);
}
function avgPool(args) {
  const {
    inputs,
    attrs,
    backend
  } = args;
  const x = inputs.x;
  const xId = backend.dataIdMap.get(x.dataId).id;
  const {
    filterSize,
    strides,
    pad: pad2,
    dimRoundingMode
  } = attrs;
  const convInfo = backend_util_exports.computePool2DInfo(x.shape, filterSize, strides, 1, pad2, dimRoundingMode);
  const filterHeight = convInfo.filterHeight;
  const filterWidth = convInfo.filterWidth;
  const padTop = convInfo.padInfo.top;
  const padRight = convInfo.padInfo.right;
  const padBottom = convInfo.padInfo.bottom;
  const padLeft = convInfo.padInfo.left;
  const strideHeight = convInfo.strideHeight;
  const strideWidth = convInfo.strideWidth;
  const channels = convInfo.inChannels;
  if (convInfo.dataFormat !== "channelsLast") {
    throw new Error(`wasm backend does not support dataFormat:'${convInfo.dataFormat}'. Please use 'channelsLast'.`);
  }
  if (convInfo.dilationWidth !== 1 || convInfo.dilationHeight !== 1) {
    throw new Error(`was backend only supports average pooling with dilation = [1, 1], got [${convInfo.dilationHeight}, ${convInfo.dilationWidth}].`);
  }
  const out = backend.makeOutput(convInfo.outShape, "float32");
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmAvgPool(xId, x.shape[0], x.shape[1], x.shape[2], filterHeight, filterWidth, padTop, padRight, padBottom, padLeft, strideHeight, strideWidth, channels, outId);
  return out;
}
var avgPoolConfig = {
  kernelName: AvgPool,
  backendName: "wasm",
  setupFunc: setup5,
  kernelFunc: avgPool
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/AvgPool3D.js
init_dist();
var wasmAvgPool3D;
function setup6(backend) {
  wasmAvgPool3D = backend.wasm.cwrap("AvgPool3D", null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // padLeft
  ]);
}
function avgPool3D(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    filterSize,
    strides,
    pad: pad2,
    dimRoundingMode,
    dataFormat
  } = attrs;
  const convInfo = backend_util_exports.computePool3DInfo(
    x.shape,
    filterSize,
    strides,
    /*dilations=*/
    1,
    pad2,
    dimRoundingMode,
    dataFormat
  );
  const out = backend.makeOutput(convInfo.outShape, x.dtype);
  wasmAvgPool3D(
    backend.dataIdMap.get(x.dataId).id,
    backend.dataIdMap.get(out.dataId).id,
    convInfo.batchSize,
    // Since Pool3D ops (AvgPool3D and MaxPool3D) support 3D filter only, in
    // channels should always equal to out channels.
    /*channelSize=*/
    convInfo.inChannels,
    convInfo.inDepth,
    convInfo.inHeight,
    convInfo.inWidth,
    convInfo.outDepth,
    convInfo.outHeight,
    convInfo.outWidth,
    convInfo.strideDepth,
    convInfo.strideHeight,
    convInfo.strideWidth,
    convInfo.dilationDepth,
    convInfo.dilationHeight,
    convInfo.dilationWidth,
    convInfo.effectiveFilterDepth,
    convInfo.effectiveFilterHeight,
    convInfo.effectiveFilterWidth,
    convInfo.padInfo.front,
    convInfo.padInfo.top,
    convInfo.padInfo.left
  );
  return out;
}
var avgPool3DConfig = {
  kernelName: AvgPool3D,
  backendName: "wasm",
  setupFunc: setup6,
  kernelFunc: avgPool3D
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/AvgPool3DGrad.js
init_dist();
var wasmAvgPool3DGrad;
function setup7(backend) {
  wasmAvgPool3DGrad = backend.wasm.cwrap("AvgPool3DGrad", null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // filterWidth
  ]);
}
function avgPool3DGrad(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    dy,
    input
  } = inputs;
  const {
    filterSize,
    strides,
    pad: pad2,
    dimRoundingMode
  } = attrs;
  const convInfo = backend_util_exports.computePool3DInfo(
    input.shape,
    filterSize,
    strides,
    /*dilations=*/
    1,
    pad2,
    dimRoundingMode
  );
  const dx = backend.makeOutput(input.shape, input.dtype);
  wasmAvgPool3DGrad(
    backend.dataIdMap.get(dy.dataId).id,
    backend.dataIdMap.get(dx.dataId).id,
    convInfo.batchSize,
    // Since Pool3D ops (AvgPool3D and MaxPool3D) support 3D filter only, in
    // channels should always equal to out channels.
    /*channelSize=*/
    convInfo.inChannels,
    convInfo.inDepth,
    convInfo.inHeight,
    convInfo.inWidth,
    convInfo.outDepth,
    convInfo.outHeight,
    convInfo.outWidth,
    convInfo.strideDepth,
    convInfo.strideHeight,
    convInfo.strideWidth,
    convInfo.dilationDepth,
    convInfo.dilationHeight,
    convInfo.dilationWidth,
    convInfo.effectiveFilterDepth,
    convInfo.effectiveFilterHeight,
    convInfo.effectiveFilterWidth,
    convInfo.padInfo.front,
    convInfo.padInfo.top,
    convInfo.padInfo.left,
    convInfo.filterDepth,
    convInfo.filterHeight,
    convInfo.filterWidth
  );
  return dx;
}
var avgPool3DGradConfig = {
  kernelName: AvgPool3DGrad,
  backendName: "wasm",
  setupFunc: setup7,
  kernelFunc: avgPool3DGrad
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/AvgPoolGrad.js
init_dist();
var wasmAvgPoolGrad;
function setup8(backend) {
  wasmAvgPoolGrad = backend.wasm.cwrap("AvgPoolGrad", null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // filterWidth
  ]);
}
function avgPoolGrad(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    dy,
    input
  } = inputs;
  const {
    filterSize,
    strides,
    pad: pad2
  } = attrs;
  const convInfo = backend_util_exports.computePool2DInfo(
    input.shape,
    filterSize,
    strides,
    /*dilations=*/
    1,
    pad2
  );
  const dx = backend.makeOutput(input.shape, input.dtype);
  wasmAvgPoolGrad(
    backend.dataIdMap.get(dy.dataId).id,
    backend.dataIdMap.get(dx.dataId).id,
    convInfo.batchSize,
    // Since Pool ops (AvgPool and MaxPool) support 2D filter only, in
    // channels should always equal to out channels.
    /*channelSize=*/
    convInfo.inChannels,
    convInfo.inHeight,
    convInfo.inWidth,
    convInfo.outHeight,
    convInfo.outWidth,
    convInfo.strideHeight,
    convInfo.strideWidth,
    convInfo.dilationHeight,
    convInfo.dilationWidth,
    convInfo.effectiveFilterHeight,
    convInfo.effectiveFilterWidth,
    convInfo.padInfo.top,
    convInfo.padInfo.left,
    convInfo.filterHeight,
    convInfo.filterWidth
  );
  return dx;
}
var avgPoolGradConfig = {
  kernelName: AvgPoolGrad,
  backendName: "wasm",
  setupFunc: setup8,
  kernelFunc: avgPoolGrad
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/BatchMatMul.js
init_dist();

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Reshape.js
init_dist();
function reshape(args) {
  const {
    inputs,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    shape
  } = attrs;
  const xSize = util_exports.sizeFromShape(x.shape);
  const $shape = util_exports.inferFromImplicitShape(shape, xSize);
  util_exports.assert(xSize === util_exports.sizeFromShape($shape), () => `new shape: ${$shape}, old shape: ${x.shape}. New shape and old shape must have the same number of elements.`);
  args.backend.incRef(x.dataId);
  return {
    dataId: x.dataId,
    shape: $shape,
    dtype: x.dtype
  };
}
var reshapeConfig = {
  kernelName: Reshape,
  backendName: "wasm",
  kernelFunc: reshape
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/BatchMatMul.js
var wasmBatchMatMul;
function setup9(backend) {
  wasmBatchMatMul = backend.wasm.cwrap(BatchMatMul, null, [
    "number",
    "array",
    "number",
    "number",
    "array",
    "number",
    "number",
    "number",
    "number"
    // out_id
  ]);
}
function batchMatMul(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    a,
    b
  } = inputs;
  const {
    transposeA,
    transposeB
  } = attrs;
  if (a.dtype !== "float32" || b.dtype !== "float32") {
    throw new Error(`BatchMatMul for non non-float32 tensors not yet supported.`);
  }
  const aRank = a.shape.length;
  const bRank = b.shape.length;
  const innerShapeA = transposeA ? a.shape[aRank - 2] : a.shape[aRank - 1];
  const innerShapeB = transposeB ? b.shape[bRank - 1] : b.shape[bRank - 2];
  const outerShapeA = transposeA ? a.shape[aRank - 1] : a.shape[aRank - 2];
  const outerShapeB = transposeB ? b.shape[bRank - 2] : b.shape[bRank - 1];
  const outerDimsA = a.shape.slice(0, -2);
  const outerDimsB = b.shape.slice(0, -2);
  const batchDimA = util_exports.sizeFromShape(outerDimsA);
  const batchDimB = util_exports.sizeFromShape(outerDimsB);
  const outShapeOuterDims = broadcast_util_exports.assertAndGetBroadcastShape(a.shape.slice(0, -2), b.shape.slice(0, -2));
  const outShape = outShapeOuterDims.concat([outerShapeA, outerShapeB]);
  util_exports.assert(innerShapeA === innerShapeB, () => `Error in matMul: inner shapes (${innerShapeA}) and (${innerShapeB}) of Tensors with shapes ${a.shape} and ${b.shape} and transposeA=${transposeA} and transposeB=${transposeB} must match.`);
  const a3dShape = transposeA ? [batchDimA, innerShapeA, outerShapeA] : [batchDimA, outerShapeA, innerShapeA];
  const b3dShape = transposeB ? [batchDimB, outerShapeB, innerShapeB] : [batchDimB, innerShapeB, outerShapeB];
  const a3d = reshape({
    inputs: {
      x: a
    },
    backend,
    attrs: {
      shape: a3dShape
    }
  });
  const b3d = reshape({
    inputs: {
      x: b
    },
    backend,
    attrs: {
      shape: b3dShape
    }
  });
  const a3dId = backend.dataIdMap.get(a3d.dataId).id;
  const b3dId = backend.dataIdMap.get(b3d.dataId).id;
  const leftDim = transposeA ? a3d.shape[2] : a3d.shape[1];
  const rightDim = transposeB ? b3d.shape[1] : b3d.shape[2];
  const batchDim = Math.max(batchDimA, batchDimB);
  const out = backend.makeOutput([batchDim, leftDim, rightDim], a3d.dtype);
  const outId = backend.dataIdMap.get(out.dataId).id;
  const aShapeBytes = new Uint8Array(new Int32Array(a3d.shape).buffer);
  const bShapeBytes = new Uint8Array(new Int32Array(b3d.shape).buffer);
  wasmBatchMatMul(a3dId, aShapeBytes, a3d.shape.length, b3dId, bShapeBytes, b3d.shape.length, transposeA, transposeB, outId);
  backend.disposeData(a3d.dataId);
  backend.disposeData(b3d.dataId);
  out.shape = outShape;
  return out;
}
var batchMatMulConfig = {
  kernelName: BatchMatMul,
  backendName: "wasm",
  setupFunc: setup9,
  kernelFunc: batchMatMul
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/BatchToSpaceND.js
init_dist();

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Slice.js
init_dist();
function slice(args) {
  const {
    inputs: {
      x
    },
    attrs: {
      begin,
      size
    },
    backend
  } = args;
  const [begin_, size_] = slice_util_exports.parseSliceParams(x, begin, size);
  const isContinous = slice_util_exports.isSliceContinous(x.shape, begin_, size_);
  const xVals = backend.readSync(x.dataId);
  const out = backend.makeOutput(size_, x.dtype);
  const xStrides = util_exports.computeStrides(x.shape);
  const outData = backend.dataIdMap.get(out.dataId);
  if (isContinous) {
    const flatOffset = slice_util_exports.computeFlatOffset(begin_, xStrides);
    if (x.dtype === "string") {
      outData.stringBytes = xVals.slice(flatOffset, flatOffset + util_exports.sizeFromShape(size_));
    } else {
      const outVals2 = backend.typedArrayFromHeap(out);
      outVals2.set(xVals.subarray(flatOffset, flatOffset + util_exports.sizeFromShape(size_)));
    }
    return out;
  }
  if (x.dtype === "string") {
    const res = sliceImpl(xVals, begin_, size_, x.shape, x.dtype);
    outData.stringBytes = res;
    return out;
  }
  const outVals = backend.typedArrayFromHeap(out);
  const rank = x.shape.length;
  if (rank === 2) {
    slice2d(xVals, xStrides[0], outVals, begin_, size_);
  } else if (rank === 3) {
    slice3d(xVals, xStrides[0], xStrides[1], outVals, begin_, size_);
  } else if (rank === 4) {
    slice4d(xVals, xStrides[0], xStrides[1], xStrides[2], outVals, begin_, size_);
  } else {
    const res = sliceImpl(xVals, begin_, size_, x.shape, x.dtype);
    outVals.set(res);
  }
  return out;
}
function slice2d(xVals, xStride, outVals, begin, size) {
  let outOffset = 0;
  const beginI = begin[0];
  const beginJ = begin[1];
  const endI = beginI + size[0];
  for (let i = beginI; i < endI; i++) {
    const xOffset = i * xStride + beginJ;
    outVals.set(xVals.subarray(xOffset, xOffset + size[1]), outOffset);
    outOffset += size[1];
  }
}
function slice3d(xVals, xStride1, xStride2, outVals, begin, size) {
  let outOffset = 0;
  const beginI = begin[0];
  const beginJ = begin[1];
  const beginK = begin[2];
  const endI = beginI + size[0];
  const endJ = beginJ + size[1];
  for (let i = beginI; i < endI; i++) {
    for (let j = beginJ; j < endJ; j++) {
      const xOffset = i * xStride1 + j * xStride2 + beginK;
      outVals.set(xVals.subarray(xOffset, xOffset + size[2]), outOffset);
      outOffset += size[2];
    }
  }
}
function slice4d(xVals, xStride1, xStride2, xStride3, outVals, begin, size) {
  let outOffset = 0;
  const beginI = begin[0];
  const beginJ = begin[1];
  const beginK = begin[2];
  const endI = beginI + size[0];
  const endJ = beginJ + size[1];
  const endK = beginK + size[2];
  const beginL = begin[3];
  for (let i = beginI; i < endI; i++) {
    for (let j = beginJ; j < endJ; j++) {
      for (let k = beginK; k < endK; k++) {
        const xOffset = i * xStride1 + j * xStride2 + k * xStride3 + beginL;
        outVals.set(xVals.subarray(xOffset, xOffset + size[3]), outOffset);
        outOffset += size[3];
      }
    }
  }
}
var sliceConfig = {
  kernelName: Slice,
  backendName: "wasm",
  kernelFunc: slice
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/BatchToSpaceND.js
function batchToSpaceND(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    blockShape,
    crops
  } = attrs;
  const prod2 = blockShape.reduce((a, b) => a * b);
  const reshaped = backend_util_exports.getReshaped(x.shape, blockShape, prod2);
  const permuted = backend_util_exports.getPermuted(reshaped.length, blockShape.length);
  const reshapedPermuted = backend_util_exports.getReshapedPermuted(x.shape, blockShape, prod2);
  const sliceBeginCoords = backend_util_exports.getSliceBeginCoords(crops, blockShape.length);
  const sliceSize = backend_util_exports.getSliceSize(reshapedPermuted, crops, blockShape.length);
  const xReshaped = reshape({
    inputs: {
      x
    },
    backend,
    attrs: {
      shape: reshaped
    }
  });
  const xTransposed = transpose({
    inputs: {
      x: xReshaped
    },
    backend,
    attrs: {
      perm: permuted
    }
  });
  const xTransposedReshaped = reshape({
    inputs: {
      x: xTransposed
    },
    backend,
    attrs: {
      shape: reshapedPermuted
    }
  });
  const result = slice({
    inputs: {
      x: xTransposedReshaped
    },
    backend,
    attrs: {
      begin: sliceBeginCoords,
      size: sliceSize
    }
  });
  backend.disposeData(xReshaped.dataId);
  backend.disposeData(xTransposed.dataId);
  backend.disposeData(xTransposedReshaped.dataId);
  return result;
}
var batchToSpaceNDConfig = {
  kernelName: BatchToSpaceND,
  backendName: "wasm",
  kernelFunc: batchToSpaceND
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Bincount.js
init_dist();
var wasmBincount;
function setup10(backend) {
  wasmBincount = backend.wasm.cwrap(Bincount, null, [
    "number",
    "number",
    "boolean",
    "number",
    "number",
    "number"
    // outId
  ]);
}
function bincount(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    x,
    weights
  } = inputs;
  const {
    size
  } = attrs;
  const hasWeights = weights.shape.reduce((p, v) => p * v, 1) !== 0;
  const outShape = x.shape.length === 1 ? [size] : [x.shape[0], size];
  const out = backend.makeOutput(outShape, weights.dtype);
  function tensorId(x2) {
    return backend.dataIdMap.get(x2.dataId).id;
  }
  wasmBincount(tensorId(x), size, hasWeights, tensorId(weights), CppDType[weights.dtype], tensorId(out));
  return out;
}
var bincountConfig = {
  kernelName: Bincount,
  backendName: "wasm",
  setupFunc: setup10,
  kernelFunc: bincount
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/BitwiseAnd.js
init_dist();
var supportsFullBroadcast2 = true;
var bitwiseAndConfig = createBinaryKernelConfig(BitwiseAnd, supportsFullBroadcast2);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/BroadcastArgs.js
init_dist();
function broadcastArgs(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    s0,
    s1
  } = inputs;
  const s0Vals = backend.typedArrayFromHeap(s0);
  const s1Vals = backend.typedArrayFromHeap(s1);
  const broadcastShape = backend_util_exports.assertAndGetBroadcastShape(Array.from(s0Vals), Array.from(s1Vals));
  return backend.makeOutput(
    [broadcastShape.length],
    "int32",
    /*memoryOffset=*/
    void 0,
    /*values=*/
    new Int32Array(broadcastShape)
  );
}
var broadcastArgsConfig = {
  kernelName: BroadcastArgs,
  backendName: "wasm",
  kernelFunc: broadcastArgs
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Cast.js
init_dist();
function cast(args) {
  const {
    inputs: {
      x
    },
    attrs: {
      dtype
    },
    backend
  } = args;
  const out = backend.makeOutput(x.shape, dtype);
  const inVals = backend.typedArrayFromHeap(x);
  const outVals = backend.typedArrayFromHeap(out);
  outVals.set(inVals);
  return out;
}
var castConfig = {
  kernelName: Cast,
  backendName: "wasm",
  kernelFunc: cast
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Ceil.js
init_dist();
var ceilConfig = createUnaryKernelConfig(Ceil);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/ClipByValue.js
init_dist();
var wasmClip;
function setup11(backend) {
  wasmClip = backend.wasm.cwrap(ClipByValue, null, [
    "number",
    "number",
    "number",
    "number"
    // out_id
  ]);
}
function clip(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    clipValueMin,
    clipValueMax
  } = attrs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  const out = backend.makeOutput(x.shape, x.dtype);
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmClip(xId, clipValueMin, clipValueMax, outId);
  return out;
}
var clipByValueConfig = {
  kernelName: ClipByValue,
  backendName: "wasm",
  setupFunc: setup11,
  kernelFunc: clip
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Concat.js
init_dist();
function concat(args) {
  const {
    inputs,
    backend
  } = args;
  const axis = util_exports.parseAxisParam(args.attrs.axis, inputs[0].shape)[0];
  const shapes = inputs.map((t) => t.shape);
  backend_util_exports.assertParamsConsistent(shapes, axis);
  let outShape = backend_util_exports.computeOutShape(inputs.map((t) => t.shape), axis);
  const $inputs = inputs.filter((t) => util_exports.sizeFromShape(t.shape) > 0);
  if ($inputs.length === 1) {
    return identity({
      inputs: {
        x: $inputs[0]
      },
      backend
    });
  }
  const out = backend.makeOutput(outShape, inputs[0].dtype);
  if (util_exports.sizeFromShape(outShape) === 0) {
    return out;
  }
  if ($inputs[0].dtype === "string") {
    const inputs2D = $inputs.map((t) => {
      const innerSize = util_exports.sizeFromShape(t.shape.slice(axis));
      const shape = [-1, innerSize];
      return reshape({
        inputs: {
          x: t
        },
        backend,
        attrs: {
          shape
        }
      });
    });
    const inputsValShapes = inputs2D.map((t) => {
      return {
        vals: backend.readSync(t.dataId),
        shape: t.shape
      };
    });
    outShape = backend_util_exports.computeOutShape(
      inputs2D.map((t) => t.shape),
      1
      /* axis */
    );
    const simplyConcat = inputs2D[0].shape[0] === 1;
    const outVals2 = concatImpl(inputsValShapes, outShape, inputs[0].dtype, simplyConcat);
    const finalOutShape = backend_util_exports.computeOutShape($inputs.map((t) => t.shape), axis);
    out.shape = finalOutShape;
    const outData = backend.dataIdMap.get(out.dataId);
    outData.stringBytes = backend_util_exports.fromStringArrayToUint8(outVals2);
    inputs2D.forEach((t) => backend.disposeData(t.dataId));
    return out;
  }
  const batchDim = util_exports.sizeFromShape($inputs[0].shape.slice(0, axis));
  let sumInnerDims = 0;
  const innerDims = $inputs.map((input) => {
    const innerDim = util_exports.sizeFromShape(input.shape.slice(axis));
    sumInnerDims += innerDim;
    return innerDim;
  });
  const inVals = $inputs.map((input) => backend.typedArrayFromHeap(input));
  const outVals = backend.typedArrayFromHeap(out);
  for (let b = 0; b < batchDim; b++) {
    let outOffset = b * sumInnerDims;
    for (let i = 0; i < inVals.length; i++) {
      const innerDim = innerDims[i];
      const inOffset = b * innerDim;
      const vals = inVals[i].subarray(inOffset, inOffset + innerDim);
      outVals.set(vals, outOffset);
      outOffset += innerDim;
    }
  }
  return out;
}
var concatConfig = {
  kernelName: Concat,
  backendName: "wasm",
  kernelFunc: concat
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Conv2D.js
init_dist();
var wasmConv2d;
function setup12(backend) {
  wasmConv2d = backend.wasm.cwrap(Conv2D, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // outId
  ]);
}
function conv2d(args) {
  const {
    inputs,
    attrs,
    backend
  } = args;
  const {
    x,
    filter
  } = inputs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  const filterId = backend.dataIdMap.get(filter.dataId).id;
  const {
    strides,
    dilations,
    pad: pad2,
    dimRoundingMode,
    dataFormat
  } = attrs;
  const $dataFormat = backend_util_exports.convertConv2DDataFormat(dataFormat);
  const convInfo = backend_util_exports.computeConv2DInfo(x.shape, filter.shape, strides, dilations, pad2, dimRoundingMode, false, $dataFormat);
  const filterHeight = convInfo.filterHeight;
  const filterWidth = convInfo.filterWidth;
  const padTop = convInfo.padInfo.top;
  const padRight = convInfo.padInfo.right;
  const padBottom = convInfo.padInfo.bottom;
  const padLeft = convInfo.padInfo.left;
  const dilationHeight = convInfo.dilationHeight;
  const dilationWidth = convInfo.dilationWidth;
  const strideHeight = convInfo.strideHeight;
  const strideWidth = convInfo.strideWidth;
  const inputChannels = convInfo.inChannels;
  const outputChannels = convInfo.outChannels;
  const isSamePad = convInfo.padInfo.type === "SAME" ? 1 : 0;
  if (convInfo.dataFormat !== "channelsLast") {
    throw new Error(`wasm backend Conv2D does not support dataFormat:'${convInfo.dataFormat}'. Please use 'channelsLast'.`);
  }
  const out = backend.makeOutput(convInfo.outShape, "float32");
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmConv2d(xId, x.shape[0], x.shape[1], x.shape[2], filterId, filterHeight, filterWidth, padTop, padRight, padBottom, padLeft, isSamePad, dilationHeight, dilationWidth, strideHeight, strideWidth, inputChannels, outputChannels, outId);
  return out;
}
var conv2DConfig = {
  kernelName: Conv2D,
  backendName: "wasm",
  setupFunc: setup12,
  kernelFunc: conv2d
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Conv2DBackpropInput.js
init_dist();
var wasmConv2DBackpropInput;
function setup13(backend) {
  wasmConv2DBackpropInput = backend.wasm.cwrap(Conv2DBackpropInput, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // outId
  ]);
}
function conv2DBackpropInput(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    dy,
    filter
  } = inputs;
  const {
    strides,
    pad: pad2,
    dataFormat,
    dimRoundingMode,
    inputShape
  } = attrs;
  const dilations = 1;
  const $dataFormat = backend_util_exports.convertConv2DDataFormat(dataFormat);
  const convInfo = backend_util_exports.computeConv2DInfo(inputShape, filter.shape, strides, dilations, pad2, dimRoundingMode, false, $dataFormat);
  const {
    batchSize,
    filterHeight,
    filterWidth,
    inChannels,
    inHeight,
    inWidth,
    outChannels,
    outHeight,
    outWidth,
    strideHeight,
    strideWidth
  } = convInfo;
  const topPad = filterHeight - 1 - convInfo.padInfo.top;
  const leftPad = filterWidth - 1 - convInfo.padInfo.left;
  const isChannelsLast = convInfo.dataFormat === "channelsLast";
  const dxStrides = util_exports.computeStrides(convInfo.inShape);
  const dyStrides = util_exports.computeStrides(dy.shape);
  const [fltS0, fltS1, fltS2] = util_exports.computeStrides(filter.shape);
  const xBatchStride = dxStrides[0];
  const xRowStride = isChannelsLast ? dxStrides[1] : dxStrides[2];
  const xColStride = isChannelsLast ? dxStrides[2] : 1;
  const xChannelStride = isChannelsLast ? 1 : dxStrides[1];
  const yBatchStride = dyStrides[0];
  const yRowStride = isChannelsLast ? dyStrides[1] : dyStrides[2];
  const yColStride = isChannelsLast ? dyStrides[2] : 1;
  const yChannelStride = isChannelsLast ? 1 : dyStrides[1];
  const out = backend.makeOutput(convInfo.inShape, "float32");
  const outId = backend.dataIdMap.get(out.dataId).id;
  const dyId = backend.dataIdMap.get(dy.dataId).id;
  const filterId = backend.dataIdMap.get(filter.dataId).id;
  wasmConv2DBackpropInput(dyId, filterId, batchSize, filterHeight, filterWidth, inHeight, inWidth, inChannels, outHeight, outWidth, outChannels, strideHeight, strideWidth, topPad, leftPad, fltS0, fltS1, fltS2, xBatchStride, xRowStride, xColStride, xChannelStride, yBatchStride, yRowStride, yColStride, yChannelStride, outId);
  return out;
}
var conv2DBackpropInputConfig = {
  kernelName: Conv2DBackpropInput,
  backendName: "wasm",
  setupFunc: setup13,
  kernelFunc: conv2DBackpropInput
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Conv3D.js
init_dist();
var wasmConv3D;
function setup14(backend) {
  wasmConv3D = backend.wasm.cwrap(Conv3D, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // padLeft
  ]);
}
function conv3D(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x,
    filter
  } = inputs;
  const {
    strides,
    pad: pad2,
    dilations
  } = attrs;
  if (x.dtype !== "float32") {
    throw new Error(`Tensor x must have dtype float32, got ${x.dtype}`);
  }
  if (filter.dtype !== "float32") {
    throw new Error(`Tensor filter must have dtype float32, got ${filter.dtype}`);
  }
  const convInfo = backend_util_exports.computeConv3DInfo(x.shape, filter.shape, strides, dilations, pad2);
  const out = backend.makeOutput(convInfo.outShape, x.dtype);
  wasmConv3D(backend.dataIdMap.get(x.dataId).id, backend.dataIdMap.get(filter.dataId).id, backend.dataIdMap.get(out.dataId).id, convInfo.batchSize, convInfo.inDepth, convInfo.inHeight, convInfo.inWidth, convInfo.inChannels, convInfo.outDepth, convInfo.outHeight, convInfo.outWidth, convInfo.outChannels, convInfo.strideDepth, convInfo.strideHeight, convInfo.strideWidth, convInfo.dilationDepth, convInfo.dilationHeight, convInfo.dilationWidth, convInfo.filterDepth, convInfo.filterHeight, convInfo.filterWidth, convInfo.padInfo.front, convInfo.padInfo.top, convInfo.padInfo.left);
  return out;
}
var conv3DConfig = {
  kernelName: Conv3D,
  backendName: "wasm",
  setupFunc: setup14,
  kernelFunc: conv3D
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Conv3DBackpropFilterV2.js
init_dist();
var wasmConv3DBackpropFilterV2;
function setup15(backend) {
  wasmConv3DBackpropFilterV2 = backend.wasm.cwrap(Conv3DBackpropFilterV2, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // padLeft
  ]);
}
function conv3DBackpropFilterV2(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x,
    dy
  } = inputs;
  const {
    strides,
    pad: pad2,
    filterShape
  } = attrs;
  if (x.dtype !== "float32") {
    throw new Error(`Tensor dy must have dtype float32, got ${x.dtype}`);
  }
  if (dy.dtype !== "float32") {
    throw new Error(`Tensor filter must have dtype float32, got ${dy.dtype}`);
  }
  const convInfo = backend_util_exports.computeConv3DInfo(
    x.shape,
    filterShape,
    strides,
    /*dilations=*/
    1,
    pad2
  );
  const dw = backend.makeOutput(convInfo.filterShape, dy.dtype);
  wasmConv3DBackpropFilterV2(backend.dataIdMap.get(x.dataId).id, backend.dataIdMap.get(dy.dataId).id, backend.dataIdMap.get(dw.dataId).id, convInfo.batchSize, convInfo.inDepth, convInfo.inHeight, convInfo.inWidth, convInfo.inChannels, convInfo.outDepth, convInfo.outHeight, convInfo.outWidth, convInfo.outChannels, convInfo.strideDepth, convInfo.strideHeight, convInfo.strideWidth, convInfo.dilationDepth, convInfo.dilationHeight, convInfo.dilationWidth, convInfo.filterDepth, convInfo.filterHeight, convInfo.filterWidth, convInfo.padInfo.front, convInfo.padInfo.top, convInfo.padInfo.left);
  return dw;
}
var conv3DBackpropFilterV2Config = {
  kernelName: Conv3DBackpropFilterV2,
  backendName: "wasm",
  setupFunc: setup15,
  kernelFunc: conv3DBackpropFilterV2
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Conv3DBackpropInputV2.js
init_dist();
var wasmConv3DBackpropInputV2;
function setup16(backend) {
  wasmConv3DBackpropInputV2 = backend.wasm.cwrap(Conv3DBackpropInputV2, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // padLeft
  ]);
}
function conv3DBackpropInputV2(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    dy,
    filter
  } = inputs;
  const {
    pad: pad2,
    strides,
    inputShape
  } = attrs;
  if (dy.dtype !== "float32") {
    throw new Error(`Tensor dy must have dtype float32, got ${dy.dtype}`);
  }
  if (filter.dtype !== "float32") {
    throw new Error(`Tensor filter must have dtype float32, got ${filter.dtype}`);
  }
  const convInfo = backend_util_exports.computeConv3DInfo(
    inputShape,
    filter.shape,
    strides,
    /*dilations=*/
    1,
    pad2
  );
  const dx = backend.makeOutput(convInfo.inShape, dy.dtype);
  wasmConv3DBackpropInputV2(backend.dataIdMap.get(filter.dataId).id, backend.dataIdMap.get(dy.dataId).id, backend.dataIdMap.get(dx.dataId).id, convInfo.batchSize, convInfo.inDepth, convInfo.inHeight, convInfo.inWidth, convInfo.inChannels, convInfo.outDepth, convInfo.outHeight, convInfo.outWidth, convInfo.outChannels, convInfo.strideDepth, convInfo.strideHeight, convInfo.strideWidth, convInfo.dilationDepth, convInfo.dilationHeight, convInfo.dilationWidth, convInfo.filterDepth, convInfo.filterHeight, convInfo.filterWidth, convInfo.padInfo.front, convInfo.padInfo.top, convInfo.padInfo.left);
  return dx;
}
var conv3DBackpropInputV2Config = {
  kernelName: Conv3DBackpropInputV2,
  backendName: "wasm",
  setupFunc: setup16,
  kernelFunc: conv3DBackpropInputV2
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Cos.js
init_dist();
var cosConfig = createUnaryKernelConfig(Cos);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Cosh.js
init_dist();
var coshConfig = createUnaryKernelConfig(Cosh);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/CropAndResize.js
init_dist();
var InterpolationMethod;
(function(InterpolationMethod2) {
  InterpolationMethod2[InterpolationMethod2["bilinear"] = 0] = "bilinear";
  InterpolationMethod2[InterpolationMethod2["nearest"] = 1] = "nearest";
})(InterpolationMethod || (InterpolationMethod = {}));
var wasmCropAndResize;
function setup17(backend) {
  wasmCropAndResize = backend.wasm.cwrap(CropAndResize, null, [
    "number",
    "number",
    "number",
    "number",
    "array",
    "number",
    "number",
    "number",
    "number",
    "number"
    // out id
  ]);
}
function cropAndResize(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    method,
    extrapolationValue,
    cropSize
  } = attrs;
  const {
    image,
    boxes,
    boxInd
  } = inputs;
  const numBoxes = boxes.shape[0];
  const [cropHeight, cropWidth] = cropSize;
  const outShape = [numBoxes, cropHeight, cropWidth, image.shape[3]];
  let imagesData = backend.dataIdMap.get(image.dataId);
  let castedData;
  if (image.dtype !== "float32") {
    castedData = cast({
      backend,
      inputs: {
        x: image
      },
      attrs: {
        dtype: "float32"
      }
    });
    imagesData = backend.dataIdMap.get(castedData.dataId);
  }
  const imagesId = imagesData.id;
  const boxesId = backend.dataIdMap.get(boxes.dataId).id;
  const boxIndId = backend.dataIdMap.get(boxInd.dataId).id;
  const out = backend.makeOutput(outShape, "float32");
  const outId = backend.dataIdMap.get(out.dataId).id;
  const imagesShapeBytes = new Uint8Array(new Int32Array(image.shape).buffer);
  wasmCropAndResize(imagesId, boxesId, boxIndId, numBoxes, imagesShapeBytes, cropHeight, cropWidth, InterpolationMethod[method], extrapolationValue, outId);
  if (castedData != null) {
    backend.disposeData(castedData.dataId);
  }
  return out;
}
var cropAndResizeConfig = {
  kernelName: CropAndResize,
  backendName: "wasm",
  setupFunc: setup17,
  kernelFunc: cropAndResize
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Cumprod.js
init_dist();
var wasmCumprod;
function setup18(backend) {
  wasmCumprod = backend.wasm.cwrap(Cumprod, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // dtype
  ]);
}
function cumprod(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    axis,
    exclusive,
    reverse: reverse2
  } = attrs;
  const xRank = x.shape.length;
  util_exports.assert(x.dtype === "float32" || x.dtype === "int32", () => `cumprod does not support ${x.dtype} tensors in the WASM backend`);
  const permutation = backend_util_exports.getAxesPermutation([axis], xRank);
  let permutedX = x;
  if (permutation !== null) {
    permutedX = transpose({
      inputs: {
        x
      },
      attrs: {
        perm: permutation
      },
      backend
    });
  }
  const permutedAxis = backend_util_exports.getInnerMostAxes(1, xRank)[0];
  backend_util_exports.assertAxesAreInnerMostDims("cumprod", [permutedAxis], xRank);
  const permutedOut = backend.makeOutput(permutedX.shape, permutedX.dtype);
  const finalDim = permutedX.shape[permutedAxis];
  const permutedXId = backend.dataIdMap.get(permutedX.dataId).id;
  const permutedOutId = backend.dataIdMap.get(permutedOut.dataId).id;
  wasmCumprod(permutedXId, exclusive ? 1 : 0, reverse2 ? 1 : 0, finalDim, permutedOutId, CppDType[x.dtype]);
  let out = permutedOut;
  if (permutation !== null) {
    const undoPermutation = backend_util_exports.getUndoAxesPermutation(permutation);
    out = transpose({
      inputs: {
        x: permutedOut
      },
      attrs: {
        perm: undoPermutation
      },
      backend
    });
    backend.disposeData(permutedX.dataId);
    backend.disposeData(permutedOut.dataId);
  }
  return out;
}
var cumprodConfig = {
  kernelName: Cumprod,
  backendName: "wasm",
  setupFunc: setup18,
  kernelFunc: cumprod
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Cumsum.js
init_dist();
var wasmCumsum;
function setup19(backend) {
  wasmCumsum = backend.wasm.cwrap(Cumsum, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // dtype
  ]);
}
function cumsum(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    axis,
    exclusive,
    reverse: reverse2
  } = attrs;
  const xRank = x.shape.length;
  util_exports.assert(x.dtype === "float32" || x.dtype === "int32", () => `cumsum does not support ${x.dtype} tensors in the WASM backend`);
  const permutation = backend_util_exports.getAxesPermutation([axis], xRank);
  let permutedX = x;
  if (permutation !== null) {
    permutedX = transpose({
      inputs: {
        x
      },
      attrs: {
        perm: permutation
      },
      backend
    });
  }
  const permutedAxis = backend_util_exports.getInnerMostAxes(1, xRank)[0];
  backend_util_exports.assertAxesAreInnerMostDims("cumsum", [permutedAxis], xRank);
  const permutedOut = backend.makeOutput(permutedX.shape, permutedX.dtype);
  const finalDim = permutedX.shape[permutedAxis];
  const permutedXId = backend.dataIdMap.get(permutedX.dataId).id;
  const permutedOutId = backend.dataIdMap.get(permutedOut.dataId).id;
  wasmCumsum(permutedXId, exclusive ? 1 : 0, reverse2 ? 1 : 0, finalDim, permutedOutId, CppDType[x.dtype]);
  let out = permutedOut;
  if (permutation !== null) {
    const undoPermutation = backend_util_exports.getUndoAxesPermutation(permutation);
    out = transpose({
      inputs: {
        x: permutedOut
      },
      attrs: {
        perm: undoPermutation
      },
      backend
    });
    backend.disposeData(permutedX.dataId);
    backend.disposeData(permutedOut.dataId);
  }
  return out;
}
var cumsumConfig = {
  kernelName: Cumsum,
  backendName: "wasm",
  setupFunc: setup19,
  kernelFunc: cumsum
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/DenseBincount.js
init_dist();
var wasmDenseBincount;
function setup20(backend) {
  wasmDenseBincount = backend.wasm.cwrap("DenseBincount", null, [
    "number",
    "array",
    "number",
    "number",
    "boolean",
    "number",
    "number",
    "boolean",
    "number"
    // outId
  ]);
}
function denseBincount(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    x,
    weights
  } = inputs;
  const {
    size,
    binaryOutput
  } = attrs;
  const hasWeights = weights.shape.reduce((p, v) => p * v, 1) !== 0;
  const outShape = x.shape.length === 1 ? [size] : [x.shape[0], size];
  const out = backend.makeOutput(outShape, weights.dtype);
  function tensorId(x2) {
    return backend.dataIdMap.get(x2.dataId).id;
  }
  wasmDenseBincount(tensorId(x), new Uint8Array(new Int32Array(x.shape).buffer), x.shape.length, size, hasWeights, tensorId(weights), CppDType[weights.dtype], binaryOutput, tensorId(out));
  return out;
}
var denseBincountConfig = {
  kernelName: DenseBincount,
  backendName: "wasm",
  setupFunc: setup20,
  kernelFunc: denseBincount
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/DepthToSpace.js
init_dist();
var wasmDepthToSpace;
function setup21(backend) {
  wasmDepthToSpace = backend.wasm.cwrap(DepthToSpace, null, [
    "number",
    "number",
    "number",
    "array",
    "number",
    "array",
    "array",
    "number",
    "number"
    // outId
  ]);
}
function depthToSpace(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    blockSize,
    dataFormat
  } = attrs;
  const batchSize = x.shape[0];
  const inputHeight = dataFormat === "NHWC" ? x.shape[1] : x.shape[2];
  const inputWidth = dataFormat === "NHWC" ? x.shape[2] : x.shape[3];
  const inputDepth = dataFormat === "NHWC" ? x.shape[3] : x.shape[1];
  const outputHeight = inputHeight * blockSize;
  const outputWidth = inputWidth * blockSize;
  const outputDepth = inputDepth / (blockSize * blockSize);
  const outputShape = dataFormat === "NHWC" ? [batchSize, outputHeight, outputWidth, outputDepth] : [batchSize, outputDepth, outputHeight, outputWidth];
  const out = backend.makeOutput(outputShape, "float32");
  const xData = backend.dataIdMap.get(x.dataId);
  const xId = xData.id;
  const xStridesBytes = new Uint8Array(new Int32Array(util_exports.computeStrides(x.shape)).buffer);
  const outputShapeBytes = new Uint8Array(new Int32Array(outputShape).buffer);
  const outStridesBytes = new Uint8Array(new Int32Array(util_exports.computeStrides(outputShape)).buffer);
  const outId = backend.dataIdMap.get(out.dataId).id;
  const channelsLast = dataFormat === "NHWC" ? 1 : 0;
  wasmDepthToSpace(xId, blockSize, channelsLast, xStridesBytes, x.shape.length - 1, outputShapeBytes, outStridesBytes, outputShape.length, outId);
  return out;
}
var depthToSpaceConfig = {
  kernelName: DepthToSpace,
  backendName: "wasm",
  setupFunc: setup21,
  kernelFunc: depthToSpace
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/DepthwiseConv2dNative.js
init_dist();
var wasmDepthwiseConv2d;
function setup22(backend) {
  wasmDepthwiseConv2d = backend.wasm.cwrap(DepthwiseConv2dNative, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // outId
  ]);
}
function depthwiseConv2d(args) {
  const {
    inputs,
    attrs,
    backend
  } = args;
  const {
    x,
    filter
  } = inputs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  const filterId = backend.dataIdMap.get(filter.dataId).id;
  const {
    strides,
    dilations,
    pad: pad2,
    dimRoundingMode
  } = attrs;
  const $dilations = dilations == null ? [1, 1] : dilations;
  const convInfo = backend_util_exports.computeConv2DInfo(
    x.shape,
    filter.shape,
    strides,
    $dilations,
    pad2,
    dimRoundingMode,
    true
    /* depthwise */
  );
  const filterHeight = convInfo.filterHeight;
  const filterWidth = convInfo.filterWidth;
  const padTop = convInfo.padInfo.top;
  const padRight = convInfo.padInfo.right;
  const padBottom = convInfo.padInfo.bottom;
  const padLeft = convInfo.padInfo.left;
  const dilationHeight = convInfo.dilationHeight;
  const dilationWidth = convInfo.dilationWidth;
  const strideHeight = convInfo.strideHeight;
  const strideWidth = convInfo.strideWidth;
  const inputChannels = convInfo.inChannels;
  const outputChannels = convInfo.outChannels;
  const isSamePad = convInfo.padInfo.type === "SAME" ? 1 : 0;
  if (convInfo.dataFormat !== "channelsLast") {
    throw new Error(`wasm backend DepthwiseConv2dNative does not support dataFormat:'${convInfo.dataFormat}'. Please use 'channelsLast'.`);
  }
  const out = backend.makeOutput(convInfo.outShape, "float32");
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmDepthwiseConv2d(xId, x.shape[0], x.shape[1], x.shape[2], filterId, filterHeight, filterWidth, padTop, padRight, padBottom, padLeft, isSamePad, dilationHeight, dilationWidth, strideHeight, strideWidth, inputChannels, outputChannels, outId);
  return out;
}
var depthwiseConv2dNativeConfig = {
  kernelName: DepthwiseConv2dNative,
  backendName: "wasm",
  setupFunc: setup22,
  kernelFunc: depthwiseConv2d
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Diag.js
init_dist();
var wasmDiag;
function setup23(backend) {
  wasmDiag = backend.wasm.cwrap("Diag", null, [
    "number",
    "number",
    "number",
    "number"
    // outId
  ]);
}
function diag(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    x
  } = inputs;
  const xSize = util_exports.sizeFromShape(x.shape);
  const out = backend.makeOutput([...x.shape, ...x.shape], x.dtype);
  wasmDiag(backend.dataIdMap.get(x.dataId).id, CppDType[x.dtype], xSize, backend.dataIdMap.get(out.dataId).id);
  return out;
}
var diagConfig = {
  kernelName: Diag,
  backendName: "wasm",
  setupFunc: setup23,
  kernelFunc: diag
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Dilation2D.js
init_dist();
var wasmDilation2D;
function setup24(backend) {
  wasmDilation2D = backend.wasm.cwrap(Dilation2D, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // padLeft
  ]);
}
function dilation2D(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x,
    filter
  } = inputs;
  const {
    strides,
    pad: pad2,
    dilations
  } = attrs;
  if (x.dtype !== filter.dtype) {
    throw new Error(`Dilation2D error: x must have the same dtype as filter. Got ${x.dtype} and ${filter.dtype}`);
  }
  const dilationInfo = backend_util_exports.computeDilation2DInfo(
    x.shape,
    filter.shape,
    strides,
    pad2,
    /*dataFormat=*/
    "NHWC",
    dilations
  );
  const out = backend.makeOutput(dilationInfo.outShape, x.dtype);
  wasmDilation2D(
    backend.dataIdMap.get(x.dataId).id,
    backend.dataIdMap.get(filter.dataId).id,
    backend.dataIdMap.get(out.dataId).id,
    CppDType[x.dtype],
    dilationInfo.batchSize,
    /*depth=*/
    dilationInfo.inChannels,
    dilationInfo.inHeight,
    dilationInfo.inWidth,
    dilationInfo.outHeight,
    dilationInfo.outWidth,
    dilationInfo.strideHeight,
    dilationInfo.strideWidth,
    dilationInfo.dilationHeight,
    dilationInfo.dilationWidth,
    dilationInfo.filterHeight,
    dilationInfo.filterWidth,
    dilationInfo.padInfo.top,
    dilationInfo.padInfo.left
  );
  return out;
}
var dilation2DConfig = {
  kernelName: Dilation2D,
  backendName: "wasm",
  setupFunc: setup24,
  kernelFunc: dilation2D
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Dilation2DBackpropFilter.js
init_dist();
var wasmDilation2DBackpropFilter;
function setup25(backend) {
  wasmDilation2DBackpropFilter = backend.wasm.cwrap(Dilation2DBackpropFilter, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // padLeft
  ]);
}
function dilation2DBackpropFilter(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x,
    filter,
    dy
  } = inputs;
  const {
    strides,
    pad: pad2,
    dilations
  } = attrs;
  if (x.dtype !== filter.dtype || x.dtype !== dy.dtype) {
    throw new Error(`Dilation2DBackpropFilter error: x must have the same dtype as filter and dy. Got ${x.dtype}, ${filter.dtype}, and ${dy.dtype}`);
  }
  const dilationInfo = backend_util_exports.computeDilation2DInfo(
    x.shape,
    filter.shape,
    strides,
    pad2,
    /*dataFormat=*/
    "NHWC",
    dilations
  );
  const gradients = backend.makeOutput(filter.shape, filter.dtype);
  wasmDilation2DBackpropFilter(
    backend.dataIdMap.get(x.dataId).id,
    backend.dataIdMap.get(filter.dataId).id,
    backend.dataIdMap.get(dy.dataId).id,
    backend.dataIdMap.get(gradients.dataId).id,
    CppDType[x.dtype],
    dilationInfo.batchSize,
    /*depth=*/
    dilationInfo.inChannels,
    dilationInfo.inHeight,
    dilationInfo.inWidth,
    dilationInfo.outHeight,
    dilationInfo.outWidth,
    dilationInfo.strideHeight,
    dilationInfo.strideWidth,
    dilationInfo.dilationHeight,
    dilationInfo.dilationWidth,
    dilationInfo.filterHeight,
    dilationInfo.filterWidth,
    dilationInfo.padInfo.top,
    dilationInfo.padInfo.left
  );
  return gradients;
}
var dilation2DBackpropFilterConfig = {
  kernelName: Dilation2DBackpropFilter,
  backendName: "wasm",
  setupFunc: setup25,
  kernelFunc: dilation2DBackpropFilter
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Dilation2DBackpropInput.js
init_dist();
var wasmDilation2DBackpropInput;
function setup26(backend) {
  wasmDilation2DBackpropInput = backend.wasm.cwrap(Dilation2DBackpropInput, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // padLeft
  ]);
}
function dilation2DBackpropInput(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x,
    filter,
    dy
  } = inputs;
  const {
    strides,
    pad: pad2,
    dilations
  } = attrs;
  if (x.dtype !== filter.dtype || x.dtype !== dy.dtype) {
    throw new Error(`Dilation2DBackpropInput error: x must have the same dtype as filter and dy. Got ${x.dtype}, ${filter.dtype}, and ${dy.dtype}`);
  }
  const dilationInfo = backend_util_exports.computeDilation2DInfo(
    x.shape,
    filter.shape,
    strides,
    pad2,
    /*dataFormat=*/
    "NHWC",
    dilations
  );
  const gradients = backend.makeOutput(x.shape, x.dtype);
  wasmDilation2DBackpropInput(
    backend.dataIdMap.get(x.dataId).id,
    backend.dataIdMap.get(filter.dataId).id,
    backend.dataIdMap.get(dy.dataId).id,
    backend.dataIdMap.get(gradients.dataId).id,
    CppDType[x.dtype],
    dilationInfo.batchSize,
    /*depth=*/
    dilationInfo.inChannels,
    dilationInfo.inHeight,
    dilationInfo.inWidth,
    dilationInfo.outHeight,
    dilationInfo.outWidth,
    dilationInfo.strideHeight,
    dilationInfo.strideWidth,
    dilationInfo.dilationHeight,
    dilationInfo.dilationWidth,
    dilationInfo.filterHeight,
    dilationInfo.filterWidth,
    dilationInfo.padInfo.top,
    dilationInfo.padInfo.left
  );
  return gradients;
}
var dilation2DBackpropInputConfig = {
  kernelName: Dilation2DBackpropInput,
  backendName: "wasm",
  setupFunc: setup26,
  kernelFunc: dilation2DBackpropInput
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Elu.js
init_dist();
var eluConfig = createUnaryKernelConfig(Elu);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/EluGrad.js
init_dist();
var wasmEluGrad;
function setup27(backend) {
  wasmEluGrad = backend.wasm.cwrap(EluGrad, null, [
    "number",
    "number",
    "number"
    // outId
  ]);
}
function eluGrad(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    dy,
    y
  } = inputs;
  const out = backend.makeOutput(y.shape, "float32");
  const tensorId = (x) => {
    return backend.dataIdMap.get(x.dataId).id;
  };
  wasmEluGrad(tensorId(y), tensorId(dy), tensorId(out));
  return out;
}
var eluGradConfig = {
  kernelName: EluGrad,
  backendName: "wasm",
  setupFunc: setup27,
  kernelFunc: eluGrad
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Equal.js
init_dist();
var supportsFullBroadcast3 = false;
var equalConfig = createBinaryKernelConfig(Equal, supportsFullBroadcast3, "bool");

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Erf.js
init_dist();
var erfConfig = createUnaryKernelConfig(Erf);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Exp.js
init_dist();
var expConfig = createUnaryKernelConfig(Exp, "float32");

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/ExpandDims.js
init_dist();
function expandDims(args) {
  const {
    inputs,
    attrs,
    backend
  } = args;
  const {
    input
  } = inputs;
  const {
    dim
  } = attrs;
  const inputRank = input.shape.length;
  const newShape = input.shape.slice();
  let $dim = dim;
  if (dim < 0) {
    util_exports.assert(-(inputRank + 1) <= dim, () => `Axis must be in the interval [${-(inputRank + 1)}, ${inputRank}]`);
    $dim = inputRank + dim + 1;
  }
  newShape.splice($dim, 0, 1);
  return reshape({
    inputs: {
      x: input
    },
    backend,
    attrs: {
      shape: newShape
    }
  });
}
var expandDimsConfig = {
  kernelName: ExpandDims,
  backendName: "wasm",
  kernelFunc: expandDims
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Expm1.js
init_dist();
var expm1Config = createUnaryKernelConfig(Expm1, "float32");

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Fill.js
init_dist();
init_dist();
function fill(args) {
  const {
    attrs: {
      shape,
      value
    },
    backend
  } = args;
  let {
    attrs: {
      dtype
    }
  } = args;
  dtype = dtype || util_exports.inferDtype(value);
  const out = backend.makeOutput(shape, dtype);
  const outVals = backend.typedArrayFromHeap(out);
  outVals.fill(value);
  return out;
}
var fillConfig = {
  kernelName: Fill,
  backendName: "wasm",
  kernelFunc: fill
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/FlipLeftRight.js
init_dist();
var wasmFlipLeftRight;
function setup28(backend) {
  wasmFlipLeftRight = backend.wasm.cwrap(FlipLeftRight, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // outId
  ]);
}
function flipLeftRight(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    image
  } = inputs;
  const out = backend.makeOutput(image.shape, image.dtype);
  const imageId = backend.dataIdMap.get(image.dataId).id;
  const outId = backend.dataIdMap.get(out.dataId).id;
  const [batch, imageHeight, imageWidth, numChannels] = image.shape;
  wasmFlipLeftRight(imageId, batch, imageHeight, imageWidth, numChannels, outId);
  return out;
}
var flipLeftRightConfig = {
  kernelName: FlipLeftRight,
  backendName: "wasm",
  kernelFunc: flipLeftRight,
  setupFunc: setup28
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Floor.js
init_dist();
var floorConfig = createUnaryKernelConfig(Floor);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/FloorDiv.js
init_dist();
var supportsFullBroadcast4 = false;
var floorDivConfig = createBinaryKernelConfig(FloorDiv, supportsFullBroadcast4);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/FusedBatchNorm.js
init_dist();
var wasmBatchNorm;
function setup29(backend) {
  wasmBatchNorm = backend.wasm.cwrap(FusedBatchNorm, null, ["number", "number", "number", "number", "number", "number", "number"]);
}
function fusedBatchNorm(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    varianceEpsilon
  } = attrs;
  const {
    x,
    mean: mean2,
    variance,
    offset,
    scale
  } = inputs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  const meanId = backend.dataIdMap.get(mean2.dataId).id;
  const varianceId = backend.dataIdMap.get(variance.dataId).id;
  const offsetId = offset != null ? backend.dataIdMap.get(offset.dataId).id : 0;
  const scaleId = scale != null ? backend.dataIdMap.get(scale.dataId).id : 0;
  const out = backend.makeOutput(x.shape, x.dtype);
  if (util_exports.sizeFromShape(x.shape) === 0) {
    return out;
  }
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmBatchNorm(xId, meanId, varianceId, offsetId, scaleId, varianceEpsilon, outId);
  return out;
}
var fusedBatchNormConfig = {
  kernelName: FusedBatchNorm,
  backendName: "wasm",
  setupFunc: setup29,
  kernelFunc: fusedBatchNorm
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/FusedConv2D.js
init_dist();
var wasmFusedConv2d;
function setup30(backend) {
  wasmFusedConv2d = backend.wasm.cwrap(FusedConv2D, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // outId
  ]);
}
function fusedConv2d(args) {
  const {
    inputs,
    attrs,
    backend
  } = args;
  const {
    x,
    filter,
    bias,
    preluActivationWeights
  } = inputs;
  const {
    strides,
    pad: pad2,
    dilations,
    dataFormat,
    dimRoundingMode,
    activation,
    leakyreluAlpha
  } = attrs;
  const convInfo = backend_util_exports.computeConv2DInfo(x.shape, filter.shape, strides, dilations, pad2, dimRoundingMode);
  const fusedActivation = FusableActivation[activation];
  if (fusedActivation == null) {
    throw new Error(`${activation} activation not yet supported for FusedConv2D in the wasm backend.`);
  }
  const xId = backend.dataIdMap.get(x.dataId).id;
  const filterId = backend.dataIdMap.get(filter.dataId).id;
  const outputChannels = convInfo.outChannels;
  let biasId = 0;
  if (bias != null) {
    const biasData = backend.dataIdMap.get(bias.dataId);
    if (biasData.shape.length !== 1) {
      throw new Error(`FusedConv2D only supports rank-1 bias but got rank ${biasData.shape.length}.`);
    }
    if (biasData.shape[0] !== outputChannels) {
      throw new Error(`FusedConv2D bias shape (${biasData.shape}) does not match the number of output channels (${outputChannels})`);
    }
    biasId = biasData.id;
  }
  const filterHeight = convInfo.filterHeight;
  const filterWidth = convInfo.filterWidth;
  const padTop = convInfo.padInfo.top;
  const padRight = convInfo.padInfo.right;
  const padBottom = convInfo.padInfo.bottom;
  const padLeft = convInfo.padInfo.left;
  const dilationHeight = convInfo.dilationHeight;
  const dilationWidth = convInfo.dilationWidth;
  const strideHeight = convInfo.strideHeight;
  const strideWidth = convInfo.strideWidth;
  const inputChannels = convInfo.inChannels;
  const isSamePad = convInfo.padInfo.type === "SAME" ? 1 : 0;
  const batchSize = convInfo.batchSize;
  const inHeight = convInfo.inHeight;
  const inWidth = convInfo.inWidth;
  if (dataFormat !== "NHWC") {
    throw new Error(`wasm backend FusedConv2D does not support dataFormat:'${dataFormat}'. Please use 'NHWC'.`);
  }
  const out = backend.makeOutput(convInfo.outShape, "float32");
  const outId = backend.dataIdMap.get(out.dataId).id;
  const preluActivationWeightsId = preluActivationWeights == null ? 0 : backend.dataIdMap.get(preluActivationWeights.dataId).id;
  wasmFusedConv2d(xId, batchSize, inHeight, inWidth, filterId, filterHeight, filterWidth, biasId, padTop, padRight, padBottom, padLeft, isSamePad, dilationHeight, dilationWidth, strideHeight, strideWidth, inputChannels, outputChannels, fusedActivation, preluActivationWeightsId, leakyreluAlpha || 0, outId);
  return out;
}
var fusedConv2DConfig = {
  kernelName: FusedConv2D,
  backendName: "wasm",
  setupFunc: setup30,
  kernelFunc: fusedConv2d
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/FusedDepthwiseConv2D.js
init_dist();
var wasmFusedDepthwiseConv2d;
function setup31(backend) {
  wasmFusedDepthwiseConv2d = backend.wasm.cwrap(FusedDepthwiseConv2D, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // outId
  ]);
}
function fusedDepthwiseConv2d(args) {
  const {
    inputs,
    attrs,
    backend
  } = args;
  const {
    x,
    filter,
    bias,
    preluActivationWeights
  } = inputs;
  const {
    strides,
    pad: pad2,
    dilations,
    dataFormat,
    dimRoundingMode,
    activation,
    leakyreluAlpha
  } = attrs;
  const convInfo = backend_util_exports.computeConv2DInfo(
    x.shape,
    filter.shape,
    strides,
    dilations,
    pad2,
    dimRoundingMode,
    true
    /* depthwise */
  );
  const fusedActivation = FusableActivation[activation];
  if (fusedActivation == null) {
    throw new Error(`${activation} activation not yet supported for FusedDepthwiseConv2D in the wasm backend.`);
  }
  const xId = backend.dataIdMap.get(x.dataId).id;
  const filterId = backend.dataIdMap.get(filter.dataId).id;
  const outputChannels = convInfo.outChannels;
  let biasId = 0;
  if (bias != null) {
    const biasData = backend.dataIdMap.get(bias.dataId);
    if (biasData.shape.length !== 1) {
      throw new Error(`FusedDepthwiseConv2D only supports rank-1 bias but got rank ${biasData.shape.length}.`);
    }
    if (biasData.shape[0] !== outputChannels) {
      throw new Error(`FusedDepthwiseConv2D bias shape (${biasData.shape}) does not match the number of output channels (${outputChannels})`);
    }
    biasId = biasData.id;
  }
  const filterHeight = convInfo.filterHeight;
  const filterWidth = convInfo.filterWidth;
  const padTop = convInfo.padInfo.top;
  const padRight = convInfo.padInfo.right;
  const padBottom = convInfo.padInfo.bottom;
  const padLeft = convInfo.padInfo.left;
  const dilationHeight = convInfo.dilationHeight;
  const dilationWidth = convInfo.dilationWidth;
  const strideHeight = convInfo.strideHeight;
  const strideWidth = convInfo.strideWidth;
  const inputChannels = convInfo.inChannels;
  const isSamePad = convInfo.padInfo.type === "SAME" ? 1 : 0;
  const batchSize = convInfo.batchSize;
  const inHeight = convInfo.inHeight;
  const inWidth = convInfo.inWidth;
  if (dataFormat !== "NHWC") {
    throw new Error(`wasm backend FusedDepthwiseConv2D does not support dataFormat:'${dataFormat}'. Please use 'NHWC'.`);
  }
  const out = backend.makeOutput(convInfo.outShape, "float32");
  const outId = backend.dataIdMap.get(out.dataId).id;
  const preluActivationWeightsId = preluActivationWeights == null ? 0 : backend.dataIdMap.get(preluActivationWeights.dataId).id;
  wasmFusedDepthwiseConv2d(xId, batchSize, inHeight, inWidth, filterId, filterHeight, filterWidth, biasId, padTop, padRight, padBottom, padLeft, isSamePad, dilationHeight, dilationWidth, strideHeight, strideWidth, inputChannels, outputChannels, fusedActivation, preluActivationWeightsId, leakyreluAlpha || 0, outId);
  return out;
}
var fusedDepthwiseConv2DConfig = {
  kernelName: FusedDepthwiseConv2D,
  backendName: "wasm",
  setupFunc: setup31,
  kernelFunc: fusedDepthwiseConv2d
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/GatherNd.js
init_dist();
var wasmGatherNd;
function setup32(backend) {
  wasmGatherNd = backend.wasm.cwrap(GatherNd, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "array",
    "number"
    // outId
  ]);
}
function gatherNd(args) {
  const {
    backend,
    inputs
  } = args;
  const {
    params,
    indices
  } = inputs;
  const [resultShape, numSlices, sliceSize, strides] = gather_nd_util_exports.prepareAndValidate(params, indices);
  const out = backend.makeOutput(resultShape, params.dtype);
  if (numSlices === 0) {
    return out;
  }
  const indicesShape = indices.shape;
  const sliceRank = indicesShape[indicesShape.length - 1];
  const xData = backend.dataIdMap.get(params.dataId);
  const xId = xData.id;
  const indicesData = backend.dataIdMap.get(indices.dataId);
  const indicesId = indicesData.id;
  const stridesBytes = new Uint8Array(new Int32Array(strides).buffer);
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmGatherNd(xId, CppDType[params.dtype], indicesId, numSlices, sliceRank, sliceSize, stridesBytes, outId);
  return out;
}
var gatherNdConfig = {
  kernelName: GatherNd,
  backendName: "wasm",
  setupFunc: setup32,
  kernelFunc: gatherNd
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/GatherV2.js
init_dist();
var wasmGather;
function setup33(backend) {
  wasmGather = backend.wasm.cwrap("Gather", null, [
    "number",
    "number",
    "array",
    "number",
    "number",
    "number",
    "array",
    "number"
    // outId
  ]);
}
function gatherV2(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    x,
    indices
  } = inputs;
  const {
    axis,
    batchDims
  } = attrs;
  const parsedAxis = util_exports.parseAxisParam(axis, x.shape)[0];
  const indicesVals = backend.readSync(indices.dataId);
  const axisDim = x.shape[parsedAxis];
  for (let i = 0; i < indicesVals.length; ++i) {
    const index = indicesVals[i];
    util_exports.assert(index <= axisDim - 1 && index >= 0, () => `GatherV2: the index value ${index} is not in [0, ${axisDim - 1}]`);
  }
  const shapeInfo = backend_util_exports.segment_util.collectGatherOpShapeInfo(x, indices, parsedAxis, batchDims);
  const flattenX = reshape({
    inputs: {
      x
    },
    attrs: {
      shape: [shapeInfo.batchSize, shapeInfo.outerSize, shapeInfo.dimSize, shapeInfo.sliceSize]
    },
    backend
  });
  const indicesSize = util_exports.sizeFromShape(indices.shape);
  const flattenIndex = reshape({
    inputs: {
      x: indices
    },
    attrs: {
      shape: [shapeInfo.batchSize, indicesSize / shapeInfo.batchSize]
    },
    backend
  });
  const flattenOutputShape = [shapeInfo.batchSize, shapeInfo.outerSize, indicesSize / shapeInfo.batchSize, shapeInfo.sliceSize];
  const out = backend.makeOutput(flattenOutputShape, x.dtype);
  if (util_exports.sizeFromShape(x.shape) === 0) {
    return out;
  }
  const stridesSize = flattenX.shape.length - 1;
  const xData = backend.dataIdMap.get(flattenX.dataId);
  const xId = xData.id;
  const indicesData = backend.dataIdMap.get(flattenIndex.dataId);
  const indicesId = indicesData.id;
  const outId = backend.dataIdMap.get(out.dataId).id;
  const xStridesBytes = new Uint8Array(new Int32Array(util_exports.computeStrides(flattenX.shape)).buffer);
  const outStridesBytes = new Uint8Array(new Int32Array(util_exports.computeStrides(flattenOutputShape)).buffer);
  wasmGather(xId, CppDType[x.dtype], xStridesBytes, stridesSize, indicesId, shapeInfo.batchSize, outStridesBytes, outId);
  backend.disposeData(flattenX.dataId);
  backend.disposeData(flattenIndex.dataId);
  out.shape = shapeInfo.outputShape;
  return out;
}
var gatherV2Config = {
  kernelName: GatherV2,
  backendName: "wasm",
  setupFunc: setup33,
  kernelFunc: gatherV2
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Greater.js
init_dist();
var supportsFullBroadcast5 = false;
var greaterConfig = createBinaryKernelConfig(Greater, supportsFullBroadcast5, "bool");

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/GreaterEqual.js
init_dist();
var supportsFullBroadcast6 = false;
var greaterEqualConfig = createBinaryKernelConfig(GreaterEqual, supportsFullBroadcast6, "bool");

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/IsFinite.js
init_dist();
var isFiniteConfig = createUnaryKernelConfig(IsFinite, "bool");

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/IsInf.js
init_dist();
var isInfConfig = createUnaryKernelConfig(IsInf, "bool");

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/IsNan.js
init_dist();
var isNaNConfig = createUnaryKernelConfig(IsNan, "bool");

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/LeakyRelu.js
init_dist();
var wasmFunc2;
function setupFunc2(backend) {
  wasmFunc2 = backend.wasm.cwrap(LeakyRelu, null, [
    "number",
    "number",
    "number",
    "number"
    // out_id
  ]);
}
function leakyRelu(args) {
  const {
    inputs: {
      x
    },
    attrs: {
      alpha
    },
    backend
  } = args;
  const xId = backend.dataIdMap.get(x.dataId).id;
  const out = backend.makeOutput(x.shape, "float32");
  if (util_exports.sizeFromShape(x.shape) !== 0) {
    const outId = backend.dataIdMap.get(out.dataId).id;
    wasmFunc2(xId, CppDType[x.dtype], alpha, outId);
  }
  return out;
}
var leakyReluConfig = {
  kernelName: LeakyRelu,
  backendName: "wasm",
  setupFunc: setupFunc2,
  kernelFunc: leakyRelu
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Less.js
init_dist();
var supportsFullBroadcast7 = false;
var lessConfig = createBinaryKernelConfig(Less, supportsFullBroadcast7, "bool");

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/LessEqual.js
init_dist();
var supportsFullBroadcast8 = false;
var lessEqualConfig = createBinaryKernelConfig(LessEqual, supportsFullBroadcast8, "bool");

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/LinSpace.js
init_dist();
var wasmLinSpace;
function setup34(backend) {
  wasmLinSpace = backend.wasm.cwrap(LinSpace, null, [
    "number",
    "number",
    "number",
    "number"
    // num
  ]);
}
function linSpace(args) {
  const {
    attrs,
    backend
  } = args;
  const {
    start,
    stop,
    num
  } = attrs;
  const numInt = Math.floor(num);
  const out = backend.makeOutput([numInt], "float32");
  wasmLinSpace(backend.dataIdMap.get(out.dataId).id, start, stop, numInt);
  return out;
}
var linSpaceConfig = {
  kernelName: LinSpace,
  backendName: "wasm",
  setupFunc: setup34,
  kernelFunc: linSpace
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Log.js
init_dist();
var logConfig = createUnaryKernelConfig(Log);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Log1p.js
init_dist();
var log1pConfig = createUnaryKernelConfig(Log1p);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/LogicalAnd.js
init_dist();
var supportsFullBroadcast9 = false;
var logicalAndConfig = createBinaryKernelConfig(LogicalAnd, supportsFullBroadcast9, "bool");

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/LogicalNot.js
init_dist();
var logicalNotConfig = createUnaryKernelConfig(LogicalNot);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/LogicalOr.js
init_dist();
var supportsFullBroadcast10 = false;
var logicalOrConfig = createBinaryKernelConfig(LogicalOr, supportsFullBroadcast10, "bool");

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/LogicalXor.js
init_dist();
var supportsFullBroadcast11 = false;
var logicalXorConfig = createBinaryKernelConfig(LogicalXor, supportsFullBroadcast11, "bool");

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/LRN.js
init_dist();
var wasmLRN;
function setup35(backend) {
  wasmLRN = backend.wasm.cwrap(LRN, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // beta
  ]);
}
function lrn(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    depthRadius,
    bias,
    alpha,
    beta
  } = attrs;
  if (x.dtype !== "float32") {
    throw new Error("LRN error: x must have dtype float32");
  }
  const out = backend.makeOutput(x.shape, x.dtype);
  wasmLRN(
    backend.dataIdMap.get(x.dataId).id,
    backend.dataIdMap.get(out.dataId).id,
    /*channels=*/
    x.shape[3],
    depthRadius,
    bias,
    alpha,
    beta
  );
  return out;
}
var lrnConfig = {
  kernelName: LRN,
  backendName: "wasm",
  setupFunc: setup35,
  kernelFunc: lrn
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/LRNGrad.js
init_dist();
var wasmLRNGrad;
function setup36(backend) {
  wasmLRNGrad = backend.wasm.cwrap(LRNGrad, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // beta
  ]);
}
function lrnGrad(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x,
    y,
    dy
  } = inputs;
  const {
    depthRadius,
    bias,
    alpha,
    beta
  } = attrs;
  if (x.dtype !== "float32" || y.dtype !== "float32" || dy.dtype !== "float32") {
    throw new Error("LRNGrad error: x, y, and dy must have dtype float32");
  }
  const dx = backend.makeOutput(x.shape, x.dtype);
  wasmLRNGrad(
    backend.dataIdMap.get(x.dataId).id,
    backend.dataIdMap.get(y.dataId).id,
    backend.dataIdMap.get(dy.dataId).id,
    backend.dataIdMap.get(dx.dataId).id,
    /*channels=*/
    dy.shape[3],
    depthRadius,
    bias,
    alpha,
    beta
  );
  return dx;
}
var lrnGradConfig = {
  kernelName: LRNGrad,
  backendName: "wasm",
  setupFunc: setup36,
  kernelFunc: lrnGrad
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Max.js
init_dist();
var wasmMax;
function setup37(backend) {
  wasmMax = backend.wasm.cwrap(Max, null, [
    "number",
    "number",
    "number",
    "number"
    // out_id
  ]);
}
function max(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    reductionIndices: axis,
    keepDims
  } = attrs;
  const {
    x
  } = inputs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  let inputId = xId;
  let input = x;
  const {
    transposed,
    axes,
    originalAxes,
    inputWasTransposed
  } = permuteAxesAndTranspose(x, axis, backend);
  if (inputWasTransposed) {
    const transposedId = backend.dataIdMap.get(transposed.dataId).id;
    input = transposed;
    inputId = transposedId;
  }
  const inputRank = input.shape.length;
  backend_util_exports.assertAxesAreInnerMostDims("max", axes, inputRank);
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(input.shape, axes);
  const reduceSize = util_exports.sizeFromShape(reduceShape);
  const out = backend.makeOutput(outShape, x.dtype);
  if (util_exports.sizeFromShape(input.shape) !== 0) {
    const outId = backend.dataIdMap.get(out.dataId).id;
    wasmMax(inputId, CppDType[x.dtype], reduceSize, outId);
  }
  if (inputWasTransposed) {
    backend.disposeData(transposed.dataId);
  }
  if (keepDims) {
    const newShape = backend_util_exports.expandShapeToKeepDim(out.shape, originalAxes);
    out.shape = newShape;
  }
  return out;
}
var maxConfig = {
  kernelName: Max,
  backendName: "wasm",
  setupFunc: setup37,
  kernelFunc: max
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Maximum.js
init_dist();
var supportsFullBroadcast12 = false;
var maximumConfig = createBinaryKernelConfig(Maximum, supportsFullBroadcast12);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/MaxPool.js
init_dist();
var wasmMaxPool;
function setup38(backend) {
  wasmMaxPool = backend.wasm.cwrap(MaxPool, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // outId
  ]);
}
function maxPool(args) {
  const {
    inputs,
    attrs,
    backend
  } = args;
  const x = inputs.x;
  const xId = backend.dataIdMap.get(x.dataId).id;
  util_exports.assert(x.dtype === "float32", () => `Error in MaxPool: only float32 input is supported. Got ${x.dtype}.`);
  const {
    filterSize,
    strides,
    pad: pad2,
    dimRoundingMode
  } = attrs;
  const convInfo = backend_util_exports.computePool2DInfo(x.shape, filterSize, strides, 1, pad2, dimRoundingMode);
  const filterHeight = convInfo.filterHeight;
  const filterWidth = convInfo.filterWidth;
  const padTop = convInfo.padInfo.top;
  const padRight = convInfo.padInfo.right;
  const padBottom = convInfo.padInfo.bottom;
  const padLeft = convInfo.padInfo.left;
  const dilationHeight = convInfo.dilationHeight;
  const dilationWidth = convInfo.dilationWidth;
  const strideHeight = convInfo.strideHeight;
  const strideWidth = convInfo.strideWidth;
  const inputChannels = convInfo.inChannels;
  const outputChannels = convInfo.outChannels;
  if (convInfo.dataFormat !== "channelsLast") {
    throw new Error(`wasm backend does not support dataFormat:'${convInfo.dataFormat}'. Please use 'channelsLast'.`);
  }
  const out = backend.makeOutput(convInfo.outShape, "float32");
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmMaxPool(xId, x.shape[0], x.shape[1], x.shape[2], filterHeight, filterWidth, padTop, padRight, padBottom, padLeft, dilationHeight, dilationWidth, strideHeight, strideWidth, inputChannels, outputChannels, outId);
  return out;
}
var maxPoolConfig = {
  kernelName: MaxPool,
  backendName: "wasm",
  setupFunc: setup38,
  kernelFunc: maxPool
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/MaxPool3D.js
init_dist();
var wasmMaxPool3D;
function setup39(backend) {
  wasmMaxPool3D = backend.wasm.cwrap("MaxPool3D", null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // padLeft
  ]);
}
function maxPool3D(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    filterSize,
    strides,
    pad: pad2,
    dimRoundingMode,
    dataFormat
  } = attrs;
  const convInfo = backend_util_exports.computePool3DInfo(
    x.shape,
    filterSize,
    strides,
    /*dilations=*/
    1,
    pad2,
    dimRoundingMode,
    dataFormat
  );
  const out = backend.makeOutput(convInfo.outShape, x.dtype);
  wasmMaxPool3D(
    backend.dataIdMap.get(x.dataId).id,
    backend.dataIdMap.get(out.dataId).id,
    convInfo.batchSize,
    // Since Pool3D ops (AvgPool3D and MaxPool3D) support 3D filter only, in
    // channels should always equal to out channels.
    /*channelSize=*/
    convInfo.inChannels,
    convInfo.inDepth,
    convInfo.inHeight,
    convInfo.inWidth,
    convInfo.outDepth,
    convInfo.outHeight,
    convInfo.outWidth,
    convInfo.strideDepth,
    convInfo.strideHeight,
    convInfo.strideWidth,
    convInfo.dilationDepth,
    convInfo.dilationHeight,
    convInfo.dilationWidth,
    convInfo.effectiveFilterDepth,
    convInfo.effectiveFilterHeight,
    convInfo.effectiveFilterWidth,
    convInfo.padInfo.front,
    convInfo.padInfo.top,
    convInfo.padInfo.left
  );
  return out;
}
var maxPool3DConfig = {
  kernelName: MaxPool3D,
  backendName: "wasm",
  setupFunc: setup39,
  kernelFunc: maxPool3D
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/MaxPool3DGrad.js
init_dist();
var wasmMaxPool3DGrad;
function setup40(backend) {
  wasmMaxPool3DGrad = backend.wasm.cwrap("MaxPool3DGrad", null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // padLeft
  ]);
}
function maxPool3DGrad(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    dy,
    input
  } = inputs;
  const {
    filterSize,
    strides,
    pad: pad2,
    dimRoundingMode
  } = attrs;
  const convInfo = backend_util_exports.computePool3DInfo(
    input.shape,
    filterSize,
    strides,
    /*dilations=*/
    1,
    pad2,
    dimRoundingMode
  );
  const dx = backend.makeOutput(input.shape, input.dtype);
  wasmMaxPool3DGrad(
    backend.dataIdMap.get(input.dataId).id,
    backend.dataIdMap.get(dy.dataId).id,
    backend.dataIdMap.get(dx.dataId).id,
    convInfo.batchSize,
    // Since Pool3D ops (MaxPool3D and MaxPool3D) support 3D filter only, in
    // channels should always equal to out channels.
    /*channelSize=*/
    convInfo.inChannels,
    convInfo.inDepth,
    convInfo.inHeight,
    convInfo.inWidth,
    convInfo.outDepth,
    convInfo.outHeight,
    convInfo.outWidth,
    convInfo.strideDepth,
    convInfo.strideHeight,
    convInfo.strideWidth,
    convInfo.dilationDepth,
    convInfo.dilationHeight,
    convInfo.dilationWidth,
    convInfo.effectiveFilterDepth,
    convInfo.effectiveFilterHeight,
    convInfo.effectiveFilterWidth,
    convInfo.padInfo.front,
    convInfo.padInfo.top,
    convInfo.padInfo.left
  );
  return dx;
}
var maxPool3DGradConfig = {
  kernelName: MaxPool3DGrad,
  backendName: "wasm",
  setupFunc: setup40,
  kernelFunc: maxPool3DGrad
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/MaxPoolGrad.js
init_dist();
var wasmMaxPoolGrad;
function setup41(backend) {
  wasmMaxPoolGrad = backend.wasm.cwrap("MaxPoolGrad", null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // padLeft
  ]);
}
function maxPoolGrad(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    dy,
    input
  } = inputs;
  const {
    filterSize,
    strides,
    pad: pad2,
    dimRoundingMode
  } = attrs;
  const convInfo = backend_util_exports.computePool2DInfo(
    input.shape,
    filterSize,
    strides,
    /*dilations=*/
    1,
    pad2,
    dimRoundingMode
  );
  const dx = backend.makeOutput(input.shape, input.dtype);
  wasmMaxPoolGrad(
    backend.dataIdMap.get(input.dataId).id,
    backend.dataIdMap.get(dy.dataId).id,
    backend.dataIdMap.get(dx.dataId).id,
    convInfo.batchSize,
    // Since Pool ops (MaxPool and MaxPool) support 2D filter only, in
    // channels should always equal to out channels.
    /*channelSize=*/
    convInfo.inChannels,
    convInfo.inHeight,
    convInfo.inWidth,
    convInfo.outHeight,
    convInfo.outWidth,
    convInfo.strideHeight,
    convInfo.strideWidth,
    convInfo.dilationHeight,
    convInfo.dilationWidth,
    convInfo.effectiveFilterHeight,
    convInfo.effectiveFilterWidth,
    convInfo.padInfo.top,
    convInfo.padInfo.left
  );
  return dx;
}
var maxPoolGradConfig = {
  kernelName: MaxPoolGrad,
  backendName: "wasm",
  setupFunc: setup41,
  kernelFunc: maxPoolGrad
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/MaxPoolWithArgmax.js
init_dist();
var wasmMaxPoolWithArgmax;
function setup42(backend) {
  wasmMaxPoolWithArgmax = backend.wasm.cwrap("MaxPoolWithArgmax", null, [
    "number",
    "number",
    "number",
    "number",
    "boolean",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // padLeft
  ]);
}
function maxPoolWithArgmax(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    filterSize,
    strides,
    pad: pad2,
    includeBatchInIndex
  } = attrs;
  util_exports.assert(x.shape.length === 4, () => `Error in maxPool: input must be rank 4 but got rank ${x.shape.length}.`);
  const dilations = [1, 1];
  util_exports.assert(backend_util_exports.eitherStridesOrDilationsAreOne(strides, dilations), () => `Error in maxPool: Either strides or dilations must be 1. Got strides ${strides} and dilations '${dilations}'`);
  const convInfo = backend_util_exports.computePool2DInfo(x.shape, filterSize, strides, [1, 1], pad2);
  const pooled = backend.makeOutput(convInfo.outShape, x.dtype);
  const indexes = backend.makeOutput(convInfo.outShape, "int32");
  wasmMaxPoolWithArgmax(backend.dataIdMap.get(x.dataId).id, backend.dataIdMap.get(pooled.dataId).id, backend.dataIdMap.get(indexes.dataId).id, CppDType[x.dtype], includeBatchInIndex, convInfo.batchSize, convInfo.inChannels, convInfo.inHeight, convInfo.inWidth, convInfo.outHeight, convInfo.outWidth, convInfo.strideHeight, convInfo.strideWidth, convInfo.dilationHeight, convInfo.dilationWidth, convInfo.effectiveFilterHeight, convInfo.effectiveFilterWidth, convInfo.padInfo.top, convInfo.padInfo.left);
  return [pooled, indexes];
}
var maxPoolWithArgmaxConfig = {
  kernelName: MaxPoolWithArgmax,
  backendName: "wasm",
  setupFunc: setup42,
  kernelFunc: maxPoolWithArgmax
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Mean.js
init_dist();
var wasmMean;
function setup43(backend) {
  wasmMean = backend.wasm.cwrap(Mean, null, ["number, number, number"]);
}
function mean(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    axis,
    keepDims
  } = attrs;
  const {
    x
  } = inputs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  let inputId = xId;
  let input = x;
  const {
    transposed,
    axes,
    originalAxes,
    inputWasTransposed
  } = permuteAxesAndTranspose(x, axis, backend);
  let reductionAxes = axes;
  if (inputWasTransposed) {
    const transposedId = backend.dataIdMap.get(transposed.dataId).id;
    if (transposedId !== xId) {
      input = transposed;
      inputId = transposedId;
      reductionAxes = backend_util_exports.getInnerMostAxes(reductionAxes.length, input.shape.length);
    }
  }
  backend_util_exports.assertAxesAreInnerMostDims("mean", reductionAxes, input.shape.length);
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(input.shape, reductionAxes);
  const reduceSize = util_exports.sizeFromShape(reduceShape);
  let castedInput = input;
  if (input.dtype !== "float32") {
    castedInput = cast({
      backend,
      inputs: {
        x: input
      },
      attrs: {
        dtype: "float32"
      }
    });
    inputId = backend.dataIdMap.get(castedInput.dataId).id;
  }
  const out = backend.makeOutput(outShape, "float32");
  if (util_exports.sizeFromShape(input.shape) !== 0) {
    const outId = backend.dataIdMap.get(out.dataId).id;
    wasmMean(inputId, reduceSize, outId);
  }
  if (inputWasTransposed) {
    backend.disposeData(transposed.dataId);
  }
  if (keepDims) {
    const newShape = backend_util_exports.expandShapeToKeepDim(out.shape, originalAxes);
    out.shape = newShape;
  }
  if (input.dtype !== "float32") {
    backend.disposeData(castedInput.dataId);
  }
  return out;
}
var meanConfig = {
  kernelName: Mean,
  backendName: "wasm",
  setupFunc: setup43,
  kernelFunc: mean
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Min.js
init_dist();
var wasmMin;
function setup44(backend) {
  wasmMin = backend.wasm.cwrap(Min, null, [
    "number",
    "number",
    "number",
    "number"
    // out_id
  ]);
}
function min(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    axis,
    keepDims
  } = attrs;
  const {
    x
  } = inputs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  let inputId = xId;
  let input = x;
  const {
    transposed,
    axes,
    originalAxes,
    inputWasTransposed
  } = permuteAxesAndTranspose(x, axis, backend);
  if (inputWasTransposed) {
    const transposedId = backend.dataIdMap.get(transposed.dataId).id;
    if (transposedId !== xId) {
      input = transposed;
      inputId = transposedId;
    }
  }
  const inputRank = input.shape.length;
  backend_util_exports.assertAxesAreInnerMostDims("min", axes, inputRank);
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(input.shape, axes);
  const reduceSize = util_exports.sizeFromShape(reduceShape);
  const out = backend.makeOutput(outShape, input.dtype);
  if (util_exports.sizeFromShape(input.shape) !== 0) {
    const outId = backend.dataIdMap.get(out.dataId).id;
    wasmMin(inputId, CppDType[x.dtype], reduceSize, outId);
  }
  if (inputWasTransposed) {
    backend.disposeData(transposed.dataId);
  }
  if (keepDims) {
    const newShape = backend_util_exports.expandShapeToKeepDim(out.shape, originalAxes);
    out.shape = newShape;
  }
  return out;
}
var minConfig = {
  kernelName: Min,
  backendName: "wasm",
  setupFunc: setup44,
  kernelFunc: min
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Minimum.js
init_dist();
var supportsFullBroadcast13 = false;
var minimumConfig = createBinaryKernelConfig(Minimum, supportsFullBroadcast13);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/MirrorPad.js
init_dist();
var MirrorPaddingMode;
(function(MirrorPaddingMode2) {
  MirrorPaddingMode2[MirrorPaddingMode2["reflect"] = 0] = "reflect";
  MirrorPaddingMode2[MirrorPaddingMode2["symmetric"] = 1] = "symmetric";
})(MirrorPaddingMode || (MirrorPaddingMode = {}));
var wasmMirrorPad;
function setup45(backend) {
  wasmMirrorPad = backend.wasm.cwrap(MirrorPad, null, [
    "number",
    "array",
    "number",
    "number",
    "array",
    "array",
    "number",
    "number"
    // outId
  ]);
}
function mirrorPad(args) {
  const {
    inputs: {
      x
    },
    backend,
    attrs: {
      paddings,
      mode
    }
  } = args;
  const outShape = paddings.map(
    (p, i) => p[0] + x.shape[i] + p[1]
    /* afterPad */
  );
  const xId = backend.dataIdMap.get(x.dataId).id;
  const out = backend.makeOutput(outShape, x.dtype);
  const outId = backend.dataIdMap.get(out.dataId).id;
  const xShapeBytes = new Uint8Array(new Int32Array(x.shape).buffer);
  const prePaddingsFlat = paddings.map((padTuple) => padTuple[0]);
  const postPaddingsFlat = paddings.map((padTuple) => padTuple[1]);
  const prePaddingsBytes = new Uint8Array(new Int32Array(prePaddingsFlat).buffer);
  const postPaddingsBytes = new Uint8Array(new Int32Array(postPaddingsFlat).buffer);
  wasmMirrorPad(xId, xShapeBytes, x.shape.length, CppDType[x.dtype], prePaddingsBytes, postPaddingsBytes, MirrorPaddingMode[mode], outId);
  return out;
}
var mirrorPadConfig = {
  kernelName: MirrorPad,
  backendName: "wasm",
  kernelFunc: mirrorPad,
  setupFunc: setup45
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Multinomial.js
init_dist();

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Softmax.js
init_dist();
var wasmFunc3;
function setup46(backend) {
  wasmFunc3 = backend.wasm.cwrap(Softmax, null, [
    "number",
    "number",
    "number",
    "number"
    // batch
  ]);
}
function softmax(args) {
  const {
    backend,
    inputs: {
      logits
    },
    attrs: {
      dim
    }
  } = args;
  const xId = backend.dataIdMap.get(logits.dataId).id;
  const out = backend.makeOutput(logits.shape, logits.dtype);
  const outId = backend.dataIdMap.get(out.dataId).id;
  const channels = logits.shape[dim];
  const batch = util_exports.sizeFromShape(logits.shape) / channels;
  if (util_exports.sizeFromShape(out.shape) === 0) {
    return out;
  }
  wasmFunc3(xId, outId, channels, batch);
  return out;
}
var softmaxConfig = {
  kernelName: Softmax,
  backendName: "wasm",
  setupFunc: setup46,
  kernelFunc: softmax
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Multinomial.js
var wasmMultinomial;
function setup47(backend) {
  wasmMultinomial = backend.wasm.cwrap(Multinomial, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // outId
  ]);
}
function multinomial(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    logits
  } = inputs;
  const {
    numSamples,
    seed,
    normalized
  } = attrs;
  if (logits.dtype !== "float32") {
    throw new Error(`Tensor logits must have dtype float32, got ${logits.dtype}`);
  }
  const probabilities = normalized ? logits : softmax({
    inputs: {
      logits
    },
    backend,
    attrs: {
      dim: logits.shape.length - 1
    }
  });
  const [batchSize, numEvents] = probabilities.shape;
  const out = backend.makeOutput([batchSize, numSamples], "int32");
  wasmMultinomial(backend.dataIdMap.get(probabilities.dataId).id, batchSize, numEvents, numSamples, seed, backend.dataIdMap.get(out.dataId).id);
  if (!normalized) {
    backend.disposeData(probabilities.dataId);
  }
  return out;
}
var multinomialConfig = {
  kernelName: Multinomial,
  backendName: "wasm",
  setupFunc: setup47,
  kernelFunc: multinomial
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Mod.js
init_dist();
var modConfig = createBinaryKernelConfig(
  Mod,
  /*supportsFullBroadcast=*/
  true
);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Multiply.js
init_dist();
var supportsFullBroadcast14 = true;
var multiplyConfig = createBinaryKernelConfig(Multiply, supportsFullBroadcast14);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Neg.js
init_dist();
var negConfig = createUnaryKernelConfig(Neg);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/NonMaxSuppressionV3.js
init_dist();

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/NonMaxSuppression_util.js
function parseResultStruct(backend, resOffset) {
  const result = new Int32Array(backend.wasm.HEAPU8.buffer, resOffset, 4);
  const pSelectedIndices = result[0];
  const selectedSize = result[1];
  const pSelectedScores = result[2];
  const pValidOutputs = result[3];
  backend.wasm._free(resOffset);
  return {
    pSelectedIndices,
    selectedSize,
    pSelectedScores,
    pValidOutputs
  };
}

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/NonMaxSuppressionV3.js
var wasmFunc4;
function setup48(backend) {
  wasmFunc4 = backend.wasm.cwrap(
    NonMaxSuppressionV3,
    "number",
    // Result*
    [
      "number",
      "number",
      "number",
      "number",
      "number"
      // scoreThreshold
    ]
  );
}
function kernelFunc(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    iouThreshold,
    maxOutputSize,
    scoreThreshold
  } = attrs;
  const {
    boxes,
    scores
  } = inputs;
  const boxesId = backend.dataIdMap.get(boxes.dataId).id;
  const scoresId = backend.dataIdMap.get(scores.dataId).id;
  const resOffset = wasmFunc4(boxesId, scoresId, maxOutputSize, iouThreshold, scoreThreshold);
  const {
    pSelectedIndices,
    selectedSize,
    pSelectedScores,
    pValidOutputs
  } = parseResultStruct(backend, resOffset);
  backend.wasm._free(pSelectedScores);
  backend.wasm._free(pValidOutputs);
  const selectedIndicesTensor = backend.makeOutput([selectedSize], "int32", pSelectedIndices);
  return selectedIndicesTensor;
}
var nonMaxSuppressionV3Config = {
  kernelName: NonMaxSuppressionV3,
  backendName: "wasm",
  setupFunc: setup48,
  kernelFunc
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/NonMaxSuppressionV4.js
init_dist();
var wasmFunc5;
function setup49(backend) {
  wasmFunc5 = backend.wasm.cwrap(
    NonMaxSuppressionV4,
    "number",
    // Result*
    [
      "number",
      "number",
      "number",
      "number",
      "number",
      "bool"
      // padToMaxOutputSize
    ]
  );
}
function nonMaxSuppressionV4(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    iouThreshold,
    maxOutputSize,
    scoreThreshold,
    padToMaxOutputSize
  } = attrs;
  const {
    boxes,
    scores
  } = inputs;
  const boxesId = backend.dataIdMap.get(boxes.dataId).id;
  const scoresId = backend.dataIdMap.get(scores.dataId).id;
  const resOffset = wasmFunc5(boxesId, scoresId, maxOutputSize, iouThreshold, scoreThreshold, padToMaxOutputSize);
  const {
    pSelectedIndices,
    selectedSize,
    pSelectedScores,
    pValidOutputs
  } = parseResultStruct(backend, resOffset);
  backend.wasm._free(pSelectedScores);
  const selectedIndicesTensor = backend.makeOutput([selectedSize], "int32", pSelectedIndices);
  const validOutputsTensor = backend.makeOutput([], "int32", pValidOutputs);
  return [selectedIndicesTensor, validOutputsTensor];
}
var nonMaxSuppressionV4Config = {
  kernelName: NonMaxSuppressionV4,
  backendName: "wasm",
  setupFunc: setup49,
  kernelFunc: nonMaxSuppressionV4
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/NonMaxSuppressionV5.js
init_dist();
var wasmFunc6;
function setup50(backend) {
  wasmFunc6 = backend.wasm.cwrap(
    NonMaxSuppressionV5,
    "number",
    // Result*
    [
      "number",
      "number",
      "number",
      "number",
      "number",
      "number"
      // softNmsSigma
    ]
  );
}
function kernelFunc2(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    iouThreshold,
    maxOutputSize,
    scoreThreshold,
    softNmsSigma
  } = attrs;
  const {
    boxes,
    scores
  } = inputs;
  const boxesId = backend.dataIdMap.get(boxes.dataId).id;
  const scoresId = backend.dataIdMap.get(scores.dataId).id;
  const resOffset = wasmFunc6(boxesId, scoresId, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma);
  const {
    pSelectedIndices,
    selectedSize,
    pSelectedScores,
    pValidOutputs
  } = parseResultStruct(backend, resOffset);
  backend.wasm._free(pValidOutputs);
  const selectedIndicesTensor = backend.makeOutput([selectedSize], "int32", pSelectedIndices);
  const selectedScoresTensor = backend.makeOutput([selectedSize], "float32", pSelectedScores);
  return [selectedIndicesTensor, selectedScoresTensor];
}
var nonMaxSuppressionV5Config = {
  kernelName: NonMaxSuppressionV5,
  backendName: "wasm",
  setupFunc: setup50,
  kernelFunc: kernelFunc2
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/NotEqual.js
init_dist();
var supportsFullBroadcast15 = false;
var notEqualConfig = createBinaryKernelConfig(NotEqual, supportsFullBroadcast15, "bool");

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/OneHot.js
init_dist();
var wasmOneHot;
function setup51(backend) {
  wasmOneHot = backend.wasm.cwrap(OneHot, null, [
    "number",
    "number",
    "number",
    "number",
    "number"
    // out_id
  ]);
}
function oneHot(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    indices
  } = inputs;
  const {
    dtype,
    depth,
    onValue,
    offValue
  } = attrs;
  const out = backend.makeOutput([...indices.shape, depth], dtype);
  const outId = backend.dataIdMap.get(out.dataId).id;
  const indicesData = backend.dataIdMap.get(indices.dataId);
  const indicesId = indicesData.id;
  wasmOneHot(indicesId, depth, onValue, offValue, outId);
  return out;
}
var oneHotConfig = {
  kernelName: OneHot,
  backendName: "wasm",
  setupFunc: setup51,
  kernelFunc: oneHot
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/OnesLike.js
init_dist();
function onesLike(args) {
  const {
    inputs: {
      x
    },
    backend
  } = args;
  const out = backend.makeOutput(x.shape, x.dtype);
  const outVals = backend.typedArrayFromHeap(out);
  outVals.fill(1);
  return out;
}
var onesLikeConfig = {
  kernelName: OnesLike,
  backendName: "wasm",
  kernelFunc: onesLike
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Pack.js
init_dist();
function pack(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    axis
  } = attrs;
  if (inputs.length === 1) {
    return expandDims({
      inputs: {
        input: inputs[0]
      },
      backend,
      attrs: {
        dim: axis
      }
    });
  }
  const shape = inputs[0].shape;
  const dtype = inputs[0].dtype;
  inputs.forEach((t) => {
    util_exports.assertShapesMatch(shape, t.shape, "All tensors passed to stack must have matching shapes");
    util_exports.assert(dtype === t.dtype, () => "All tensors passed to stack must have matching dtypes");
  });
  const intermediateTensorInfos = [];
  const expandedTensors = inputs.map((t) => {
    const expandedT = expandDims({
      inputs: {
        input: t
      },
      backend,
      attrs: {
        dim: axis
      }
    });
    intermediateTensorInfos.push(expandedT);
    return expandedT;
  });
  const result = concat({
    inputs: expandedTensors,
    backend,
    attrs: {
      axis
    }
  });
  intermediateTensorInfos.forEach((t) => backend.disposeData(t.dataId));
  return result;
}
var packConfig = {
  kernelName: Pack,
  backendName: "wasm",
  kernelFunc: pack
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/PadV2.js
init_dist();
var wasmPadV2;
function setup52(backend) {
  wasmPadV2 = backend.wasm.cwrap(PadV2, null, [
    "number",
    "array",
    "number",
    "number",
    "array",
    "array",
    "number",
    "number"
    // outId
  ]);
}
function pad(args) {
  const {
    inputs: {
      x
    },
    backend,
    attrs: {
      paddings,
      constantValue
    }
  } = args;
  const outShape = paddings.map(
    (p, i) => p[0] + x.shape[i] + p[1]
    /* afterPad */
  );
  if (util_exports.sizeFromShape(x.shape) === 0) {
    return fill({
      backend,
      attrs: {
        shape: outShape,
        value: constantValue,
        dtype: x.dtype
      }
    });
  }
  const xId = backend.dataIdMap.get(x.dataId).id;
  const out = backend.makeOutput(outShape, x.dtype);
  const outTensorData = backend.dataIdMap.get(out.dataId);
  const outId = outTensorData.id;
  const xShapeBytes = new Uint8Array(new Int32Array(x.shape).buffer);
  const prePaddingsFlat = paddings.map((padTuple) => padTuple[0]);
  const postPaddingsFlat = paddings.map((padTuple) => padTuple[1]);
  const prePaddingsBytes = new Uint8Array(new Int32Array(prePaddingsFlat).buffer);
  const postPaddingsBytes = new Uint8Array(new Int32Array(postPaddingsFlat).buffer);
  wasmPadV2(xId, xShapeBytes, x.shape.length, CppDType[x.dtype], prePaddingsBytes, postPaddingsBytes, constantValue, outId);
  return out;
}
var padV2Config = {
  kernelName: PadV2,
  backendName: "wasm",
  kernelFunc: pad,
  setupFunc: setup52
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Pow.js
init_dist();
var supportsFullBroadcast16 = false;
var powConfig = createBinaryKernelConfig(Pow, supportsFullBroadcast16);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Prelu.js
init_dist();
var wasmPrelu;
function setup53(backend) {
  wasmPrelu = backend.wasm.cwrap(Prelu, null, [
    "number",
    "number",
    "number"
    // out_id
  ]);
}
function prelu(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    x,
    alpha
  } = inputs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  const weightsId = backend.dataIdMap.get(alpha.dataId).id;
  let inputId = xId;
  const input = x;
  let castedInput = input;
  if (input.dtype !== "float32") {
    castedInput = cast({
      backend,
      inputs: {
        x
      },
      attrs: {
        dtype: "float32"
      }
    });
    inputId = backend.dataIdMap.get(castedInput.dataId).id;
  }
  const out = backend.makeOutput(x.shape, "float32");
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmPrelu(inputId, weightsId, outId);
  if (input.dtype !== "float32") {
    backend.disposeData(castedInput.dataId);
  }
  return out;
}
var preluConfig = {
  kernelName: Prelu,
  backendName: "wasm",
  setupFunc: setup53,
  kernelFunc: prelu
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Prod.js
init_dist();
var wasmProd;
function setup54(backend) {
  wasmProd = backend.wasm.cwrap(Prod, null, ["number", "number", "number", "number"]);
}
function prod(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    axis,
    keepDims
  } = attrs;
  const {
    x
  } = inputs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  let inputId = xId;
  let input = x;
  const {
    transposed,
    axes,
    originalAxes,
    inputWasTransposed
  } = permuteAxesAndTranspose(x, axis, backend);
  let reductionAxes = axes;
  if (inputWasTransposed) {
    const transposedId = backend.dataIdMap.get(transposed.dataId).id;
    if (transposedId !== xId) {
      input = transposed;
      inputId = transposedId;
      reductionAxes = backend_util_exports.getInnerMostAxes(reductionAxes.length, input.shape.length);
    }
  }
  backend_util_exports.assertAxesAreInnerMostDims("prod", reductionAxes, input.shape.length);
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(input.shape, reductionAxes);
  const reduceSize = util_exports.sizeFromShape(reduceShape);
  const out = backend.makeOutput(outShape, input.dtype);
  if (util_exports.sizeFromShape(input.shape) !== 0) {
    const outId = backend.dataIdMap.get(out.dataId).id;
    wasmProd(inputId, reduceSize, CppDType[out.dtype], outId);
  }
  if (inputWasTransposed) {
    backend.disposeData(transposed.dataId);
  }
  if (keepDims) {
    const newShape = backend_util_exports.expandShapeToKeepDim(out.shape, originalAxes);
    out.shape = newShape;
  }
  return out;
}
var prodConfig = {
  kernelName: Prod,
  backendName: "wasm",
  setupFunc: setup54,
  kernelFunc: prod
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Range.js
init_dist();
var range = (args) => {
  const {
    backend,
    attrs
  } = args;
  const {
    start,
    stop,
    step: step2,
    dtype
  } = attrs;
  const values = rangeImpl(start, stop, step2, dtype);
  const out = backend.makeOutput([values.length], dtype);
  const outVals = backend.typedArrayFromHeap(out);
  outVals.set(values);
  return out;
};
var rangeConfig = {
  kernelName: Range,
  backendName: "wasm",
  kernelFunc: range
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/RealDiv.js
init_dist();
var supportsFullBroadcast17 = true;
var realDivConfig = createBinaryKernelConfig(RealDiv, supportsFullBroadcast17);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Reciprocal.js
init_dist();
var reciprocalConfig = createUnaryKernelConfig(Reciprocal);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Relu.js
init_dist();
var reluConfig = createUnaryKernelConfig(Relu);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Relu6.js
init_dist();
var relu6Config = createUnaryKernelConfig(Relu6);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/ResizeBilinear.js
init_dist();
var wasmResizeBilinear;
function setup55(backend) {
  wasmResizeBilinear = backend.wasm.cwrap(ResizeBilinear, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // outId
  ]);
}
function resizeBilinear(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    images
  } = inputs;
  const {
    alignCorners,
    halfPixelCenters,
    size
  } = attrs;
  const [newHeight, newWidth] = size;
  const [batch, oldHeight, oldWidth, numChannels] = images.shape;
  const outShape = [batch, newHeight, newWidth, numChannels];
  let xData = backend.dataIdMap.get(images.dataId);
  let castedData;
  if (xData.dtype !== "float32") {
    castedData = cast({
      backend,
      inputs: {
        x: images
      },
      attrs: {
        dtype: "float32"
      }
    });
    xData = backend.dataIdMap.get(castedData.dataId);
  }
  const xId = xData.id;
  const out = backend.makeOutput(outShape, "float32");
  if (util_exports.sizeFromShape(images.shape) === 0) {
    return out;
  }
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmResizeBilinear(xId, batch, oldHeight, oldWidth, numChannels, newHeight, newWidth, alignCorners ? 1 : 0, halfPixelCenters ? 1 : 0, outId);
  if (castedData != null) {
    backend.disposeData(castedData.dataId);
  }
  return out;
}
var resizeBilinearConfig = {
  kernelName: ResizeBilinear,
  backendName: "wasm",
  setupFunc: setup55,
  kernelFunc: resizeBilinear
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/ResizeBilinearGrad.js
init_dist();
var wasmResizeBilinearGrad;
function setup56(backend) {
  wasmResizeBilinearGrad = backend.wasm.cwrap(ResizeBilinearGrad, null, [
    "number",
    "number",
    "number",
    "array",
    "array",
    "boolean"
    // alignCorners
  ]);
}
function resizeBilinearGrad(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    images,
    dy
  } = inputs;
  const {
    alignCorners
  } = attrs;
  const dx = backend.makeOutput(images.shape, "float32");
  let xData = backend.dataIdMap.get(images.dataId);
  let castedData;
  if (xData.dtype !== "float32") {
    castedData = cast({
      backend,
      inputs: {
        x: images
      },
      attrs: {
        dtype: "float32"
      }
    });
    xData = backend.dataIdMap.get(castedData.dataId);
  }
  wasmResizeBilinearGrad(backend.dataIdMap.get(images.dataId).id, backend.dataIdMap.get(dy.dataId).id, backend.dataIdMap.get(dx.dataId).id, new Uint8Array(new Int32Array(images.shape).buffer), new Uint8Array(new Int32Array(dy.shape).buffer), alignCorners);
  if (castedData != null) {
    backend.disposeData(castedData.dataId);
  }
  return dx;
}
var resizeBilinearGradConfig = {
  kernelName: ResizeBilinearGrad,
  backendName: "wasm",
  setupFunc: setup56,
  kernelFunc: resizeBilinearGrad
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/ResizeNearestNeighbor.js
init_dist();
var wasmResizeNearestNeighbor;
function setup57(backend) {
  wasmResizeNearestNeighbor = backend.wasm.cwrap(ResizeNearestNeighbor, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // outId
  ]);
}
function resizeNearestNeighbor(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    images
  } = inputs;
  const {
    alignCorners,
    halfPixelCenters,
    size
  } = attrs;
  const [newHeight, newWidth] = size;
  const [batch, oldHeight, oldWidth, numChannels] = images.shape;
  const outShape = [batch, newHeight, newWidth, numChannels];
  const out = backend.makeOutput(outShape, "float32");
  if (util_exports.sizeFromShape(images.shape) === 0) {
    return out;
  }
  let xData = backend.dataIdMap.get(images.dataId);
  let castedData;
  if (xData.dtype !== "float32") {
    castedData = cast({
      backend,
      inputs: {
        x: images
      },
      attrs: {
        dtype: "float32"
      }
    });
    xData = backend.dataIdMap.get(castedData.dataId);
  }
  const xId = xData.id;
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmResizeNearestNeighbor(xId, batch, oldHeight, oldWidth, numChannels, newHeight, newWidth, alignCorners ? 1 : 0, halfPixelCenters ? 1 : 0, outId);
  if (castedData != null) {
    backend.disposeData(castedData.dataId);
  }
  return out;
}
var resizeNearestNeighborConfig = {
  kernelName: ResizeNearestNeighbor,
  backendName: "wasm",
  setupFunc: setup57,
  kernelFunc: resizeNearestNeighbor
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/ResizeNearestNeighborGrad.js
init_dist();
var wasmResizeNearestNeighborGrad;
function setup58(backend) {
  wasmResizeNearestNeighborGrad = backend.wasm.cwrap(ResizeNearestNeighborGrad, null, [
    "number",
    "number",
    "number",
    "array",
    "array",
    "boolean"
    // alignCorners
  ]);
}
function resizeNearestNeighborGrad(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    images,
    dy
  } = inputs;
  const {
    alignCorners
  } = attrs;
  const dx = backend.makeOutput(images.shape, "float32");
  let xData = backend.dataIdMap.get(images.dataId);
  let castedData;
  if (xData.dtype !== "float32") {
    castedData = cast({
      backend,
      inputs: {
        x: images
      },
      attrs: {
        dtype: "float32"
      }
    });
    xData = backend.dataIdMap.get(castedData.dataId);
  }
  wasmResizeNearestNeighborGrad(backend.dataIdMap.get(images.dataId).id, backend.dataIdMap.get(dy.dataId).id, backend.dataIdMap.get(dx.dataId).id, new Uint8Array(new Int32Array(images.shape).buffer), new Uint8Array(new Int32Array(dy.shape).buffer), alignCorners);
  if (castedData != null) {
    backend.disposeData(castedData.dataId);
  }
  return dx;
}
var resizeNearestNeighborGradConfig = {
  kernelName: ResizeNearestNeighborGrad,
  backendName: "wasm",
  setupFunc: setup58,
  kernelFunc: resizeNearestNeighborGrad
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Reverse.js
init_dist();
var wasmReverse;
function setup59(backend) {
  wasmReverse = backend.wasm.cwrap(Reverse, null, [
    "number",
    "array",
    "number",
    "array",
    "number",
    "number"
    // out_id
  ]);
}
function reverse(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    dims
  } = attrs;
  const axes = util_exports.parseAxisParam(dims, x.shape);
  if (x.shape.length === 0) {
    return identity({
      inputs: {
        x
      },
      backend
    });
  }
  const out = backend.makeOutput(x.shape, x.dtype);
  const xId = backend.dataIdMap.get(x.dataId).id;
  const outId = backend.dataIdMap.get(out.dataId).id;
  const axesBytes = new Uint8Array(new Int32Array(axes).buffer);
  const outShapeBytes = new Uint8Array(new Int32Array(x.shape).buffer);
  wasmReverse(xId, axesBytes, axes.length, outShapeBytes, x.shape.length, outId);
  const reshaped = reshape({
    inputs: {
      x: out
    },
    attrs: {
      shape: x.shape
    },
    backend
  });
  backend.disposeData(out.dataId);
  return reshaped;
}
var reverseConfig = {
  kernelName: Reverse,
  backendName: "wasm",
  kernelFunc: reverse,
  setupFunc: setup59
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/RotateWithOffset.js
init_dist();
init_dist();
var wasmRotate;
function setup60(backend) {
  wasmRotate = backend.wasm.cwrap(RotateWithOffset, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "array",
    "number",
    "number"
    // outId
  ]);
}
function rotateWithOffset(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    image
  } = inputs;
  const {
    radians,
    fillValue,
    center
  } = attrs;
  const out = backend.makeOutput(image.shape, image.dtype);
  const imageId = backend.dataIdMap.get(image.dataId).id;
  const outId = backend.dataIdMap.get(out.dataId).id;
  const [batch, imageHeight, imageWidth, numChannels] = image.shape;
  const [centerX, centerY] = backend_util_exports.getImageCenter(center, imageHeight, imageWidth);
  const fillIsBlack = fillValue === 0;
  const fullOpacityValue = 255;
  const fillValues = typeof fillValue === "number" ? [fillValue, fillValue, fillValue, fillIsBlack ? 0 : fullOpacityValue] : [...fillValue, fullOpacityValue];
  const fillBytes = new Uint8Array(new Int32Array(fillValues).buffer);
  wasmRotate(imageId, batch, imageHeight, imageWidth, numChannels, radians, centerX, centerY, fillBytes, fillValues.length, outId);
  return out;
}
var rotateWithOffsetConfig = {
  kernelName: RotateWithOffset,
  backendName: "wasm",
  kernelFunc: rotateWithOffset,
  setupFunc: setup60
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Round.js
init_dist();
var roundConfig = createUnaryKernelConfig(Round);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Rsqrt.js
init_dist();
var rsqrtConfig = createUnaryKernelConfig(Rsqrt);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/ScatterNd.js
init_dist();
var wasmScatterNd;
function setup61(backend) {
  wasmScatterNd = backend.wasm.cwrap(ScatterNd, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "array",
    "number",
    "number"
    // outId
  ]);
}
function scatterNd(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    indices,
    updates
  } = inputs;
  const {
    shape
  } = attrs;
  const out = backend.makeOutput(shape, updates.dtype);
  if (util_exports.sizeFromShape(shape) === 0) {
    return out;
  }
  const {
    sliceRank,
    numUpdates,
    sliceSize,
    strides,
    outputSize
  } = scatter_nd_util_exports.calculateShapes(updates, indices, shape);
  const indicesData = backend.dataIdMap.get(indices.dataId);
  const indicesId = indicesData.id;
  const updatesData = backend.dataIdMap.get(updates.dataId);
  const updatesId = updatesData.id;
  const stridesBytes = new Uint8Array(new Int32Array(strides).buffer);
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmScatterNd(indicesId, updatesId, CppDType[updates.dtype], sliceRank, numUpdates, sliceSize, stridesBytes, outputSize, outId);
  return out;
}
var scatterNdConfig = {
  kernelName: ScatterNd,
  backendName: "wasm",
  setupFunc: setup61,
  kernelFunc: scatterNd
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/SearchSorted.js
init_dist();
var wasmSearchSorted;
function setup62(backend) {
  wasmSearchSorted = backend.wasm.cwrap(SearchSorted, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "bool",
    "number"
    // outId
  ]);
}
function searchSorted(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    sortedSequence,
    values
  } = inputs;
  const {
    side
  } = attrs;
  if (sortedSequence.dtype !== values.dtype) {
    throw new Error(`SearchSorted error: sorted_sequence must have the same dtype as values. Got ${sortedSequence.dtype} and ${values.dtype}`);
  }
  const out = backend.makeOutput(values.shape, "int32");
  function tensorId(x) {
    return backend.dataIdMap.get(x.dataId).id;
  }
  wasmSearchSorted(
    tensorId(sortedSequence),
    tensorId(values),
    /*batchSize=*/
    sortedSequence.shape[0],
    /*sequenceSize=*/
    sortedSequence.shape[1],
    /*valuesSize=*/
    values.shape[1],
    /*dtype=*/
    CppDType[sortedSequence.dtype],
    /*isSideLeft=*/
    side === "left",
    tensorId(out)
  );
  return out;
}
var searchSortedConfig = {
  kernelName: SearchSorted,
  backendName: "wasm",
  setupFunc: setup62,
  kernelFunc: searchSorted
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Select.js
init_dist();
var wasmSelect;
function setup63(backend) {
  wasmSelect = backend.wasm.cwrap("SelectV2", null, [
    "number",
    "number",
    "number",
    "number",
    "number"
    // outId
  ]);
}
function select(args) {
  const {
    inputs,
    backend
  } = args;
  const {
    condition,
    t,
    e
  } = inputs;
  const conditionId = backend.dataIdMap.get(condition.dataId).id;
  const tId = backend.dataIdMap.get(t.dataId).id;
  const eId = backend.dataIdMap.get(e.dataId).id;
  const out = backend.makeOutput(t.shape, t.dtype);
  const outId = backend.dataIdMap.get(out.dataId).id;
  const cRank = condition.shape.length;
  const tRank = t.shape.length;
  const offset = cRank === 0 || cRank > 1 || tRank === 1 ? 1 : util_exports.sizeFromShape(t.shape.slice(1));
  wasmSelect(conditionId, tId, eId, offset, outId);
  return out;
}
var selectConfig = {
  kernelName: Select,
  backendName: "wasm",
  kernelFunc: select,
  setupFunc: setup63
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Selu.js
init_dist();
var seluConfig = createUnaryKernelConfig(Selu);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Sigmoid.js
init_dist();
var wasmFunc7;
function setup64(backend) {
  wasmFunc7 = backend.wasm.cwrap(Sigmoid, null, ["number", "number"]);
}
function sigmoid(args) {
  const {
    backend,
    inputs: {
      x
    }
  } = args;
  const xId = backend.dataIdMap.get(x.dataId).id;
  const out = backend.makeOutput(x.shape, x.dtype);
  const outId = backend.dataIdMap.get(out.dataId).id;
  if (util_exports.sizeFromShape(out.shape) === 0) {
    return out;
  }
  wasmFunc7(xId, outId);
  return out;
}
var sigmoidConfig = {
  kernelName: "Sigmoid",
  backendName: "wasm",
  setupFunc: setup64,
  kernelFunc: sigmoid
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Sign.js
init_dist();
var signConfig = createUnaryKernelConfig(Sign);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Sin.js
init_dist();
var sinConfig = createUnaryKernelConfig(Sin);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Sinh.js
init_dist();
var sinhConfig = createUnaryKernelConfig(Sinh);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Softplus.js
init_dist();
var softplusConfig = createUnaryKernelConfig(Softplus);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/SpaceToBatchND.js
init_dist();
function spaceToBatchND(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    blockShape,
    paddings
  } = attrs;
  const prod2 = util_exports.sizeFromShape(blockShape);
  const completePaddings = [[0, 0]];
  completePaddings.push(...paddings);
  for (let i = 1 + blockShape.length; i < x.shape.length; ++i) {
    completePaddings.push([0, 0]);
  }
  const paddedX = padV2Config.kernelFunc({
    inputs: {
      x
    },
    backend,
    attrs: {
      paddings: completePaddings,
      constantValue: 0
    }
  });
  const reshapedPaddedShape = backend_util_exports.getReshaped(paddedX.shape, blockShape, prod2, false);
  const permutedReshapedPaddedPermutation = backend_util_exports.getPermuted(reshapedPaddedShape.length, blockShape.length, false);
  const flattenShape = backend_util_exports.getReshapedPermuted(paddedX.shape, blockShape, prod2, false);
  const reshapeInputs = {
    x: paddedX
  };
  const reshapeAttrs = {
    shape: reshapedPaddedShape
  };
  const paddedXReshaped = reshape({
    inputs: reshapeInputs,
    backend,
    attrs: reshapeAttrs
  });
  const transposeInputs = {
    x: paddedXReshaped
  };
  const transposeAttrs = {
    perm: permutedReshapedPaddedPermutation
  };
  const paddedXT = transpose({
    inputs: transposeInputs,
    backend,
    attrs: transposeAttrs
  });
  const resultReshapeInputs = {
    x: paddedXT
  };
  const resultReshapeAttrs = {
    shape: flattenShape
  };
  const result = reshape({
    inputs: resultReshapeInputs,
    backend,
    attrs: resultReshapeAttrs
  });
  backend.disposeData(paddedX.dataId);
  backend.disposeData(paddedXReshaped.dataId);
  backend.disposeData(paddedXT.dataId);
  return result;
}
var spaceToBatchNDConfig = {
  kernelName: SpaceToBatchND,
  backendName: "wasm",
  kernelFunc: spaceToBatchND
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/SparseFillEmptyRows.js
init_dist();
var wasmSparseFillEmptyRows;
function setup65(backend) {
  wasmSparseFillEmptyRows = backend.wasm.cwrap("SparseFillEmptyRows", "number", [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // exceptionValuesId
  ]);
}
function sparseFillEmptyRows(args) {
  const {
    backend,
    inputs
  } = args;
  const {
    indices,
    values,
    denseShape,
    defaultValue
  } = inputs;
  const indicesCount = indices.shape[0];
  const rank = indices.shape[1];
  const denseRows = backend.readSync(denseShape.dataId)[0];
  const maxOutputIndicesShape = [indicesCount + denseRows, rank];
  const indicesId = backend.dataIdMap.get(indices.dataId).id;
  const valuesId = backend.dataIdMap.get(values.dataId).id;
  const defaultValueId = backend.dataIdMap.get(defaultValue.dataId).id;
  const outputIndices = backend.makeOutput(maxOutputIndicesShape, indices.dtype);
  const outputIndicesId = backend.dataIdMap.get(outputIndices.dataId).id;
  const outputValues = backend.makeOutput(maxOutputIndicesShape.slice(0, 1), values.dtype);
  const outputValuesId = backend.dataIdMap.get(outputValues.dataId).id;
  const emptyRowIndicator = backend.makeOutput([denseRows], "bool");
  const emptyRowIndicatorId = backend.dataIdMap.get(emptyRowIndicator.dataId).id;
  const reverseIndexMap = backend.makeOutput([indicesCount], indices.dtype);
  const reverseIndexMapId = backend.dataIdMap.get(reverseIndexMap.dataId).id;
  const exceptionValues = backend.makeOutput([4], "int32");
  const exceptionValuesId = backend.dataIdMap.get(exceptionValues.dataId).id;
  const outputRows = wasmSparseFillEmptyRows(indicesId, valuesId, CppDType[values.dtype], indicesCount, denseRows, rank, defaultValueId, outputIndicesId, outputValuesId, emptyRowIndicatorId, reverseIndexMapId, exceptionValuesId);
  const exceptionValuesArray = backend.readSync(exceptionValues.dataId);
  let exceptionMessage;
  switch (exceptionValuesArray[0]) {
    case 1: {
      exceptionMessage = backend_util_exports.getSparseFillEmptyRowsIndicesDenseShapeMismatch(exceptionValuesArray[1]);
      break;
    }
    case 2: {
      exceptionMessage = backend_util_exports.getSparseFillEmptyRowsNegativeIndexErrorMessage(exceptionValuesArray[1], exceptionValuesArray[2]);
      break;
    }
    case 3:
      exceptionMessage = backend_util_exports.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(exceptionValuesArray[1], exceptionValuesArray[2], exceptionValuesArray[3]);
      break;
    default:
      exceptionMessage = "";
  }
  backend.disposeData(exceptionValues.dataId);
  if (exceptionMessage) {
    backend.disposeData(outputIndices.dataId);
    backend.disposeData(outputValues.dataId);
    backend.disposeData(emptyRowIndicator.dataId);
    backend.disposeData(reverseIndexMap.dataId);
    throw new Error(exceptionMessage);
  }
  let resizedIndices = outputIndices;
  let resizedValues = outputValues;
  if (outputRows !== maxOutputIndicesShape[0]) {
    resizedIndices = slice({
      inputs: {
        x: outputIndices
      },
      attrs: {
        begin: 0,
        size: [outputRows, rank]
      },
      backend
    });
    resizedValues = slice({
      inputs: {
        x: outputValues
      },
      attrs: {
        begin: 0,
        size: outputRows
      },
      backend
    });
    backend.disposeData(outputIndices.dataId);
    backend.disposeData(outputValues.dataId);
  }
  return [resizedIndices, resizedValues, emptyRowIndicator, reverseIndexMap];
}
var sparseFillEmptyRowsConfig = {
  kernelName: SparseFillEmptyRows,
  backendName: "wasm",
  setupFunc: setup65,
  kernelFunc: sparseFillEmptyRows
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/SparseReshape.js
init_dist();
var wasmSparseReshape;
function setup66(backend) {
  wasmSparseReshape = backend.wasm.cwrap(SparseReshape, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // exceptionValuesId
  ]);
}
function sparseReshape(args) {
  const {
    backend,
    inputs
  } = args;
  const {
    inputIndices,
    inputShape,
    newShape
  } = inputs;
  if (inputIndices.shape.length !== 2) {
    throw new Error(`Input indices should be a matrix but received shape
        ${inputIndices.shape}`);
  }
  if (inputShape.shape.length !== 1) {
    throw new Error(`Input shape should be a vector but received shape
        ${inputShape.shape}`);
  }
  if (newShape.shape.length !== 1) {
    throw new Error(`Target shape should be a vector but received shape ${newShape.shape}`);
  }
  const inputIndicesId = backend.dataIdMap.get(inputIndices.dataId).id;
  const inputShapeId = backend.dataIdMap.get(inputShape.dataId).id;
  const newShapeId = backend.dataIdMap.get(newShape.dataId).id;
  const nnz = inputIndices.shape[0];
  const outputRank = util_exports.sizeFromShape(newShape.shape);
  const newIndices = backend.makeOutput([nnz, outputRank], inputIndices.dtype);
  const newIndicesId = backend.dataIdMap.get(newIndices.dataId).id;
  const outputShape = backend.makeOutput([outputRank], newShape.dtype);
  const outputShapeId = backend.dataIdMap.get(outputShape.dataId).id;
  const exceptionValues = backend.makeOutput([3], "int32");
  const exceptionValuesId = backend.dataIdMap.get(exceptionValues.dataId).id;
  wasmSparseReshape(inputIndicesId, inputShapeId, newShapeId, nnz, newIndicesId, outputShapeId, exceptionValuesId);
  const exceptionValuesArray = backend.readSync(exceptionValues.dataId);
  let exceptionMessage;
  switch (exceptionValuesArray[0]) {
    case 0: {
      exceptionMessage = backend_util_exports.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(exceptionValuesArray[1], exceptionValuesArray[2]);
      break;
    }
    case 1: {
      exceptionMessage = backend_util_exports.getSparseReshapeNegativeOutputDimErrorMessage(exceptionValuesArray[1], exceptionValuesArray[2]);
      break;
    }
    case 2:
      exceptionMessage = backend_util_exports.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage();
      break;
    case 3: {
      const inputShapeValues = Array.from(backend.readSync(inputShape.dataId)), outputShapeValues = Array.from(backend.readSync(outputShape.dataId));
      exceptionMessage = backend_util_exports.getSparseReshapeInputOutputMultipleErrorMessage(inputShapeValues, outputShapeValues);
      break;
    }
    case 4: {
      const inputShapeValues = Array.from(backend.readSync(inputShape.dataId)), outputShapeValues = Array.from(backend.readSync(outputShape.dataId));
      exceptionMessage = backend_util_exports.getSparseReshapeInputOutputMismatchErrorMessage(inputShapeValues, outputShapeValues);
      break;
    }
    default:
      exceptionMessage = "";
  }
  backend.disposeData(exceptionValues.dataId);
  if (exceptionMessage) {
    backend.disposeData(newIndices.dataId);
    backend.disposeData(outputShape.dataId);
    throw new Error(exceptionMessage);
  }
  return [newIndices, outputShape];
}
var sparseReshapeConfig = {
  kernelName: SparseReshape,
  backendName: "wasm",
  setupFunc: setup66,
  kernelFunc: sparseReshape
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/SparseSegmentMean.js
init_dist();

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/SparseSegmentReduction.js
init_dist();
var wasmSparseSegmentReduction;
function setup67(backend) {
  wasmSparseSegmentReduction = backend.wasm.cwrap("SparseSegmentReduction", null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number"
    // defaultValue
  ]);
}
function sparseSegmentReduction(args, isMean) {
  const {
    backend,
    inputs
  } = args;
  const {
    data,
    indices,
    segmentIds
  } = inputs;
  const numIndices = indices.shape[0];
  const segmentIdsBack = backend.readSync(segmentIds.dataId, numIndices - 1, numIndices)[0];
  const lastSegmentIdPlusOne = numIndices > 0 ? segmentIdsBack + 1 : 0;
  const outputRows = lastSegmentIdPlusOne;
  if (outputRows < 0) {
    throw new Error(backend_util_exports.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());
  }
  const outputShape = data.shape.slice();
  outputShape[0] = outputRows;
  const dataId = backend.dataIdMap.get(data.dataId).id;
  const indicesId = backend.dataIdMap.get(indices.dataId).id;
  const segmentIdsId = backend.dataIdMap.get(segmentIds.dataId).id;
  const output = backend.makeOutput(outputShape, data.dtype);
  const outputId = backend.dataIdMap.get(output.dataId).id;
  const exceptionValues = backend.makeOutput([4], "int32");
  const exceptionValuesId = backend.dataIdMap.get(exceptionValues.dataId).id;
  wasmSparseSegmentReduction(dataId, CppDType[data.dtype], data.shape[0], indicesId, segmentIdsId, outputId, exceptionValuesId, isMean, 0);
  const exceptionValuesArray = backend.readSync(exceptionValues.dataId);
  let exceptionMessage;
  switch (exceptionValuesArray[0]) {
    case 0: {
      exceptionMessage = backend_util_exports.getSparseSegmentReductionNegativeSegmentIdsErrorMessage();
      break;
    }
    case 1: {
      exceptionMessage = backend_util_exports.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage();
      break;
    }
    case 2:
      exceptionMessage = backend_util_exports.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(exceptionValuesArray[1], exceptionValuesArray[2]);
      break;
    case 3:
      exceptionMessage = backend_util_exports.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(exceptionValuesArray[1], exceptionValuesArray[2], exceptionValuesArray[3]);
      break;
    default:
      exceptionMessage = "";
  }
  backend.disposeData(exceptionValues.dataId);
  if (exceptionMessage) {
    backend.disposeData(output.dataId);
    throw new Error(exceptionMessage);
  }
  return output;
}

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/SparseSegmentMean.js
function sparseSegmentMean(args) {
  return sparseSegmentReduction(args, true);
}
var sparseSegmentMeanConfig = {
  kernelName: SparseSegmentMean,
  backendName: "wasm",
  setupFunc: setup67,
  kernelFunc: sparseSegmentMean
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/SparseSegmentSum.js
init_dist();
function sparseSegmentSum(args) {
  return sparseSegmentReduction(args, false);
}
var sparseSegmentSumConfig = {
  kernelName: SparseSegmentSum,
  backendName: "wasm",
  setupFunc: setup67,
  kernelFunc: sparseSegmentSum
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/SparseToDense.js
init_dist();
var wasmSparseToDense;
function setup68(backend) {
  wasmSparseToDense = backend.wasm.cwrap(SparseToDense, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "array",
    "number",
    "number"
    // outId
  ]);
}
function sparseToDense(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    sparseIndices,
    sparseValues,
    defaultValue
  } = inputs;
  const {
    outputShape
  } = attrs;
  const out = backend.makeOutput(outputShape, defaultValue.dtype);
  if (util_exports.sizeFromShape(outputShape) === 0) {
    return out;
  }
  const {
    sliceRank,
    numUpdates,
    sliceSize,
    strides,
    outputSize
  } = backend_util_exports.calculateShapes(sparseValues, sparseIndices, outputShape);
  const sparseIndicesId = backend.dataIdMap.get(sparseIndices.dataId).id;
  const sparseValuesId = backend.dataIdMap.get(sparseValues.dataId).id;
  const defaultValueId = backend.dataIdMap.get(defaultValue.dataId).id;
  const stridesBytes = new Uint8Array(new Int32Array(strides).buffer);
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmSparseToDense(sparseIndicesId, sparseValuesId, sparseValues.shape.length, defaultValueId, CppDType[defaultValue.dtype], sliceRank, numUpdates, sliceSize, stridesBytes, outputSize, outId);
  return out;
}
var sparseToDenseConfig = {
  kernelName: SparseToDense,
  backendName: "wasm",
  setupFunc: setup68,
  kernelFunc: sparseToDense
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/SplitV.js
init_dist();
init_dist();
function splitV(args) {
  const {
    inputs,
    attrs,
    backend
  } = args;
  const {
    x
  } = inputs;
  const {
    numOrSizeSplits,
    axis
  } = attrs;
  const $axis = util_exports.parseAxisParam(axis, x.shape)[0];
  const splitSizes = backend_util_exports.prepareSplitSize(x, numOrSizeSplits, $axis);
  const begin = new Array(x.shape.length).fill(0);
  const size = x.shape.slice();
  return splitSizes.map((s) => {
    const xSliceSize = [...size];
    xSliceSize[$axis] = s;
    const xSlice = slice({
      inputs: {
        x
      },
      attrs: {
        begin,
        size: xSliceSize
      },
      backend
    });
    begin[$axis] += s;
    return xSlice;
  });
}
var splitVConfig = {
  kernelName: SplitV,
  backendName: "wasm",
  kernelFunc: splitV
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Sqrt.js
init_dist();
var sqrtConfig = createUnaryKernelConfig(Sqrt);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Square.js
init_dist();
var squareConfig = createUnaryKernelConfig(Square);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/SquaredDifference.js
init_dist();
var supportsFullBroadcast18 = true;
var squaredDifferenceConfig = createBinaryKernelConfig(SquaredDifference, supportsFullBroadcast18);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Step.js
init_dist();
var wasmStep;
function setup69(backend) {
  wasmStep = backend.wasm.cwrap(Step, null, [
    "number",
    "number",
    "number",
    "number"
    // out_id
  ]);
}
function step(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    alpha
  } = attrs;
  const {
    x
  } = inputs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  const out = backend.makeOutput(x.shape, x.dtype);
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmStep(xId, alpha, CppDType[x.dtype], outId);
  return out;
}
var stepConfig = {
  kernelName: Step,
  backendName: "wasm",
  setupFunc: setup69,
  kernelFunc: step
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/StridedSlice.js
init_dist();
var wasmStridedSlice;
function setup70(backend) {
  wasmStridedSlice = backend.wasm.cwrap(StridedSlice, null, [
    "number",
    "array",
    "number",
    "array",
    "array",
    "array",
    "array",
    "array",
    "number",
    "number"
    // outId
  ]);
}
function stridedSlice(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const {
    begin,
    end,
    strides,
    beginMask,
    endMask,
    ellipsisMask,
    newAxisMask,
    shrinkAxisMask
  } = attrs;
  const {
    finalShapeSparse,
    finalShape,
    isIdentity,
    sliceDim0,
    isSimpleSlice,
    begin: $begin,
    end: $end,
    strides: $strides
  } = slice_util_exports.sliceInfo(x.shape, begin, end, strides, beginMask, endMask, ellipsisMask, newAxisMask, shrinkAxisMask);
  let result;
  if (isIdentity) {
    result = reshape({
      inputs: {
        x
      },
      backend,
      attrs: {
        shape: finalShape
      }
    });
  } else if (sliceDim0 || isSimpleSlice) {
    util_exports.assert(x.shape.length >= 1, () => `Input must have rank at least 1, got: ${x.shape.length}`);
    const size = slice_util_exports.computeOutShape($begin, $end, $strides);
    const sliced = slice({
      inputs: {
        x
      },
      backend,
      attrs: {
        begin: $begin,
        size
      }
    });
    result = reshape({
      inputs: {
        x: sliced
      },
      backend,
      attrs: {
        shape: finalShape
      }
    });
    backend.disposeData(sliced.dataId);
  } else {
    const out = backend.makeOutput(finalShapeSparse, "float32");
    const xId = backend.dataIdMap.get(x.dataId).id;
    const xStridesBytes = new Uint8Array(new Int32Array(util_exports.computeStrides(x.shape)).buffer);
    const beginBytes = new Uint8Array(new Int32Array($begin).buffer);
    const endBytes = new Uint8Array(new Int32Array($end).buffer);
    const stridesBytes = new Uint8Array(new Int32Array($strides).buffer);
    const outputShapeBytes = new Uint8Array(new Int32Array(finalShapeSparse).buffer);
    const outStridesBytes = new Uint8Array(new Int32Array(util_exports.computeStrides(finalShapeSparse)).buffer);
    const outId = backend.dataIdMap.get(out.dataId).id;
    wasmStridedSlice(xId, xStridesBytes, x.shape.length, beginBytes, endBytes, stridesBytes, outputShapeBytes, outStridesBytes, finalShapeSparse.length, outId);
    result = reshape({
      inputs: {
        x: out
      },
      backend,
      attrs: {
        shape: finalShape
      }
    });
    backend.disposeData(out.dataId);
  }
  return result;
}
var stridedSliceConfig = {
  kernelName: StridedSlice,
  backendName: "wasm",
  setupFunc: setup70,
  kernelFunc: stridedSlice
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/StringNGrams.js
init_dist();
function stringNGrams(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    data,
    dataSplits
  } = inputs;
  const {
    separator,
    nGramWidths,
    leftPad,
    rightPad,
    padWidth,
    preserveShortSequences
  } = attrs;
  const $data = backend.readSync(data.dataId);
  const $dataSplits = backend.readSync(dataSplits.dataId);
  const [nGrams, nGramsSplits] = stringNGramsImpl($data, $dataSplits, separator, nGramWidths, leftPad, rightPad, padWidth, preserveShortSequences);
  const nGramsOut = backend.makeOutput([nGrams.length], "string");
  const nGramsOutData = backend.dataIdMap.get(nGramsOut.dataId);
  nGramsOutData.stringBytes = nGrams;
  const nGramsSplitsOut = backend.makeOutput(dataSplits.shape, "int32");
  const nGramsSplitsOutVals = backend.typedArrayFromHeap(nGramsSplitsOut);
  nGramsSplitsOutVals.set(nGramsSplits);
  return [nGramsOut, nGramsSplitsOut];
}
var stringNGramsConfig = {
  kernelName: StringNGrams,
  backendName: "wasm",
  kernelFunc: stringNGrams
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/StringSplit.js
init_dist();
function stringSplit(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    input,
    delimiter
  } = inputs;
  const {
    skipEmpty
  } = attrs;
  const inputVals = backend.readSync(input.dataId);
  const delimiterVals = backend.readSync(delimiter.dataId);
  const [indices, values, shape] = stringSplitImpl(inputVals, delimiterVals[0], skipEmpty);
  const outputSize = values.length;
  const indicesOut = backend.makeOutput([outputSize, 2], "int32");
  const indicesOutVals = backend.typedArrayFromHeap(indicesOut);
  indicesOutVals.set(indices);
  const valuesOut = backend.makeOutput([outputSize], "string");
  const valuesOutData = backend.dataIdMap.get(valuesOut.dataId);
  valuesOutData.stringBytes = values;
  const shapeOut = backend.makeOutput([2], "int32");
  const shapeOutVals = backend.typedArrayFromHeap(shapeOut);
  shapeOutVals.set(shape);
  return [indicesOut, valuesOut, shapeOut];
}
var stringSplitConfig = {
  kernelName: StringSplit,
  backendName: "wasm",
  kernelFunc: stringSplit
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/StringToHashBucketFast.js
init_dist();
function stringToHashBucketFast(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    input
  } = inputs;
  const {
    numBuckets
  } = attrs;
  const inputVals = backend.readSync(input.dataId);
  const values = stringToHashBucketFastImpl(inputVals, numBuckets);
  const out = backend.makeOutput(input.shape, "int32");
  const outVals = backend.typedArrayFromHeap(out);
  outVals.set(values);
  return out;
}
var stringToHashBucketFastConfig = {
  kernelName: StringToHashBucketFast,
  backendName: "wasm",
  kernelFunc: stringToHashBucketFast
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Sub.js
init_dist();
var supportsFullBroadcast19 = true;
var subConfig = createBinaryKernelConfig(Sub, supportsFullBroadcast19);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Sum.js
init_dist();
var wasmSum;
function setup71(backend) {
  wasmSum = backend.wasm.cwrap(Sum, null, [
    "number",
    "number",
    "number",
    "number"
    // out_id
  ]);
}
function sum(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    axis,
    keepDims
  } = attrs;
  const {
    x
  } = inputs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  let inputId = xId;
  let input = x;
  const {
    transposed,
    axes,
    originalAxes,
    inputWasTransposed
  } = permuteAxesAndTranspose(x, axis, backend);
  let reductionAxes = axes;
  if (inputWasTransposed) {
    const transposedId = backend.dataIdMap.get(transposed.dataId).id;
    if (transposedId !== xId) {
      input = transposed;
      inputId = transposedId;
      reductionAxes = backend_util_exports.getInnerMostAxes(reductionAxes.length, input.shape.length);
    }
  }
  backend_util_exports.assertAxesAreInnerMostDims("sum", reductionAxes, input.shape.length);
  const [outShape, reduceShape] = backend_util_exports.computeOutAndReduceShapes(input.shape, reductionAxes);
  const reduceSize = util_exports.sizeFromShape(reduceShape);
  const out = backend.makeOutput(outShape, input.dtype);
  if (util_exports.sizeFromShape(input.shape) !== 0) {
    const outId = backend.dataIdMap.get(out.dataId).id;
    wasmSum(inputId, reduceSize, CppDType[out.dtype], outId);
  }
  if (inputWasTransposed) {
    backend.disposeData(transposed.dataId);
  }
  if (keepDims) {
    const newShape = backend_util_exports.expandShapeToKeepDim(out.shape, originalAxes);
    out.shape = newShape;
  }
  return out;
}
var sumConfig = {
  kernelName: Sum,
  backendName: "wasm",
  setupFunc: setup71,
  kernelFunc: sum
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Tan.js
init_dist();
var tanConfig = createUnaryKernelConfig(Tan);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Tanh.js
init_dist();
var tanhConfig = createUnaryKernelConfig(Tanh);

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/TensorScatterUpdate.js
init_dist();
var wasmTensorScatterUpdate;
function setup72(backend) {
  wasmTensorScatterUpdate = backend.wasm.cwrap(TensorScatterUpdate, null, [
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "array",
    "number",
    "number",
    "number"
    // tensorId
  ]);
}
function tensorScatterUpdate(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    tensor: tensor2,
    indices,
    updates
  } = inputs;
  const {} = attrs;
  const out = backend.makeOutput(tensor2.shape, tensor2.dtype);
  if (util_exports.sizeFromShape(tensor2.shape) === 0) {
    return out;
  }
  const {
    sliceRank,
    numUpdates,
    sliceSize,
    strides,
    outputSize
  } = scatter_nd_util_exports.calculateShapes(updates, indices, tensor2.shape);
  const indicesData = backend.dataIdMap.get(indices.dataId);
  const indicesId = indicesData.id;
  const updatesData = backend.dataIdMap.get(updates.dataId);
  const updatesId = updatesData.id;
  const tensorData = backend.dataIdMap.get(tensor2.dataId);
  const tensorId = tensorData.id;
  const stridesBytes = new Uint8Array(new Int32Array(strides).buffer);
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmTensorScatterUpdate(indicesId, updatesId, CppDType[updates.dtype], sliceRank, numUpdates, sliceSize, stridesBytes, outputSize, outId, tensorId);
  return out;
}
var tensorScatterUpdateConfig = {
  kernelName: TensorScatterUpdate,
  backendName: "wasm",
  setupFunc: setup72,
  kernelFunc: tensorScatterUpdate
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Tile.js
init_dist();
var wasmTile;
function setup73(backend) {
  wasmTile = backend.wasm.cwrap(Tile, null, [
    "number",
    "array",
    "number",
    "array",
    "number",
    "number"
    // out_id
  ]);
}
function tile(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    x
  } = inputs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  const {
    reps
  } = attrs;
  const newShape = new Array(x.shape.length);
  for (let i = 0; i < newShape.length; i++) {
    newShape[i] = x.shape[i] * reps[i];
  }
  const xShapeBytes = new Uint8Array(new Int32Array(x.shape).buffer);
  const newShapeBytes = new Uint8Array(new Int32Array(newShape).buffer);
  const out = backend.makeOutput(newShape, x.dtype);
  const outId = backend.dataIdMap.get(out.dataId).id;
  wasmTile(xId, xShapeBytes, x.shape.length, newShapeBytes, newShape.length, CppDType[out.dtype], outId);
  return out;
}
var tileConfig = {
  kernelName: Tile,
  backendName: "wasm",
  setupFunc: setup73,
  kernelFunc: tile
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/TopK.js
init_dist();
var wasmTopK;
function setup74(backend) {
  wasmTopK = backend.wasm.cwrap(TopK, null, [
    "number",
    "array",
    "number",
    "number",
    "number",
    "bool",
    "number",
    "number"
    // outIndicesId
  ]);
}
var topk = ({
  inputs,
  backend,
  attrs
}) => {
  const {
    x
  } = inputs;
  const {
    k,
    sorted
  } = attrs;
  const xId = backend.dataIdMap.get(x.dataId).id;
  const xShapeBytes = new Uint8Array(new Int32Array(x.shape).buffer);
  const outputShape = x.shape.slice();
  outputShape[outputShape.length - 1] = k;
  const outValues = backend.makeOutput(outputShape, x.dtype);
  const outValuesId = backend.dataIdMap.get(outValues.dataId).id;
  const outIndices = backend.makeOutput(outputShape, "int32");
  const outIndicesId = backend.dataIdMap.get(outIndices.dataId).id;
  wasmTopK(xId, xShapeBytes, x.shape.length, CppDType[x.dtype], k, sorted, outValuesId, outIndicesId);
  return [outValues, outIndices];
};
var topKConfig = {
  kernelName: TopK,
  backendName: "wasm",
  setupFunc: setup74,
  kernelFunc: topk
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Transform.js
init_dist();
var wasmTransform;
function setup75(backend) {
  wasmTransform = backend.wasm.cwrap(Transform, null, [
    "number",
    "number",
    "bool",
    "number",
    "number",
    "number",
    "number",
    "number",
    "number",
    "array",
    "number",
    "array",
    "number",
    "number",
    "number",
    "number",
    "number"
    // outId
  ]);
}
function transform(args) {
  const {
    backend,
    inputs,
    attrs
  } = args;
  const {
    image,
    transforms
  } = inputs;
  const {
    interpolation,
    fillMode,
    fillValue,
    outputShape
  } = attrs;
  const [batch, imageHeight, imageWidth, numChannels] = image.shape;
  const [outHeight, outWidth] = outputShape != null ? outputShape : [imageHeight, imageWidth];
  const outShape = [batch, outHeight, outWidth, numChannels];
  const inputStrides = new Uint8Array(new Int32Array(util_exports.computeStrides(image.shape)).buffer);
  const outputStrides = new Uint8Array(new Int32Array(util_exports.computeStrides(outShape)).buffer);
  const out = backend.makeOutput(outShape, image.dtype);
  const outId = backend.dataIdMap.get(out.dataId).id;
  const imageData = backend.dataIdMap.get(image.dataId);
  const imageId = imageData.id;
  const transformsData = backend.dataIdMap.get(transforms.dataId);
  const transformsId = transformsData.id;
  const interpolationModeId = interpolation === "nearest" ? 1 : 2;
  let fillModeId;
  switch (fillMode) {
    case "constant":
      fillModeId = 1;
      break;
    case "reflect":
      fillModeId = 2;
      break;
    case "wrap":
      fillModeId = 3;
      break;
    case "nearest":
      fillModeId = 4;
      break;
    default:
      fillModeId = 1;
      break;
  }
  wasmTransform(imageId, transformsId, transforms.shape[0] > 1, batch, outHeight, outWidth, numChannels, imageWidth, imageHeight, inputStrides, image.shape.length - 1, outputStrides, outShape.length - 1, interpolationModeId, fillModeId, fillValue, outId);
  return out;
}
var transformConfig = {
  kernelName: Transform,
  backendName: "wasm",
  setupFunc: setup75,
  kernelFunc: transform
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Unique.js
init_dist();
function unique(args) {
  const {
    inputs,
    attrs,
    backend
  } = args;
  const {
    axis
  } = attrs;
  const {
    x
  } = inputs;
  const {
    outputValues,
    outputShape,
    indices
  } = uniqueImpl(backend.readSync(x.dataId), axis, x.shape, x.dtype);
  return [backend.makeOutput(
    outputShape,
    x.dtype,
    /*memoryOffset=*/
    void 0,
    outputValues
  ), backend.makeOutput(
    [indices.length],
    "int32",
    /*memoryOffset=*/
    void 0,
    indices
  )];
}
var uniqueConfig = {
  kernelName: Unique,
  backendName: "wasm",
  kernelFunc: unique
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/Unpack.js
init_dist();
function unpack(args) {
  const {
    inputs,
    backend,
    attrs
  } = args;
  const {
    value
  } = inputs;
  let {
    axis
  } = attrs;
  if (axis < 0) {
    axis += value.shape.length;
  }
  const numOutputs = value.shape[axis];
  const rank = value.shape.length;
  const outShape = new Array(rank - 1);
  let outIndex = 0;
  for (let i = 0; i < rank; i++) {
    if (i !== axis) {
      outShape[outIndex++] = value.shape[i];
    }
  }
  const outs = new Array(numOutputs);
  const begin = new Array(rank).fill(0);
  const size = value.shape.slice();
  size[axis] = 1;
  for (let i = 0; i < outs.length; i++) {
    begin[axis] = i;
    outs[i] = slice({
      inputs: {
        x: value
      },
      attrs: {
        begin,
        size
      },
      backend
    });
  }
  return outs.map(({
    dataId,
    dtype
  }) => ({
    dataId,
    dtype,
    shape: outShape
  }));
}
var unpackConfig = {
  kernelName: Unpack,
  backendName: "wasm",
  kernelFunc: unpack
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/kernels/ZerosLike.js
init_dist();
function zerosLike(args) {
  const {
    inputs: {
      x
    },
    backend
  } = args;
  const out = backend.makeOutput(x.shape, x.dtype);
  const outVals = backend.typedArrayFromHeap(out);
  outVals.fill(0);
  return out;
}
var zerosLikeConfig = {
  kernelName: ZerosLike,
  backendName: "wasm",
  kernelFunc: zerosLike
};

// node_modules/@tensorflow/tfjs-backend-wasm/dist/register_all_kernels.js
var kernelConfigs = [_fusedMatMulConfig, absConfig, acosConfig, acoshConfig, addConfig, addNConfig, allConfig, anyConfig, argMaxConfig, argMinConfig, asinConfig, asinhConfig, atanConfig, atan2Config, atanhConfig, avgPoolConfig, avgPoolGradConfig, avgPool3DConfig, avgPool3DGradConfig, batchMatMulConfig, batchToSpaceNDConfig, bincountConfig, bitwiseAndConfig, broadcastArgsConfig, castConfig, ceilConfig, clipByValueConfig, concatConfig, conv2DConfig, conv2DBackpropInputConfig, conv3DConfig, conv3DBackpropFilterV2Config, conv3DBackpropInputV2Config, cosConfig, coshConfig, cropAndResizeConfig, cumprodConfig, cumsumConfig, denseBincountConfig, depthToSpaceConfig, depthwiseConv2dNativeConfig, diagConfig, dilation2DConfig, dilation2DBackpropFilterConfig, dilation2DBackpropInputConfig, eluConfig, eluGradConfig, equalConfig, erfConfig, expConfig, expandDimsConfig, expm1Config, fillConfig, flipLeftRightConfig, floorConfig, floorDivConfig, fusedBatchNormConfig, fusedConv2DConfig, fusedDepthwiseConv2DConfig, gatherNdConfig, gatherV2Config, greaterConfig, greaterEqualConfig, identityConfig, isFiniteConfig, isInfConfig, isNaNConfig, leakyReluConfig, lessConfig, lessEqualConfig, linSpaceConfig, log1pConfig, logConfig, logicalAndConfig, logicalNotConfig, logicalOrConfig, logicalXorConfig, lrnConfig, lrnGradConfig, maxConfig, maximumConfig, maxPoolConfig, maxPool3DConfig, maxPool3DGradConfig, maxPoolGradConfig, maxPoolWithArgmaxConfig, meanConfig, minConfig, minimumConfig, mirrorPadConfig, multinomialConfig, modConfig, multiplyConfig, negConfig, nonMaxSuppressionV3Config, nonMaxSuppressionV4Config, nonMaxSuppressionV5Config, notEqualConfig, oneHotConfig, onesLikeConfig, packConfig, padV2Config, powConfig, preluConfig, prodConfig, rangeConfig, realDivConfig, reciprocalConfig, reluConfig, relu6Config, reshapeConfig, resizeBilinearConfig, resizeBilinearGradConfig, resizeNearestNeighborConfig, resizeNearestNeighborGradConfig, reverseConfig, rotateWithOffsetConfig, roundConfig, rsqrtConfig, scatterNdConfig, searchSortedConfig, selectConfig, seluConfig, sigmoidConfig, signConfig, sinConfig, sinhConfig, sliceConfig, softmaxConfig, softplusConfig, spaceToBatchNDConfig, sparseFillEmptyRowsConfig, sparseReshapeConfig, sparseSegmentMeanConfig, sparseSegmentSumConfig, sparseToDenseConfig, splitVConfig, sqrtConfig, squareConfig, squaredDifferenceConfig, stepConfig, stridedSliceConfig, stringNGramsConfig, stringSplitConfig, stringToHashBucketFastConfig, subConfig, sumConfig, tanConfig, tanhConfig, tensorScatterUpdateConfig, tileConfig, topKConfig, transformConfig, transposeConfig, uniqueConfig, unpackConfig, zerosLikeConfig];
for (const kernelConfig of kernelConfigs) {
  registerKernel(kernelConfig);
}

// node_modules/@tensorflow/tfjs-backend-wasm/dist/base.js
var import_flags_wasm2 = __toESM(require_flags_wasm());
init_dist();

// node_modules/@tensorflow/tfjs-backend-wasm/dist/backend_wasm.js
var import_flags_wasm = __toESM(require_flags_wasm());
init_dist();
var wasmFactoryThreadedSimd_import = __toESM(require_tfjs_backend_wasm_threaded_simd());
var import_tfjs_backend_wasm_threaded_simd_worker = __toESM(require_tfjs_backend_wasm_threaded_simd_worker());
var wasmFactory_import = __toESM(require_tfjs_backend_wasm());
var wasmFactoryThreadedSimd = wasmFactoryThreadedSimd_import.default || wasmFactoryThreadedSimd_import;
var wasmFactory = wasmFactory_import.default || wasmFactory_import;
var BackendWasm = class extends KernelBackend {
  constructor(wasm) {
    super();
    this.wasm = wasm;
    this.dataIdNextNumber = 1;
    this.wasm.tfjs.initWithThreadsCount(threadsCount);
    actualThreadsCount = this.wasm.tfjs.getThreadsCount();
    this.dataIdMap = new DataStorage(this, engine());
  }
  write(values, shape, dtype) {
    const dataId = {
      id: this.dataIdNextNumber++
    };
    this.move(dataId, values, shape, dtype, 1);
    return dataId;
  }
  numDataIds() {
    return this.dataIdMap.numDataIds();
  }
  time(f) {
    return __async(this, null, function* () {
      const start = util_exports.now();
      f();
      const kernelMs = util_exports.now() - start;
      return {
        kernelMs
      };
    });
  }
  move(dataId, values, shape, dtype, refCount) {
    const id = this.dataIdNextNumber++;
    if (dtype === "string") {
      const stringBytes = values;
      this.dataIdMap.set(dataId, {
        id,
        stringBytes,
        shape,
        dtype,
        memoryOffset: null,
        refCount
      });
      return;
    }
    const size = util_exports.sizeFromShape(shape);
    const numBytes = size * util_exports.bytesPerElement(dtype);
    const memoryOffset = this.wasm._malloc(numBytes) >>> 0;
    this.dataIdMap.set(dataId, {
      id,
      memoryOffset,
      shape,
      dtype,
      refCount
    });
    this.wasm.tfjs.registerTensor(id, size, memoryOffset);
    if (values != null) {
      this.wasm.HEAPU8.set(new Uint8Array(values.buffer, values.byteOffset, numBytes), memoryOffset);
    }
  }
  read(dataId) {
    return __async(this, null, function* () {
      return this.readSync(dataId);
    });
  }
  readSync(dataId, start, end) {
    const {
      memoryOffset,
      dtype,
      shape,
      stringBytes
    } = this.dataIdMap.get(dataId);
    if (dtype === "string") {
      if ((start == null || start === 0) && (end == null || end >= stringBytes.length)) {
        return stringBytes;
      }
      return stringBytes.slice(start, end);
    }
    start = start || 0;
    end = end || util_exports.sizeFromShape(shape);
    const bytesPerElement = util_exports.bytesPerElement(dtype);
    const bytes = this.wasm.HEAPU8.slice(memoryOffset + start * bytesPerElement, memoryOffset + end * bytesPerElement);
    return typedArrayFromBuffer(bytes.buffer, dtype);
  }
  /**
   * Dispose the memory if the dataId has 0 refCount. Return true if the memory
   * is released, false otherwise.
   * @param dataId
   * @oaram force Optional, remove the data regardless of refCount
   */
  disposeData(dataId, force = false) {
    if (this.dataIdMap.has(dataId)) {
      const data = this.dataIdMap.get(dataId);
      data.refCount--;
      if (!force && data.refCount > 0) {
        return false;
      }
      this.wasm._free(data.memoryOffset);
      this.wasm.tfjs.disposeData(data.id);
      this.dataIdMap.delete(dataId);
    }
    return true;
  }
  /** Return refCount of a `TensorData`. */
  refCount(dataId) {
    if (this.dataIdMap.has(dataId)) {
      const tensorData = this.dataIdMap.get(dataId);
      return tensorData.refCount;
    }
    return 0;
  }
  incRef(dataId) {
    const data = this.dataIdMap.get(dataId);
    if (data != null) {
      data.refCount++;
    }
  }
  floatPrecision() {
    return 32;
  }
  // Returns the memory offset of a tensor. Useful for debugging and unit
  // testing.
  getMemoryOffset(dataId) {
    return this.dataIdMap.get(dataId).memoryOffset;
  }
  dispose() {
    this.wasm.tfjs.dispose();
    if ("PThread" in this.wasm) {
      this.wasm.PThread.terminateAllThreads();
    }
    this.wasm = null;
  }
  memory() {
    return {
      unreliable: false
    };
  }
  /**
   * Make a tensor info for the output of an op. If `memoryOffset` is not
   * present, this method allocates memory on the WASM heap. If `memoryOffset`
   * is present, the memory was allocated elsewhere (in c++) and we just record
   * the pointer where that memory lives.
   */
  makeOutput(shape, dtype, memoryOffset, values) {
    let dataId;
    if (memoryOffset == null) {
      dataId = this.write(values !== null && values !== void 0 ? values : null, shape, dtype);
    } else {
      const id = this.dataIdNextNumber++;
      dataId = {
        id
      };
      this.dataIdMap.set(dataId, {
        id,
        memoryOffset,
        shape,
        dtype,
        refCount: 1
      });
      const size = util_exports.sizeFromShape(shape);
      this.wasm.tfjs.registerTensor(id, size, memoryOffset);
    }
    return {
      dataId,
      shape,
      dtype
    };
  }
  typedArrayFromHeap({
    shape,
    dtype,
    dataId
  }) {
    const buffer = this.wasm.HEAPU8.buffer;
    const {
      memoryOffset
    } = this.dataIdMap.get(dataId);
    const size = util_exports.sizeFromShape(shape);
    switch (dtype) {
      case "float32":
        return new Float32Array(buffer, memoryOffset, size);
      case "int32":
        return new Int32Array(buffer, memoryOffset, size);
      case "bool":
        return new Uint8Array(buffer, memoryOffset, size);
      default:
        throw new Error(`Unknown dtype ${dtype}`);
    }
  }
};
function createInstantiateWasmFunc(path) {
  return (imports, callback) => {
    util_exports.fetch(path, {
      credentials: "same-origin"
    }).then((response) => {
      if (!response["ok"]) {
        imports.env.a(`failed to load wasm binary file at '${path}'`);
      }
      response.arrayBuffer().then((binary) => {
        WebAssembly.instantiate(binary, imports).then((output) => {
          callback(output.instance, output.module);
        });
      });
    });
    return {};
  };
}
function getPathToWasmBinary(simdSupported, threadsSupported, wasmModuleFolder) {
  if (wasmPath != null) {
    return wasmPath;
  }
  let path = "tfjs-backend-wasm.wasm";
  if (simdSupported && threadsSupported) {
    path = "tfjs-backend-wasm-threaded-simd.wasm";
  } else if (simdSupported) {
    path = "tfjs-backend-wasm-simd.wasm";
  }
  if (wasmFileMap != null) {
    if (wasmFileMap[path] != null) {
      return wasmFileMap[path];
    }
  }
  return wasmModuleFolder + path;
}
function init() {
  return __async(this, null, function* () {
    const [simdSupported, threadsSupported] = yield Promise.all([env().getAsync("WASM_HAS_SIMD_SUPPORT"), env().getAsync("WASM_HAS_MULTITHREAD_SUPPORT")]);
    return new Promise((resolve, reject) => {
      const factoryConfig = {};
      factoryConfig.locateFile = (path, prefix) => {
        if (path.endsWith(".worker.js")) {
          const response = import_tfjs_backend_wasm_threaded_simd_worker.wasmWorkerContents.replace(/\n/g, "\\n");
          const blob = new Blob([response], {
            type: "application/javascript"
          });
          return URL.createObjectURL(blob);
        }
        if (path.endsWith(".wasm")) {
          return getPathToWasmBinary(simdSupported, threadsSupported, wasmPathPrefix != null ? wasmPathPrefix : prefix);
        }
        return prefix + path;
      };
      if (customFetch) {
        factoryConfig.instantiateWasm = createInstantiateWasmFunc(getPathToWasmBinary(simdSupported, threadsSupported, wasmPathPrefix != null ? wasmPathPrefix : ""));
      }
      let initialized = false;
      factoryConfig.onAbort = () => {
        if (initialized) {
          return;
        }
        if (initAborted) {
          return;
        }
        initAborted = true;
        const rejectMsg = "Make sure the server can serve the `.wasm` file relative to the bundled js file. For more details see https://github.com/tensorflow/tfjs/blob/master/tfjs-backend-wasm/README.md#using-bundlers";
        reject({
          message: rejectMsg
        });
      };
      let wasm;
      if (threadsSupported && simdSupported && wasmPath == null) {
        factoryConfig.mainScriptUrlOrBlob = new Blob([`var WasmBackendModuleThreadedSimd = ` + wasmFactoryThreadedSimd.toString()], {
          type: "text/javascript"
        });
        wasm = wasmFactoryThreadedSimd(factoryConfig);
      } else {
        wasm = wasmFactory(factoryConfig);
      }
      wasm.then((module) => {
        initialized = true;
        initAborted = false;
        const voidReturnType = null;
        module.tfjs = {
          init: module.cwrap("init", null, []),
          initWithThreadsCount: module.cwrap("init_with_threads_count", null, ["number"]),
          getThreadsCount: module.cwrap("get_threads_count", "number", []),
          registerTensor: module.cwrap("register_tensor", null, [
            "number",
            "number",
            "number"
            // memoryOffset
          ]),
          disposeData: module.cwrap("dispose_data", voidReturnType, ["number"]),
          dispose: module.cwrap("dispose", voidReturnType, [])
        };
        resolve({
          wasm: module
        });
      }).catch(reject);
    });
  });
}
function typedArrayFromBuffer(buffer, dtype) {
  switch (dtype) {
    case "float32":
      return new Float32Array(buffer);
    case "int32":
      return new Int32Array(buffer);
    case "bool":
      return new Uint8Array(buffer);
    default:
      throw new Error(`Unknown dtype ${dtype}`);
  }
}
var wasmBinaryNames = ["tfjs-backend-wasm.wasm", "tfjs-backend-wasm-simd.wasm", "tfjs-backend-wasm-threaded-simd.wasm"];
var wasmPath = null;
var wasmPathPrefix = null;
var wasmFileMap = {};
var initAborted = false;
var customFetch = false;
function setWasmPath(path, usePlatformFetch = false) {
  deprecationWarn("setWasmPath has been deprecated in favor of setWasmPaths and will be removed in a future release.");
  if (initAborted) {
    throw new Error("The WASM backend was already initialized. Make sure you call `setWasmPath()` before you call `tf.setBackend()` or `tf.ready()`");
  }
  wasmPath = path;
  customFetch = usePlatformFetch;
}
function setWasmPaths(prefixOrFileMap, usePlatformFetch = false) {
  if (initAborted) {
    throw new Error("The WASM backend was already initialized. Make sure you call `setWasmPaths()` before you call `tf.setBackend()` or `tf.ready()`");
  }
  if (typeof prefixOrFileMap === "string") {
    wasmPathPrefix = prefixOrFileMap;
  } else {
    wasmFileMap = prefixOrFileMap;
    const missingPaths = wasmBinaryNames.filter((name) => wasmFileMap[name] == null);
    if (missingPaths.length > 0) {
      throw new Error(`There were no entries found for the following binaries: ${missingPaths.join(",")}. Please either call setWasmPaths with a map providing a path for each binary, or with a string indicating the directory where all the binaries can be found.`);
    }
  }
  customFetch = usePlatformFetch;
}
var threadsCount = -1;
var actualThreadsCount = -1;
function setThreadsCount(numThreads) {
  threadsCount = numThreads;
}
function getThreadsCount() {
  if (actualThreadsCount === -1) {
    throw new Error(`WASM backend not initialized.`);
  }
  return actualThreadsCount;
}

// node_modules/@tensorflow/tfjs-backend-wasm/dist/version.js
var version = "4.22.0";

// node_modules/@tensorflow/tfjs-backend-wasm/dist/base.js
var WASM_PRIORITY = 2;
registerBackend("wasm", () => __async(null, null, function* () {
  const {
    wasm
  } = yield init();
  return new BackendWasm(wasm);
}), WASM_PRIORITY);
export {
  BackendWasm,
  getThreadsCount,
  setThreadsCount,
  setWasmPath,
  setWasmPaths,
  version as version_wasm
};
/*! Bundled license information:

@tensorflow/tfjs-backend-wasm/dist/flags_wasm.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Identity.js:
@tensorflow/tfjs-backend-wasm/dist/kernel_utils/shared.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Conv2DBackpropInput.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Cumsum.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Equal.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Fill.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Floor.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Mean.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Softmax.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Neg.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/NonMaxSuppressionV4.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/NotEqual.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/OneHot.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/OnesLike.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Pack.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Prod.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Range.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Reverse.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Select.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/SplitV.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Sqrt.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Step.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/TopK.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/ZerosLike.js:
@tensorflow/tfjs-backend-wasm/dist/register_all_kernels.js:
@tensorflow/tfjs-backend-wasm/dist/base.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-backend-wasm/dist/kernels/types.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/_FusedMatMul.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/unary_kernel.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Abs.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/binary_kernel.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Add.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/AddN.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Transpose.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/ArgMax.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/AvgPool.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Reshape.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/BatchMatMul.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Slice.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Cast.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/ClipByValue.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Concat.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Conv2D.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Cos.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/CropAndResize.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/DepthToSpace.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/DepthwiseConv2dNative.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Exp.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/ExpandDims.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/FlipLeftRight.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/FloorDiv.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/FusedBatchNorm.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/FusedConv2D.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/FusedDepthwiseConv2D.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/GatherNd.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/GatherV2.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Greater.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/GreaterEqual.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/LeakyRelu.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Less.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/LessEqual.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Log.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/LogicalAnd.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/LogicalNot.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/LogicalOr.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/LogicalXor.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Max.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Maximum.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/MaxPool.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Min.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Minimum.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Multiply.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/NonMaxSuppression_util.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/NonMaxSuppressionV3.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/NonMaxSuppressionV5.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/PadV2.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Pow.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Prelu.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/RealDiv.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Relu.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Relu6.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/ResizeBilinear.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/RotateWithOffset.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Rsqrt.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/ScatterNd.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Sigmoid.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Sin.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Square.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/SquaredDifference.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Sub.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Sum.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Tanh.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Tile.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Unpack.js:
@tensorflow/tfjs-backend-wasm/dist/backend_wasm.js:
@tensorflow/tfjs-backend-wasm/dist/index.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-backend-wasm/dist/kernels/Acos.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Acosh.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/argminmax_kernel.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/ArgMin.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Asin.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Asinh.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Atan.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Atan2.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Atanh.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/AvgPool3D.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/AvgPool3DGrad.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/AvgPoolGrad.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Bincount.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/BitwiseAnd.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/BroadcastArgs.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Conv3D.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Conv3DBackpropFilterV2.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Conv3DBackpropInputV2.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/DenseBincount.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Diag.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Dilation2D.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Dilation2DBackpropFilter.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Dilation2DBackpropInput.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/EluGrad.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Erf.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Expm1.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/IsFinite.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/IsInf.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Log1p.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/LRN.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/LRNGrad.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/MaxPool3D.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/MaxPool3DGrad.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/MaxPoolGrad.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/MaxPoolWithArgmax.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Multinomial.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Mod.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/ResizeBilinearGrad.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/ResizeNearestNeighborGrad.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/SearchSorted.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Selu.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Sign.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Sinh.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Softplus.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Unique.js:
  (**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-backend-wasm/dist/kernels/kernel_utils.js:
  (**
   * @license
   * Copyright 2020 Google Inc. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-backend-wasm/dist/kernels/All.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Any.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/BatchToSpaceND.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Ceil.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Cosh.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Elu.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/MirrorPad.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Round.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/SpaceToBatchND.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/SparseFillEmptyRows.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/SparseReshape.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/SparseSegmentReduction.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/SparseSegmentMean.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/SparseSegmentSum.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/SparseToDense.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/StridedSlice.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/StringNGrams.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/StringSplit.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/StringToHashBucketFast.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Tan.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/Transform.js:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-backend-wasm/dist/kernels/Cumprod.js:
@tensorflow/tfjs-backend-wasm/dist/kernels/TensorScatterUpdate.js:
  (**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-backend-wasm/dist/kernels/IsNan.js:
  (**
   * @license
   * Copyright 2022 The TensorFlow Authors. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an AS IS BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-backend-wasm/dist/kernels/LinSpace.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-backend-wasm/dist/kernels/Reciprocal.js:
  (**
   * @license
   * Copyright 2022 The TensorFlow Authors. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-backend-wasm/dist/kernels/ResizeNearestNeighbor.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the 'License');
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an 'AS IS' BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-backend-wasm/dist/version.js:
  (** @license See the LICENSE file. *)
*/
//# sourceMappingURL=@tensorflow_tfjs-backend-wasm.js.map
