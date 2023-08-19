import React, { useContext, useState } from "react"
import { StyledNavbarContainer } from "@/components/modules/HeaderMobile/header-mobile-styling"
import InputSearch from "@/components/modules/InputSearch"
import ContactListContext from "@/stores/contact-list/contact-list-context"

function HeaderSearchMobile() {
  const contactListCtx = useContext(ContactListContext)
  const [timer, setTimer] = useState<any>(null)

  const changeHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timer)
    setTimer(
      setTimeout(() => {
        contactListCtx.getItem({
          where: {
            first_name: { _like: `${e.target.value}%` },
          },
        })
      }, 500)
    )
  }

  return (
    <StyledNavbarContainer>
      <h2>My Contacts</h2>
      <InputSearch onChange={(e) => changeHanlder(e)} />
    </StyledNavbarContainer>
  )
}

export { HeaderSearchMobile }
