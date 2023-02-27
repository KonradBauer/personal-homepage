import { PortfolioContent } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  loadProjects,
  selectProjects,
  selectProjectsStatus,
} from "../../../features/Projects/projectsSlice";
import { useEffect } from "react";
import { PortfolioLoader } from "../portfolioLoader";

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
      {PortfolioLoader}
    </PortfolioContent>
  );
};
