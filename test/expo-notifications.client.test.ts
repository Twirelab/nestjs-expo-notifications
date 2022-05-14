import { createClient } from "../src/common/expo-notifications.utils"
import { Expo } from "expo-server-sdk"

describe("Create Expo Notifications Client", () => {
  it("Returns expo client", () => {
    const client = createClient({})

    expect(client).toBeInstanceOf(Expo)
  })
})
