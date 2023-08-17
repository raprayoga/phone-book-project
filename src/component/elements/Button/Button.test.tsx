import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Button } from "./Button"
import { createSerializer, matchers } from "@emotion/jest"
import { ThemeProvider } from "@emotion/react"
import { Theme } from "@/styles/theme"

const text = "Button"
expect.extend(matchers)
expect.addSnapshotSerializer(createSerializer())

describe("Render Button", () => {
  test("sould render button correctly", () => {
    const handleClick = jest.fn()
    const handleClickDisabled = jest.fn()
    const { rerender } = render(
      <ThemeProvider theme={Theme}>
        <Button onClick={handleClick}>{text}</Button>
      </ThemeProvider>
    )

    const buttonElement = screen.getByText(text)
    expect(buttonElement).toBeInTheDocument()

    fireEvent.click(buttonElement)
    expect(handleClick).toBeCalled()

    rerender(
      <ThemeProvider theme={Theme}>
        <Button isDisabled onClick={handleClickDisabled}>
          {text}
        </Button>
      </ThemeProvider>
    )
    fireEvent.click(buttonElement)
    expect(handleClickDisabled).not.toBeCalled
  })
})
