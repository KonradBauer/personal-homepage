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
  List,
  ListItem,
  Skills,
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
        </Header>
        <SkillsContainer>
          <SkillsContainerTitle>My skillset includes 🛠️</SkillsContainerTitle>
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
      </ThemeProvider>
    </>
  );
}

export default App;
