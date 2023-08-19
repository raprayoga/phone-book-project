import type { Meta, StoryObj } from "@storybook/react"
import ProfilePhoto from "./index"

const meta: Meta<typeof ProfilePhoto> = {
  component: ProfilePhoto,
  args: {
    contact: {
      first_name: "Aku",
      last_name: "& Kamu",
    },
  },
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof ProfilePhoto>

export const Default: Story = {
  render: (args) => {
    return <ProfilePhoto {...args} />
  },
}
