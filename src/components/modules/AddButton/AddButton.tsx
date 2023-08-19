"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { createPortal } from "react-dom"
import AddOutlinedIcon from "@mui/icons-material/AddOutlined"
import Button from "@/components/elements/Button"
import styled from "@emotion/styled"

const StyledButton = styled(Button)`
  padding: 10px;
  position: fixed;
  bottom: 50px;
  right: 25px;
`

export default function AddButton() {
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
