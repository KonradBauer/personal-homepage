import { LoadingStatus, ErrorStatus } from "../FetchStatus";
import { Projects } from "../Projects/renderElement";

export const PortfolioLoader = ({ status, projects }) => {
  switch (status) {
    case "initial":
      return null;

    case "loading":
      return <LoadingStatus />;

    case "success":
      return <Projects projects={projects} />;

    case "error":
      return <ErrorStatus />;

    default:
      throw new Error(`incorrect status: ${status}`);
  }
};
