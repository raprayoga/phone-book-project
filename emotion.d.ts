import "@emotion/react"

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string
      danger: string
      warning: string
      success: string
      info: string
      secondary: string
      white: string
      black: string
      light: string
    }
    font: {
      sm: string
      lg: string
    }
  }
}

// You are also able to use a 3rd party theme this way:
import "@emotion/react"

declare module "@emotion/react" {
  export interface Theme extends LibTheme {}
}
