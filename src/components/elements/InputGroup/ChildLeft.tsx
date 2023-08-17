import React from "react"
import { StyledChildLeft } from "./input-styling"

const ChildLeft = React.forwardRef<
  HTMLDivElement,
  React.ButtonHTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  return <StyledChildLeft ref={ref} {...props} />
})
ChildLeft.displayName = "ChildLeft"

export { ChildLeft }
