import type { Meta, StoryObj } from "@storybook/react"
import ToastAddForm from "./index"

const meta: Meta<typeof ToastAddForm> = {
  component: ToastAddForm,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof ToastAddForm>

export const Default: Story = {
  render: () => {
    return <ToastAddForm />
  },
}
