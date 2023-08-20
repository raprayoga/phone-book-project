import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { StyledLinkMenu, StyledSidebar } from "./sidebar-styling"
export default function SideBar() {
  const router = useRouter()

  return (
    <StyledSidebar>
      <h2>Phonebook App</h2>
      <ul>
        <StyledLinkMenu isActive={router.pathname === "/"}>
          <Link href="/">My Contact</Link>
        </StyledLinkMenu>
      </ul>
    </StyledSidebar>
  )
}
