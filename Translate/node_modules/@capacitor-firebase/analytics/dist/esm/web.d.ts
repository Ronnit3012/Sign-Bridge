import { WebPlugin } from '@capacitor/core';
import type { FirebaseAnalyticsPlugin, GetAppInstanceIdResult, InitiateOnDeviceConversionMeasurementWithEmailAddressOptions, InitiateOnDeviceConversionMeasurementWithPhoneNumberOptions, InitiateOnDeviceConversionMeasurementWithHashedEmailAddressOptions, InitiateOnDeviceConversionMeasurementWithHashedPhoneNumberOptions, IsEnabledResult, LogEventOptions, SetConsentOptions, SetCurrentScreenOptions, SetEnabledOptions, SetSessionTimeoutDurationOptions, SetUserIdOptions, SetUserPropertyOptions } from './definitions';
export declare class FirebaseAnalyticsWeb extends WebPlugin implements FirebaseAnalyticsPlugin {
    getAppInstanceId(): Promise<GetAppInstanceIdResult>;
    setConsent(options: SetConsentOptions): Promise<void>;
    setUserId(options: SetUserIdOptions): Promise<void>;
    setUserProperty(options: SetUserPropertyOptions): Promise<void>;
    setCurrentScreen(options: SetCurrentScreenOptions): Promise<void>;
    logEvent(options: LogEventOptions): Promise<void>;
    setSessionTimeoutDuration(_options: SetSessionTimeoutDurationOptions): Promise<void>;
    setEnabled(_options: SetEnabledOptions): Promise<void>;
    isEnabled(): Promise<IsEnabledResult>;
    resetAnalyticsData(): Promise<void>;
    initiateOnDeviceConversionMeasurementWithEmailAddress(_options: InitiateOnDeviceConversionMeasurementWithEmailAddressOptions): Promise<void>;
    initiateOnDeviceConversionMeasurementWithPhoneNumber(_options: InitiateOnDeviceConversionMeasurementWithPhoneNumberOptions): Promise<void>;
    initiateOnDeviceConversionMeasurementWithHashedEmailAddress(_options: InitiateOnDeviceConversionMeasurementWithHashedEmailAddressOptions): Promise<void>;
    initiateOnDeviceConversionMeasurementWithHashedPhoneNumber(_options: InitiateOnDeviceConversionMeasurementWithHashedPhoneNumberOptions): Promise<void>;
}
