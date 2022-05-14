import { Injectable } from "@nestjs/common"
import { Test, TestingModule } from "@nestjs/testing"
import { Expo } from "expo-server-sdk"
import { InjectExpoNotifications } from "../src/common/expo-notifications.decorator"
import { ExpoNotificationsModule } from "../src/expo-notifications.module"

describe("Inject Expo Notifications", () => {
  let module: TestingModule

  @Injectable()
  class TestService {
    public constructor(
      @InjectExpoNotifications() public readonly client: Expo
    ) {}
  }

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [ExpoNotificationsModule.forRoot()],
      providers: [TestService],
    }).compile()
  })

  describe("when decorating a class construcot parameter", () => {
    it("should inject the expo notifications client", () => {
      const testService = module.get(TestService)

      expect(testService.client).toBeInstanceOf(Expo)
    })
  })
})
