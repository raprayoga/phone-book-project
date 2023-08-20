import React from "react"
import { Contact } from "@/interfaces/contact"
import { ApolloError } from "@apollo/client"

const EditContactContext = React.createContext<{
  data?: Contact
  contactOnLoading: boolean
  phoneOnLoading: boolean
  contactOnError?: ApolloError
  phoneOnError?: ApolloError
  editItem: (query: any) => void
}>({
  data: undefined,
  contactOnLoading: false,
  phoneOnLoading: false,
  contactOnError: undefined,
  phoneOnError: undefined,
  editItem: (query) => {},
})

export default EditContactContext
