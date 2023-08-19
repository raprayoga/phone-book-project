import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { ThemeProvider } from "@emotion/react"
import { Theme } from "@/styles/theme"
import { ErrorFeedback } from "./ErrorFeedback"

const caption = "Terjadi Kesalahan, Silahkan Coba Lagi"

describe("Render ErrorFeedback", () => {
  test("sould render ErrorFeedback correctly", () => {
    const handleClick = jest.fn()

    render(
      <ThemeProvider theme={Theme}>
        <ErrorFeedback caption={caption} onClick={handleClick} />
      </ThemeProvider>
    )

    expect(screen.getByText(caption)).toBeInTheDocument()

    const buttonElement = screen.getByText("Reload")
    expect(buttonElement).toBeInTheDocument()
    fireEvent.click(buttonElement)
    expect(handleClick).toBeCalled()
  })
})
