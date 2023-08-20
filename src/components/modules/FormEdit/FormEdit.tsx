import React, { useContext, useEffect } from "react"
import Input, { InputGroup } from "@/components/elements/InputGroup"
import { Controller, Control, useForm, SubmitHandler } from "react-hook-form"
import {
  StyledButtonSubmit,
  StyledErrorMessage,
  StyledInputContainer,
  StyledLabelForm,
} from "../FormAdd/form-add-styling"
import DetailContactContext from "@/stores/detail-contact/detail-contact-context"
import { useRouter } from "next/router"
import { formRules } from "@/utils/form-rules"
import EditContactContext from "@/stores/edit-contact/edit-contact-context"

export type Inputs = {
  first_name: string
  last_name: string
  phone1: string
  phone2: string
}

export interface FormProps {
  control: Control<Inputs, any>
}

const rulesPhone = {
  pattern: formRules.phone,
  minLength: formRules.minLenth(6),
  maxLength: formRules.manLenth(18),
}

function FormEdit() {
  const editContactCtx = useContext(EditContactContext)
  const detailContactCtx = useContext(DetailContactContext)
  const router = useRouter()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onChange",
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const variableQuery = {
      id: detailContactCtx?.data?.id,
      first_name: data.first_name,
      last_name: data.last_name,
      phones: [
        {
          oldNumber: detailContactCtx?.data?.phones[0]?.number,
          number: data.phone1,
        },
        {
          oldNumber: detailContactCtx?.data?.phones[1]?.number,
          number: data.phone2,
        },
      ],
    }
    editContactCtx.editItem(variableQuery)
    reset({})
  }

  function getVariant(dirty: boolean, error: boolean) {
    if (error) {
      return "danger"
    }
    return !dirty ? "gainsboro" : "success"
  }

  useEffect(() => {
    detailContactCtx.getItem(router.query.id)
  }, [])

  useEffect(() => {
    if (detailContactCtx.error || editContactCtx.data) router.back()
  }, [detailContactCtx.error, editContactCtx.data])

  return (
    detailContactCtx.data && (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          rules={{
            required: formRules.required,
          }}
          defaultValue={detailContactCtx?.data?.first_name}
          render={({
            field: { onChange, value },
            fieldState: { isDirty, error },
          }) => (
            <StyledInputContainer>
              <StyledLabelForm htmlFor="first_name">First Name</StyledLabelForm>
              <InputGroup id="first_name">
                <Input
                  placeholder="Enter First Name..."
                  variant={getVariant(isDirty, !!error)}
                  onChange={onChange}
                  value={value}
                />
              </InputGroup>
              <StyledErrorMessage role="alert">
                {errors.first_name ? errors.first_name.message : ""}
              </StyledErrorMessage>
            </StyledInputContainer>
          )}
          name="first_name"
        />

        <Controller
          control={control}
          rules={{
            required: formRules.required,
          }}
          defaultValue={detailContactCtx?.data?.last_name}
          render={({
            field: { onChange, value },
            fieldState: { isDirty, error },
          }) => (
            <StyledInputContainer>
              <StyledLabelForm htmlFor="last_name">Last Name</StyledLabelForm>
              <InputGroup id="last_name">
                <Input
                  placeholder="Enter Last Name..."
                  variant={getVariant(isDirty, !!error)}
                  onChange={onChange}
                  value={value}
                />
              </InputGroup>
              <StyledErrorMessage role="alert">
                {errors.last_name ? errors.last_name.message : ""}
              </StyledErrorMessage>
            </StyledInputContainer>
          )}
          name="last_name"
        />

        <Controller
          control={control}
          rules={rulesPhone}
          defaultValue={detailContactCtx?.data?.phones[0]?.number}
          render={({
            field: { onChange, value },
            fieldState: { isDirty, error },
          }) => (
            <StyledInputContainer>
              <StyledLabelForm htmlFor="phone1">Number Phone 1</StyledLabelForm>
              <InputGroup id="phone1">
                <Input
                  placeholder="Enter Number Phone..."
                  variant={getVariant(isDirty, !!error)}
                  onChange={onChange}
                  value={value}
                />
              </InputGroup>
              <StyledErrorMessage role="alert">
                {errors.phone1 ? errors.phone1.message : ""}
              </StyledErrorMessage>
            </StyledInputContainer>
          )}
          name="phone1"
        />

        <Controller
          control={control}
          rules={rulesPhone}
          defaultValue={detailContactCtx?.data?.phones[1]?.number}
          render={({
            field: { onChange, value },
            fieldState: { isDirty, error },
          }) => (
            <StyledInputContainer>
              <StyledLabelForm htmlFor="phone2">Number Phone 2</StyledLabelForm>
              <InputGroup id="phone2">
                <Input
                  placeholder="Enter Number Phone..."
                  variant={getVariant(isDirty, !!error)}
                  onChange={onChange}
                  value={value}
                />
              </InputGroup>
              <StyledErrorMessage role="alert">
                {errors.phone2 ? errors.phone2.message : ""}
              </StyledErrorMessage>
            </StyledInputContainer>
          )}
          name="phone2"
        />

        <StyledButtonSubmit
          isLoading={
            editContactCtx.phoneOnLoading || editContactCtx.contactOnLoading
          }
          onClick={() => {}}
        >
          Edit Contact
        </StyledButtonSubmit>
      </form>
    )
  )
}

export { FormEdit }
