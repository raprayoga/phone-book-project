import { ColorProps, SizesProps } from "@/interfaces/props"
import { css, keyframes } from "@emotion/react"
import styled from "@emotion/styled"

interface ButtonVariantProps extends ColorProps, SizesProps {
  isDisabled: boolean
  isLoading: boolean
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

const StyledButton = styled.button<ButtonVariantProps>`
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: white;
  background-color: ${(props) => props.theme.colors[props.variant]};

  ${(props) => getSizeStyles(props)}

  &:hover {
    cursor: ${(props) =>
      props.isDisabled || props.isLoading ? "default" : "pointer"};
  }
`

export { StyledButton }
