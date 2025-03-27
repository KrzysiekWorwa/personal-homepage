import { ThemeProvider } from "styled-components";
import { themeLight } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./components/Container";
import { HeaderImage, HeaderTile, HeaderContent, HeaderTitle, HeaderCaption, HeaderDescription, HeaderButton } from "./components/HeaderTile";
import image from "./components/Images/zdjecie.jpg"
import icon from "./components/Images/icon.png"

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <GlobalStyle />
      <Container>
        <HeaderTile>
          <HeaderImage src={image} alt="Author photo" />
          <HeaderContent>
            <HeaderCaption>THIS IS</HeaderCaption>
            <HeaderTitle>Krzysztof Worwa</HeaderTitle>
            <HeaderDescription>I'm a passionate Junior Frontend Developer also in love in 3D Graphics. Currently looking for new job opportunities.</HeaderDescription>
            <HeaderButton href="mailto:worwak1998@gmail.com">
              <img src={icon} alt="" />Hire Me</HeaderButton>
          </HeaderContent>

        </HeaderTile>
      </Container>
    </ThemeProvider>
  );
}

export default App;
