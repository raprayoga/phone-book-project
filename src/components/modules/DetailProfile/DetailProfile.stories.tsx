import type { Meta, StoryObj } from "@storybook/react"
import DetailProfile from "./index"

const meta: Meta<typeof DetailProfile> = {
  component: DetailProfile,
  parameters: {
    args: {
      phones: [{ number: "021383756873" }],
    },
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof DetailProfile>

export const Default: Story = {
  render: (args) => {
    return <DetailProfile {...args} />
  },
}
