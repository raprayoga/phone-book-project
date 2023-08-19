import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { ThemeProvider } from "@emotion/react"
import { Theme } from "@/styles/theme"
import { DetailProfile } from "./DetailProfile"
import { useRouter } from "next/router"
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))

const phones = [{ number: "021383756873" }]

describe("Render DetailProfile", () => {
  test("sould render DetailProfile correctly", () => {
    useRouter.mockReturnValue({ pathname: "/" })

    render(
      <ThemeProvider theme={Theme}>
        <DetailProfile phones={phones} />
      </ThemeProvider>
    )

    expect(screen.getByAltText("profile image")).toBeInTheDocument()
    const callButtonlement = screen.getByTestId("callbutton-element")
    expect(callButtonlement).toBeInTheDocument()
    fireEvent.click(callButtonlement)
  })
})
