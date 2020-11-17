import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
} 

body {
    padding: 0;
    margin: 0;
     min-width: 350px;
     background:white;
  }
`

export default GlobalStyle
