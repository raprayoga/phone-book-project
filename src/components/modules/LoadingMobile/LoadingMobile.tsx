import React from "react"
import {
  StyledCard,
  StyledInfo,
} from "@/components/modules/ContactCard/contact-card-styling"
import {
  StyledSkeletonImage,
  StyledSkeletonText,
} from "./loading-mobile-styling"

function LoadingMobile() {
  return (
    <StyledCard data-testid="loading-skeleton-element">
      <StyledSkeletonImage data-testid="skeleton-image" />
      <StyledInfo>
        <StyledSkeletonText data-testid="skeleton-text1" />
        <StyledSkeletonText data-testid="skeleton-text2" />
      </StyledInfo>
    </StyledCard>
  )
}

export { LoadingMobile }
