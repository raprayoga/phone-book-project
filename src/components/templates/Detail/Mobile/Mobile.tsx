import React, { useContext, useEffect } from "react"
import { StyledContainer } from "./mobile-styling"
import DetailContactContext from "@/stores/detail-contact/detail-contact-context"
import { useRouter } from "next/router"
import DetailProfile from "@/components/modules/DetailProfile"
import ProfilePhoto from "@/components/modules/ProfilePhoto"
import FavoriteButton from "@/components/modules/FavoriteButton"
import DeleteContactContext from "@/stores/delete-contact/delete-contact-context"

export default function Mobile() {
  const detailContactCtx = useContext(DetailContactContext)
  const deleteContactCtx = useContext(DeleteContactContext)
  const router = useRouter()

  const editHandler = () => {
    router.push(`/edit/${router.query.id}`)
  }

  const deleteHandler = () => {
    deleteContactCtx.deleteItem(router.query.id)
    router.back()
  }

  useEffect(() => {
    detailContactCtx.getItem(router.query.id)
  }, [])

  useEffect(() => {
    if (detailContactCtx.error) router.back()
  }, [detailContactCtx.error])

  return (
    <StyledContainer>
      {!detailContactCtx.loading && !detailContactCtx.error && (
        <>
          <ProfilePhoto contact={detailContactCtx.data} />
          <DetailProfile
            deleteHandler={deleteHandler}
            editHandler={editHandler}
            contact={detailContactCtx.data}
          />
          <FavoriteButton contact={detailContactCtx.data} />
        </>
      )}
    </StyledContainer>
  )
}
