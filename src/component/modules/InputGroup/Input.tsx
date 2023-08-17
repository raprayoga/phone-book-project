import * as React from "react"
import { StyledInput } from "./input-styling"
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "success" | "danger" | "warning" | "info" | "light"
  sizes?: "small" | "large"
  rounded?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant = "primary", sizes = "small", rounded = true, ...props }, ref) => {
    return (
      <StyledInput
        data-testid="input-element"
        variant={variant}
        sizes={sizes}
        rounded={rounded}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
