import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/client"
import client from "@/operations/apollo-client"
import { Theme } from "@/styles/theme"
import { ThemeProvider } from "@emotion/react"
import IsSsrMobileContext from "@/stores/mobile-detected/mobile-detected-context"

export default function App({
  Component,
  pageProps,
}: AppProps<{ isSsrMobile: boolean }>) {
  return (
    <IsSsrMobileContext.Provider value={pageProps.isSsrMobile}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={Theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </IsSsrMobileContext.Provider>
  )
}
