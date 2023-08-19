import styled from "@emotion/styled"

const StyledContainer = styled.div`
  min-height: 90vh;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.light};
`

const StyledError = styled.div`
  text-align: center;
  position: fixed;
  width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export { StyledContainer, StyledError }
