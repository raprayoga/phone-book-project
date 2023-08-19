import React, { useContext, useEffect } from "react"
import ContactListContext from "@/stores/contact-list/contact-list-context"

export default function Desktop() {
  const contactListCtx = useContext(ContactListContext)

  useEffect(() => {
    contactListCtx.getItem({})
  }, [])

  return (
    <>
      <button onClick={() => contactListCtx.getItem({})}>REFETCH</button>
      {`${contactListCtx.items}`}
    </>
  )
}
