import React from "react"
import HeaderMobile from "@/components/modules/HeaderMobile"
import DetailContactProvider from "@/stores/detail-contact/DetailContactProvider"
import DeleteContactProvider from "@/stores/delete-contact/DeleteContactProvider"

export default function MobileHeaderOnly({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <DetailContactProvider>
      <DeleteContactProvider>
        <HeaderMobile title={title} />
        <main>{children}</main>
      </DeleteContactProvider>
    </DetailContactProvider>
  )
}
