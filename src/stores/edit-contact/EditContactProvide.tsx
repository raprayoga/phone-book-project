import { useMemo } from "react"
import { useMutation } from "@apollo/client"
import EditContactContext from "./edit-contact-context"
import { UPDATE_CONTACT_LIST, UPDATE_PHONE_LIST } from "@/operations/update"

const EditContactProvider = ({ children }: { children: React.ReactNode }) => {
  const [
    mutateContactFunction,
    { loading: contactOnLoading, error: contactOnError },
  ] = useMutation(UPDATE_CONTACT_LIST)
  const [
    mutatePhoneFunction,
    { loading: phoneOnLoading, error: phoneOnError, data },
  ] = useMutation(UPDATE_PHONE_LIST)

  const editItemHandler = (query: any) => {
    console.log(query)
    mutateContactFunction({
      variables: {
        id: query.id,
        _set: {
          first_name: query.first_name,
          last_name: query.last_name,
        },
      },
    })

    query.phones.forEach((phone: { oldNumber: any; number: any }) => {
      if (phone.number) {
        mutatePhoneFunction({
          variables: {
            pk_columns: {
              number: phone.oldNumber,
              contact_id: query.id,
            },
            new_phone_number: phone.number,
          },
        })
      }
    })
  }

  const editContactContext = useMemo(
    () => ({
      data: data,
      contactOnLoading: contactOnLoading,
      phoneOnLoading: phoneOnLoading,
      contactOnError: contactOnError,
      phoneOnError: phoneOnError,
      editItem: editItemHandler,
    }),
    [contactOnLoading, phoneOnLoading, contactOnError, phoneOnError, data]
  )

  return (
    <EditContactContext.Provider value={editContactContext}>
      {children}
    </EditContactContext.Provider>
  )
}

export default EditContactProvider
