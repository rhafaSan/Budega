import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'
import  Theme  from './design/colors.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={Theme} >
    
    <App />
  </ThemeProvider>
  
)
