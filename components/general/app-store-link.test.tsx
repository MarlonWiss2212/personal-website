import AppStoreLink from "./app-store-link"
import { render, screen } from "@testing-library/react"

it("should mount app store link and image",async () => {
  const appStoreLink = "https://apps.apple.com/de/app/chattyevent/id6463625762"

  render(<AppStoreLink appStoreLink={appStoreLink} />)

  const [imageIsRendered, linkIsRendered] = await Promise.all([
    screen.findByTestId(`appStoreImage${appStoreLink}`),
    screen.findByTestId(`appStoreLink${appStoreLink}`)
  ]) 

  expect(imageIsRendered).toBeVisible()
  expect(linkIsRendered).toBeVisible()
})