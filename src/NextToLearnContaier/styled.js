import styled from "styled-components";

export const NextToLearnContainer = styled.div`
  margin: auto;
  margin-top: 72px;
  padding: 32px;
  width: 1216px;
  height: 209px;
  left: calc(50% - 1216px / 2);
  top: 1052px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
`;
