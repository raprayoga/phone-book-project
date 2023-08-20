import React from "react"
import { useIsMobile } from "@/hooks/useIsMobile"
import { getIsSsrMobile } from "@/utils/mobile-detect"
import { GetServerSidePropsContext } from "next"
import Mobile from "@/components/templates/Favorite/Mobile/Mobile"
import MobileWithoutSearch from "@/components/layouts/MobileWithoutSearch"
import { useRouter } from "next/router"

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
      {isMobile && (
        <MobileWithoutSearch title="My Favorite">
          <Mobile />
        </MobileWithoutSearch>
      )}
    </>
  )
}
