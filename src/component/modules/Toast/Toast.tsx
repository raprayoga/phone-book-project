import React from "react"
import styled from "@emotion/styled"
import Card from "@/component/elements/Card"
import { ColorProps, ColorPropsOptionsals } from "@/interfaces/props"

const StyledToast = styled(Card)<ColorProps>`
  backgroun-color: ${(props) => props.theme.colors[props.variant]};
`

export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ColorPropsOptionsals {
  onClick?: () => void
}

function Toast({ variant = "primary", ...props }: ToastProps) {
  return <StyledToast variant={variant} {...props} />
}

export { Toast }
