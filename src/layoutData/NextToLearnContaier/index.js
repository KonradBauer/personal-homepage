import React from "react";
import { NextToLearnContainer } from "./styled";
import { ContainerLine, ContainerTitle, List, ListItem, Skills } from "../SkillsContainer/styled";

export const NextToLearn = () => {
  const nextToLearnData = ["Next.js", "Node.js", "Unit testing"];

  return (
    <NextToLearnContainer>
      <ContainerTitle>What I want to learn next 🚀</ContainerTitle>
      <ContainerLine />
      <Skills>
        <List>
          {nextToLearnData.map((skill, index) => (
            <ListItem key={index}>{skill}</ListItem>
          ))}
        </List>
      </Skills>
    </NextToLearnContainer>
  );
};
