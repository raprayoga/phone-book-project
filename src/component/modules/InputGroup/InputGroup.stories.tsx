import type { Meta, StoryObj } from "@storybook/react"
import { InputGroup } from "./InputGroup"
import Input from "./index"
import Button from "../../elements/Button/index"
import { action } from "@storybook/addon-actions"
import { ChildLeft } from "./ChildLeft"
import { ChildRight } from "./ChildRight"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

const meta: Meta<typeof InputGroup> = {
  component: InputGroup,
  args: {
    sizes: "small",
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <ChildLeft style={{ padding: "10px" }}>Button1</ChildLeft>
      <Input sizes={args.sizes} placeholder="Placeholder here" />
      <ChildRight style={{ padding: "10px" }}>Button2</ChildRight>
    </InputGroup>
  ),
}

export const ButtonVariant: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <Input placeholder="Placeholder here" />
      <ChildRight>
        <Button onClick={action("onCLick!")}>Button</Button>
      </ChildRight>
    </InputGroup>
  ),
}

export const IconVariant: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <ChildLeft style={{ padding: "10px" }}>
        <MagnifyingGlassIcon style={{ width: "16px" }} />
      </ChildLeft>
      <Input placeholder="Placeholder here" />
    </InputGroup>
  ),
}

export const TextVariant: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <ChildLeft style={{ padding: "10px" }}>Email</ChildLeft>
      <Input placeholder="Placeholder here" />
    </InputGroup>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <Input placeholder="Placeholder here" disabled />
      <ChildRight>
        <Button onClick={action("onCLick!")}>Gunakan</Button>
      </ChildRight>
    </InputGroup>
  ),
}
