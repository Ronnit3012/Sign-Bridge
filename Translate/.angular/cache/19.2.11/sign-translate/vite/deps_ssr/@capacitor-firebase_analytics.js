import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  ConsentStatus,
  ConsentType
} from "./chunk-NUFML27Q.js";
import {
  registerPlugin
} from "./chunk-CCBP4DRQ.js";
import "./chunk-5P6RLSS7.js";

// node_modules/@capacitor-firebase/analytics/dist/esm/index.js
var FirebaseAnalytics = registerPlugin("FirebaseAnalytics", {
  web: () => import("./web-RZJ63NLB.js").then((m) => new m.FirebaseAnalyticsWeb())
});
export {
  ConsentStatus,
  ConsentType,
  FirebaseAnalytics
};
//# sourceMappingURL=@capacitor-firebase_analytics.js.map
