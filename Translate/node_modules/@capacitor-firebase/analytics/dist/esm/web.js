import { WebPlugin } from '@capacitor/core';
import { getAnalytics, logEvent, setAnalyticsCollectionEnabled, setConsent, setUserId, setUserProperties, } from 'firebase/analytics';
import { ConsentStatus, ConsentType } from './definitions';
export class FirebaseAnalyticsWeb extends WebPlugin {
    async getAppInstanceId() {
        throw this.unimplemented('Not implemented on web.');
    }
    async setConsent(options) {
        const status = options.status === ConsentStatus.Granted ? 'granted' : 'denied';
        const consentSettings = {};
        switch (options.type) {
            case ConsentType.AdPersonalization:
                consentSettings.ad_personalization = status;
                break;
            case ConsentType.AdStorage:
                consentSettings.ad_storage = status;
                break;
            case ConsentType.AdUserData:
                consentSettings.ad_user_data = status;
                break;
            case ConsentType.AnalyticsStorage:
                consentSettings.analytics_storage = status;
                break;
            case ConsentType.FunctionalityStorage:
                consentSettings.functionality_storage = status;
                break;
            case ConsentType.PersonalizationStorage:
                consentSettings.personalization_storage = status;
                break;
        }
        setConsent(consentSettings);
    }
    async setUserId(options) {
        const analytics = getAnalytics();
        setUserId(analytics, options.userId);
    }
    async setUserProperty(options) {
        const analytics = getAnalytics();
        setUserProperties(analytics, {
            [options.key]: options.value,
        });
    }
    async setCurrentScreen(options) {
        const analytics = getAnalytics();
        logEvent(analytics, 'screen_view', {
            firebase_screen: options.screenName || undefined,
            firebase_screen_class: options.screenClassOverride || undefined,
        });
    }
    async logEvent(options) {
        const analytics = getAnalytics();
        logEvent(analytics, options.name, options.params);
    }
    async setSessionTimeoutDuration(_options) {
        throw this.unimplemented('Not implemented on web.');
    }
    async setEnabled(_options) {
        const analytics = getAnalytics();
        setAnalyticsCollectionEnabled(analytics, _options.enabled);
    }
    async isEnabled() {
        const enabled = window['ga-disable-analyticsId'] === true;
        return {
            enabled,
        };
    }
    async resetAnalyticsData() {
        throw this.unimplemented('Not implemented on web.');
    }
    async initiateOnDeviceConversionMeasurementWithEmailAddress(_options) {
        throw this.unimplemented('Not implemented on web.');
    }
    async initiateOnDeviceConversionMeasurementWithPhoneNumber(_options) {
        throw this.unimplemented('Not implemented on web.');
    }
    async initiateOnDeviceConversionMeasurementWithHashedEmailAddress(_options) {
        throw this.unimplemented('Not implemented on web.');
    }
    async initiateOnDeviceConversionMeasurementWithHashedPhoneNumber(_options) {
        throw this.unimplemented('Not implemented on web.');
    }
}
//# sourceMappingURL=web.js.map