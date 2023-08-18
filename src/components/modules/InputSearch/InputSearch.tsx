import { ChildLeft, InputGroup } from "@/components/elements/InputGroup"
import React from "react"
import {
  StyledInput,
  StyledInputGroup,
  StyledMagnifyingGlassIcon,
} from "./input-search-styling"

function InputSearch(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <StyledInputGroup>
      <InputGroup>
        <ChildLeft>
          <StyledMagnifyingGlassIcon />
        </ChildLeft>
        <StyledInput
          {...props}
          variant="gainsboro"
          placeholder="Search Contact"
        />
      </InputGroup>
    </StyledInputGroup>
  )
}

export { InputSearch }
