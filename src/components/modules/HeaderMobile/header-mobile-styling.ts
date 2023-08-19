import styled from "@emotion/styled"
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined"

const StyledNavbarContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 40;
  margin: auto;
  background: white;
  padding: 1rem 1rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};

  & > h2 {
    font-weight: bolder;
    font-size: 22px;
  }
`
const StyledBack = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  font-size: 12px;
  gap: 0.3rem;
  align-items: center;
`

const StyledArrowLeftIcon = styled(ArrowBackOutlinedIcon)`
  width: 14px;
  height: 14px;
  stroke-width: 3;
`

export { StyledNavbarContainer, StyledBack, StyledArrowLeftIcon }
