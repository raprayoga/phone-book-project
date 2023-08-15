import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Button } from "./Button"

const text = "Button"

describe("Render Button", () => {
  test("sould render button correctly", () => {
    const handleClick = jest.fn()
    const handleClickDisabled = jest.fn()
    const { rerender } = render(
      <Button onClick={handleClick} label={"ss"}>
        {text}
      </Button>
    )

    const buttonElement = screen.getByText(text)
    expect(buttonElement).toBeInTheDocument()

    fireEvent.click(buttonElement)
    expect(handleClick).toBeCalled()

    rerender(
      <Button isdisabled onClick={handleClickDisabled} label={"sasa"}>
        {text}
      </Button>
    )
    fireEvent.click(buttonElement)
    expect(handleClickDisabled).not.toBeCalled
  })
})
