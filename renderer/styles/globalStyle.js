import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --purple: #6a2c70;
  --red: #b83b5e;
  --white: #eeecda;
  --orange: #f08a5d;
}
input,
button {
  background: transparent;
  border: none;
  outline: none;
}

body {
  font-family: "Roboto", sans-serif;
  background-color: var(--purple);
  color: var(--white);
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
@keyframes criar {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

`;

export default GlobalStyle;
