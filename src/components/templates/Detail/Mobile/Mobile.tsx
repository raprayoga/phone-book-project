import React, { useContext, useEffect } from "react"
import { StyledContainer } from "./mobile-styling"
import DetailContactContext from "@/stores/detail-contact/detail-contact"
import { useRouter } from "next/router"
import DetailProfile from "@/components/modules/DetailProfile"
import ProfilePhoto from "@/components/modules/ProfilePhoto"
import FavoriteButton from "@/components/modules/FavoriteButton"

export default function Mobile() {
  const detailContactCtx = useContext(DetailContactContext)
  const router = useRouter()

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
          <DetailProfile phones={detailContactCtx?.data?.phones} />
          <FavoriteButton contact={detailContactCtx.data} />
        </>
      )}
    </StyledContainer>
  )
}
