import { ThemeProvider } from "styled-components";
import { themeLight } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./Components/Container";

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <GlobalStyle />
      <Container>
        Aplikacja
      </Container>
    </ThemeProvider>
  );
}

export default App;
