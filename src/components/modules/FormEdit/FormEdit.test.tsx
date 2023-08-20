import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { ThemeProvider } from "@emotion/react"
import { Theme } from "@/styles/theme"
import FormEdit from "./index"
import { useRouter } from "next/router"
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))

describe("Edit Form correctly", () => {
  test("sould render Form & func correctly", async () => {
    useRouter.mockReturnValue({ pathname: "/", query: { id: 1 } })

    render(
      <ThemeProvider theme={Theme}>
        <FormEdit />
      </ThemeProvider>
    )

    const inputNameElement1 = screen.getByPlaceholderText("Enter First Name...")
    await userEvent.type(inputNameElement1, "Inputed text")
    expect(inputNameElement1).toHaveValue("Inputed text")

    const inputNameElement2 = screen.getByPlaceholderText("Enter Last Name...")
    await userEvent.type(inputNameElement2, "Inputed text")
    expect(inputNameElement2).toHaveValue("Inputed text")
  })
})
