import { useMemo } from "react"
import { useMutation } from "@apollo/client"
import AddContactContext from "./add-contact-context"
import { ADD_CONTACT } from "@/operations/add"

const AddContactProvider = ({ children }: { children: React.ReactNode }) => {
  const [mutateFunction, { loading, error, data }] = useMutation(ADD_CONTACT)

  const addItemHandler = (query: any) => {
    mutateFunction({
      variables: query,
    })
  }

  const addContactContext = useMemo(
    () => ({
      data: data,
      loading: loading,
      error: error,
      addItem: addItemHandler,
    }),
    [loading, error, data]
  )

  return (
    <AddContactContext.Provider value={addContactContext}>
      {children}
    </AddContactContext.Provider>
  )
}

export default AddContactProvider
