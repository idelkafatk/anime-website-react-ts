import { createGlobalStyle, css } from 'styled-components'

const customScrollbar = css`
  scrollbar-width: thin;
  scrollbar-color: black gray;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: black;
  }

  ::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(112, 111, 118, 0.7);
  }
`

const GlobalStyle = createGlobalStyle`
  ${customScrollbar}
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    overflow: hidden;
  }
`

export default GlobalStyle
