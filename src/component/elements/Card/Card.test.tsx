import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Card } from "./Card"
import { ThemeProvider } from "@emotion/react"
import { Theme } from "@/styles/theme"

const text = "Card"

describe("Render Card", () => {
  test("sould render card correctly", () => {
    const handleClick = jest.fn()
    render(
      <ThemeProvider theme={Theme}>
        <Card onClick={handleClick}>{text}</Card>
      </ThemeProvider>
    )

    const buttonElement = screen.getByText(text)
    expect(buttonElement).toBeInTheDocument()

    fireEvent.click(buttonElement)
    expect(handleClick).toBeCalled()
  })
})
