import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  type ElementRef,
} from "react"
import { StyledNavbarContainer } from "@/components/modules/HeaderMobile/header-mobile-styling"
import InputSearch from "@/components/modules/InputSearch"
import ContactListContext from "@/stores/contact-list/contact-list-context"

function HeaderSearchMobile() {
  const contactListCtx = useContext(ContactListContext)
  const [timer, setTimer] = useState<any>(null)
  const [offset, setOffset] = useState<number>(0)
  const inputRef = useRef<ElementRef<typeof InputSearch>>(null)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const trigger: number = document.documentElement.scrollHeight * 0.25
    const scrollPosition: number = window.scrollY
    if (scrollPosition > trigger) {
      setOffset(() => {
        return offset + 1
      })
      contactListCtx.getItem({
        where: {
          first_name: { _like: `${inputRef.current?.value}%` },
        },
        offset: offset,
      })
      console.log(offset)
    }
  }

  const changeHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timer)
    setTimer(
      setTimeout(() => {
        contactListCtx.getItem({
          where: {
            first_name: { _like: `${inputRef.current?.value}%` },
          },
        })
      }, 500)
    )
  }

  return (
    <StyledNavbarContainer>
      <h2>My Contacts</h2>
      <InputSearch ref={inputRef} onChange={changeHanlder} />
    </StyledNavbarContainer>
  )
}

export { HeaderSearchMobile }
