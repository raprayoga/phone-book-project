import React from "react"
import { ColorPropsOptionsals } from "@/interfaces/props"
import { StyledClosedButton, StyledToast } from "./toast-styling"

export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ColorPropsOptionsals {
  onClick?: () => void
  onCLosed?: () => void
  isShow?: boolean
  position?: "bottom" | "top"
}

function Toast({
  variant = "primary",
  isShow = false,
  position = "bottom",
  onCLosed = () => null,
  ...props
}: ToastProps) {
  return (
    isShow && (
      <StyledToast variant={variant} position={position} {...props}>
        {props.children}
        <StyledClosedButton
          onClick={() => onCLosed()}
          data-testid="toastclose-element"
        />
      </StyledToast>
    )
  )
}

export { Toast }
