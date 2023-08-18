import { GET_CONTACT_LIST } from "@/operations/list"
import { useQuery } from "@apollo/client"
import ContactListContext from "./contact-list-context"

const ContactListProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, loading, refetch, error } = useQuery(GET_CONTACT_LIST)

  const getItemHandler = async () => {
    refetch()
  }

  const contactListContext = {
    items: data?.contact,
    loading: loading,
    error: error,
    getItem: getItemHandler,
  }

  return (
    <ContactListContext.Provider value={contactListContext}>
      {children}
    </ContactListContext.Provider>
  )
}

export default ContactListProvider
