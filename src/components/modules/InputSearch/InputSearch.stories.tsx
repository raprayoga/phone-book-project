import type { Meta, StoryObj } from "@storybook/react"
import InputSearch from "./index"

const meta: Meta<typeof InputSearch> = {
  component: InputSearch,
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof InputSearch>

export const Default: Story = {
  render: () => {
    return <InputSearch />
  },
}
