import React from "react"
import { StyledChildRight } from "./input-styling"

const ChildRight = React.forwardRef<
  HTMLDivElement,
  React.ButtonHTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  return <StyledChildRight ref={ref} {...props} />
})
ChildRight.displayName = "ChildRight"

export { ChildRight }
