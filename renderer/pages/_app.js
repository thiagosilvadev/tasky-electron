import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyle";
import "../styles/globals.css";
import TasksContext from "../context/TasksContext";
const theme = {
  colors: {
    primary: "#6A2C70",
    secondary: "#F08A5D",
    textColor: "#EEECDA",
    todo: "#B83B5E",
    done: "#27AE60",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TasksContext>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </TasksContext>
    </>
  );
}

export default MyApp;
