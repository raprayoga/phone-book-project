import React from "react"
import FormEdit from "@/components/modules/FormEdit"
import { StyledContainer } from "@/components/templates/Add/Mobile/mobile-styling"
import ToastEditForm from "@/components/modules/ToastEditForm"

export default function Mobile() {
  return (
    <StyledContainer>
      <FormEdit />
      <ToastEditForm />
    </StyledContainer>
  )
}
