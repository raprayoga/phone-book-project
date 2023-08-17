import * as React from "react"
import { StyledInputGroup } from "./input-styling"

export interface InputGroupProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
  sizes?: "small" | "large"
}

const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, sizes = "small", ...props }, ref) => {
    return <StyledInputGroup ref={ref} sizes={sizes} {...props} />
  }
)
InputGroup.displayName = "InputGroup"

export { InputGroup }
