import { Meta, StoryObj } from "@storybook/react";
import { NextIntlClientProvider } from "next-intl";
import messages from "../../../messages/en.json"
import PersonalData from "@/components/about-me/personal-data";

const meta: Meta<typeof PersonalData> = {
  component: PersonalData,
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="en" messages={messages}>
        <Story/>
      </NextIntlClientProvider>
    ),
  ]
}

export default meta
type Story = StoryObj<typeof PersonalData>

export const Default: Story = {}