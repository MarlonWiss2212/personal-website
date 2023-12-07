import { render, screen } from "@testing-library/react"
import GithubLink from "./github-link";

const githubLink = "https://github.com/MarlonWiss2212"

describe("GitHub Link Component", () => {
    it("should show the image", async () => {
        render(<GithubLink gitHubLink={githubLink} />)
        const image = await screen.findByTestId(`githubImage${githubLink}`)
        expect(image).toBeVisible()
    })
})