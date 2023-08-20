import type { Meta, StoryObj } from "@storybook/react"
import SideBar from "./index"

const meta: Meta<typeof SideBar> = {
  component: SideBar,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof SideBar>

export const Default: Story = {
  render: () => {
    return <SideBar />
  },
}
