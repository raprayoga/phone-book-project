import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { ThemeProvider } from "@emotion/react"
import { Theme } from "@/styles/theme"
import { HeaderSearchMobile } from "./HeaderSearchMobile"

describe("Render HeaderSearchMobile", () => {
  test("sould render HeaderSearchMobile correctly", () => {
    render(
      <ThemeProvider theme={Theme}>
        <HeaderSearchMobile />
      </ThemeProvider>
    )
    expect(screen.getByText("My Contacts")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Search Contact")).toBeInTheDocument()
  })
})
