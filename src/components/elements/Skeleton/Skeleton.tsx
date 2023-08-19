import React from "react"
import { StyledSkeleton } from "./skeleton-styling"

function Skeleton(props: React.HTMLAttributes<HTMLDivElement>) {
  return <StyledSkeleton data-testid="skeleton" {...props} />
}

export { Skeleton }
