import styled from "styled-components";

export const ButtonHireMe = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: clamp(8px, 1.2vw, 16px);
  margin-top: clamp(24px, 2.6vw, 32px);
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  padding: clamp(10px, 1vw, 12px) clamp(14px, 1.3vw, 16px);
  min-height: 49px;
  width: auto;
  min-width: 154px;
  font-weight: 600;
  font-size: clamp(18px, 1.6vw, 20px);
  line-height: 1.2;
  text-align: center;
  background-color: ${({ theme }) => theme.color.scienceBlue};
  color: white;
  cursor: pointer;
  transition: box-shadow 0.1s;

  &:hover {
    box-shadow: 2px -2px 0px #6d93be, -2px 2px 0px #6d93be,
                2px 2px 0px #6d93be, -2px -2px 0px #6d93be;
  }
`;
