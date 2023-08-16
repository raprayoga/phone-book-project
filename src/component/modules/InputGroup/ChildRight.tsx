import styled from "@emotion/styled"
import React from "react"

const StyledChildRight = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
`

const ChildRight = React.forwardRef<
  HTMLDivElement,
  React.ButtonHTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  return <StyledChildRight ref={ref} {...props} />
})
ChildRight.displayName = "ChildRight"

export { ChildRight }
