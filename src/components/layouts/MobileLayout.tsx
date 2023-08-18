import React from "react"
import HeaderSearchMobile from "@/components/modules/HeaderSearchMobile"
import BottomNav from "@/components/modules/BottomNav"

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <HeaderSearchMobile />
      <main>{children}</main>
      <BottomNav />
    </>
  )
}
