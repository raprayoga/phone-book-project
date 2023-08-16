import * as React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const getSizeStyles = ({ sizes, theme }: { sizes?: string; theme: any }) => {
  switch (sizes) {
    case "small": {
      return css`
        font-size: ${theme.font.sm};
        padding: 0.5rem 3rem;
        border-radius: 1rem;

        &:first-child {
          padding-left: 0.5rem;
        }
        
        &:last-child {
          padding-right: 0.5rem;
      `
    }
    case "large": {
      return css`
        font-size: ${theme.font.lg};
        padding: 0.75rem 5rem;
        border-radius: 1.5rem;

        &:first-child {
          padding-left: 1rem;
        }
        
        &:last-child {
          padding-right: 1rem;
      `
    }
  }
}

const StyledInput = styled.input<{
  variant: "primary" | "success" | "danger" | "warning" | "info" | "light"
  sizes: "small" | "large"
}>`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.light};
  border-color: ${(props) => props.theme.colors.secondary};
  border: none;
  color: ${(props) => props.theme.colors.secondary};
  border-radius: 1rem;

  &:focus {
    outline-color: ${(props) => props.theme.colors[props.variant]};
  }

  ${(props) => getSizeStyles(props)}
`

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "success" | "danger" | "warning" | "info" | "light"
  sizes?: "small" | "large"
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant = "primary", sizes = "small", ...props }, ref) => {
    return (
      <StyledInput
        data-testid="input-element"
        variant={variant}
        sizes={sizes}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
