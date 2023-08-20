import React from "react"
import { useRouter } from "next/router"
import { StyledArrowLeftIcon } from "@/components/modules/HeaderMobile/header-mobile-styling"
import { StyledBack, StyledContainer } from "../../Add/Desktop/desktop-styling"
import { StyledFormEdit } from "./desktop-styling"
import ToastEditForm from "@/components/modules/ToastEditForm"

export default function Desktop() {
  const router = useRouter()

  const ackHandler = () => {
    router.back()
  }

  return (
    <StyledContainer>
      <StyledBack variant="secondary" onClick={ackHandler}>
        <StyledArrowLeftIcon />
        Back
      </StyledBack>
      <StyledFormEdit />
      <ToastEditForm />
    </StyledContainer>
  )
}
