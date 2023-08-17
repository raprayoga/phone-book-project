import React from "react"
import { StyledCard } from "./card-styling"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: () => void
  sizes?: "small" | "large"
}

function Card({ onClick = () => null, sizes = "small", ...props }: CardProps) {
  return <StyledCard sizes={sizes} onClick={onClick} {...props} />
}

export { Card }
