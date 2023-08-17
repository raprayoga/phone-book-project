import IsSsrMobileContext from "@/stores/mobile-detected/mobile-detected-context"
import { useContext } from "react"

export const useIsMobile = () => {
  const isSsrMobile = useContext(IsSsrMobileContext)

  return isSsrMobile
}
