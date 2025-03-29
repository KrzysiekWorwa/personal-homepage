import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./components/Container";
import HeaderTile from "./components/HeaderTile/index";
import Tile from "./components/Tile";
import List from "./components/Tile/List";
import { nextSkills, skills } from "./components/Tile/List/skillsData";
import ThemeSwitch from "./common/ThemeSwitch";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "./common/themeSlice";
import { themeDark, themeLight } from "./theme"
import { ThemeProvider } from "styled-components";
import Portfolio from "./components/Portfolio";

function App() {

  const isDarkTheme = useSelector(selectIsDarkTheme);
  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <GlobalStyle />
      <Container>
        <ThemeSwitch />
        <HeaderTile />
        <Tile title="My skillset includes 🛠️" body={<List skills={skills} />} />
        <Tile title="What I want to learn next 🚀" body={<List skills={nextSkills} />} />
        <Portfolio></Portfolio>
      </Container>
    </ThemeProvider>
  );
}

export default App;
