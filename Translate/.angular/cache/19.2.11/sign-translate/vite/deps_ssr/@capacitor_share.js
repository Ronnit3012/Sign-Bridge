import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  registerPlugin
} from "./chunk-CCBP4DRQ.js";
import "./chunk-5P6RLSS7.js";

// node_modules/@capacitor/share/dist/esm/index.js
var Share = registerPlugin("Share", {
  web: () => import("./web-KDQ5IUZX.js").then((m) => new m.ShareWeb())
});
export {
  Share
};
//# sourceMappingURL=@capacitor_share.js.map
