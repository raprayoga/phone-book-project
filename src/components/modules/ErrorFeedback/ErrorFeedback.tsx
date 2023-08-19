import React from "react"
import Button from "@/components/elements/Button"
import { StyledCard } from "./error-feedback-styling"

interface ErrorFeedbackProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: () => void
  caption?: string
}

function ErrorFeedback({
  onClick = () => {},
  caption = "",
  ...props
}: ErrorFeedbackProps) {
  return (
    <StyledCard {...props}>
      <p>{caption}</p>
      <Button onClick={onClick} isOutline variant="danger">
        Reload
      </Button>
    </StyledCard>
  )
}

export { ErrorFeedback }
