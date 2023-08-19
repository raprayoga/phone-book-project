import styled from "@emotion/styled"
import Button from "@/components/elements/Button"

const StyledButtonSubmit = styled(Button)`
  margin-top: 30px;
  width: 100%;
`

const StyledLabelForm = styled.label`
  font-size: 12px;
  margin: 5px 0;
`

const StyledErrorMessage = styled.span`
  font-size: 10px;
  font-weight: normal;
  color: ${(props) => props.theme.colors.danger};
  margin-left: 20px;
`

const StyledInputContainer = styled.div`
  margin-botom: 10px;
`

export {
  StyledButtonSubmit,
  StyledLabelForm,
  StyledErrorMessage,
  StyledInputContainer,
}
