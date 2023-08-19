import React, { useState, useContext, useEffect } from "react"
import Toast from "@/components/elements/Toast"
import FormAdd from "@/components/modules/FormAdd/FormAdd"
import AddContactContext from "@/stores/add-contact/add-contact-context"
import { StyledContainer } from "./mobile-styling"

export default function Mobile() {
  const [isShowToast, setIsShowToast] = useState(false)
  const addContactCtx = useContext(AddContactContext)

  const closedHandler = () => {
    setIsShowToast(false)
  }

  useEffect(() => {
    if (addContactCtx.data) {
      setIsShowToast(true)
    }
  }, [addContactCtx.data])

  return (
    <StyledContainer>
      <FormAdd />
      <Toast variant="success" isShow={isShowToast} onCLosed={closedHandler}>
        Contact Berhasil Ditambahkan
      </Toast>
    </StyledContainer>
  )
}
