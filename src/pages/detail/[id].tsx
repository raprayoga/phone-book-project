import React from "react"
import Mobile from "@/components/templates/Detail/Mobile/Mobile"
import MobileHeaderOnly from "@/components/layouts/MobileHeaderOnly"

export default function Page() {
  return (
    <>
      <MobileHeaderOnly title="My Favorite">
        <Mobile />
      </MobileHeaderOnly>
    </>
  )
}
