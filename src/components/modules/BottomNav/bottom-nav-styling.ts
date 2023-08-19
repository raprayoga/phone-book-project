import styled from "@emotion/styled"
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined"
import StarIcon from "@mui/icons-material/Star"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import PersonIcon from "@mui/icons-material/Person"

const StyledNavContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.light};
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
`

const StyledStarIcon = styled(StarOutlineOutlinedIcon)`
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme.colors.secondary};
`

const StyledUserIcon = styled(PersonOutlineOutlinedIcon)`
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme.colors.secondary};
`
const StyledStarIconSolid = styled(StarIcon)`
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme.colors.primary};
`

const StyledUserIconSolid = styled(PersonIcon)`
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme.colors.primary};
`

const StyledFavNav = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`

export {
  StyledNavContainer,
  StyledStarIcon,
  StyledUserIcon,
  StyledStarIconSolid,
  StyledUserIconSolid,
  StyledFavNav,
}
