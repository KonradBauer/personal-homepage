import styled from "styled-components";

export const PortfolioContainer = styled.div`
  text-align: center;
  margin: auto;
  margin-top: 72px;
  width: 1216px;
  height: 824px;
  left: 352px;
  top: 1333px;
`;

export const PortfolioHeader = styled.section`
  margin: auto;
  margin-top: 13px;
  margin-bottom: 8px;
  width: 143px;
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
