import React from "react"
import InputSearch from "@/components/modules/InputSearch/InputSearch"
import { StyledNavbarContainer } from "@/components/modules/HeaderMobile/header-mobile-styling"

function HeaderSearchMobile() {
  return (
    <StyledNavbarContainer>
      <h2>My Contacts</h2>
      <InputSearch />
    </StyledNavbarContainer>
  )
}

export { HeaderSearchMobile }
