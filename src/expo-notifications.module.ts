import {DynamicModule, Logger, Module, Provider} from '@nestjs/common';
import {ExpoClientOptions} from 'expo-server-sdk';
import {ExpoNotificationsService} from "./expo-notifications.service";

@Module({})
export class ExpoNotificationsModule {
    /**
     * Provides a dynamic module for your application.
     *
     * @param options - Expo SDK options
     * @param isGlobal - Whether this module should be globally imported, by default its true
     */
    static forRoot(options?: ExpoClientOptions, isGlobal = true): DynamicModule {
        const providers: Provider[] = [
            {
                provide: ExpoNotificationsService,
                useValue: new ExpoNotificationsService(new Logger(), options),
            },
        ];

        return {
            global: isGlobal,
            module: ExpoNotificationsModule,
            providers,
            exports: providers,
        };
    }
}
