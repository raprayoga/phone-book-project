import type { Meta, StoryObj } from "@storybook/react"
import ContactCard from "./index"

const meta: Meta<typeof ContactCard> = {
  component: ContactCard,
  args: {
    contact: {
      id: 1,
      first_name: "test",
      last_name: "test",
      phones: [
        {
          number: "01234",
        },
      ],
      created_at: "test",
    },
  },
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof ContactCard>

export const Default: Story = {
  render: (args: any) => {
    return <ContactCard {...args} />
  },
}
