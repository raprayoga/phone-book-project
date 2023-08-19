import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { createPortal } from "react-dom"
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined"
import { StyledButton } from "@/components/modules/AddButton/add-button-styling"

function EditButton({ id }: { id?: string | string[] }) {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  const onClickHandler = () => {
    router.push(`/edit/${id}`)
  }

  useEffect(() => {
    setMounted(true)

    return () => setMounted(false)
  }, [])

  return (
    mounted &&
    createPortal(
      <StyledButton onClick={onClickHandler} variant="warning">
        <BorderColorOutlinedIcon />
      </StyledButton>,
      document.getElementById("floating-button")
    )
  )
}

export { EditButton }
