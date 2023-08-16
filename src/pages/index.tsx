import React from "react"
import { useQuery } from "@apollo/client"
import { GET_CONTACT_LIST } from "@/operations/list"

export default function Index() {
  const { data, loading, error } = useQuery(GET_CONTACT_LIST)

  console.log(data)

  return <div>{`${loading}`}</div>
}
