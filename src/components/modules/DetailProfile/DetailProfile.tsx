import React from "react"
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled"
import {
  DetailProfileContainer,
  StyledButton,
  StyledList,
  StyledPhoneIcon,
  StyledPhoneNumber,
} from "./detail-profile-styling"
import { useRouter } from "next/router"
import waIcon from "../../../assets/images/wa-icon.svg"
import Image from "next/image"

function DetailProfile({ phones }: { phones?: { number: string }[] }) {
  const router = useRouter()

  const callHandler = (phone: string) => {
    window.open(`tel:${phone}`)
  }

  const waHandler = (phone: string) => {
    router.push(
      `https://api.whatsapp.com/send/?phone=${phone}&text=&app_absent=0`
    )
  }

  return (
    <DetailProfileContainer>
      {phones?.map((phone) => (
        <StyledList key={phone.number}>
          <StyledPhoneNumber>
            <StyledPhoneIcon />
            <p>{phone.number}</p>
          </StyledPhoneNumber>

          <StyledPhoneNumber>
            <StyledButton
              data-testid="callbutton-element"
              onClick={() => callHandler(phone.number)}
            >
              <PhoneEnabledIcon />
            </StyledButton>
            <StyledButton
              data-testid="wabutton-element"
              onClick={() => waHandler(phone.number)}
              variant="success"
            >
              <Image src={waIcon} alt="profile image" width={24} height={24} />
            </StyledButton>
          </StyledPhoneNumber>
        </StyledList>
      ))}
    </DetailProfileContainer>
  )
}

export { DetailProfile }
