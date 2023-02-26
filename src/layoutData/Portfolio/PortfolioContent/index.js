import { PortfolioContent, Tile } from "./styled";
import { useSelector } from "react-redux";
import { selectRepositories } from "../../../features/HandlerAPI/repositories/repositoriesSlice";

export const PortfolioMain = () => {
  const { repositories } = useSelector(selectRepositories);

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
