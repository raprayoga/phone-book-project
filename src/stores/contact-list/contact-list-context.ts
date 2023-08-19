import React from "react"
import { ApolloError } from "@apollo/client"
import { Contact } from "@/interfaces/contact"

const ContactListContext = React.createContext<{
  items: Contact[]
  loading: boolean
  error?: ApolloError
  getItem: (query: any) => void
}>({
  items: [],
  loading: false,
  error: undefined,
  getItem: () => {},
})

export default ContactListContext
