import React from "react"
import Image from "next/image"
import defaultProfile from "@/assets/images/default-profile.svg"
import { PhotoProfileContainer } from "./profile-photo-styling"

function ProfilePhoto({
  contact,
}: {
  contact: { first_name?: string; last_name?: string }
}) {
  return (
    <PhotoProfileContainer>
      <Image
        src={defaultProfile}
        alt="profile image"
        width={150}
        height={150}
      />
      <p>{`${contact?.first_name} ${contact?.last_name}`}</p>
    </PhotoProfileContainer>
  )
}

export { ProfilePhoto }
