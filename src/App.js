import { ThemeProvider } from "styled-components";
import { themeLight } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./Components/Container";
import { Image, HeaderTile, Content, Title, Caption, Description } from "./Components/HeaderTile";
import image from "./Components/Images/zdjecie.jpg"

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <GlobalStyle />
      <Container>
        <HeaderTile>
          <Image src={image} alt="Author photo" />
          <Content>
            <Caption>THIS IS</Caption>
            <Title>Krzysztof Worwa</Title>
            <Description>I'm a passionate Junior Frontend Developer also in love in 3D Graphics. Currently looking for new job opportunities.</Description>
          </Content>

        </HeaderTile>
      </Container>
    </ThemeProvider>
  );
}

export default App;
