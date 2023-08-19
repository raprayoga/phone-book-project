import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import Toast from "./index"
import { ThemeProvider } from "@emotion/react"
import { Theme } from "@/styles/theme"

const text = "Toast"

describe("Render Toast", () => {
  test("sould render toast correctly", () => {
    const handleClick = jest.fn()
    render(
      <ThemeProvider theme={Theme}>
        <Toast onCLosed={handleClick} isShow>
          {text}
        </Toast>
      </ThemeProvider>
    )

    const toastElement = screen.getByText(text)
    expect(toastElement).toBeInTheDocument()
    expect(toastElement).toHaveStyle("animation-fill-mode: forwards")

    const toastCloseElement = screen.getByTestId("toastclose-element")
    fireEvent.click(toastCloseElement)
    expect(handleClick).toBeCalled()
  })
})
