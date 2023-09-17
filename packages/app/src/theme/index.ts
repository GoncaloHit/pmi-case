import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
    
  input, button, submit { border:none; outline: none; } 
`