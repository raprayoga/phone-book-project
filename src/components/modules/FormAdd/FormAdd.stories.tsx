import type { Meta, StoryObj } from "@storybook/react"
import FormAdd from "./index"

const meta: Meta<typeof FormAdd> = {
  component: FormAdd,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof FormAdd>

export const Default: Story = {
  render: () => {
    return <FormAdd />
  },
}
