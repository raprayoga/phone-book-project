import { useMemo } from "react"
import { useMutation } from "@apollo/client"
import DeleteContactContext from "./delete-contact-context"
import { DELETE_CONTACT } from "@/operations/delete"

const DeleteContactProvider = ({ children }: { children: React.ReactNode }) => {
  const [mutateFunction, { loading, error, data }] = useMutation(DELETE_CONTACT)

  const deleteItemHandler = (id: number) => {
    mutateFunction({
      variables: {
        id: id,
      },
    })
  }

  const deleteContactContext = useMemo(
    () => ({
      data: data,
      loading: loading,
      error: error,
      deleteItem: deleteItemHandler,
    }),
    [loading, error, data]
  )

  return (
    <DeleteContactContext.Provider value={deleteContactContext}>
      {children}
    </DeleteContactContext.Provider>
  )
}

export default DeleteContactProvider
