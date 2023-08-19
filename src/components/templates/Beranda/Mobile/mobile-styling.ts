import styled from "@emotion/styled"

const StyledContainer = styled.div`
  height: 100vw;
  margin: 0 auto;
  width: 95%;
  font-weight: bolder;
  font-size: 22px;
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
