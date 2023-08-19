import type { Meta, StoryObj } from "@storybook/react"
import LoadingMobile from "./index"

const meta: Meta<typeof LoadingMobile> = {
  component: LoadingMobile,
  args: {},
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof LoadingMobile>

export const Default: Story = {
  render: (args: any) => {
    return <LoadingMobile {...args} />
  },
}
