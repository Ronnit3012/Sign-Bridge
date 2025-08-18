import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  registerPlugin
} from "./chunk-CCBP4DRQ.js";
import "./chunk-5P6RLSS7.js";

// node_modules/@capacitor-firebase/storage/dist/esm/index.js
var FirebaseStorage = registerPlugin("FirebaseStorage", {
  web: () => import("./web-CVUR6WEX.js").then((m) => new m.FirebaseStorageWeb())
});
export {
  FirebaseStorage
};
//# sourceMappingURL=@capacitor-firebase_storage.js.map
