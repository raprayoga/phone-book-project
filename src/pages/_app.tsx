import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/client"
import client from "@/operations/apollo-client"
import { Theme } from "@/styles/theme"
import { ThemeProvider } from "@emotion/react"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}
