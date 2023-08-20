import React, { useState, useEffect } from "react"
import { Contact } from "@/interfaces/contact"
import { getItemFromLocalStorage } from "@/utils/store-favorite"
import Image from "next/image"
import defaultProfile from "../../../assets/images/default-profile.svg"
import styled from "@emotion/styled"
import Card from "@/components/elements/Card"
import Link from "next/link"

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 5rem;
  height: 5rem;
  justify-content: space-around;

  & > p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bold;
    font-size: 12px;
    width: 100%;
    text-align: center;
  }
`

const StyledCardContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

const StyledContainer = styled.div`
  margin-bottom: 1.5rem;

  & > h3 {
    font-size: 14px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.primary};
  }
`

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
