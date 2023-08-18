import React, { useContext, useEffect } from "react"
import Desktop from "@/components/templates/Beranda/Desktop/Desktop"
import Mobile from "@/components/templates/Beranda/Mobile/Mobile"
import { useIsMobile } from "@/hooks/useIsMobile"
import { getIsSsrMobile } from "@/utils/mobile-detect"
import { GetServerSidePropsContext } from "next"
import ContactListProvider from "@/stores/contact-list/ContactListProvider"

export function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      isSsrMobile: getIsSsrMobile(context),
    },
  }
}

export default function Index() {
  const isMobile = useIsMobile()

  return (
    <ContactListProvider>
      {!isMobile && <Desktop />}
      {isMobile && <Mobile />}
    </ContactListProvider>
  )
}
