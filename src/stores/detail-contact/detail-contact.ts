import { ApolloError } from "@apollo/client"
import React from "react"

const DetailContactContext = React.createContext<{
  data: {}
  loading: boolean
  error?: ApolloError
  getItem: (query: any) => void
}>({
  data: {},
  loading: false,
  error: undefined,
  getItem: (query) => {},
})

export default DetailContactContext
