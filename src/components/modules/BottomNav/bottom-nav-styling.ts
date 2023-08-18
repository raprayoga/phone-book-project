import styled from "@emotion/styled"
import { StarIcon, UserIcon } from "@heroicons/react/24/outline"
import {
  StarIcon as StarIconSolid,
  UserIcon as UserIconSolid,
} from "@heroicons/react/24/solid"

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

const StyledStarIcon = styled(StarIcon)`
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme.colors.secondary};
`

const StyledUserIcon = styled(UserIcon)`
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme.colors.secondary};
`
const StyledStarIconSolid = styled(StarIconSolid)`
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme.colors.primary};
`

const StyledUserIconSolid = styled(UserIconSolid)`
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
