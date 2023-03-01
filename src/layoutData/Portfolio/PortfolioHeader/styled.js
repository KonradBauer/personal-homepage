import styled from "styled-components";

export const PortfolioHeadContainer = styled.div`
  text-align: center;
  margin-top: 72px;
  height: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 376px) {
    grid-template-columns: 1fr;
  }
`;

export const PortfolioHeader = styled.section`
  margin: auto;
  margin-top: 13px;
  margin-bottom: 8px;
  height: 36px;
  left: calc(50% - 143px / 2 + 8.5px);
  top: 1385px;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};
`;

export const PortfolioSubHeader = styled.section`
  height: 28px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};
`;

export const ProjectTile = styled.div`
  margin-top: 24px;
  height: 322px;
  width: 592px;
  left: 0px;
  top: 0px;
  border-radius: 4px;
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  color: ${({ theme }) => theme.color.white};
`;
