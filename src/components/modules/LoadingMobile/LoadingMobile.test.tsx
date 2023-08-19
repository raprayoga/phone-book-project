import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { ThemeProvider } from "@emotion/react"
import { Theme } from "@/styles/theme"
import { LoadingMobile } from "./LoadingMobile"

describe("Render LoadingMobile", () => {
  test("sould render LoadingMobile correctly", () => {
    render(
      <ThemeProvider theme={Theme}>
        <LoadingMobile />
      </ThemeProvider>
    )

    expect(screen.getByTestId("skeleton-image")).toHaveStyle(
      "animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1)"
    )
    expect(screen.getByTestId("skeleton-text1")).toHaveStyle(
      "animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1)"
    )
    expect(screen.getByTestId("skeleton-text2")).toHaveStyle(
      "animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1)"
    )
  })
})
