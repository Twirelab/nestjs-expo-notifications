import { Global, DynamicModule, Module } from '@nestjs/common';
import { ExpoClientOptions } from 'expo-server-sdk';
import { createProviders } from './providers';

@Global()
@Module({})
export class ExpoNotificationsCoreModule {
    /**
     * Provides a dynamic module for your application.
     *
     * @param options - Expo SDK options
     */
    public static forRoot(options?: ExpoClientOptions): DynamicModule {
        const provider = createProviders(options);

        return {
            exports: [provider],
            module: ExpoNotificationsCoreModule,
            providers: [provider],
        };
    }
}
