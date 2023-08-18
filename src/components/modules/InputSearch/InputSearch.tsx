import { ChildLeft, InputGroup } from "@/components/elements/InputGroup"
import React from "react"
import {
  StyledInput,
  StyledInputGroup,
  StyledMagnifyingGlassIcon,
} from "./input-search-styling"

function InputSearch() {
  return (
    <StyledInputGroup>
      <InputGroup>
        <ChildLeft>
          <StyledMagnifyingGlassIcon />
        </ChildLeft>
        <StyledInput variant="gainsboro" placeholder="Placeholder here" />
      </InputGroup>
    </StyledInputGroup>
  )
}

export { InputSearch }
