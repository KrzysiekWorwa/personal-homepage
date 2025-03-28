import { ThemeProvider } from "styled-components";
import { themeLight } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./components/Container";
import HeaderTile from "./components/HeaderTile/index";
import Tile from "./components/Tile";
import List from "./components/Tile/List";
import { nextSkills, skills } from "./components/Tile/List/skillsData";

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <GlobalStyle />
      <Container>
        <HeaderTile />
        <Tile title="My skillset includes 🛠️" body={<List skills={skills}/>}/>
        <Tile  title="What I want to learn next 🚀" body={<List skills={nextSkills}/>}/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
