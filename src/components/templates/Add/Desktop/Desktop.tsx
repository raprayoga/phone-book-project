import React, { useContext, useState, useEffect } from "react"
import { StyledBack, StyledContainer, StyledFormAdd } from "./desktop-styling"
import { useRouter } from "next/router"
import { StyledArrowLeftIcon } from "@/components/modules/HeaderMobile/header-mobile-styling"
import Toast from "@/components/elements/Toast"
import AddContactContext from "@/stores/add-contact/add-contact-context"

export default function Desktop() {
  const router = useRouter()
  const [isShowToast, setIsShowToast] = useState(false)
  const addContactCtx = useContext(AddContactContext)

  const closedHandler = () => {
    setIsShowToast(false)
  }

  useEffect(() => {
    if (addContactCtx.data || addContactCtx.error) {
      setIsShowToast(true)

      setTimeout(() => {
        setIsShowToast(false)
      }, 3000)
    }
  }, [addContactCtx.data, addContactCtx.error])

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

      <Toast
        variant={addContactCtx.error ? "danger" : "success"}
        position="top"
        isShow={isShowToast}
        onCLosed={closedHandler}
      >
        {addContactCtx.error
          ? "Terjadi Kesalahan: " + addContactCtx?.error?.message
          : "Contact Berhasil Ditambahkan"}
      </Toast>
    </StyledContainer>
  )
}
