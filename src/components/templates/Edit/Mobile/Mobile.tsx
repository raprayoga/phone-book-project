import React, { useState, useContext, useEffect } from "react"
import Toast from "@/components/elements/Toast"
import FormEdit from "@/components/modules/FormEdit"
import { StyledContainer } from "@/components/templates/Add/Mobile/mobile-styling"
import EditContactContext from "@/stores/edit-contact/edit-contact-context"

export default function Mobile() {
  const [isShowToastSuccess, setisShowToastSuccess] = useState(false)
  const [isShowToastError, setisShowToastError] = useState(false)
  const editContactCtx = useContext(EditContactContext)

  const closedHandler = () => {
    setisShowToastSuccess(false)
    setisShowToastError(false)
  }

  useEffect(() => {
    if (editContactCtx.data) {
      setisShowToastSuccess(true)
    }
  }, [editContactCtx.data])

  useEffect(() => {
    if (editContactCtx.contactOnError || editContactCtx.phoneOnError) {
      setisShowToastError(true)
    }
  }, [editContactCtx.contactOnError, editContactCtx.phoneOnError])

  return (
    <StyledContainer>
      <FormEdit />
      <Toast
        variant="success"
        isShow={isShowToastSuccess}
        onCLosed={closedHandler}
      >
        Contact Berhasil Diubah
      </Toast>
      <Toast
        variant="danger"
        isShow={isShowToastError}
        onCLosed={closedHandler}
      >
        Terjadi Kesalahan, Silahkan Coba Lagi <br />
        [Message: {editContactCtx?.contactOnError?.message}
        {editContactCtx?.phoneOnError?.message}]
      </Toast>
    </StyledContainer>
  )
}
