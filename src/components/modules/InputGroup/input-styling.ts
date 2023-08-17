import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { ColorProps, SizesProps } from "@/interfaces/props"

interface InputVariantProps extends ColorProps, SizesProps {
  rounded: boolean
}

const getSizeStyles = ({
  sizes,
  rounded,
  theme,
}: {
  sizes?: string
  rounded?: boolean
  theme: any
}) => {
  switch (sizes) {
    case "small": {
      return css`
        font-size: ${theme.font.sm};
        padding: 0.5rem 3rem;
        border-radius: ${rounded ? "1rem" : "0.25rem"};

        &:first-of-type {
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
        border-radius: ${rounded ? "1.5rem" : "0.75rem"};

        &:first-of-type {
          padding-left: 1rem;
        }
        
        &:last-child {
          padding-right: 1rem;
      `
    }
  }
}

const StyledInput = styled.input<InputVariantProps>`
  height: 100%;
  width: 100%;
  border: 1px solid #fff0;
  background-color: ${(props) => props.theme.colors.light};
  border-color: ${(props) => props.theme.colors[props.variant]};
  color: ${(props) => props.theme.colors.secondary};
  outline: none;

  &:focus {
    box-shadow: 0 0 5px ${(props) => props.theme.colors[props.variant]};
  }

  ${(props) => getSizeStyles(props)}
`

const StyledInputGroup = styled.div<SizesProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 100%;
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) =>
    props.sizes === "small" ? props.theme.font.sm : props.theme.font.lg};
`

const StyledChildRight = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  line-height: 0;
`

const StyledChildLeft = styled(StyledChildRight)`
  left: 0;
  right: auto;
`

export { StyledInput, StyledChildRight, StyledChildLeft, StyledInputGroup }
