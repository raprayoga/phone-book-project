import React from "react"
import BottomNav from "@/components/modules/BottomNav"
import ContactListProvider from "@/stores/contact-list/ContactListProvider"
import HeaderMobile from "../modules/HeaderMobile"

export default function MobileWithoutSearch({
  children,
  title,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <ContactListProvider>
      <HeaderMobile title={title} />
      <main>{children}</main>
      <BottomNav />
    </ContactListProvider>
  )
}
