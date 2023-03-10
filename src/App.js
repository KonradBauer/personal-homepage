import React from "react";

import { ThemeProvider } from "styled-components";
import { GlobalContainer, theme } from "./common/GlobalStyle/globalStyles";
import { HeaderContent } from "./layoutData/Header/index";
import { SkillsList } from "./layoutData/SkillsContainer/index";
import { NextToLearn } from "./layoutData/NextToLearnContaier/index";
import { PortfolioHead } from "./layoutData/Portfolio/PortfolioHeader/index";
import { PortfolioMain } from "./layoutData/Portfolio/PortfolioMain/index";
import { Socials } from "./layoutData/Social/index";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalContainer>
          <HeaderContent />
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
