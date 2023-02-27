import { LoadingStatus, ErrorStatus } from "../FetchStatus";
import { Projects } from "../Projects";
import { PortfolioContent } from "./PortfolioContent/styled";

export const PortfolioLoader = ({ status, Projects }) => {
  switch (status) {
    case "initial":
      return null;

    case "loading":
      return <LoadingStatus />;

    case "error":
      return <ErrorStatus />;

    case "success":
      return <PortfolioContent projects={Projects} />;

    default:
      throw new Error(`incorrect status: ${status}`);
  }
};
