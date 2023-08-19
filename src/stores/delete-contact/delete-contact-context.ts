import React from "react"
import { Contact } from "@/interfaces/contact"
import { ApolloError } from "@apollo/client"

const DeleteContactContext = React.createContext<{
  data: Contact
  loading: boolean
  error?: ApolloError
  deleteItem: (query: any) => void
}>({
  data: {
    created_at: "",
    first_name: "",
    id: 0,
    last_name: "",
    phones: [],
  },
  loading: false,
  error: undefined,
  deleteItem: (query) => {},
})

export default DeleteContactContext
