import { ThemeProvider } from "styled-components";
import { themeLight } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./components/Container";
import HeaderTile from "./components/HeaderTile/index";
import Tile from "./components/Tile";
import List from "./components/Tile/List";

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <GlobalStyle />
      <Container>
        <HeaderTile />
        <Tile title="My skillset includes 🛠️" body={<List />}/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
