import styled from "styled-components";

export const ButtonHireMe = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-left: 458px;
  margin-top: 381px;
  margin-right: 967px;
  border: 1px solid rgba(209, 213, 218, 0.3);
  height: 49px;
  width: 154px;
  left: 809px;
  top: 381px;
  border-radius: 4px;
  padding: 12px 16px 12px 16px;
  font-style: normal;
  font-size: 20.0584px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.color.scienceBlue};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    box-shadow: 2px -2px 0px #6d93be, -2px 2px 0px #6d93be, 2px 2px 0px #6d93be,
      -2px -2px 0px #6d93be;
  }
`;
