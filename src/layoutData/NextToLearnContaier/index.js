import { NextToLearnContainer } from "./styled";
import {
  ContainerLine,
  ContainerTitle,
  Skills,
  ListItem,
} from "../SkillsContainer/styled";

export const NextToLearn = () => {
  return (
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
  );
};
