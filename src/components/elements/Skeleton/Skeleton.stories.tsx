import type { Meta, StoryObj } from "@storybook/react"
import Skeleton from "./index"

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  args: {
    children: "Skeleton",
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: () => {
    return <Skeleton style={{ height: "50px", width: "200px" }} />
  },
}
