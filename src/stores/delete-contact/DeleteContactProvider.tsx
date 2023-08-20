import { useMemo } from "react"
import { useMutation } from "@apollo/client"
import DeleteContactContext from "./delete-contact-context"
import { DELETE_CONTACT } from "@/operations/delete"
import { getItemFromLocalStorage } from "@/utils/store-favorite"
import { Contact } from "@/interfaces/contact"

const DeleteContactProvider = ({ children }: { children: React.ReactNode }) => {
  const [mutateFunction, { loading, error, data }] = useMutation(DELETE_CONTACT)

  const deleteItemHandler = (id: number) => {
    mutateFunction({
      variables: {
        id: id,
      },
    })

    deleteFromFavorite(id)
  }

  const deleteFromFavorite = (id: number) => {
    const favorites = getItemFromLocalStorage("favorites")
    const inFavoritesIndex = favorites.data.findIndex(
      (favorite: Contact) => +favorite.id === +id
    )
    if (inFavoritesIndex >= 0) {
      favorites.data.splice(inFavoritesIndex, 1)
      localStorage.setItem("favorites", JSON.stringify(favorites))
    }
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
