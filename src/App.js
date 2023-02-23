import React from "react";
import {
  Header,
  Photo,
  ThisIs,
  MyName,
  AboutMe,
} from "./layoutData/Header/styled";
import {
  ListItem,
  Skills,
  SkillsContainer,
  ContainerTitle,
  ContainerLine,
} from "./layoutData/SkillsContainer/styled";
import image from "./common/images/konrad.png";
import { ThemeProvider } from "styled-components";
import { GlobalContainer, theme } from "./layoutData/GlobalStyle/globalStyles";
import { NextToLearnContainer } from "./layoutData/NextToLearnContaier/styled";
import {
  PortfolioHeadContainer,
  PortfolioHeader,
  PortfolioSubHeader,
} from "./layoutData/Portfolio/PortfolioHeader/styled";
import { ReactComponent as GithubLogo } from "./common/svg/github.svg";
import { ReactComponent as Hand } from "./common/svg/hand.svg";
import { ReactComponent as GithubBlack } from "./common/svg/githubBlack.svg";
import { ReactComponent as LinkedInBlack } from "./common/svg/linkedinBlack.svg";
import { PortfolioContent } from "./layoutData/Portfolio/PortfolioContent/styled";
import { Tile } from "./layoutData/Portfolio/Tile/styled";
import {
  Email,
  Info,
  LetsTalk,
  Logos,
  SocialContainer,
} from "./layoutData/Social/styled";
import { Button } from "./features/Buttons/index";

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
          <SkillsContainer>
            <ContainerTitle>My skillset includes 🛠️</ContainerTitle>
            <ContainerLine />
            <Skills>
              <ul>
                <ListItem>Teamwork</ListItem>
                <ListItem>Semantic & accessible HTML</ListItem>
                <ListItem>Responsive Web Design</ListItem>
                <ListItem>CSS BEM convention</ListItem>
                <ListItem>CSS Grid</ListItem>
                <ListItem>CSS Flexbox</ListItem>
                <ListItem>JavaScript: ES6+</ListItem>
                <ListItem>Promises, Async/Await</ListItem>
              </ul>
              <ul>
                <ListItem>Immutability</ListItem>
                <ListItem>Working with API (fetch, axios)</ListItem>
                <ListItem>Error handling</ListItem>
                <ListItem>React</ListItem>
                <ListItem>React Hooks</ListItem>
                <ListItem>Redux (Toolkit)</ListItem>
                <ListItem>Redux-Saga</ListItem>
                <ListItem>React Router</ListItem>
              </ul>
              <ul>
                <ListItem>GitHub Pull Requests & Review</ListItem>
                <ListItem>Trello</ListItem>
                <ListItem>Scrum</ListItem>
                <ListItem>NPM</ListItem>
                <ListItem>Markdown</ListItem>
                <ListItem>Git</ListItem>
              </ul>
            </Skills>
          </SkillsContainer>
          <NextToLearnContainer>
            <ContainerTitle>What I want to learn next 🚀</ContainerTitle>
            <ContainerLine />
            <Skills>
              <ul>
                <ListItem>React Context</ListItem>
                <ListItem>React Query</ListItem>
              </ul>
              <ul>
                <ListItem>Cypress</ListItem>
                <ListItem>Unit testing</ListItem>
              </ul>
              <ul>
                <ListItem>TypeScript</ListItem>
                <ListItem>Node.js</ListItem>
              </ul>
            </Skills>
          </NextToLearnContainer>
          <PortfolioHeadContainer>
            <a href="https://github.com/KonradBauer">
              <GithubLogo />
            </a>
            <PortfolioHeader>Portfolio</PortfolioHeader>
            <PortfolioSubHeader>My recent projects</PortfolioSubHeader>
          </PortfolioHeadContainer>
          <PortfolioContent>
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
          </PortfolioContent>
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
