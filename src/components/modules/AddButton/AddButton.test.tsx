import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { ThemeProvider } from "@emotion/react"
import { Theme } from "@/styles/theme"
import { AddButton } from "./AddButton"
import { useRouter } from "next/router"
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))

describe("Render AddButton", () => {
  test("sould render AddButton correctly", () => {
    useRouter.mockReturnValue({ pathname: "/" })

    render(
      <ThemeProvider theme={Theme}>
        <AddButton />
      </ThemeProvider>
    )

    const addButtonElement = screen.getByTestId("addbutton-element")
    expect(addButtonElement).toBeInTheDocument()
    fireEvent.click(addButtonElement)
  })
})
