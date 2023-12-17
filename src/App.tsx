import { createGlobalStyle } from "styled-components"
import { Router } from "./components/Routes/routes"
import React from "react"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`
  


function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router/>
    </React.Fragment>
  )
}

export default App
