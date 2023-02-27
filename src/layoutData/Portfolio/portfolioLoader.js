import { LoadingStatus, ErrorStatus } from "../FetchStatus";
import { PortfolioContent } from "./PortfolioContent/styled";

export const PortfolioLoader = ({ status, projects }) => {
  switch (status) {
    case "initial":
      return null;

    case "loading":
      return <LoadingStatus />;

    case "error":
      return <ErrorStatus />;

    case "success":
      return <PortfolioContent projects={projects} />;

    default:
      throw new Error(`incorrect status: ${status}`);
  }
};
