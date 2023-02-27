import { PortfolioContent, Tile } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  loadProjects,
  loadProjectsError,
  loadProjectsSuccess,
  selectProjects,
  selectProjectsStatus,
} from "../../../features/Projects/projectsSlice";
import { useEffect } from "react";
import { getProjects } from "../../../features/Projects/getRepositories";

export const PortfolioMain = () => {
  const dispatch = useDispatch();

  const getProjectsStatus = useSelector(selectProjectsStatus);
  const projects = useSelector(selectProjects);
  const userName = "KonradBauer";

  useEffect(() => {
    dispatch(loadProjects(userName));
  }, []);

  return (
    <PortfolioContent>
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </PortfolioContent>
  );
};
