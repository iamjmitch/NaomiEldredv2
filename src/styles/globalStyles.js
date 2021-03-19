import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
html {
  
} 

body {
    padding: 0;
    margin: 0;
     min-width: 350px;
     background:white;
     overflow-x:hidden;
  }

  *{
    -webkit-tap-highlight-color: transparent;
  }



`

export default GlobalStyle
