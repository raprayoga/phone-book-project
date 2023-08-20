import styled from "@emotion/styled"
import Card from "@/components/elements/Card"

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 5rem;
  height: 5rem;
  justify-content: space-around;

  & > p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bold;
    font-size: 12px;
    width: 100%;
    text-align: center;
  }
`

const StyledCardContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

const StyledContainer = styled.div`
  margin-bottom: 1.5rem;

  & > h3 {
    font-size: 14px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.primary};
  }
`

export { StyledCard, StyledCardContainer, StyledContainer }
