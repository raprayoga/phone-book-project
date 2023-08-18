import React, { useContext, useEffect } from "react"
import ContactListContext from "@/stores/contact-list/contact-list-context"
import { StyledContainer } from "./mobile-styling"
import ContactCard from "@/components/modules/ContactCard"
import Link from "next/link"

export default function Mobile() {
  const contactListCtx = useContext(ContactListContext)

  useEffect(() => {
    contactListCtx.getItem()
  }, [])

  return (
    <>
      <StyledContainer>
        <div>
          {contactListCtx.error && "ERROR"}
          {contactListCtx.loading && "LOADING"}
          {!contactListCtx.loading &&
            !contactListCtx.error &&
            contactListCtx.items.map((contact) => (
              <Link key={contact.id} href={`/detail/${contact.id}`}>
                <ContactCard contact={contact} />
              </Link>
            ))}
        </div>
      </StyledContainer>
    </>
  )
}
