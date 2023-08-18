import type { Meta, StoryObj } from "@storybook/react"
import BottomNav from "./index"

const meta: Meta<typeof BottomNav> = {
  component: BottomNav,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof BottomNav>

export const Default: Story = {
  render: (args: any) => {
    return <BottomNav {...args} style={{ width: "600px" }} />
  },
}
