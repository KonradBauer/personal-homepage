import React from "react";
import {
  Header,
  Photo,
  ThisIs,
  MyName,
  AboutMe,
} from "./layoutData/Header/styled";

import image from "./common/images/konrad.png";
import { ThemeProvider } from "styled-components";
import { GlobalContainer, theme } from "./layoutData/GlobalStyle/globalStyles";
import { Button } from "./features/Buttons/index";
import { SkillsList } from "./layoutData/SkillsContainer/index";
import { NextToLearn } from "./layoutData/NextToLearnContaier/index";
import { PortfolioHead } from "./layoutData/Portfolio/PortfolioHeader/index";
import { PortfolioMain } from "./layoutData/Portfolio/PortfolioContent/index";
import { Socials } from "./layoutData/Social/index";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalContainer>
          <Header>
            <Photo src={image} alt="Konrad Bauer" />
            <ThisIs>This is</ThisIs>
            <MyName>Konrad Bauer</MyName>
            <AboutMe>
              👨💻 I’m a passionate Frontend Developer in love with
              React,currently looking for new job opportunities.
            </AboutMe>
            <Button />
          </Header>
          <SkillsList />
          <NextToLearn />
          <PortfolioHead />
          <PortfolioMain />
          <Socials />
        </GlobalContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
