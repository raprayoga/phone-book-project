import styled from "@emotion/styled"
import Card from "@/components/elements/Card"

const StyledCard = styled(Card)`
  margin: 0.25rem 0;
  display: flex;
  align-items: center;
`

const StyledInfo = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;

  & > p:first-child {
    font-weight: bold;
  }

  & > p:last-child {
    display: flex;
    font-size: 10px;
  }
`

export { StyledCard, StyledInfo }
