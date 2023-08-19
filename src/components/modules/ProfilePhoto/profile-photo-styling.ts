import styled from "@emotion/styled"

const PhotoProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  margin-bottom: 10vh;
  height: 30vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  & > p {
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
  }
`

export { PhotoProfileContainer }
