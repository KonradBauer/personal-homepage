import {
  Code,
  ContentContainer,
  Demo,
  Description,
  Links,
  PortfolioContent,
  Tile,
  Title,
} from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  loadProjects,
  selectProjects,
  selectProjectsStatus,
} from "../../../features/Projects/projectsSlice";
import { useEffect } from "react";

export const PortfolioMain = () => {
  const dispatch = useDispatch();

  const getProjectsStatus = useSelector(selectProjectsStatus);
  const projects = useSelector(selectProjects);
  const userName = "KonradBauer";

  useEffect(() => {
    dispatch(loadProjects(userName));
  }, []);

  return (
    <PortfolioContent status={getProjectsStatus} projects={projects}>
      <Tile>
        <ContentContainer>
          <Title></Title>
          <Description></Description>
          <Section></Section>
          <Demo>
            <Links></Links>
          </Demo>
          <Code>
            <Links></Links>
          </Code>
        </ContentContainer>
      </Tile>
    </PortfolioContent>
  );
};
