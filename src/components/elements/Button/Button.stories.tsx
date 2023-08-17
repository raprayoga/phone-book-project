import type { Meta, StoryObj } from "@storybook/react"
import Button from "./index"
import { action } from "@storybook/addon-actions"

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: "Button",
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (args) => {
    return (
      <Button style={{ width: "300px" }} {...args} onClick={action("onCLick!")}>
        Button
      </Button>
    )
  },
}

export const Disabled: Story = {
  render: (args) => {
    return (
      <Button
        style={{ width: "300px" }}
        isDisabled
        {...args}
        onClick={action("onCLick!")}
      >
        Button Disabled
      </Button>
    )
  },
}

export const Loading: Story = {
  render: (args) => {
    return (
      <Button
        style={{ width: "300px" }}
        {...args}
        onClick={action("onCLick!")}
        isLoading
      >
        Button Disabled
      </Button>
    )
  },
}

export const Outline: Story = {
  render: (args) => {
    return (
      <Button
        style={{ width: "300px" }}
        {...args}
        onClick={action("onCLick!")}
        isOutline
      >
        Button Disabled
      </Button>
    )
  },
}
