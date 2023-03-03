import styled from "styled-components";

export const NextToLearnContainer = styled.div`
  margin: auto;
  margin-top: 72px;
  padding: 32px;
  max-width: 1216px;
  height: 170px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: auto;
    width: 260px;
    height: 243px;
    left: 14px;
  }

  @media (min-width: 320px) and (max-width: 374px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: auto;
    width: 260px;
    height: 243px;
    left: 14px;
  }
`;
