import React, { useState, useContext, useEffect } from "react"
import Toast from "@/components/elements/Toast"
import FormEdit from "@/components/modules/FormEdit"
import { StyledContainer } from "@/components/templates/Add/Mobile/mobile-styling"
import EditContactContext from "@/stores/edit-contact/edit-contact-context"

export default function Mobile() {
  const [isShowToast, setisShowToast] = useState(false)
  const editContactCtx = useContext(EditContactContext)

  const closedHandler = () => {
    setisShowToast(false)
  }

  const ifResponseError = () => {
    return editContactCtx.contactOnError || editContactCtx.phoneOnError
  }

  useEffect(() => {
    if (ifResponseError()) {
      setisShowToast(true)
    }
  }, [
    editContactCtx.data,
    editContactCtx.contactOnError,
    editContactCtx.phoneOnError,
  ])

  return (
    <StyledContainer>
      <FormEdit />
      <Toast
        variant={ifResponseError() ? "danger" : "success"}
        position="top"
        isShow={isShowToast}
        onCLosed={closedHandler}
      >
        {ifResponseError()
          ? "Terjadi Kesalahan: " + editContactCtx?.error?.message
          : "Contact Berhasil Ditambahkan"}
      </Toast>
    </StyledContainer>
  )
}
