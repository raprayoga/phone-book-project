import React, { useContext, useEffect, useState } from "react"
import ContactListContext from "@/stores/contact-list/contact-list-context"
import {
  StyledContactCard,
  StyledContainer,
  StyledContainerMain,
  StyledContainerRightPanel,
  StyledFavoriteList,
} from "./desktop-styling"
import HeaderSearchDesktop from "@/components/modules/HeaderSearchDesktop"
import DetailContactContext from "@/stores/detail-contact/detail-contact-context"
import ProfilePhoto from "@/components/modules/ProfilePhoto"
import FavoriteButton from "@/components/modules/FavoriteButton"
import { getItemFromLocalStorage } from "@/utils/store-favorite"
import { Contact } from "@/interfaces/contact"
import DeleteContactContext from "@/stores/delete-contact/delete-contact-context"
import DetailProfile from "@/components/modules/DetailProfile"

export default function Desktop() {
  const contactListCtx = useContext(ContactListContext)
  const detailContactCtx = useContext(DetailContactContext)
  const deleteContactCtx = useContext(DeleteContactContext)
  const [isActive, setActive] = useState<number>()
  const [isEdit, setIsEdit] = useState<boolean>()
  const [favorites, setFavorites] = useState<{ data: Contact[] }>({ data: [] })

  const refetchHandler = () => {
    contactListCtx.getItem({})
  }

  const clickContactHandler = (id: number) => {
    setActive(id)
  }

  const getFavorite = () => {
    setFavorites(getItemFromLocalStorage("favorites"))
  }

  const editHandler = () => [setIsEdit(true)]
  const deleteHandler = () => {
    deleteContactCtx.deleteItem(isActive)
    contactListCtx.getItem({})
  }

  useEffect(() => {
    contactListCtx.getItem({})
    setFavorites(getItemFromLocalStorage("favorites"))
  }, [])

  useEffect(() => {
    if (contactListCtx.items && contactListCtx.items.length > 0) {
      setActive(contactListCtx.items[0].id)
    }
  }, [contactListCtx.items])

  useEffect(() => {
    detailContactCtx.getItem(isActive)
  }, [isActive])

  return (
    <StyledContainer>
      <StyledContainerMain>
        <HeaderSearchDesktop />
        <StyledFavoriteList>
          Favorite
          {favorites?.data.map((contact) => (
            <StyledContactCard
              key={contact.id}
              isActive={+contact.id === isActive}
              contact={contact}
              onClick={() => clickContactHandler(contact.id)}
            />
          ))}
        </StyledFavoriteList>
        {!contactListCtx.loading &&
          !contactListCtx.error &&
          contactListCtx.items.map((contact) => (
            <StyledContactCard
              key={contact.id}
              isActive={+contact.id === isActive}
              contact={contact}
              onClick={() => clickContactHandler(contact.id)}
            />
          ))}
      </StyledContainerMain>

      <StyledContainerRightPanel>
        {!isEdit && isActive && (
          <>
            <ProfilePhoto contact={detailContactCtx.data} />
            <DetailProfile
              deleteHandler={deleteHandler}
              editHandler={editHandler}
              contact={detailContactCtx.data}
            />
            <FavoriteButton
              onChange={getFavorite}
              contact={detailContactCtx.data}
            />
          </>
        )}
      </StyledContainerRightPanel>
    </StyledContainer>
  )
}
