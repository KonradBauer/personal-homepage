import React from "react";
import { Header, Photo, ThisIs, MyName, AboutMe } from "./common/Header/styled";
import {
  List,
  ListItem,
  Skills,
  SkillsContainer,
  ContainerTitle,
  ContainerLine,
} from "./common/SkillsContainer/styled";
import image from "./common/images/konrad.png";
import { ThemeProvider } from "styled-components";
import { theme } from "./common/GlobalStyle/globalStyles";
import { NextToLearnContainer } from "./common/NextToLearnContaier/styled";
import {
  PortfolioHeadContainer,
  PortfolioHeader,
  PortfolioSubHeader,
} from "./common/Portfolio/PortfolioHeader/styled";
import { ReactComponent as GithubLogo } from "./common/svg/github.svg";

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
        </Header>
        <SkillsContainer>
          <ContainerTitle>My skillset includes 🛠️</ContainerTitle>
          <ContainerLine />
          <Skills>
            <List>
              <ListItem>Semantic & accessible HTML</ListItem>
              <ListItem>Responsive Web Design</ListItem>
              <ListItem>Teamwork</ListItem>
              <ListItem>Markdown</ListItem>
              <ListItem>Immutability</ListItem>
              <ListItem>CSS BEM convention</ListItem>
              <ListItem>CSS Grid</ListItem>
              <ListItem>CSS Flexbox</ListItem>
            </List>
            <List>
              <ListItem>React Router</ListItem>
              <ListItem>Redux-Saga</ListItem>
              <ListItem>Redux (Toolkit)</ListItem>
              <ListItem>React Hooks</ListItem>
              <ListItem>Error handling</ListItem>
              <ListItem>Working with API (fetch, axios)</ListItem>
              <ListItem>JavaScript: ES6+</ListItem>
            </List>
            <List>
              <ListItem>Promises, Async/Await</ListItem>
              <ListItem>GitHub Pull Requests & Review</ListItem>
              <ListItem>Trello</ListItem>
              <ListItem>Scrum</ListItem>
              <ListItem>NPM</ListItem>
              <ListItem>React</ListItem>
              <ListItem>Git</ListItem>
            </List>
          </Skills>
        </SkillsContainer>
        <NextToLearnContainer>
          <ContainerTitle>What I want to learn next 🚀</ContainerTitle>
          <ContainerLine />
          <Skills>
            <List>
              <ListItem>React Context</ListItem>
              <ListItem>React Query</ListItem>
            </List>
            <List>
              <ListItem>Cypress</ListItem>
              <ListItem>Unit testing</ListItem>
            </List>
            <List>
              <ListItem>TypeScript</ListItem>
              <ListItem>Node.js</ListItem>
            </List>
          </Skills>
        </NextToLearnContainer>
        <PortfolioHeadContainer>
          <GithubLogo />
          <PortfolioHeader>Portfolio</PortfolioHeader>
          <PortfolioSubHeader>My recent projects</PortfolioSubHeader>
        </PortfolioHeadContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
