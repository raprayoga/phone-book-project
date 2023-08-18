import React from "react"
import {
  StyledArrowLeftIcon,
  StyledBack,
  StyledNavbarContainer,
} from "@/components/modules/HeaderMobile/header-mobile-styling"
import { useRouter } from "next/router"

function HeaderMobile() {
  const router = useRouter()

  const backHanlder = () => {
    router.back()
  }

  return (
    <StyledNavbarContainer>
      <StyledBack onClick={() => backHanlder()}>
        <StyledArrowLeftIcon />
        Back
      </StyledBack>
      <h2>My Favorite</h2>
    </StyledNavbarContainer>
  )
}

export { HeaderMobile }
