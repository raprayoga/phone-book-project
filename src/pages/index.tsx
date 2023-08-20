import React from "react"
import Desktop from "@/components/templates/Beranda/Desktop/Desktop"
import Mobile from "@/components/templates/Beranda/Mobile/Mobile"
import { useIsMobile } from "@/hooks/useIsMobile"
import { getIsSsrMobile } from "@/utils/mobile-detect"
import { GetServerSidePropsContext } from "next"
import MobileLayout from "@/components/layouts/MobileLayout"
import DesktopLayout from "@/components/layouts/DesktopLayout"
import DetailContactProvider from "@/stores/detail-contact/DetailContactProvider"
import DeleteContactProvider from "@/stores/delete-contact/DeleteContactProvider"

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
    <>
      {!isMobile && (
        <DetailContactProvider>
          <DeleteContactProvider>
            <DesktopLayout>
              <Desktop />
            </DesktopLayout>
          </DeleteContactProvider>
        </DetailContactProvider>
      )}
      {isMobile && (
        <MobileLayout>
          <Mobile />
        </MobileLayout>
      )}
    </>
  )
}
