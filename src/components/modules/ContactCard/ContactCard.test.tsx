import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { ThemeProvider } from "@emotion/react"
import { Theme } from "@/styles/theme"
import { ContactCard } from "./ContactCard"

const contact = {
  id: 1,
  first_name: "test",
  last_name: "test",
  phones: [
    {
      number: "01234",
    },
  ],
  created_at: "test",
}

describe("Render ContactCard", () => {
  test("sould render ContactCard correctly", () => {
    render(
      <ThemeProvider theme={Theme}>
        <ContactCard contact={contact} />
      </ThemeProvider>
    )

    expect(screen.getByAltText("profile image")).toBeInTheDocument()
    expect(screen.getByText(contact.first_name)).toBeInTheDocument()
    expect(screen.getByText(contact.phones[0].number)).toBeInTheDocument()
  })
})
