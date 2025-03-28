import { ThemeProvider } from "styled-components";
import { themeLight } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./components/Container";
import HeaderTile from "./components/HeaderTile/index";
import Tile from "./components/Tile";

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <GlobalStyle />
      <Container>
        <HeaderTile />
        <Tile />
      </Container>
    </ThemeProvider>
  );
}

export default App;
