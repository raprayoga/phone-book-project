import { useMemo, useState } from "react"
import { GET_CONTACT_LIST } from "@/operations/list"
import { OperationVariables, useQuery } from "@apollo/client"
import ContactListContext from "./contact-list-context"

const ContactListProvider = ({ children }: { children: React.ReactNode }) => {
  const [offset, setOffset] = useState(0)
  const { data, loading, refetch, error } = useQuery(GET_CONTACT_LIST, {
    variables: {
      order_by: {
        first_name: "asc",
      },
    },
  })

  const getItemHandler = (query: Partial<OperationVariables> | undefined) => {
    refetch({
      order_by: {
        first_name: "asc",
      },
      offset: offset,
      ...query,
    })
  }

  const loadMoreHandler = (query: Partial<OperationVariables> | undefined) => {
    setOffset((prevState) => {
      return prevState + 1
    })
    console.log(offset)
    getItemHandler(query)
  }

  const contactListContext = {
    items: data?.contact,
    loading: loading,
    offset: offset,
    error: error,
    getItem: getItemHandler,
    loadMore: loadMoreHandler,
  }

  return (
    <ContactListContext.Provider value={contactListContext}>
      {children}
    </ContactListContext.Provider>
  )
}

export default ContactListProvider
