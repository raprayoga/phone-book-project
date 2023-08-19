import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Skeleton } from "./Skeleton"
import { ThemeProvider } from "@emotion/react"
import { Theme } from "@/styles/theme"

const text = "Skeleton"

describe("Render Skeleton", () => {
  test("sould render Skeleton correctly", () => {
    render(
      <ThemeProvider theme={Theme}>
        <Skeleton />
      </ThemeProvider>
    )

    const skeletonElement = screen.getByTestId("skeleton")
    expect(skeletonElement).toBeInTheDocument()
    expect(skeletonElement).toHaveStyle(
      `background-color: ${Theme.colors.gainsboro}`
    )
    expect(skeletonElement).toHaveStyle(
      "animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1)"
    )
  })
})
