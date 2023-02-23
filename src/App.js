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
import { ReactComponent as Hand } from "./common/svg/hand.svg";
import { ReactComponent as GithubBlack } from "./common/svg/githubBlack.svg";
import { ReactComponent as LinkedInBlack } from "./common/svg/linkedinBlack.svg";
import {
  Email,
  Info,
  LetsTalk,
  Logos,
  SocialContainer,
} from "./layoutData/Social/styled";
import { Button } from "./features/Buttons/index";
import { SkillsList } from "./layoutData/SkillsContainer/index";
import { NextToLearn } from "./layoutData/NextToLearnContaier/index";
import { PortfolioHead } from "./layoutData/Portfolio/PortfolioHeader/index";
import { PortfolioMain } from "./layoutData/Portfolio/PortfolioContent/index";

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
          <SocialContainer>
            <LetsTalk>Let’s talk!</LetsTalk>
            <Email>konradbauer94@gmail.com</Email>
            <Info>
              I’m always open to new projects whenever I have the time. If you
              have a website, dashboard or mobile app in mind and need some help
              to make your ideas come to life, feel free to conatct me
              <Hand />
            </Info>
            <Logos>
              <a href="https://github.com/KonradBauer">
                <GithubBlack />
              </a>
              <a href="https://linkedin.com/in/konrad-bauer">
                <LinkedInBlack />
              </a>
            </Logos>
          </SocialContainer>
        </GlobalContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
