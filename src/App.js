import React from "react";
import {
  Header,
  Photo,
  ThisIs,
  MyName,
  AboutMe,
  ButtonHireMe,
} from "./Header/styled";
import {
  SkillsContainer,
  SkillsContainerTitle,
} from "./SkillsContainer/styled";
import image from "./images/konrad.png";
import { ThemeProvider } from "styled-components";
import { theme } from "./GlobalStyle/globalStyles";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header>
          <Photo src={image} alt="Konrad Bauer" />
          <ThisIs>This is</ThisIs>
          <MyName>Konrad Bauer</MyName>
          <AboutMe>
            👨💻 I’m a passionate Frontend Developer in love with
            React,currently looking for new job opportunities.
          </AboutMe>
          <ButtonHireMe>Hire me</ButtonHireMe>
        </Header>
        <SkillsContainer>
          <SkillsContainerTitle>My skillset includes 🛠️</SkillsContainerTitle>
        </SkillsContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
