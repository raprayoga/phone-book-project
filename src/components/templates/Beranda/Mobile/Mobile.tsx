import React, { useContext, useEffect } from "react"
import ContactListContext from "@/stores/contact-list/contact-list-context"
import Card from "@/components/elements/Card"

export default function Mobile() {
  const contactListCtx = useContext(ContactListContext)

  useEffect(() => {
    contactListCtx.getItem()
  }, [])

  return (
    <>
      {contactListCtx.items.map((contact) => (
        <Card>{contact.first_name}</Card>
      ))}
    </>
  )
}
