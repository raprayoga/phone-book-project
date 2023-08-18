import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import {
  StyledFavNav,
  StyledNavContainer,
  StyledStarIcon,
  StyledStarIconSolid,
  StyledUserIcon,
  StyledUserIconSolid,
} from "./bottom-nav-styling"

const UserIconElement = () => {
  const router = useRouter()

  if (router.pathname === "/") {
    return <StyledUserIconSolid />
  } else {
    return <StyledUserIcon />
  }
}

const StarIconElement = () => {
  const router = useRouter()
  if (router.pathname === "/favorite") {
    return <StyledStarIconSolid />
  } else {
    return <StyledStarIcon />
  }
}

function BottomNav() {
  return (
    <StyledNavContainer>
      <StyledFavNav>
        <Link href="/">
          <UserIconElement />
        </Link>
      </StyledFavNav>
      <StyledFavNav>
        <Link href="/favorite">
          <StarIconElement />
        </Link>
      </StyledFavNav>
    </StyledNavContainer>
  )
}

export { BottomNav }
