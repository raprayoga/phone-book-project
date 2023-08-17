import { render, screen, fireEvent } from "@testing-library/react"
import Input, { InputGroup } from "./index"
import "@testing-library/jest-dom"

import { ThemeProvider } from "@emotion/react"
import { Theme } from "@/styles/theme"
import { ChildLeft } from "./ChildLeft"

const caseVariants: { size: "small" | "large" }[] = [
  { size: "small" },
  { size: "large" },
]

describe("Input Group correctly", () => {
  test('sould render input group"s input with correct style and handle onChange', () => {
    const handleChange = jest.fn()
    render(
      <ThemeProvider theme={Theme}>
        <InputGroup>
          <ChildLeft style={{ padding: "10px" }}>LEFT CHILD</ChildLeft>
          <Input onChange={handleChange} placeholder="Input" />
        </InputGroup>
      </ThemeProvider>
    )

    const inputElement = screen.getByPlaceholderText("Input")
    fireEvent.change(inputElement, {
      target: { value: "test" },
    })
    expect(handleChange).toHaveBeenCalled()
  })
})
