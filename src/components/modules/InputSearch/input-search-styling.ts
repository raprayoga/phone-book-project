import Input from "@/components/elements/InputGroup"
import styled from "@emotion/styled"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

const StyledInputGroup = styled.div`
  margin-top: 1.5rem;
`

const StyledInput = styled(Input)`
  padding-left: 2rem;
`

const StyledMagnifyingGlassIcon = styled(MagnifyingGlassIcon)`
  width: 16px;
  height: 16px;
  margin-left: 0.5rem;
`

export { StyledInputGroup, StyledInput, StyledMagnifyingGlassIcon }
