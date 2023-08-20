import type { Meta, StoryObj } from "@storybook/react"
import FormEdit from "./index"

const meta: Meta<typeof FormEdit> = {
  component: FormEdit,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof FormEdit>

export const Default: Story = {
  render: () => {
    return <FormEdit />
  },
}
