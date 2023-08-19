import React, { useContext, useEffect } from "react"
import { StyledContainer } from "./mobile-styling"
import DetailContactContext from "@/stores/detail-contact/detail-contact"
import { useRouter } from "next/router"
import EditButton from "@/components/modules/EditButton"
import DetailProfile from "@/components/modules/DetailProfile"
import ProfilePhoto from "@/components/modules/ProfilePhoto"

export default function Mobile() {
  const detailContactCtx = useContext(DetailContactContext)
  const router = useRouter()

  useEffect(() => {
    detailContactCtx.getItem(router.query.id)
  }, [])

  return (
    <StyledContainer>
      <ProfilePhoto contact={detailContactCtx.data} />
      {!detailContactCtx.loading && !detailContactCtx.error && (
        <DetailProfile phones={detailContactCtx?.data?.phones} />
      )}
      <EditButton id={router.query.id} />
    </StyledContainer>
  )
}
