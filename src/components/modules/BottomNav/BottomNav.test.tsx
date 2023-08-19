import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { ThemeProvider } from "@emotion/react"
import { Theme } from "@/styles/theme"
import { BottomNav } from "./BottomNav"
import { useRouter } from "next/router"
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))

describe("Render BottomNav", () => {
  test("sould render BottomNav correctly", () => {
    useRouter.mockReturnValue({ pathname: "/" })

    render(
      <ThemeProvider theme={Theme}>
        <BottomNav data-testid="bottomnav-element" />
      </ThemeProvider>
    )

    expect(screen.getByTestId("bottomnav-element")).toBeInTheDocument()
    expect(document.querySelectorAll("a")[0].getAttribute("href")).toBe("/")
    expect(document.querySelectorAll("a")[1].getAttribute("href")).toBe(
      "/favorite"
    )
  })
})
