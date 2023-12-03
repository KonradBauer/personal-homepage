import { NextToLearnContainer } from "./styled";
import { ContainerLine, ContainerTitle, List, ListItem, Skills } from "../SkillsContainer/styled";

export const NextToLearn = () => {
  return (
    <NextToLearnContainer>
      <ContainerTitle>What I want to learn next 🚀</ContainerTitle>
      <ContainerLine />
      <Skills>
        <List>
          <ListItem>TypeScript</ListItem>
          <ListItem>TanStack Query</ListItem>
          <ListItem>React Native</ListItem>
          <ListItem>Node.js</ListItem>
          <ListItem>Cypress</ListItem>
          <ListItem>Unit testing</ListItem>
        </List>
      </Skills>
    </NextToLearnContainer>
  );
};
