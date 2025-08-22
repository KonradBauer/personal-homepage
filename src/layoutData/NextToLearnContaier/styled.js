import styled from "styled-components";

export const NextToLearnContainer = styled.div`
  margin: auto;
  margin-top: 72px;
  margin-bottom: 72px;
  padding: 32px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  transition: background-color 0.5s ease-in-out;

  @media (max-width: 768px) {
    padding: 24px;
    margin-top: 56px;
    margin-bottom: 56px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    margin-top: 48px;
    margin-bottom: 48px;
  }

  @media (max-width: 375px) {
    padding: 16px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;
