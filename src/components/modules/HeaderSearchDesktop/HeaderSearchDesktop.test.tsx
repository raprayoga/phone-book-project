import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { ThemeProvider } from "@emotion/react"
import { Theme } from "@/styles/theme"
import { HeaderSearchDesktop } from "./HeaderSearchDesktop"

describe("Render HeaderSearchDesktop", () => {
  test("sould render HeaderSearchDesktop correctly", () => {
    render(
      <ThemeProvider theme={Theme}>
        <HeaderSearchDesktop />
      </ThemeProvider>
    )
    expect(screen.getByText("My Contacts")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Search Contact")).toBeInTheDocument()
  })
})
