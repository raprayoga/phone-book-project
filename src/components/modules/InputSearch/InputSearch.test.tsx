import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { ThemeProvider } from "@emotion/react"
import { Theme } from "@/styles/theme"
import { InputSearch } from "./InputSearch"

describe("Render InputSearch", () => {
  test("sould render InputSearch correctly", () => {
    const handleCHange = jest.fn()

    render(
      <ThemeProvider theme={Theme}>
        <InputSearch onChange={handleCHange} />
      </ThemeProvider>
    )

    const inputElement = screen.getByPlaceholderText("Search Contact")
    expect(inputElement).toBeInTheDocument()
    fireEvent.change(inputElement, { target: { value: "23" } })
    expect(handleCHange).toBeCalled()
  })
})
