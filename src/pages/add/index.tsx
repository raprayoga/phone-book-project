import React from "react"
import { useIsMobile } from "@/hooks/useIsMobile"
import { getIsSsrMobile } from "@/utils/mobile-detect"
import { GetServerSidePropsContext } from "next"
import MobileHeaderOnly from "@/components/layouts/MobileHeaderOnly"
import Desktop from "@/components/templates/Add/Desktop/Desktop"
import Mobile from "@/components/templates/Add/Mobile/Mobile"
import AddContactProvider from "@/stores/add-contact/AddContactContext"

export function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      isSsrMobile: getIsSsrMobile(context),
    },
  }
}

export default function Page() {
  const isMobile = useIsMobile()

  return (
    <AddContactProvider>
      {!isMobile && <Desktop />}
      {isMobile && (
        <MobileHeaderOnly title="Add New Contact">
          <Mobile />
        </MobileHeaderOnly>
      )}
    </AddContactProvider>
  )
}
