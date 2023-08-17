import React from "react"
import { useQuery } from "@apollo/client"
import { GET_CONTACT_LIST } from "@/operations/list"
import Desktop from "@/components/templates/Beranda/Desktop/Desktop"
import Mobile from "@/components/templates/Beranda/Mobile/Mobile"
import { useIsMobile } from "@/hooks/useIsMobile"
import { getIsSsrMobile } from "@/utils/mobile-detect"
import { GetServerSidePropsContext } from "next"

export function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      isSsrMobile: getIsSsrMobile(context),
    },
  }
}

export default function Index() {
  const { data, loading, error } = useQuery(GET_CONTACT_LIST)
  const isMobile = useIsMobile()

  return (
    <>
      {!isMobile && <Desktop />}
      {isMobile && <Mobile />}
    </>
  )
}
