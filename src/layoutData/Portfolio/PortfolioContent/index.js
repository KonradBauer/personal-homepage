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
          <Title>Movies Browser</Title>
          <Description>
            Project description, e.g. website where you can search for favourite
            movies and people. Project description, e.g. website where you can
            search.
          </Description>
          <Demo>
            Demo: <Links>https://link.demo.com</Links>
          </Demo>
          <Code>
            Code: <Links>https://link.code.com</Links>
          </Code>
        </ContentContainer>
      </Tile>
    </PortfolioContent>
  );
};
