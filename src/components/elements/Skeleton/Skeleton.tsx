import React from "react"
import { StyledCard } from "./skeleton-styling"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <StyledCard data-testid="skeleton" {...props} />
}

export { Skeleton }
