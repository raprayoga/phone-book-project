import React from "react"
import { StyledBack, StyledContainer, StyledFormAdd } from "./desktop-styling"
import { useRouter } from "next/router"
import { StyledArrowLeftIcon } from "@/components/modules/HeaderMobile/header-mobile-styling"
import ToastAddForm from "@/components/modules/ToastAddForm"

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
      <StyledFormAdd />
      <ToastAddForm />
    </StyledContainer>
  )
}
