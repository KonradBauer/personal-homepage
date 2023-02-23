import {
  PortfolioHeadContainer,
  PortfolioHeader,
  PortfolioSubHeader,
} from "./styled";

import { ReactComponent as GithubLogo } from "../../../common/svg/github.svg";

export const PortfolioHead = () => {
  return (
    <PortfolioHeadContainer>
      <a href="https://github.com/KonradBauer">
        <GithubLogo />
      </a>
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <PortfolioSubHeader>My recent projects</PortfolioSubHeader>
    </PortfolioHeadContainer>
  );
};
