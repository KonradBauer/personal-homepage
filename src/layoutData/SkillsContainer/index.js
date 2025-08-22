import React from "react";
import { SkillsContainer, ContainerTitle, ContainerLine, Skills, List, ListItem } from "./styled";

export const SkillsList = () => {
  const skillsData = [
    "Teamwork",
    "Semantic & accessible HTML",
    "Responsive Web Design",
    "CSS BEM convention",
    "CSS Grid",
    "CSS Flexbox",
    "Styled components",
    "JavaScript ES6+",
    "Promises, Async/Await",
    "Immutability",
    "Working with API (fetch, axios)",
    "Error handling",
    "React",
    "Next.js",
    "React Hooks",
    "Redux (Toolkit)",
    "Redux-Saga",
    "Zustand",
    "React Router",
    "GitHub Pull Requests & Review",
    "Trello",
    "Scrum",
    "NPM",
    "Markdown",
    "Git",
    "Vite",
    "Tailwind",
    "TypeScript",
    "Tanstack Query",
    "Swagger",
    "Postman",
  ];

  return (
    <SkillsContainer>
      <ContainerTitle>My skillset includes 🛠️</ContainerTitle>
      <ContainerLine />
      <Skills>
        <List>
          {skillsData.map((skill, index) => (
            <ListItem key={index}>{skill}</ListItem>
          ))}
        </List>
      </Skills>
    </SkillsContainer>
  );
};
