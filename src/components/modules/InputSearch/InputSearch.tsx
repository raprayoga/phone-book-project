import { ChildLeft, InputGroup } from "@/components/elements/InputGroup"
import React from "react"
import { StyledInput, StyledMagnifyingGlassIcon } from "./input-search-styling"

const InputSearch = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <div>
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
    </div>
  )
})
InputSearch.displayName = "InputSearch"

export { InputSearch }
