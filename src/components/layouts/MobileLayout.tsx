import React from "react"
import HeaderSearchMobile from "@/components/modules/HeaderSearchMobile"
import BottomNav from "@/components/modules/BottomNav"
import ContactListProvider from "@/stores/contact-list/ContactListProvider"

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ContactListProvider>
      <HeaderSearchMobile />
      <main>{children}</main>
      <BottomNav />
    </ContactListProvider>
  )
}
