import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { ThemeProvider } from "@emotion/react"
import { Theme } from "@/styles/theme"
import { DetailProfile } from "./DetailProfile"
import { useRouter } from "next/router"
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))

const contact = {
  phones: [{ number: "021383756873" }],
  created_at: "",
  first_name: "first name",
  id: 1,
  last_name: "last name",
}

describe("Render DetailProfile", () => {
  test("sould render DetailProfile correctly", () => {
    useRouter.mockReturnValue({ pathname: "/" })
    const editHandler = jest.fn()
    const deleteHandler = jest.fn()

    render(
      <ThemeProvider theme={Theme}>
        <DetailProfile
          contact={contact}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
      </ThemeProvider>
    )

    expect(screen.getByTestId("callbutton-element")).toBeInTheDocument()
    expect(screen.getByTestId("wabutton-element")).toBeInTheDocument()
    expect(screen.getByText(contact.phones[0].number)).toBeInTheDocument()

    const editButtonElement = screen.getByTestId("editbutton-element")
    fireEvent.click(editButtonElement)
    expect(editHandler).toBeCalled()
    const deleteButtonElement = screen.getByTestId("deletebutton-element")
    fireEvent.click(deleteButtonElement)
    expect(deleteHandler).toBeCalled()
  })
})
