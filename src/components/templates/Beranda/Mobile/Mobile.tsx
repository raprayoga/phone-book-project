import React, { useContext, useEffect } from "react"
import ContactListContext from "@/stores/contact-list/contact-list-context"
import { StyledContainer, StyledError } from "./mobile-styling"
import ContactCard from "@/components/modules/ContactCard"
import Link from "next/link"
import { LoadingMobile } from "@/components/modules/LoadingMobile/LoadingMobile"
import ErrorFeedback from "@/components/modules/ErrorFeedback"

export default function Mobile() {
  const contactListCtx = useContext(ContactListContext)

  useEffect(() => {
    contactListCtx.getItem()
  }, [])

  return (
    <>
      <StyledContainer>
        <div>
          {contactListCtx.error && (
            <StyledError>
              <ErrorFeedback caption="Terjadi Kesalahan, Silahkan Coba lagi" />
            </StyledError>
          )}
          {contactListCtx.loading &&
            Array.from(Array(10)).map((e) => <LoadingMobile key={e} />)}
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
