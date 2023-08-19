import styled from "@emotion/styled"
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined"
import Button from "@/components/elements/Button"

const DetailProfileContainer = styled.ul`
  padding: 2rem;
  width: 100%;
  height: 35vh;
  background-color: ${(props) => props.theme.colors.white};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

const StyledPhoneIcon = styled(PhoneOutlinedIcon)`
  color: ${(props) => props.theme.colors.primary};
`

const StyledList = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledPhoneNumber = styled.div`
  display: flex;
  gap: 10px;

  & > p {
    font-weight: bold;
  }
`

const StyledButton = styled(Button)`
  border-radius: 0.25rem;
  padding: 5px;
`

export {
  DetailProfileContainer,
  StyledPhoneIcon,
  StyledList,
  StyledPhoneNumber,
  StyledButton,
}
