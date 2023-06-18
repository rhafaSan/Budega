// theme.ts
import { DefaultTheme, createGlobalStyle } from 'styled-components'

const Theme: DefaultTheme = {
  common: {
    black: '#313131',
    white: '#ffffff'
  },
  primary: {
    main: '#158A8A',
  },
  secondary: {
    main: '#099A9A',
  },
  tertiary: {
      main: '#5F5F5F',
  },
  other: {
    main: '#878787'
  }
};

export const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${props => props.theme.colors.common.white};
  }
`

export default Theme;