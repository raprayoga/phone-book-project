import { ApolloError } from "@apollo/client"
import React from "react"

const ContactListContext = React.createContext<{
  items: any[]
  loading: boolean
  offset?: number
  error?: ApolloError
  getItem: (query: any) => void
  loadMore: (query: any) => void
}>({
  items: [],
  loading: false,
  offset: undefined,
  error: undefined,
  getItem: () => {},
  loadMore: () => {},
})

export default ContactListContext
