import { render, screen } from "@testing-library/react"
import PlayStoreLink from "./play-store-link";

const playStoreLink = "https://play.google.com/store/apps/details?id=com.chattyevent.chattyevent"

describe("Play Store Link Component", () => {
    it("should show the image", async () => {
        render(<PlayStoreLink playStoreLink={playStoreLink} />)
        const image = await screen.findByTestId(`playStoreImage${playStoreLink}`)
        expect(image).toBeVisible()
    })
})