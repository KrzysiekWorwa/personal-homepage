import { ThemeProvider } from "styled-components";
import { themeLight } from "./theme";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={themeLight}>
          <GlobalStyle />
      <>
        Aplikacja
      </>
    </ThemeProvider>
  );
}

export default App;
