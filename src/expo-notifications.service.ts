import {Injectable, Logger} from '@nestjs/common'
import {Expo, ExpoClientOptions, ExpoPushMessage, ExpoPushTicket} from 'expo-server-sdk';

@Injectable()
export class ExpoNotificationsService {
    private readonly expo: Expo

    constructor(
        private readonly logger: Logger,
        private readonly options: ExpoClientOptions,
    ) {
        this.logger.setContext('ExpoNotificationsService')
        this.expo = new Expo(options)
    }

    /**
     * Send messages.
     *
     * @param {ExpoPushMessage[]} messages
     *
     * @return {Promise<ExpoPushTicket[]>}
     */
    async sendMessages(messages: ExpoPushMessage[]): Promise<ExpoPushTicket[]> {
        return await this.expo.sendPushNotificationsAsync(messages);
    }
}
