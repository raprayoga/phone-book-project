import styled from "@emotion/styled"
import React from "react"

const StyledChildLeft = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
`

const ChildLeft = React.forwardRef<
  HTMLDivElement,
  React.ButtonHTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  return <StyledChildLeft ref={ref} {...props} />
})
ChildLeft.displayName = "ChildLeft"

export { ChildLeft }
