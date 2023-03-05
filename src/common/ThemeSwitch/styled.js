import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "../svg/sunIcon.svg";

export const ThemeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  color: inherit;
  outline-offset: 8px;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.color.slateGray};
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 12px;
`;

export const Box = styled.span`
  background: #e5e5e5;
  border: 1px solid #6e7e91;
  padding: 3px;
  border-radius: 12px;
  width: 48px;
  display: flex;
`;

export const IconWrapper = styled.span`
  background-color: gray;
  padding: 3px;
  border-radius: 50%;
  display: flex;
  transition: transform 0.3s;

  ${({ move }) =>
    move &&
    css`
      transform: translateX(28px);
    `}
`;

export const StyledSun = styled(SunIcon)`
  color: white;
`;
