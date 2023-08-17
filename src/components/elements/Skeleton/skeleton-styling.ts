import styled from "@emotion/styled"
import { keyframes } from "@emotion/react"

export const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .3;
  }
`

export const StyledCard = styled.div`
  border-radius: 0.2rem;
  background-color: ${(props) => props.theme.colors.gainsboro};

  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`
