import type { Meta, StoryObj } from "@storybook/react"
import Input, { InputGroup, ChildLeft, ChildRight } from "./index"
import Button from "@/components/elements/Button/index"
import { action } from "@storybook/addon-actions"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    sizes: "small",
    rounded: true,
    variant: "success",
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
    <InputGroup sizes={args.sizes}>
      <ChildLeft style={{ padding: "10px" }}>Button1</ChildLeft>
      <Input {...args} placeholder="Placeholder here" />
      <ChildRight style={{ padding: "10px" }}>Button2</ChildRight>
    </InputGroup>
  ),
}

export const ButtonVariant: Story = {
  render: (args) => (
    <InputGroup sizes={args.sizes}>
      <Input {...args} placeholder="Placeholder here" />
      <ChildRight>
        <Button
          style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          onClick={action("onCLick!")}
        >
          Button
        </Button>
      </ChildRight>
    </InputGroup>
  ),
}

export const IconVariant: Story = {
  render: (args) => (
    <InputGroup sizes={args.sizes}>
      <ChildLeft style={{ padding: "10px" }}>
        <SearchOutlinedIcon style={{ width: "16px" }} />
      </ChildLeft>
      <Input {...args} placeholder="Placeholder here" />
    </InputGroup>
  ),
}

export const TextVariant: Story = {
  render: (args) => (
    <InputGroup sizes={args.sizes}>
      <ChildLeft style={{ padding: "10px" }}>Email</ChildLeft>
      <Input {...args} placeholder="Placeholder here" />
    </InputGroup>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <InputGroup sizes={args.sizes}>
      <Input {...args} placeholder="Placeholder here" disabled />
      <ChildRight>
        <Button onClick={action("onCLick!")}>Gunakan</Button>
      </ChildRight>
    </InputGroup>
  ),
}
