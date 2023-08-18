import React from "react"
import { StyledNavbarContainer } from "@/components/modules/HeaderMobile/header-mobile-styling"
import InputSearch from "@/components/modules/InputSearch"

function HeaderSearchMobile() {
  return (
    <StyledNavbarContainer>
      <h2>My Contacts</h2>
      <InputSearch />
    </StyledNavbarContainer>
  )
}

export { HeaderSearchMobile }
