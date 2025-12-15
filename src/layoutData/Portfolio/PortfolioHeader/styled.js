import styled from "styled-components";

export const PortfolioHeadContainer = styled.section`
  text-align: center;
  margin: clamp(40px, 6vw, 72px) 0 clamp(16px, 2vw, 24px) 0;
`;

export const PortfolioHeader = styled.h2`
  margin: 0 auto clamp(6px, 0.8vw, 8px);
  font-weight: 900;
  font-size: clamp(18px, 2.4vw, 30px);
  line-height: 1.2;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};
`;

export const PortfolioSubHeader = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: clamp(14px, 1.6vw, 20px);
  line-height: 1.4;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};
`;

export const ProjectTile = styled.article`
  margin-top: clamp(16px, 2vw, 24px);
  height: auto;
  min-height: clamp(240px, 25vw, 322px);
  width: 100%;
  max-width: 592px;
  border-radius: 4px;
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  color: ${({ theme }) => theme.color.white};
`;
