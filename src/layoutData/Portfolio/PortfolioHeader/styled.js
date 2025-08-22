import styled from "styled-components";

export const PortfolioHeadContainer = styled.div`
  text-align: center;
  margin-top: 72px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    margin-top: 56px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    margin-top: 48px;
    margin-bottom: 16px;
  }

  @media (max-width: 375px) {
    margin-top: 40px;
  }
`;

export const PortfolioHeader = styled.section`
  margin: 0 auto 8px;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    line-height: 28px;
  }

  @media (max-width: 375px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const PortfolioSubHeader = styled.section`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }

  @media (max-width: 375px) {
    font-size: 14px;
  }
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
