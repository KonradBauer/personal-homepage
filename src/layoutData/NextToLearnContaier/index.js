import { NextToLearnContainer } from "./styled";
import {
  ContainerLine,
  ContainerTitle,
  Skills,
} from "../SkillsContainer/styled";
import { ListNextToLearn } from "./ListContent";

export const NextToLearn = () => {
  return (
    <NextToLearnContainer>
      <ContainerTitle>What I want to learn next 🚀</ContainerTitle>
      <ContainerLine />
      <Skills>
        <ListNextToLearn />
      </Skills>
    </NextToLearnContainer>
  );
};
