import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  registerPlugin
} from "./chunk-CCBP4DRQ.js";
import "./chunk-5P6RLSS7.js";

// node_modules/@capacitor/keyboard/dist/esm/definitions.js
var KeyboardStyle;
(function(KeyboardStyle2) {
  KeyboardStyle2["Dark"] = "DARK";
  KeyboardStyle2["Light"] = "LIGHT";
  KeyboardStyle2["Default"] = "DEFAULT";
})(KeyboardStyle || (KeyboardStyle = {}));
var KeyboardResize;
(function(KeyboardResize2) {
  KeyboardResize2["Body"] = "body";
  KeyboardResize2["Ionic"] = "ionic";
  KeyboardResize2["Native"] = "native";
  KeyboardResize2["None"] = "none";
})(KeyboardResize || (KeyboardResize = {}));

// node_modules/@capacitor/keyboard/dist/esm/index.js
var Keyboard = registerPlugin("Keyboard");
export {
  Keyboard,
  KeyboardResize,
  KeyboardStyle
};
//# sourceMappingURL=@capacitor_keyboard.js.map
