import React, { useContext } from "react"
import Input, { InputGroup } from "@/components/elements/InputGroup"
import AddContactContext from "@/stores/add-contact/add-contact-context"
import { Controller, Control, useForm, SubmitHandler } from "react-hook-form"
import {
  StyledButtonSubmit,
  StyledErrorMessage,
  StyledInputContainer,
  StyledLabelForm,
} from "./form-add-styling"
import { formRules, rulesPhone } from "@/utils/form-rules"

export type Inputs = {
  first_name: string
  last_name: string
  phone1: string
  phone2: string
}

export interface FormProps {
  control: Control<Inputs, any>
}

function FormAdd(props: React.FormHTMLAttributes<HTMLFormElement>) {
  const addContactCtx = useContext(AddContactContext)
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
      first_name: data.first_name,
      last_name: data.last_name,
      phones: [
        {
          number: data.phone1,
        },
      ],
    }
    if (data.phone2) {
      variableQuery.phones.push({
        number: data.phone2,
      })
    }
    addContactCtx.addItem(variableQuery)
    reset()
  }

  function getVariant(dirty: boolean, error: boolean) {
    if (error) {
      return "danger"
    }
    return !dirty ? "gainsboro" : "success"
  }

  return (
    <form {...props} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        rules={{
          required: formRules.required,
        }}
        defaultValue=""
        render={({
          field: { onChange, onBlur, value },
          fieldState: { isDirty, error },
        }) => (
          <StyledInputContainer>
            <StyledLabelForm htmlFor="first_name">First Name</StyledLabelForm>
            <InputGroup id="first_name">
              <Input
                placeholder="Enter First Name..."
                variant={getVariant(isDirty, !!error)}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            </InputGroup>
            <StyledErrorMessage role="alert">
              {errors.first_name ? "Wajib diisi" : ""}
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
        defaultValue=""
        render={({
          field: { onChange, onBlur, value },
          fieldState: { isDirty, error },
        }) => (
          <StyledInputContainer>
            <StyledLabelForm htmlFor="last_name">Last Name</StyledLabelForm>
            <InputGroup id="last_name">
              <Input
                placeholder="Enter Last Name..."
                variant={getVariant(isDirty, !!error)}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            </InputGroup>
            <StyledErrorMessage role="alert">
              {errors.last_name ? "Wajib diisi" : ""}
            </StyledErrorMessage>
          </StyledInputContainer>
        )}
        name="last_name"
      />

      <Controller
        control={control}
        rules={{
          ...rulesPhone,
          required: formRules.required,
        }}
        defaultValue=""
        render={({
          field: { onChange, onBlur, value },
          fieldState: { isDirty, error },
        }) => (
          <StyledInputContainer>
            <StyledLabelForm htmlFor="phone1">Number Phone 1</StyledLabelForm>
            <InputGroup id="phone1">
              <Input
                placeholder="Enter Number Phone 1..."
                variant={getVariant(isDirty, !!error)}
                onBlur={onBlur}
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
        defaultValue=""
        render={({
          field: { onChange, onBlur, value },
          fieldState: { isDirty, error },
        }) => (
          <StyledInputContainer>
            <StyledLabelForm htmlFor="phone2">Number Phone 1</StyledLabelForm>
            <InputGroup id="phone2">
              <Input
                placeholder="Enter Number Phone 2..."
                variant={getVariant(isDirty, !!error)}
                onBlur={onBlur}
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

      <StyledButtonSubmit isLoading={addContactCtx?.loading} onClick={() => {}}>
        Add Contact
      </StyledButtonSubmit>
    </form>
  )
}

export { FormAdd }
