import styled from "styled-components";

export const ButtonHireMe = styled.button`
  position: absolute;
  margin-left: 460px;
  margin-top: 250px;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.scienceBlue};
  color: ${({ theme }) => theme.color.white};
`;
