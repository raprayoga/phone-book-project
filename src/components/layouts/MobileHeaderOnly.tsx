import React from "react"
import HeaderMobile from "@/components/modules/HeaderMobile"

export default function MobileHeaderOnly({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <>
      <HeaderMobile title={title} />
      <main>{children}</main>
    </>
  )
}
