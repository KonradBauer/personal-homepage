import { Header } from "./Header/styled";
import { SkillsContainer } from "./SkillsContainer/styled";
import image from "./images/konrad.png";
import { Photo } from "./Header/styled";

function App() {
  return (
    <>
      <Header>
        <Photo src={image} alt="Konrad Bauer" />
      </Header>
      <SkillsContainer />
    </>
  );
}

export default App;
