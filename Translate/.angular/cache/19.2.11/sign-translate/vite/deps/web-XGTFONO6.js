import {
  getToken,
  initializeAppCheck,
  onTokenChanged,
  setTokenAutoRefreshEnabled
} from "./chunk-PFKZVI6W.js";
import "./chunk-GHEYXQJR.js";
import {
  getApp
} from "./chunk-4XWXGEXO.js";
import {
  WebPlugin
} from "./chunk-FX44ZPNA.js";
import {
  __async
} from "./chunk-H7FQKYJT.js";

// node_modules/@capacitor-firebase/app-check/dist/esm/web.js
var FirebaseAppCheckWeb = class _FirebaseAppCheckWeb extends WebPlugin {
  get appCheckInstance() {
    return this._appCheckInstance;
  }
  set appCheckInstance(value) {
    this._appCheckInstance = value;
    if (value) {
      this.registerOnTokenChangedListener();
    } else {
      this.unregisterOnTokenChangedListener();
    }
  }
  getToken(options) {
    return __async(this, null, function* () {
      if (!this.appCheckInstance) {
        throw new Error(_FirebaseAppCheckWeb.errorNotInitialized);
      }
      const result = yield getToken(this.appCheckInstance, options === null || options === void 0 ? void 0 : options.forceRefresh);
      return {
        token: result.token
      };
    });
  }
  initialize(options) {
    return __async(this, null, function* () {
      if (options === null || options === void 0 ? void 0 : options.debugToken) {
        self.FIREBASE_APPCHECK_DEBUG_TOKEN = options.debugToken;
      } else if (options === null || options === void 0 ? void 0 : options.debug) {
        self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
      }
      let provider = options === null || options === void 0 ? void 0 : options.provider;
      if (!provider) {
        if (!(options === null || options === void 0 ? void 0 : options.siteKey)) {
          throw new Error(_FirebaseAppCheckWeb.errorSiteKeyMissing);
        }
        const {
          ReCaptchaV3Provider
        } = yield import("./index.esm-DQJWJVD4.js");
        provider = new ReCaptchaV3Provider(options === null || options === void 0 ? void 0 : options.siteKey);
      }
      const app = getApp();
      this.appCheckInstance = initializeAppCheck(app, {
        provider,
        isTokenAutoRefreshEnabled: options === null || options === void 0 ? void 0 : options.isTokenAutoRefreshEnabled
      });
    });
  }
  setTokenAutoRefreshEnabled(options) {
    return __async(this, null, function* () {
      if (!this.appCheckInstance) {
        throw new Error(_FirebaseAppCheckWeb.errorNotInitialized);
      }
      setTokenAutoRefreshEnabled(this.appCheckInstance, options.enabled);
    });
  }
  registerOnTokenChangedListener() {
    if (!this.appCheckInstance) {
      return;
    }
    this.onTokenChangedListenerUnsubscribe = onTokenChanged(this.appCheckInstance, (tokenResult) => this.handleTokenChanged(tokenResult.token));
  }
  unregisterOnTokenChangedListener() {
    if (this.onTokenChangedListenerUnsubscribe) {
      this.onTokenChangedListenerUnsubscribe();
    }
  }
  handleTokenChanged(token) {
    const event = {
      token
    };
    this.notifyListeners(_FirebaseAppCheckWeb.tokenChangedEvent, event);
  }
};
FirebaseAppCheckWeb.tokenChangedEvent = "tokenChanged";
FirebaseAppCheckWeb.errorNotInitialized = "AppCheck has not been initialized.";
FirebaseAppCheckWeb.errorSiteKeyMissing = "siteKey must be provided.";
export {
  FirebaseAppCheckWeb
};
//# sourceMappingURL=web-XGTFONO6.js.map
