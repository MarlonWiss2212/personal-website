import AppStoreLink from "./app-store-link"
import { render, screen } from "@testing-library/react"

const appStoreLink = "https://apps.apple.com/de/app/chattyevent/id6463625762"

describe("App Store Link Component", () => {
  it("should show the image", async () => {
    render(<AppStoreLink appStoreLink={appStoreLink} />)
    const image = await screen.findByTestId(`appStoreImage${appStoreLink}`)
    expect(image).toBeVisible()
  })
})