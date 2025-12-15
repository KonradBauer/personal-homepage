import styled from "styled-components";

export const NextToLearnContainer = styled.section`
  margin: clamp(40px, 6vw, 72px) auto;
  padding: clamp(16px, 2.5vw, 32px);
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  transition: background-color 0.5s ease-in-out;
`;
