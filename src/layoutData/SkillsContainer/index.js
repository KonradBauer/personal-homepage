import React from "react";
import {
  SkillsContainer,
  ContainerTitle,
  ContainerLine,
  Skills,
  ListItem,
} from "./styled";

export const SkillsList = () => {
  return (
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
  );
};
