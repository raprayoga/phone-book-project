import React, { useContext, useEffect } from "react"
import ContactListContext from "@/stores/contact-list/contact-list-context"
import { StyledContainer, StyledError } from "./mobile-styling"
import ContactCard from "@/components/modules/ContactCard"
import Link from "next/link"
import { LoadingMobile } from "@/components/modules/LoadingMobile/LoadingMobile"
import ErrorFeedback from "@/components/modules/ErrorFeedback"
import AddButton from "@/components/modules/AddButton"
import FavoriteHeadline from "@/components/modules/FavoriteHeadline"

export default function Mobile() {
  const contactListCtx = useContext(ContactListContext)

  useEffect(() => {
    contactListCtx.getItem({})
  }, [])

  const refetchHandler = () => {
    contactListCtx.getItem({})
  }

  return (
    <>
      <StyledContainer>
        <div>
          <FavoriteHeadline />
          {contactListCtx.error && (
            <StyledError>
              <ErrorFeedback
                caption="Terjadi Kesalahan, Silahkan Coba lagi"
                onClick={refetchHandler}
              />
            </StyledError>
          )}
          {contactListCtx.loading &&
            Array.from(Array(5)).map((e, index) => (
              <LoadingMobile key={index} />
            ))}
          {!contactListCtx.loading &&
            !contactListCtx.error &&
            contactListCtx.items.map((contact) => (
              <Link key={contact.id} href={`/detail/${contact.id}`}>
                <ContactCard contact={contact} />
              </Link>
            ))}
        </div>
        <AddButton />
      </StyledContainer>
    </>
  )
}
