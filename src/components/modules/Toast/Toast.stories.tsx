import type { Meta, StoryObj } from "@storybook/react"
import Toast from "./index"

const meta: Meta<typeof Toast> = {
  component: Toast,
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "info",
    isShow: true,
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Toast>

export const Default: Story = {
  render: (args) => {
    return (
      <Toast {...args}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quaerat
          deleniti eveniet dolor hic dolores consequatur. Facilis impedit, quod,
          accusantium dolor dolorem perferendis temporibus consequatur dolores
          quis in consequuntur at.
        </p>
      </Toast>
    )
  },
}
