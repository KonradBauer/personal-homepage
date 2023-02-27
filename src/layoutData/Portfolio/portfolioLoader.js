import { TileContent } from "./PortfolioContent/styled";
import { LoadingStatus, ErrorStatus } from "../FetchStatus";

export const PortfolioContent = ({ status, projects }) => {
  switch (status) {
    case "initial":
      return null;

    case "loading":
      return <LoadingStatus />;

    case "error":
      return <ErrorStatus />;

    case "success":
      return <TileContent projects={projects} />;

    default:
      throw new Error(`incorrect status: ${status}`);
  }
};
