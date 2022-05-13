import { Expo, ExpoClientOptions } from 'expo-server-sdk';
import { ExpoNotificationsClient } from '../interfaces';

/**
 *  Create client.
 * 
 * @param {ExpoClientOptions} options
 * 
 * @return {ExpoNotificationsClient}
 */
export function createClient(options?: ExpoClientOptions): ExpoNotificationsClient {
    return new Expo(options);
}
