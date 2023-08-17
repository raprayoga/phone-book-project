import type { Meta, StoryObj } from "@storybook/react"
import Toast from "./index"

const meta: Meta<typeof Toast> = {
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Toast>

export const Default: Story = {
  render: () => {
    return <Toast>TOAST</Toast>
  },
}
