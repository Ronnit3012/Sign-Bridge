import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  getToken,
  initializeAppCheck,
  onTokenChanged,
  setTokenAutoRefreshEnabled
} from "./chunk-675YATB6.js";
import {
  getApp,
  registerVersion
} from "./chunk-XGTVE7SK.js";
import {
  WebPlugin
} from "./chunk-CCBP4DRQ.js";
import {
  __async
} from "./chunk-5P6RLSS7.js";

// node_modules/firebase/app/dist/index.mjs
var name = "firebase";
var version = "11.9.1";
registerVersion(name, version, "app");

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
        } = yield import("./dist-PG2TCGFS.js");
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
/*! Bundled license information:

firebase/app/dist/index.mjs:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
//# sourceMappingURL=web-RRM5HZEQ.js.map
