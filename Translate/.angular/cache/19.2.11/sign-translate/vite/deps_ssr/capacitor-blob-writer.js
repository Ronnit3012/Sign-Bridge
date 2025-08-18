import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  Filesystem
} from "./chunk-K7MLR3SJ.js";
import "./chunk-XZ7RZ7WQ.js";
import {
  Capacitor,
  registerPlugin
} from "./chunk-CCBP4DRQ.js";
import "./chunk-5P6RLSS7.js";

// node_modules/capacitor-blob-writer/blob_writer.js
var BlobWriter = registerPlugin("BlobWriter");
function array_buffer_to_base64(buffer) {
  return window.btoa(Array.from(new Uint8Array(buffer)).map(function(byte) {
    return String.fromCharCode(byte);
  }).join(""));
}
function write_file_via_indexeddb({
  path,
  directory,
  blob,
  recursive
}) {
  return Filesystem.writeFile({
    directory,
    path,
    recursive,
    data: ""
  }).then(function() {
    return new Promise(function(resolve, reject) {
      function fail(event) {
        reject(event.target.error);
      }
      const connection = window.indexedDB.open("Disc");
      connection.onerror = fail;
      connection.onsuccess = function() {
        const db = connection.result;
        const transaction = db.transaction("FileStorage", "readwrite");
        transaction.onerror = fail;
        const store = transaction.objectStore("FileStorage");
        const name = `/${directory}/${path.replace(/^\//, "")}`;
        const load = store.get(name);
        load.onsuccess = function() {
          load.result.size = blob.size;
          load.result.content = blob;
          const put = store.put(load.result);
          put.onsuccess = function() {
            resolve(void 0);
          };
        };
      };
    });
  });
}
function write_file_via_bridge({
  path,
  directory,
  blob,
  recursive
}) {
  return Filesystem.writeFile({
    directory,
    path,
    recursive,
    data: ""
  }).then(function consume_blob() {
    if (blob.size === 0) {
      return Promise.resolve();
    }
    const chunk_size = 3 * 128 * 1024;
    const chunk_blob = blob.slice(0, chunk_size);
    blob = blob.slice(chunk_size);
    return new Response(chunk_blob).arrayBuffer().then(function append_chunk_to_file(buffer) {
      return Filesystem.appendFile({
        directory,
        path,
        data: array_buffer_to_base64(buffer)
      });
    }).then(consume_blob);
  });
}
function write_blob(options) {
  const {
    path,
    directory,
    blob,
    fast_mode = false,
    recursive,
    on_fallback
  } = options;
  if (!blob || !Number.isSafeInteger(blob.size) || typeof blob.type !== "string") {
    return Promise.reject(new Error("Not a Blob."));
  }
  if (Capacitor.getPlatform() === "web") {
    return fast_mode ? write_file_via_indexeddb(options) : write_file_via_bridge(options);
  }
  return Promise.all([BlobWriter.get_config(), Filesystem.getUri({
    path,
    directory
  })]).then(function([config, file_info]) {
    const absolute_path = file_info.uri.replace("file://", "");
    const real_fetch = window.CapacitorWebFetch || window.fetch;
    return real_fetch(config.base_url + absolute_path + (recursive ? "?recursive=true" : ""), {
      headers: {
        authorization: config.auth_token
      },
      method: "put",
      body: blob
    }).then(function(response) {
      if (response.status !== 204) {
        throw new Error("Bad HTTP status: " + response.status);
      }
      return file_info.uri;
    });
  }).catch(function on_fail(error) {
    if (on_fallback !== void 0) {
      on_fallback(error);
    }
    return write_file_via_bridge(options);
  });
}
var blob_writer_default = Object.freeze(write_blob);
export {
  blob_writer_default as default
};
//# sourceMappingURL=capacitor-blob-writer.js.map
