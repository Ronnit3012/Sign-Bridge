import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  registerPlugin
} from "./chunk-CCBP4DRQ.js";
import "./chunk-5P6RLSS7.js";

// node_modules/@capacitor/splash-screen/dist/esm/index.js
var SplashScreen = registerPlugin("SplashScreen", {
  web: () => import("./web-SUGMYJ2W.js").then((m) => new m.SplashScreenWeb())
});
export {
  SplashScreen
};
//# sourceMappingURL=@capacitor_splash-screen.js.map
