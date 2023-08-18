import { ApolloError } from "@apollo/client"
import React from "react"

const ContactListContext = React.createContext<{
  items: any[]
  loading: boolean
  error?: ApolloError
  getItem: () => void
}>({
  items: [],
  loading: false,
  error: undefined,
  getItem: () => {},
})

export default ContactListContext
