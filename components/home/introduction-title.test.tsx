import { expect } from "vitest";
import { render, screen } from "@testing-library/react"
import IntroductionTitle from "./introduction-title";
import { NextIntlClientProvider } from "next-intl";


describe("Introduction Title Component", () => {
  it("should render component", async () => {
    let messages = (await import(`./../../messages/en.json`)).default;
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <IntroductionTitle />
      </NextIntlClientProvider>
    )
    const component = await screen.findByTestId(`nameTitle`)
    expect(component).toBeDefined()
  })
})