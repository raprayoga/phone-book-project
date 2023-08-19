import { useMemo } from "react"
import { useLazyQuery } from "@apollo/client"
import DetailContactContext from "./detail-contact-context"
import { GET_DETAIL_CONTACT } from "@/operations/detail"

const DetailContactProvider = ({ children }: { children: React.ReactNode }) => {
  const [getData, { loading, error, data }] = useLazyQuery(GET_DETAIL_CONTACT)

  const getItemHandler = (id: number) => {
    getData({
      variables: {
        id: id,
      },
    })
  }

  const detailContactContext = useMemo(
    () => ({
      data: data?.contact_by_pk,
      loading: loading,
      error: error,
      getItem: getItemHandler,
    }),
    [loading, error, data?.contact_by_pk]
  )

  return (
    <DetailContactContext.Provider value={detailContactContext}>
      {children}
    </DetailContactContext.Provider>
  )
}

export default DetailContactProvider
