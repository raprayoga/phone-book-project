import type { Meta, StoryObj } from "@storybook/react"
import HeaderMobile from "./index"

const meta: Meta<typeof HeaderMobile> = {
  component: HeaderMobile,
  parameters: {
    args: {
      title: "TITLE",
    },
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof HeaderMobile>

export const Default: Story = {
  render: (args) => {
    return <HeaderMobile {...args} />
  },
}
