import { expect } from "vitest";
import { render, screen } from "@testing-library/react"
import IntroductionTitle from "./introduction-title";
import { NextIntlClientProvider } from "next-intl";
import messages from  './../../messages/en.json';

describe("Introduction Title Component", () => {
  it("should render component", async () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <IntroductionTitle />
      </NextIntlClientProvider>
    )
    const component = await screen.findByTestId(`nameTitle`)
    expect(component).toBeDefined()
  })
})