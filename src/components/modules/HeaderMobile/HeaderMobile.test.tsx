import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { ThemeProvider } from "@emotion/react"
import { Theme } from "@/styles/theme"
import { HeaderMobile } from "./HeaderMobile"
import { useRouter } from "next/router"
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))

const title = "MY TITLE"

describe("Render HeaderMobile", () => {
  test("sould render HeaderMobile correctly", () => {
    useRouter.mockReturnValue({ pathname: "/" })

    render(
      <ThemeProvider theme={Theme}>
        <HeaderMobile title={title} />
      </ThemeProvider>
    )
    expect(screen.getByText("Back")).toBeInTheDocument()
    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
