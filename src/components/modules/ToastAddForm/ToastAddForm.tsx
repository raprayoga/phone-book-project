import React, { useState, useContext, useEffect } from "react"
import Toast from "@/components/elements/Toast"
import AddContactContext from "@/stores/add-contact/add-contact-context"

function ToastAddForm() {
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

  return (
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
  )
}

export { ToastAddForm }
