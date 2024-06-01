import { Test } from "@nestjs/testing"
import { Expo } from "expo-server-sdk"
import { EXPO_NOTIFICATIONS_OPTIONS } from "../src/constants"
import { ExpoNotificationsModule } from "../src/expo-notifications.module"

describe("Expo Notification Module", () => {
  describe("forRoot", () => {
    it("provide expo notification client", async () => {
      const module = await Test.createTestingModule({
        imports: [ExpoNotificationsModule.forRoot()],
      }).compile()

      const expoNotificationClient = module.get<Expo>(
        EXPO_NOTIFICATIONS_OPTIONS
      )

      expect(expoNotificationClient).toBeDefined()
      expect(expoNotificationClient).toBeInstanceOf(Expo)
    })
  })
})
