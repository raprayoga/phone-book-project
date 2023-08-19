import React from "react"
import { useIsMobile } from "@/hooks/useIsMobile"
import { getIsSsrMobile } from "@/utils/mobile-detect"
import { GetServerSidePropsContext } from "next"
import MobileHeaderOnly from "@/components/layouts/MobileHeaderOnly"
import Mobile from "@/components/templates/Favorite/Mobile/Mobile"
import Desktop from "@/components/templates/Favorite/Desktop/Desktop"

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
        <MobileHeaderOnly title="My Favorite">
          <Mobile />
        </MobileHeaderOnly>
      )}
    </>
  )
}
