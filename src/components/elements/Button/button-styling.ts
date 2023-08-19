import { ColorProps, SizesProps } from "@/interfaces/props"
import { css, keyframes } from "@emotion/react"
import styled from "@emotion/styled"

interface ButtonVariantProps extends ColorProps, SizesProps {
  isDisabled: boolean
  isLoading: boolean
  isOutline: boolean
}

const getOutlineStyles = ({
  isOutline,
  variant,
  theme,
}: {
  isOutline: boolean
  variant: string
  theme: any
}) => {
  if (isOutline) {
    return css`
      background-color: ${theme.colors.white};
      color: ${theme.colors[variant]};
      border: 1px solid ${theme.colors[variant]};
      &:hover {
        background-color: ${theme.colors[variant]};
        color: ${theme.colors.white};
      }
    `
  }

  return css`
    background-color: ${theme.colors[variant]};
    color: ${theme.colors.white};
    border: none;
  `
}

const getSizeStyles = ({ sizes, theme }: { sizes: string; theme: any }) => {
  switch (sizes) {
    case "small": {
      return css`
        font-size: ${theme.font.sm};
        padding: 5px 8px;
      `
    }
    case "large": {
      return css`
        font-size: ${theme.font.lg};
        padding: 10px 16px;
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

const StyledButton = styled.button<ButtonVariantProps>`
  font-weight: 700;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${(props) => getSizeStyles(props)}
  ${(props) => getOutlineStyles(props)}

  &:hover {
    cursor: ${(props) =>
      props.isDisabled || props.isLoading ? "default" : "pointer"};
    opacity: ${(props) =>
      props.isDisabled || props.isLoading || props.isOutline ? "1" : "0.8"};
    transition: 300ms;
    background-color: ${(props) => props.theme.colors[props.variant]};
  }
`

export { StyledButton }
