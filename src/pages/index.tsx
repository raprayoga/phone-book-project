import React from "react"
import { useQuery } from "@apollo/client"
import { GET_CONTACT_LIST } from "@/operations/list"
import Desktop from "@/components/templates/Beranda/Desktop/Desktop"
import Mobile from "@/components/templates/Beranda/Mobile/Mobile"

export default function Index() {
  const { data, loading, error } = useQuery(GET_CONTACT_LIST)

  console.log(data)

  return (
    <>
      <Desktop />
      <Mobile />
    </>
  )
}
