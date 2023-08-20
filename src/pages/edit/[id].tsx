import React from "react"
import { useIsMobile } from "@/hooks/useIsMobile"
import { getIsSsrMobile } from "@/utils/mobile-detect"
import { GetServerSidePropsContext } from "next"
import MobileHeaderOnly from "@/components/layouts/MobileHeaderOnly"
import Mobile from "@/components/templates/Edit/Mobile/Mobile"
import EditContactProvider from "@/stores/edit-contact/EditContactProvide"
import DetailContactProvider from "@/stores/detail-contact/DetailContactProvider"
import Desktop from "@/components/templates/Edit/Desktop/Desktop"
import DesktopLayout from "@/components/layouts/DesktopLayout"

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
    <DetailContactProvider>
      <EditContactProvider>
        {!isMobile && (
          <DesktopLayout>
            <Desktop />
          </DesktopLayout>
        )}
        {isMobile && (
          <MobileHeaderOnly title="Edit Contact">
            <Mobile />
          </MobileHeaderOnly>
        )}
      </EditContactProvider>
    </DetailContactProvider>
  )
}
