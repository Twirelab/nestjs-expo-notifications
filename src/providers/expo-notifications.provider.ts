import { Provider } from '@nestjs/common';
import {ExpoClientOptions} from 'expo-server-sdk';
import {EXPO_NOTIFICATIONS_OPTIONS} from '../constants';
import { createClient } from '../common';

/**
 * Create providers.
 *
 * @param {ExpoClientOptions} options
 */
export function createProviders(options?: ExpoClientOptions): Provider {
    return {
        provide: EXPO_NOTIFICATIONS_OPTIONS,
        useValue: createClient(options),
    };
}
