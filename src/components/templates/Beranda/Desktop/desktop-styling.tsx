import ContactCard from "@/components/modules/ContactCard"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const getActiveStyles = ({
  isActive,
  theme,
}: {
  isActive?: boolean
  theme: any
}) => {
  if (isActive) {
    return css`
      background-color: ${theme.colors.light};
      border-left-width: 0.5rem;
      border-left-color: ${theme.colors.info};
    `
  }
}

const StyledError = styled.div`
  position: fixed;
  width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const StyledContainerMain = styled.div`
  height: 100vh;
  width: 65%;
  padding: 5px 20px;
  overflow-y: scroll;
`

const StyledContainerRightPanel = styled.div`
  height: 100vh;
  width: 35%;
  background-color: ${(props) => props.theme.colors.light};
`

const StyledContainer = styled.div`
  display: flex;
`

const StyledContactCard = styled(ContactCard)<{ isActive?: boolean }>`
  cursor: pointer;
  ${(props) => getActiveStyles(props)}
`

const StyledFavoriteList = styled.div`
  margin-bottom: 2rem;
`

export {
  StyledContainerMain,
  StyledError,
  StyledContainerRightPanel,
  StyledContainer,
  StyledContactCard,
  StyledFavoriteList,
}
