import {DynamicModule, Module} from '@nestjs/common';
import {ExpoClientOptions} from 'expo-server-sdk';
import {ExpoNotificationsCoreModule} from './expo-notifications-core.module';

@Module({})
export class ExpoNotificationsModule {
    /**
     * Provides a dynamic module for your application.
     *
     * @param options - Expo SDK options
     */
    public static forRoot(options?: ExpoClientOptions): DynamicModule {
        return {
            module: ExpoNotificationsModule,
            imports: [ExpoNotificationsCoreModule.forRoot(options)],
        };
    }
}
