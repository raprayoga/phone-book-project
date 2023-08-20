import React, { useEffect, useState } from "react"
import ContactCard from "@/components/modules/ContactCard"
import Link from "next/link"
import AddButton from "@/components/modules/AddButton"
import { Contact } from "@/interfaces/contact"
import { StyledContainer } from "@/components/templates/Beranda/Mobile/mobile-styling"
import { getItemFromLocalStorage } from "@/utils/store-favorite"
import { StyledError } from "@/components/templates/Detail/Mobile/mobile-styling"

export default function Mobile() {
  const [favorites, setFavorites] = useState<{ data: Contact[] }>({ data: [] })

  useEffect(() => {
    setFavorites(getItemFromLocalStorage("favorites"))
  }, [])

  return (
    <>
      <StyledContainer>
        {(!favorites || favorites.data.length == 0) && (
          <StyledError>Daftar Contact Favorite Tidak Ditemukan</StyledError>
        )}
        {favorites &&
          favorites.data.length > 0 &&
          favorites.data.map((contact) => (
            <Link key={contact.id} href={`/detail/${contact.id}`}>
              <ContactCard contact={contact} />
            </Link>
          ))}
        <AddButton />
      </StyledContainer>
    </>
  )
}
