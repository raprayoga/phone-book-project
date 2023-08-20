import React, { useState, useContext, useEffect } from "react"
import Toast from "@/components/elements/Toast"
import EditContactContext from "@/stores/edit-contact/edit-contact-context"

function ToastEditForm() {
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
    <Toast
      variant={ifResponseError() ? "danger" : "success"}
      position="top"
      isShow={isShowToast}
      onCLosed={closedHandler}
    >
      {ifResponseError()
        ? "Terjadi Kesalahan: " +
          editContactCtx?.phoneOnError?.message +
          editContactCtx?.contactOnError?.message
        : "Contact Berhasil Ditambahkan"}
    </Toast>
  )
}

export { ToastEditForm }
