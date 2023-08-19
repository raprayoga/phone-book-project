import React from "react"
import Mobile from "@/components/templates/Detail/Mobile/Mobile"
import MobileHeaderOnly from "@/components/layouts/MobileHeaderOnly"
import DetailContactProvider from "@/stores/detail-contact/DetailContactProvider"
import DeleteContactProvider from "@/stores/delete-contact/DeleteContactProvider"

export default function Page() {
  return (
    <>
      <DetailContactProvider>
        <DeleteContactProvider>
          <MobileHeaderOnly title="">
            <Mobile />
          </MobileHeaderOnly>
        </DeleteContactProvider>
      </DetailContactProvider>
    </>
  )
}
