# NestJS Expo Notifications

Injectable Expo Notifications client for Nestjs

## Install
```bash
npm i @twirelab/nestjs-expo-notifications expo-server-sdk
```

or

```bash
yarn add @twirelab/nestjs-expo-notifications expo-server-sdk
```

## Usage

Add below code into app.module.js file.
```typescript
import { ExpoNotificationsModule } from "@twirelab/nestjs-expo-notifications";

@Module({
  imports: [
    ExpoNotificationsModule.forRoot({
        // optionally providing an access token if you have enabled push security
        accessToken: "..."
    }),
  ],
})
export class AppModule {}
```

Now you can inject authentication client into your services, for example:
```typescript
import { Injectable } from '@nestjs/common';
import { InjectExpoNotifications } from "@twirelab/nestjs-expo-notifications";
import { Expo } from "expo-server-sdk";

@Injectable()
export class AppService {
  constructor(@InjectExpoNotifications() private readonly expo: Expo) { }

  async sendNotifications(): Promise<TokenResponse> {
    return await this.expo.sendPushNotificationsAsync([
        {
            to: "ExponentPushToken[**********************]",
            title: "Testing notifications",
            body: "This is a testing notifications",
        }
    ]);
  }
}
```