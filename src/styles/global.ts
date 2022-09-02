import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #000;
    --title: #fffcf9;
    --subtitle: #b3b3b3;
    --bg-button: #e9e6e3;
    --background: linear-gradient(43deg, #102d71 0%, #000000 52%, #c12a23 100%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background: var(--background);
    background-attachment: fixed;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: var(--title);
  }

  button {
    background-color: var(--bg-button);
    color: var(--black);
    cursor: pointer;
  }
`