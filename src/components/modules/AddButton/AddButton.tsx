import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { createPortal } from "react-dom"
import AddOutlinedIcon from "@mui/icons-material/AddOutlined"
import { StyledButton } from "./add-button-styling"

function AddButton() {
  const [mounted, setMounted] = useState(false)

  const router = useRouter()
  const onClickHandler = () => {
    router.push("/add")
  }

  useEffect(() => {
    setMounted(true)

    return () => setMounted(false)
  }, [])

  return (
    mounted &&
    createPortal(
      <StyledButton onClick={onClickHandler}>
        <AddOutlinedIcon />
      </StyledButton>,
      document.getElementById("floating-button")
    )
  )
}

export { AddButton }
