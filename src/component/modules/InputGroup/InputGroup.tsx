import * as React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const getSizeStyles = ({ sizes, theme }: { sizes?: string; theme: any }) => {
  switch (sizes) {
    case "small": {
      return css`
        height: 100%;
        font-size: ${theme.font.sm};
      `
    }
    case "large": {
      return css`
        height: 100%;
        font-size: ${theme.font.lg};
      `
    }
  }
}

const StyledInputGroup = styled.div<InputGroupProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: ${(props) => props.theme.colors.secondary};

  ${(props) => getSizeStyles(props)}
`

export interface InputGroupProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
  sizes?: "small" | "large"
}

const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, sizes, ...props }, ref) => {
    return <StyledInputGroup ref={ref} sizes={sizes} {...props} />
  }
)
InputGroup.displayName = "InputGroup"

export { InputGroup }
