// .storybook/preview.js
import { withThemeFromJSXProvider } from "@storybook/addon-styling"
import { Global, css, ThemeProvider } from "@emotion/react"

import { Theme } from "../src/styles/theme"

const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial,
          sans-serif;
      }
    `}
  />
)

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: Theme,
    },
    Provider: ThemeProvider,
    GlobalStyles,
  }),
]
