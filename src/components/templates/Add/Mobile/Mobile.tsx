import React from "react"
import FormAdd from "@/components/modules/FormAdd"
import { StyledContainer } from "./mobile-styling"
import ToastAddForm from "@/components/modules/ToastAddForm"

export default function Mobile() {
  return (
    <StyledContainer>
      <FormAdd />
      <ToastAddForm />
    </StyledContainer>
  )
}
