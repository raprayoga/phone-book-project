import React, { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined"
import StarOutlinedIcon from "@mui/icons-material/StarOutlined"
import { getItemFromLocalStorage } from "@/utils/store-favorite"
import { StyledButton } from "./fav-button-styling"
import { Contact } from "@/interfaces/contact"

function FavoriteButton({
  contact,
  onChange = () => null,
}: {
  contact: Contact
  onChange?: () => void
}) {
  const [mounted, setMounted] = useState<boolean>(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [favorites, setFavorites] = useState<{ data: Contact[] }>({ data: [] })

  const onClickHandler = () => {
    if (!favorites) {
      const newItems = { data: [contact] }
      localStorage.setItem("favorites", JSON.stringify(newItems))
      onChange()
      return setFavorites(newItems)
    }

    if (!isFavorite) {
      const newItems = { data: [...favorites.data, ...[contact]] }
      localStorage.setItem("favorites", JSON.stringify(newItems))
      onChange()
      return setFavorites(newItems)
    }
    const inFavoritesIndex = favorites.data.findIndex(
      (favorite) => favorite.id === contact?.id
    )
    const newItems = { ...favorites }
    newItems.data.splice(inFavoritesIndex, 1)
    localStorage.setItem("favorites", JSON.stringify(newItems))
    setFavorites(newItems)

    onChange()
  }

  const checkFavItem = () => {
    if (favorites) {
      const inFavorites = favorites.data.find(
        (favorite) => favorite?.id === contact?.id
      )
      setIsFavorite(!!inFavorites)
    } else {
      setIsFavorite(false)
    }
  }

  useEffect(() => {
    setMounted(true)
    setFavorites(getItemFromLocalStorage("favorites"))

    return () => setMounted(false)
  }, [contact?.id])

  useEffect(() => {
    checkFavItem()
  }, [favorites])

  return (
    mounted &&
    createPortal(
      <StyledButton onClick={onClickHandler} variant="info">
        {isFavorite && <StarOutlinedIcon />}
        {!isFavorite && <StarOutlineOutlinedIcon />}
      </StyledButton>,
      document.getElementById("floating-button")!
    )
  )
}

export { FavoriteButton }
