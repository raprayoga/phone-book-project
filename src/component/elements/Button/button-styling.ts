import { css, keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { ButtonProps } from "./Button"

const getVariantStyles = ({
  variant,
  isdisabled,
  theme,
}: {
  variant?: string
  isdisabled?: boolean
  theme: any
}) => {
  if (isdisabled) {
    return css`
      background-color: ${theme.colors.secondary};
    `
  }
  switch (variant) {
    case "primary":
      return css`
        background-color: ${theme.colors.primary};
      `
    case "secondary":
      return css`
        background-color: ${theme.colors.secondary};
      `

    case "success":
      return css`
        background-color: ${theme.colors.success};
      `

    case "danger":
      return css`
        background-color: ${theme.colors.danger};
      `

    case "warning":
      return css`
        background-color: ${theme.colors.warning};
      `

    case "info":
      return css`
        background-color: ${theme.colors.info};
      `
  }
}

const getSizeStyles = ({ sizes, theme }: { sizes?: string; theme: any }) => {
  switch (sizes) {
    case "small": {
      return css`
        font-size: ${theme.font.sm};
        padding: 10px 16px;
      `
    }
    case "large": {
      return css`
        font-size: ${theme.font.lg};
        padding: 12px 24px;
      `
    }
  }
}

const getSizeSvgStyles = ({ sizes }: { sizes?: string }) => {
  switch (sizes) {
    case "small": {
      return css`
        height: 11px;
        width: 12px;
      `
    }
    case "large": {
      return css`
        height: 15px;
        width: 16px;
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

export const StyledSvgLoading = styled.svg<{ sizes: string }>`
  display: inline;
  margin: auto;
  vertical-align: middle;
  color: white;
  animation: ${spin} 1s linear infinite;
  ${(props) => getSizeSvgStyles(props)}
`

export const StyledButton = styled.button<ButtonProps>`
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: white;

  ${(props) => getSizeStyles(props)}
  ${(props) => getVariantStyles(props)}

  &:hover {
    cursor: ${(props) =>
      props.isdisabled || props.isLoading ? "default" : "pointer"};
  }
`
