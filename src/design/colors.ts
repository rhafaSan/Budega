// theme.ts
import { DefaultTheme } from 'styled-components'
export const defaultTheme: DefaultTheme = {
  borderRadius: '4px',
  palette: {
    common: {
      black: '#313131',
      white: '#ffffff'
    },
    primary: {
      main: '#158A8A',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#099A9A',
      contrastText: '#ffffff'
    },
    tertiary: {
        main: '#5F5F5F',
        contrastText: '#878787'
    }
  }
}