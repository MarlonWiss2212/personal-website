import { Meta, StoryObj } from "@storybook/react";
import { NextIntlClientProvider } from "next-intl";
import messages from "../../../messages/en.json"
import ContactForm from "@/components/contact/contact-form";

const meta: Meta<typeof ContactForm> = {
  component: ContactForm,
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="en" messages={messages}>
        <Story/>
      </NextIntlClientProvider>
    ),
  ]
}

export default meta
type Story = StoryObj<typeof ContactForm>

export const Default: Story = {}