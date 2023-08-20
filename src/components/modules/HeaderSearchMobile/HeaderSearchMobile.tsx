import React, { useContext, useState, useRef, type ElementRef } from "react"
import { StyledNavbarContainer } from "@/components/modules/HeaderMobile/header-mobile-styling"
import InputSearch from "@/components/modules/InputSearch"
import ContactListContext from "@/stores/contact-list/contact-list-context"
import { StyledSearchInput } from "./header-search-mobile-styling"

function HeaderSearchMobile() {
  const contactListCtx = useContext(ContactListContext)
  const [timer, setTimer] = useState<any>(null)
  const inputRef = useRef<ElementRef<typeof InputSearch>>(null)

  const changeHanlder = () => {
    clearTimeout(timer)
    setTimer(
      setTimeout(() => {
        contactListCtx.getItem({
          where: {
            first_name: { _like: `${inputRef.current?.value}%` },
          },
        })
      }, 500)
    )
  }

  return (
    <StyledNavbarContainer>
      <h2>My Contacts</h2>
      <StyledSearchInput>
        <InputSearch ref={inputRef} onChange={changeHanlder} />
      </StyledSearchInput>
    </StyledNavbarContainer>
  )
}

export { HeaderSearchMobile }
