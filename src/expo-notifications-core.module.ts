import {Global, DynamicModule, Module} from '@nestjs/common';
import {ExpoClientOptions} from 'expo-server-sdk';
import {createProviders} from './providers';

@Global()
@Module({})
export class ExpoNotificationsCoreModule {
    /**
     * Provides a dynamic module for your application.
     *
     * @param options - Expo SDK options
     * @param isGlobal - Whether this module should be globally imported, by default its true
     */
    public static forRoot(options?: ExpoClientOptions, isGlobal = true): DynamicModule {
        const provider = createProviders(options);

        return {
            exports: [provider],
            module: ExpoNotificationsCoreModule,
            providers: [provider],
        };
    }
}
