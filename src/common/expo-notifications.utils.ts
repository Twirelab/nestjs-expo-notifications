import {Expo, ExpoClientOptions} from 'expo-server-sdk';
import {ExpoNotificationsClient} from '../interfaces';

/**
 *
 * @param options
 */
export function createClient(options?: ExpoClientOptions): ExpoNotificationsClient {
    return new Expo(options);
}
