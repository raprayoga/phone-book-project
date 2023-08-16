import React from "react"
import { useQuery } from "@apollo/client"
import { GET_CONTACT_LIST } from "@/operations/list"
import { Button } from "@/component/elements/Button/Button"

export default function Index() {
  const { data, loading, error } = useQuery(GET_CONTACT_LIST)

  console.log(data)

  return (
    <div>
      <Button onClick={() => console.log("CLICK")} variant="success">
        INNI BUTTON
      </Button>
    </div>
  )
}
