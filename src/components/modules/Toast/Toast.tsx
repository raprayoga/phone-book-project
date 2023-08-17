import React from "react"
import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import Card from "@/components/elements/Card"
import { ColorProps, ColorPropsOptionsals } from "@/interfaces/props"
import { XMarkIcon } from "@heroicons/react/24/outline"

interface ToastVariantProps extends ColorProps {
  position: "bottom" | "top"
}

const fade = keyframes`
  from {
    transform: translate(-50%, 10%);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0);
    opacity: 1;
  }
`

const StyledToast = styled(Card)<ToastVariantProps>`
  background-color: ${(props) => props.theme.colors[props.variant]};
  color: ${(props) => props.theme.colors.white};
  padding-right: 2rem;
  position: fixed;
  z-index: 50;
  bottom: ${(props) => (props.position === "bottom" ? "0.5rem" : "auto")};
  top: ${(props) => (props.position === "top" ? "1rem" : "auto")};
  left: 50%;
  width: 80%;
  max-width: 500px;

  animation-name: ${fade};
  animation-duration: 300ms;
  animation-fill-mode: forwards;
`

const StyledClosedButton = styled(XMarkIcon)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 1.25rem;
  cursor: pointer;
`

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
        <StyledClosedButton onClick={() => onCLosed} />
      </StyledToast>
    )
  )
}

export { Toast }
