import styled from "@emotion/styled"

const StyledSidebar = styled.aside`
  width: 20%;
  min-width: 100px;
  background-color: ${(props) => props.theme.colors.primary};
  height: 100vh;
  padding: 10px 20px;

  & > h2 {
    margin: 20px 0;
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
  }
`

const StyledLinkMenu = styled.li<{ isActive?: boolean }>`
  color: ${(props) =>
    props.isActive ? props.theme.colors.white : props.theme.colors.gainsboro};
  margin: 10px 0;
`

export { StyledSidebar, StyledLinkMenu }
