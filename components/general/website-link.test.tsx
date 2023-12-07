import { render, screen } from "@testing-library/react"
import WebsiteLink from "./website-link";

const websiteLink = "https://www.chattyevent.com/de"

describe("Website Link Component", () => {
    it("should show the image", async () => {
        render(<WebsiteLink websiteLink={websiteLink} />)
        const image = await screen.findByTestId(`websiteImage${websiteLink}`)
        expect(image).toBeVisible()
    })
})