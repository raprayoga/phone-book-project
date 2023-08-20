import React, { useRef, useContext, useState, type ElementRef } from "react"
import InputSearch from "@/components/modules/InputSearch"
import ContactListContext from "@/stores/contact-list/contact-list-context"
import {
  StyledActionSearch,
  StyledHeaderSearchDesktop,
  StyledInputSearch,
} from "./header-search-desktop-styling"
import Button from "@/components/elements/Button"
import { useRouter } from "next/router"

function HeaderSearchDesktop() {
  const contactListCtx = useContext(ContactListContext)
  const inputRef = useRef<ElementRef<typeof InputSearch>>(null)
  const [timer, setTimer] = useState<any>(null)
  const router = useRouter()

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

  const addHandler = () => [router.push("/add")]

  return (
    <StyledHeaderSearchDesktop>
      <h2>My Contacts</h2>
      <StyledActionSearch>
        <StyledInputSearch>
          <InputSearch ref={inputRef} onChange={changeHanlder} />
        </StyledInputSearch>
        <Button onClick={addHandler}>Add Contact</Button>
      </StyledActionSearch>
    </StyledHeaderSearchDesktop>
  )
}

export { HeaderSearchDesktop }
