import React from "react";
import { ListContent } from "./ListContent";
import { SkillsContainer, ContainerTitle, ContainerLine, Skills } from "./styled";

export const SkillsList = () => {
  return (
    <SkillsContainer>
      <ContainerTitle>My skillset includes 🛠️</ContainerTitle>
      <ContainerLine />
      <Skills>
        <ListContent />
      </Skills>
    </SkillsContainer>
  );
};
