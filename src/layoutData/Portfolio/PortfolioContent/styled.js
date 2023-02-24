import styled from "styled-components";

export const PortfolioContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  grid-gap: 32px;
  margin: auto;
  margin-top: 24px;
  width: 1216px;
  left: 352px;
  top: 1333px;
`;

export const Tile = styled.div`
  height: 322px;
  width: 592px;
  left: 0px;
  top: 0px;
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  transition: 0.1s;

  &:hover {
    border-color: ${({ theme }) => theme.color.silver};
  }
`;