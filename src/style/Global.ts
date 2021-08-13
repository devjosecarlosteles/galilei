import { createGlobalStyle } from 'styled-components'
import bg from '../assets/iss_background.png'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    background-image: url(${ bg });
    background-size: 100% 100%;
    font-size: 16px;
  }

  text-area, input, button {
    font-family: 'Roboto', sans-serif;
  }
`