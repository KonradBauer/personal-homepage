import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalContainer, themeDark, themeLight } from "./common/GlobalStyle/globalStyles";
import { HeaderContent } from "./layoutData/Header/index";
import { SkillsList } from "./layoutData/SkillsContainer/index";
import { NextToLearn } from "./layoutData/NextToLearnContaier/index";
import { PortfolioHead } from "./layoutData/Portfolio/PortfolioHeader/index";
import { PortfolioMain } from "./layoutData/Portfolio/PortfolioMain/index";
import { Socials } from "./layoutData/Social/index";
import { useSelector } from "react-redux";
import { selectThemeIsDark } from "./features/ThemeSwitch/themeSlice";

function App() {
  const isDark = useSelector(selectThemeIsDark);

  return (
    <>
      <ThemeProvider theme={isDark ? themeDark : themeLight}>
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
