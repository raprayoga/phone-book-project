import { ChildLeft, InputGroup } from "@/components/elements/InputGroup"
import React from "react"
import {
  StyledInput,
  StyledInputGroup,
  StyledMagnifyingGlassIcon,
} from "./input-search-styling"

const InputSearch = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <StyledInputGroup>
      <InputGroup>
        <ChildLeft>
          <StyledMagnifyingGlassIcon />
        </ChildLeft>
        <StyledInput
          ref={ref}
          {...props}
          variant="gainsboro"
          placeholder="Search Contact"
        />
      </InputGroup>
    </StyledInputGroup>
  )
})

export { InputSearch }
