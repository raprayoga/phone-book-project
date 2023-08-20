import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { ThemeProvider } from "@emotion/react"
import { Theme } from "@/styles/theme"
import { SideBar } from "./SideBar"
import { useRouter } from "next/router"
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))

describe("Render SideBar", () => {
  test("sould render SideBar correctly", () => {
    useRouter.mockReturnValue({ pathname: "/", query: { id: 1 } })

    render(
      <ThemeProvider theme={Theme}>
        <SideBar />
      </ThemeProvider>
    )

    expect(screen.getByText("Phonebook App")).toBeInTheDocument()
    expect(screen.getByText("My Contact")).toBeInTheDocument()
  })
})
