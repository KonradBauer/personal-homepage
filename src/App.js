import React from "react";

import { ThemeProvider } from "styled-components";
import { GlobalContainer, theme } from "./common/GlobalStyle/globalStyles";
import { HeaderContent } from "./layoutData/Header/index";
import { SkillsList } from "./layoutData/SkillsContainer/index";
import { NextToLearn } from "./layoutData/NextToLearnContaier/index";
import { PortfolioHead } from "./layoutData/Portfolio/PortfolioHeader/index";
import { PortfolioMain } from "./layoutData/Portfolio/PortfolioContent/index";
import { Socials } from "./layoutData/Social/index";
import { LoadingStatus } from "./features/HandlerAPI/index";
import { ErrorStatus } from "./features/HandlerAPI/index";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalContainer>
          <HeaderContent />
          <SkillsList />
          <NextToLearn />
          <PortfolioHead />
          <ErrorStatus />
          <Socials />
        </GlobalContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
