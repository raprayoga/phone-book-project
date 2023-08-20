import React, { useState, useEffect } from "react"
import { Contact } from "@/interfaces/contact"
import { getItemFromLocalStorage } from "@/utils/store-favorite"
import Image from "next/image"
import defaultProfile from "../../../assets/images/default-profile.svg"
import Link from "next/link"
import {
  StyledCard,
  StyledCardContainer,
  StyledContainer,
} from "./favorite-headline-styling"

function FavoriteHeadline() {
  const [favorites, setFavorites] = useState<{ data: Contact[] }>({ data: [] })

  useEffect(() => {
    setFavorites(getItemFromLocalStorage("favorites"))
  }, [])

  return (
    <StyledContainer>
      {favorites && favorites.data.length > 0 && (
        <>
          <h3>Favorites</h3>
          <StyledCardContainer>
            {favorites.data.map((contact) => (
              <Link href={`/detail/${contact.id}`} key={contact.id}>
                <StyledCard>
                  <Image
                    src={defaultProfile}
                    alt={"profile image " + contact.first_name}
                    width={40}
                    height={40}
                  />
                  <p>{contact.first_name}</p>
                </StyledCard>
              </Link>
            ))}
          </StyledCardContainer>
        </>
      )}
    </StyledContainer>
  )
}

export { FavoriteHeadline }
