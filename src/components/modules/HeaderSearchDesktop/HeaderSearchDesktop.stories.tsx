import type { Meta, StoryObj } from "@storybook/react"
import HeaderSearchDesktop from "./index"

const meta: Meta<typeof HeaderSearchDesktop> = {
  component: HeaderSearchDesktop,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof HeaderSearchDesktop>

export const Default: Story = {
  render: () => {
    return <HeaderSearchDesktop />
  },
}
