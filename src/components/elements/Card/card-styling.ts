import { SizesProps } from "@/interfaces/props"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const getSizeStyles = ({ sizes }: { sizes?: string }) => {
  switch (sizes) {
    case "small": {
      return css`
        border-radius: 0.5em;
        padding: 0.25rem 0.5rem;
        font-size: 12px;
      `
    }
    case "large": {
      return css`
        border-radius: 0.75em;
        padding: 0.5rem 1rem;
        font-size: 16px;
      `
    }
  }
}

const StyledCard = styled.div<SizesProps>`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  border: 1px solid ${(props) => props.theme.colors.gainsboro};
  background: #fff;

  ${(props) => getSizeStyles(props)}
`

export { StyledCard }
