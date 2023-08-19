import React from "react"
import { Contact } from "@/interfaces/contact"
import { ApolloError } from "@apollo/client"

const AddContactContext = React.createContext<{
  data: Contact
  loading: boolean
  error?: ApolloError
  addItem: (query: any) => void
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
  addItem: (query) => {},
})

export default AddContactContext
