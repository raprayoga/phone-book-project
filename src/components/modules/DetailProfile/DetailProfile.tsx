import React from "react"
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled"
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import { useRouter } from "next/router"
import waIcon from "@/assets/images/wa-icon.svg"
import Image from "next/image"
import {
  DetailProfileContainer,
  StyledActionContainer,
  StyledButton,
  StyledList,
  StyledPhoneIcon,
  StyledPhoneNumber,
} from "@/components/modules/DetailProfile/detail-profile-styling"
import { Contact } from "@/interfaces/contact"

function DetailProfile({
  editHandler = () => null,
  deleteHandler = () => null,
  contact,
}: {
  editHandler: () => void
  deleteHandler: () => void
  contact: Contact
}) {
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
      {contact?.phones?.map((phone) => (
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

      <StyledActionContainer>
        <StyledButton
          data-testid="editbutton-element"
          variant="warning"
          onClick={editHandler}
        >
          <BorderColorOutlinedIcon />
        </StyledButton>

        <StyledButton
          variant="danger"
          data-testid="deletebutton-element"
          onClick={deleteHandler}
        >
          <DeleteOutlineOutlinedIcon />
        </StyledButton>
      </StyledActionContainer>
    </DetailProfileContainer>
  )
}

export { DetailProfile }
