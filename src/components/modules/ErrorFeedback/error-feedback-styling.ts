import styled from "@emotion/styled"
import Card from "@/components/elements/Card"

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  margin: 0.25rem 0;
  display: flex;
  align-items: center;

  & > p {
    font-size: 14px;
    font-weight: bold;
  }

  & > button {
    margin-top: 10px;
  }
`

export { StyledCard }
