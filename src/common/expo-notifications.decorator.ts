import { Inject } from '@nestjs/common';
import { ExpoNotificationsDecorator } from '../interfaces';
import { EXPO_NOTIFICATIONS_OPTIONS } from '../constants';

export function InjectExpoNotifications(): ExpoNotificationsDecorator {
    return Inject(EXPO_NOTIFICATIONS_OPTIONS);
}
