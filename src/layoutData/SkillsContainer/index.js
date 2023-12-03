import React from "react";
import { SkillsContainer, ContainerTitle, ContainerLine, Skills, List, ListItem } from "./styled";

export const SkillsList = () => {
  return (
    <SkillsContainer>
      <ContainerTitle>My skillset includes 🛠️</ContainerTitle>
      <ContainerLine />
      <Skills>
        <List>
          <ListItem>Teamwork</ListItem>
          <ListItem>Semantic & accessible HTML</ListItem>
          <ListItem>Responsive Web Design</ListItem>
          <ListItem>CSS BEM convention</ListItem>
          <ListItem>CSS Grid</ListItem>
          <ListItem>CSS Flexbox</ListItem>
          <ListItem>Styled components</ListItem>
          <ListItem>JavaScript: ES6+</ListItem>
          <ListItem>Promises, Async/Await</ListItem>
          <ListItem>Immutability</ListItem>
          <ListItem>Working with API (fetch, axios)</ListItem>
          <ListItem>Error handling</ListItem>
          <ListItem>React</ListItem>
          <ListItem>React Hooks</ListItem>
          <ListItem>Redux (Toolkit)</ListItem>
          <ListItem>Redux-Saga</ListItem>
          <ListItem>React Router</ListItem>
          <ListItem>GitHub Pull Requests & Review</ListItem>
          <ListItem>Trello</ListItem>
          <ListItem>Scrum</ListItem>
          <ListItem>NPM</ListItem>
          <ListItem>Markdown</ListItem>
          <ListItem>Git</ListItem>
        </List>
      </Skills>
    </SkillsContainer>
  );
};
