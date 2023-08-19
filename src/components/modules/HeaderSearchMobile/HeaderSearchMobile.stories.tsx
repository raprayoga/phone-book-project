import type { Meta, StoryObj } from "@storybook/react"
import HeaderSearchMobile from "./index"

const meta: Meta<typeof HeaderSearchMobile> = {
  component: HeaderSearchMobile,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof HeaderSearchMobile>

export const Default: Story = {
  render: () => {
    return <HeaderSearchMobile />
  },
}
