import React from "react"
import styled from "@emotion/styled"
import ContactListProvider from "@/stores/contact-list/ContactListProvider"
import SideBar from "@/components/modules/SideBar"

const StyledContainer = styled.div`
  display: flex;
`

const StyledMain = styled.main`
  min-height: 100vh;
  width: 100%;
`

export default function DesktopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StyledContainer>
      <ContactListProvider>
        <SideBar />
        <StyledMain>{children}</StyledMain>
      </ContactListProvider>
    </StyledContainer>
  )
}
