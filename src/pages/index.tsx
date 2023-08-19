import React from "react"
import Desktop from "@/components/templates/Beranda/Desktop/Desktop"
import Mobile from "@/components/templates/Beranda/Mobile/Mobile"
import { useIsMobile } from "@/hooks/useIsMobile"
import { getIsSsrMobile } from "@/utils/mobile-detect"
import { GetServerSidePropsContext } from "next"
import ContactListProvider from "@/stores/contact-list/ContactListProvider"
import MobileLayout from "@/components/layouts/MobileLayout"

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
      {!isMobile && <Desktop />}
      {isMobile && (
        <MobileLayout>
          <Mobile />
        </MobileLayout>
      )}
    </>
  )
}
