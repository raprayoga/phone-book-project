import type { Meta, StoryObj } from "@storybook/react"
import ErrorFeedback from "./index"

const meta: Meta<typeof ErrorFeedback> = {
  component: ErrorFeedback,
  args: {
    caption: "Terjadi Kesalahan, Silahkan Coba lagi",
  },
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof ErrorFeedback>

export const Default: Story = {
  render: (args: any) => {
    return <ErrorFeedback {...args} />
  },
}
