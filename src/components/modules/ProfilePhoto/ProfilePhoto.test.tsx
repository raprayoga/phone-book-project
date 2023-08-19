import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { ThemeProvider } from "@emotion/react"
import { Theme } from "@/styles/theme"
import { ProfilePhoto } from "./ProfilePhoto"

const contact = {
  first_name: "Aku",
  last_name: "& Kamu",
}

describe("Render ProfilePhoto", () => {
  test("sould render ProfilePhoto correctly", () => {
    render(
      <ThemeProvider theme={Theme}>
        <ProfilePhoto contact={contact} />
      </ThemeProvider>
    )

    expect(screen.getByAltText("profile image")).toBeInTheDocument()
    expect(
      screen.getByText(`${contact.first_name} ${contact.last_name}`)
    ).toBeInTheDocument()
  })
})
