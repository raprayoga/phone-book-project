import { css, keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import React from "react"

const getVariantStyles = (variant: string | undefined) => {
  switch (variant) {
    case "primary":
      return css`
        color: white;
        background-color: #1ea7fd;
      `
    case "grey":
      return css`
        color: #333;
        background-color: transparent;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
      `
  }
}

const getSizeStyles = (size: string | undefined) => {
  switch (size) {
    case "small": {
      return css`
        font-size: 12px;
        padding: 10px 16px;
      `
    }
    case "large": {
      return css`
        font-size: 16px;
        padding: 12px 24px;
      `
    }
  }
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const StyledSvgLoading = styled.svg`
  width: 60%;
  height: 60%;
  display: inline;
  margin: auto;
  vertical-align: middle;
  color-white;
  animation: ${spin} 1s linear infinite;
`

const StyledButton = styled.button<ButtonProps>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  &:hover {
    background-color: ${(props) =>
      props.isdisabled || props.isLoading ? "" : "#ff8a00d1"};
    cursor: ${(props) =>
      props.isdisabled || props.isLoading ? "default" : "pointer"};
  }

  ${(props) => getVariantStyles(props.variant)}
  ${(props) => getSizeStyles(props.size)}
`

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isdisabled?: boolean
  onClick: () => void
  isLoading?: boolean
  variant?: string
  size?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      isdisabled = false,
      isLoading = false,
      onClick,
      children,
      variant = "primary",
      size = "small",
      ...props
    },
    ref
  ) => {
    const handleClick = () => {
      if (!isdisabled && !isLoading) onClick()
    }

    return (
      <StyledButton
        ref={ref}
        variant={variant}
        isdisabled={isdisabled}
        onClick={handleClick}
        {...props}
        isLoading={isLoading}
      >
        {isLoading ? (
          <StyledSvgLoading
            aria-hidden="true"
            role="status"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </StyledSvgLoading>
        ) : (
          children
        )}
      </StyledButton>
    )
  }
)

Button.displayName = "Button"

export { Button }
