import type { Meta, StoryObj } from "@storybook/react"
import Card from "./index"
import { action } from "@storybook/addon-actions"

const meta: Meta<typeof Card> = {
  component: Card,
  args: {
    children: "TEXTCARD",
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: (args: any) => {
    return <Card {...args} onClick={action("onCLick!")} />
  },
}
