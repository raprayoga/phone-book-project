import Button from "@/components/elements/Button"
import FormAdd from "@/components/modules/FormAdd"
import styled from "@emotion/styled"

const StyledContainer = styled.div`
  padding: 5px 20px;

  & > button {
    text-align: right;
  }
`

const StyledFormAdd = styled(FormAdd)`
  max-width: 720px;
  margin: 30px auto;
`

const StyledBack = styled(Button)`
  display: flex;
  margin-bottom: 0.5rem;
  font-size: 12px;
  gap: 0.3rem;
  align-items: center;
`

export { StyledContainer, StyledFormAdd, StyledBack }
