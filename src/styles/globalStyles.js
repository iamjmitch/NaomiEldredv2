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

  /* width */
::-webkit-scrollbar {
  width: 20px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #c44677;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b9215c;
}

`

export default GlobalStyle
