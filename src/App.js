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
          <ButtonHireMe>Hire me</ButtonHireMe>
        </Header>
        <SkillsContainer>
          <SkillsContainerTitle>My skillset includes 🛠️</SkillsContainerTitle>
          <Skills>
            <ul>
              <li>Semantic & accessible HTML</li>
              <li>Responsive Web Design</li>
              <li>Teamwork</li>
              <li>Markdown</li>
              <li>Immutability</li>
              <li>CSS BEM convention</li>
              <li>CSS Grid</li>
              <li>CSS Flexbox</li>
            </ul>
            <ul>
              <li>React Router</li>
              <li>Redux-Saga</li>
              <li>Redux (Toolkit)</li>
              <li>React Hooks</li>
              <li>Error handling</li>
              <li>Working with API (fetch, axios)</li>
              <li>JavaScript: ES6+</li>
            </ul>
            <ul>
              <li>Promises, Async/Await</li>
              <li>GitHub Pull Requests & Review</li>
              <li>Trello</li>
              <li>Scrum</li>
              <li>NPM</li>
              <li>React</li>
              <li>Git</li>
            </ul>
          </Skills>
        </SkillsContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
