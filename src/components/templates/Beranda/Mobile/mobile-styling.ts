import styled from "@emotion/styled"

const StyledContainer = styled.div`
  min-height: 70vw;
  margin: 0 auto;
  width: 95%;
  margin-top: 130px;
  margin-bottom: 300px;
`

const StyledError = styled.div`
  position: fixed;
  width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export { StyledContainer, StyledError }
