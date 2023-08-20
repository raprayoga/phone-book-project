import type { Meta, StoryObj } from "@storybook/react"
import FavoriteHeadline from "./index"

const meta: Meta<typeof FavoriteHeadline> = {
  component: FavoriteHeadline,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof FavoriteHeadline>

export const Default: Story = {
  render: () => {
    return <FavoriteHeadline />
  },
}
