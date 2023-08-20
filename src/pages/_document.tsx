import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Phonebook App</title>
        <meta
          name="description"
          content="Phonebook App memudahkan kamu mengelola kontak"
        />
      </Head>
      <body>
        <div id="floating-button" />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
