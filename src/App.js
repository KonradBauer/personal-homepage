import { Header } from "./Header/styled";
import { SkillsContainer } from "./SkillsContainer/styled";
import image from "./images/konrad.png";
import { Photo } from "./Header/styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./GlobalStyle/globalStyles";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header>
          <Photo src={image} alt="Konrad Bauer" />
        </Header>
        <SkillsContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
