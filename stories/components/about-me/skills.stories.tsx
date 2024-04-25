import { Meta, StoryObj } from "@storybook/react";
import Skills from "../../../components/about-me/skills";
import { NextIntlClientProvider } from "next-intl";
import messages from "./../../../messages/en.json"

const meta: Meta<typeof Skills> = {
  component: Skills,
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="en" messages={messages}>
        <Story/>
      </NextIntlClientProvider>
    ),
  ]
}

export default meta
type Story = StoryObj<typeof Skills>

export const Default: Story = {}