import styled from "@emotion/styled"
import Button from "@/components/elements/Button"

const StyledInputSearch = styled.div`
  margin-top: 0.5rem;
  width: 50%;
`

const StyledHeaderSearchDesktop = styled.div`
  margin: 1rem 0 2rem 0;

  & > h2 {
    color: ${(props) => props.theme.colors.primary};
    font-weight: bolder;
    font-size: 22px;
  }
`

const StyledActionSearch = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`

const StyledAddButton = styled(Button)`
  height: 1rem;
`

export {
  StyledInputSearch,
  StyledHeaderSearchDesktop,
  StyledActionSearch,
  StyledAddButton,
}
