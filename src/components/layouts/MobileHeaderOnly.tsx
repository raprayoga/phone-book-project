import React from "react"
import HeaderMobile from "@/components/modules/HeaderMobile"
import DetailContactProvider from "@/stores/detail-contact/DetailContactProvider"

export default function MobileHeaderOnly({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <DetailContactProvider>
      <HeaderMobile title={title} />
      <main>{children}</main>
    </DetailContactProvider>
  )
}
