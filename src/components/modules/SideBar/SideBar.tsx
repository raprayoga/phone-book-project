import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import styled from "@emotion/styled"

const StyledSidebar = styled.div`
  width: 20%;
  background-color: ${(props) => props.theme.colors.primary};
  height: 100vh;
  padding: 10px 20px;

  & > h2 {
    margin: 20px 0;
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
  }
`

const StyledLinkMenu = styled.li<{ isActive?: boolean }>`
  color: ${(props) =>
    props.isActive ? props.theme.colors.white : props.theme.colors.gainsboro};
  margin: 10px 0;
`

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
