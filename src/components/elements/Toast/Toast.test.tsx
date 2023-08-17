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

    const ToastElement = screen.getByText(text)
    expect(ToastElement).toBeInTheDocument()
    expect(ToastElement).toHaveStyle("animation-fill-mode: forwards")

    fireEvent.click(ToastElement)
    expect(handleClick).toBeCalled()
  })
})
