import React from "react"
import HeaderMobile from "@/components/modules/HeaderMobile"

export default function MobileHeaderOnly({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <HeaderMobile />
      <main>{children}</main>
    </>
  )
}
