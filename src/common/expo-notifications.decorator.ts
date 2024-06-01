import { Inject } from '@nestjs/common';
import { EXPO_NOTIFICATIONS_OPTIONS } from '../constants';

/**
 * Inject expo notification decorator.
 */
export function InjectExpoNotifications() {
    return Inject(EXPO_NOTIFICATIONS_OPTIONS);
}
