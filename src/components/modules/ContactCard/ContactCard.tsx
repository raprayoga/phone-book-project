import React from "react"
import Image from "next/image"
import defaultProfile from "@/assets/images/default-profile.svg"
import { StyledCard, StyledInfo } from "./contact-card-styling"
import { Contact } from "@/interfaces/contact"

export interface ContactCardProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: () => void
  contact: Contact
}

function ContactCard({
  contact,
  onClick = () => null,
  ...props
}: ContactCardProps) {
  return (
    <StyledCard {...props} onClick={onClick}>
      <Image src={defaultProfile} alt="profile image" width={40} height={40} />
      <StyledInfo>
        <p>{contact.first_name}</p>
        <p>
          {contact.phones.map(
            (phone: { number: any }, index: number) =>
              index === 0 && phone.number
          )}
        </p>
      </StyledInfo>
    </StyledCard>
  )
}

export { ContactCard }
